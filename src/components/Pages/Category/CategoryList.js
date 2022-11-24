import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const CategoryList = () => {

    const [categories, setCategories] = useState('')

    useEffect(() => {
        fetch('http://localhost:5000/categorylist')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])


    return (
        <div>
            <div className="grid grid-cols-5 justify-items-center mt-5 gap-5">
                {
                    categories &&
                    categories?.map(category =>
                        <div key={category.categoryId} className=''>
                            <div className="max-w-xs rounded-md shadow-lg bg-white">
                                <img src={category.img} alt="" className="rounded-2xl p-2 object-contain object-center w-full rounded-t-md h-64  bg-white" />
                            </div>
                            <Link to={`/category/${category.categoryId}`}><button type="button" className="hover:bg-secondary transition-colors hover:text-white mt-5 flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-primary">{category.name}</button></Link>
                        </div>)
                }

            </div>




        </div>
    );
};

export default CategoryList;