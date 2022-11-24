import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { GoVerified } from 'react-icons/go';
import Modal from '../../Shared/Modal/Modal';


const CategoryPage = () => {

    const items = useLoaderData()

    // const { categoryId, name, sname, img, price, used, year, verified, location, condition, description, oriprice, phoneNo } = items;


    console.log(items);

    return (
        <div>
            <h1 className='text-5xl text-center font-bold'>{items[0].brand}</h1>
            <div className='grid grid-cols-3 mt-5 justify-items-center  gap-5'>
                {items &&
                    items.map(item =>
                        <div className="card w-96 bg-base-100 shadow-lg border-2 border-primary ">
                            <figure><img src={item.img} alt="Items'" className='object-cover h-64 w-full' /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{item.name}</h2>
                                <p>{item.description}</p>
                                <p className="text-sm">Location: {item.location}</p>
                                <p className="text-sm">Years of used: {item.used}</p>
                                <p className="text-sm">Posted: 2 days</p>
                                <p className="text-sm flex gap-2 inline">Seller Name: <span className='font-bold'>{item.sname}</span> {item.verified ? <GoVerified className='text-sky-500 mt-1' /> : <GoVerified className='text-gray-500 mt-1' />} </p>
                                <p className="text-sm">Seller Contact: <span className='font-bold'>{item.phoneNo}</span></p>

                                <div className="flex justify-between">
                                    <div className="card-actions justify-start">
                                        <button className="btn btn-outline">{item.price} Tk</button>
                                    </div>
                                    <div className="card-actions justify-end">
                                        {/* <button className="btn ">Book Now</button> */}
                                        <label htmlFor="bookModal" className="btn btn-primary">Book Now</label>
                                        <Modal />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )

                }
            </div>
        </div>
    );
};

export default CategoryPage;