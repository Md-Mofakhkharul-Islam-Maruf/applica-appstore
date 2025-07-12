import React from 'react';
import { Link } from 'react-router';
import { Star } from 'lucide-react';

const CategorySections = ({ apps }) => {
    const categories = apps.reduce((acc, app) => {
        if (!acc[app.category]) acc[app.category] = [];
        acc[app.category].push(app);
        return acc;
    }, {});

    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 space-y-16">
                {Object.entries(categories).map(([category, appsInCategory]) => (
                    <div key={category}>
                        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
                            {category}
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {appsInCategory.map(app => {
                                const storedReviews = JSON.parse(localStorage.getItem(`reviews-${app.id}`)) || app.reviews || [];
                                const latestReview = storedReviews[storedReviews.length - 1];

                                return (
                                    <Link
                                        key={app.id}
                                        to={`/app/${app.id}`}
                                        className="group bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
                                    >
                                        <img
                                            src={app.thumbnail}
                                            alt={app.name}
                                            className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                        <div className="p-4 space-y-1">
                                            <h3 className="text-lg font-semibold text-gray-800">{app.name}</h3>
                                            <div className="flex items-center gap-2 text-yellow-500 text-sm">
                                                <Star size={16} fill="currentColor" />
                                                {app.rating}
                                                <span className="text-gray-400 ml-2">{app.downloads.toLocaleString()} downloads</span>
                                            </div>
                                            {latestReview && (
                                                <p className="text-gray-600 text-sm mt-2 italic line-clamp-2">
                                                    “{latestReview.comment}” — <span className="font-medium">@{latestReview.user}</span>
                                                </p>
                                            )}
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CategorySections;
