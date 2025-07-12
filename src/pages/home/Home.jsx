import React from 'react';
import TrendingApps from '../trendingApps/TrendingApps ';
import appsData from '../../../public/data.json'; // or wherever you store it
import CategorySections from '../categorySection/CategorySection';
import TopDownloadedApps from '../topDownloadedapps/TopDownloadedApps';
import Slider from '../slideData/Slider';

const Home = () => {
  return (
    <div>
      {/* Other sections */}
      <Slider></Slider>
      <TrendingApps apps={appsData} />
      <CategorySections apps={appsData} />
      <TopDownloadedApps apps={appsData} />
    </div>
    
  );
};

export default Home;
