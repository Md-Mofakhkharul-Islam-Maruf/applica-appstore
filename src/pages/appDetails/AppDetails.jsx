import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Star } from 'lucide-react';

const AppDetails = () => {
  const { id } = useParams();

  const [app, setApp] = useState(null);
  const [installed, setInstalled] = useState(false);
  const [hasInstalledOnce, setHasInstalledOnce] = useState(false);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [newReview, setNewReview] = useState({ rating: '', comment: '' });
  const [reviews, setReviews] = useState([]);

  // Load app data from public/data.json
  useEffect(() => {
    fetch('/data.json')
      .then(res => res.json())
      .then(data => {
        const foundApp = data.find(app => app.id === id);
        setApp(foundApp);
        setReviews(foundApp?.reviews || []);

        // Check if user installed this app before
        const installedFlag = localStorage.getItem(`hasInstalledOnce-${id}`);
        if (installedFlag === 'true') {
          setHasInstalledOnce(true);
        }
      });
  }, [id]);

  // Update install status
  const handleInstallToggle = () => {
    setInstalled(prev => {
      const next = !prev;
      if (next) {
        localStorage.setItem(`hasInstalledOnce-${id}`, 'true');
        setHasInstalledOnce(true);
      }
      return next;
    });
  };

  const openReviewModal = () => {
    if (!hasInstalledOnce) {
      alert('You need to install the app at least once before submitting a review.');
      return;
    }
    setShowReviewModal(true);
  };

  const handleReviewSubmit = () => {
    const { rating, comment } = newReview;
    const num = Number(rating);
    if (!comment.trim() || num < 1 || num > 5) {
      alert('Please enter a valid rating (1–5) and comment.');
      return;
    }
    setReviews(prev => [...prev, { rating: num, comment }]);
    setNewReview({ rating: '', comment: '' });
    setShowReviewModal(false);
  };

  if (!app) {
    return (
      <div className="text-center py-20 text-2xl font-semibold text-red-500">
        App not found.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-100 py-10">
      <div className="max-w-5xl mx-auto px-4 space-y-10">
        {/* Banner */}
        <div className="rounded-xl overflow-hidden shadow-lg border-4 border-white">
          <img src={app.banner} alt={app.name} className="w-full h-64 object-cover" />
        </div>

        {/* App Info */}
        <div className="flex items-center gap-6">
          <img src={app.thumbnail} alt={app.name} className="w-24 h-24 rounded-xl object-cover shadow-md" />
          <div>
            <h1 className="text-4xl font-extrabold text-gray-800">{app.name}</h1>
            <p className="text-gray-600">By {app.developer}</p>
            <p className="text-sm text-gray-500">Category: <strong>{app.category}</strong></p>
            <p className="text-sm text-gray-500">Downloads: <strong>{app.downloads.toLocaleString()}</strong></p>
            <div className="flex items-center gap-2 text-yellow-500 mt-1">
              <Star size={20} fill="currentColor" />
              <span className="font-bold">{app.rating}</span>
              <span className="text-gray-600 text-sm">/ 5</span>
            </div>
          </div>
        </div>

        {/* Description */}
        <div>
          <h2 className="text-xl font-semibold text-gray-700 mb-2">📝 Description</h2>
          <p className="text-gray-700">{app.description}</p>
        </div>

        {/* Features */}
        <div>
          <h2 className="text-xl font-semibold text-gray-700 mb-2">⚙️ Features</h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-1">
            {app.features.map((f, i) => <li key={i}>{f}</li>)}
          </ul>
        </div>

        {/* Buttons */}
        <div className="pt-4 flex flex-wrap justify-end items-center gap-4">
          <button
            onClick={handleInstallToggle}
            className={`px-6 py-2 rounded-lg shadow hover:scale-105 transition-transform duration-200 ${
              installed ? 'bg-red-500 text-white' : 'bg-gradient-to-r from-purple-600 to-blue-500 text-white'
            }`}
          >
            {installed ? 'Uninstall' : 'Install Now'}
          </button>

          <button
            onClick={openReviewModal}
            className={`px-5 py-2 rounded-lg ${
              hasInstalledOnce ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-400 text-gray-700 cursor-not-allowed'
            }`}
            disabled={!hasInstalledOnce}
          >
            Write a Review
          </button>
        </div>

        {/* Reviews */}
        {reviews.length > 0 && (
          <div>
            <h2 className="text-xl font-semibold text-gray-700 mb-4">🌟 Reviews</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {reviews.map((review, i) => (
                <div key={i} className="bg-white rounded-lg p-4 border shadow-sm">
                  <div className="flex items-center gap-2 text-yellow-500 mb-1">
                    <Star size={16} fill="currentColor" />
                    <span className="font-semibold">{review.rating}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{review.comment}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Review Modal */}
      {showReviewModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-lg space-y-4">
            <h3 className="text-xl font-bold text-gray-800">Write a Review</h3>
            <input
              className="w-full border px-3 py-2 rounded"
              type="number"
              min="1"
              max="5"
              placeholder="Rating (1–5)"
              value={newReview.rating}
              onChange={(e) => setNewReview({ ...newReview, rating: e.target.value })}
            />
            <textarea
              className="w-full border px-3 py-2 rounded"
              placeholder="Write your review..."
              rows={4}
              value={newReview.comment}
              onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
            />
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowReviewModal(false)}
                className="text-gray-500 hover:underline"
              >
                Cancel
              </button>
              <button
                onClick={handleReviewSubmit}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AppDetails;
