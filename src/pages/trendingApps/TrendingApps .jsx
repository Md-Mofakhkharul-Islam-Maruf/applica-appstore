import React, { useEffect, useState } from 'react';
import { Star } from 'lucide-react';

const TrendingApps = ({ apps }) => {
  const [topRated, setTopRated] = useState([]);

  useEffect(() => {
    if (apps && apps.length) {
      // Sort apps by rating descending and take top 4
      const sorted = [...apps].sort((a, b) => b.rating - a.rating).slice(0, 4);
      setTopRated(sorted);
    }
  }, [apps]);

  return (
    <section className="mt-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center mb-10 text-gray-800">
          🔥 Trending Apps
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {topRated.map((app) => (
            <div
              key={app.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              role="group"
              aria-label={`${app.name} app card`}
            >
              <div className="relative">
                <img
                  src={app.thumbnail}
                  alt={`${app.name} thumbnail`}
                  className="rounded-t-2xl w-full h-48 object-cover"
                  loading="lazy"
                />
                <span className="absolute top-3 right-3 bg-yellow-400 text-white text-xs font-bold px-2 py-1 rounded-full shadow">
                  {app.category}
                </span>
              </div>
              <div className="p-5 space-y-2">
                <h3 className="text-lg font-semibold text-gray-800">{app.name}</h3>
                <p className="text-sm text-gray-500 mb-2">{app.developer}</p>
                <div className="flex items-center gap-1 text-yellow-500">
                  <Star size={16} fill="currentColor" aria-hidden="true" />
                  <span className="font-bold">{app.rating}</span>
                  <span className="text-xs text-gray-500">/ 5</span>
                </div>
                <p className="text-gray-600 text-sm line-clamp-3">{app.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingApps;
