import React from 'react';
import AdvertisedProducts from '../AdvertisedProducts/AdvertisedProducts';
import Banner from '../Banner/Banner';
import CategoryList from '../Category/CategoryList';
import Review from '../Review/Review';

const Home = () => {
    return (
        <div className="mx-auto">
            <Banner></Banner>
            <AdvertisedProducts></AdvertisedProducts>
            <div className="p-6 py-12 bg-secondary mt-5 rounded-xl mx-2 lg:mx-auto">
                <div className="container mx-auto">
                    <div className="flex flex-col lg:flex-row items-center justify-center">
                        <div className="space-x-2 text-center py-2 lg:py-0">
                            <span className='font-bold text-5xl text-white'>Category</span>
                        </div>
                    </div>
                </div>
            </div>
            <CategoryList></CategoryList>
            <Review></Review>
        </div>
    );
};

export default Home;