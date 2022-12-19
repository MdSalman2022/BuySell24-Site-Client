import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import Banner from '../Banner/Banner';
import ProductCard from '../ProductCard/ProductCard';
import SearchCard from '../SearchCard/SearchCard';
import { useLoaderData } from 'react-router-dom';

const SearchPage = () => {

    let { searchText, setItems, items, setSearchText } = useContext(AuthContext)

    const [product, SetProduct] = useState('')
    // console.log(items);


    console.log(items);


    return (
        <div>
            <Banner></Banner>
            {items.length > 0 ?
                <h1 className="text-5xl font-bold">{searchText === "" ? "" : `You searched for "${searchText}"`}</h1>
                :
                <h1 className="text-5xl font-bold">{`No result found for "${searchText}"`}</h1>
            }

            <div className='grid grid-cols-3 mt-5 justify-items-center  gap-5'>
                {items &&
                    items.map(item => <ProductCard item={item} key={item.id} product={product} SetProduct={SetProduct}></ProductCard>)
                }
            </div>

        </div>
    );
};

export default SearchPage;