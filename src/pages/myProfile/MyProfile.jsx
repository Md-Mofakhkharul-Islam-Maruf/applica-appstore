import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../Auth/AuthContext'; // Adjust path as needed
import { updateProfile } from 'firebase/auth';
import Swal from 'sweetalert2';

const MyProfile = () => {
  const { user } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    name: '',
    photoURL: '',
  });
  const [loading, setLoading] = useState(false);

  // Initialize form with current user data when user changes
  useEffect(() => {
    if (user) {
      setFormData({
        name: user.displayName || '',
        photoURL: user.photoURL || '',
      });
    }
  }, [user]);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (!user) return;

    setLoading(true);
    try {
      await updateProfile(user, {
        displayName: formData.name,
        photoURL: formData.photoURL,
      });
      Swal.fire({
        icon: 'success',
        title: 'Profile Updated',
        text: 'Your profile information has been updated successfully.',
        confirmButtonText: 'OK',
      });
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Update Failed',
        text: error.message,
        confirmButtonText: 'OK',
      });
    }
    setLoading(false);
  };

  if (!user) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <p className="text-gray-600 text-lg">Please login to view your profile.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen max-w-md mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">My Profile</h1>
      <div className="flex flex-col items-center mb-6">
        <img
          src={user.photoURL || 'https://via.placeholder.com/100'}
          alt="Profile"
          className="w-24 h-24 rounded-full object-cover mb-3"
        />
        <p className="text-lg font-semibold">{user.displayName || 'No Name Set'}</p>
        <p className="text-gray-500">{user.email}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded shadow">
        <div>
          <label htmlFor="name" className="block font-medium mb-1">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            className="input input-bordered w-full"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />
        </div>

        <div>
          <label htmlFor="photoURL" className="block font-medium mb-1">
            Photo URL
          </label>
          <input
            id="photoURL"
            name="photoURL"
            type="url"
            className="input input-bordered w-full"
            value={formData.photoURL}
            onChange={handleChange}
            placeholder="Enter photo URL"
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary w-full"
          disabled={loading}
        >
          {loading ? 'Saving...' : 'Save Changes'}
        </button>
      </form>
    </div>
  );
};

export default MyProfile;
