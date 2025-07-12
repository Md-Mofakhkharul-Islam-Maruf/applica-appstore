import React from 'react';
import { Link } from 'react-router'; // If you're using react-router
import { Star } from 'lucide-react';

const TopDownloadedApps = ({ apps }) => {
  // Sort apps by downloads descending and take top 4
  const topDownloaded = [...apps]
    .sort((a, b) => b.downloads - a.downloads)
    .slice(0, 4);

  return (
    <section className="my-8 max-w-7xl mx-auto px-4">
      <h2 className="text-4xl font-extrabold text-center mb-10 text-green-800">
        📈 Top Downloaded Apps
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {topDownloaded.map(app => (
          <Link
            key={app.id}
            to={`/app/${app.id}`}
            className="group bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
          >
            <img
              src={app.thumbnail}
              alt={app.name}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="p-5 space-y-2">
              <h3 className="text-lg font-semibold text-gray-800">{app.name}</h3>
              <div className="flex items-center gap-2 text-yellow-500 text-sm">
                <Star size={16} fill="currentColor" />
                {app.rating}
                <span className="text-gray-400 ml-2">{app.downloads.toLocaleString()} downloads</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default TopDownloadedApps;
