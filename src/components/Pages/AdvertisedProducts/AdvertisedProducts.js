import React, { useContext, useEffect, useState } from 'react';
import Modal from '../../Shared/Modal/Modal';
import { GoVerified } from 'react-icons/go';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';

const AdvertisedProducts = () => {

    const { loading, setLoading, user } = useContext(AuthContext)

    let [advertiseItems, setAdvertiseItems] = useState([])


    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setAdvertiseItems(data))
    }, [])

    if (loading) {
        <progress className="progress w-56"></progress>
    }

    console.log(advertiseItems)
    advertiseItems = advertiseItems.filter(item => item?.Advertise === true && item?.Available)
    setLoading(false)

    return (
        <div className='grid grid-cols-3 mt-5 justify-items-center gap-5'>
            {advertiseItems &&
                advertiseItems.map(item =>
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
                                    {user ?
                                        <label htmlFor="bookModal" className="btn btn-primary">Book Now</label>
                                        :

                                        <Link to='/login' className="btn btn-primary">Please Login First</Link>
                                    }
                                    <Modal item={item} />
                                </div>
                            </div>
                        </div>
                    </div>

                )
            }


        </div>
    );
};

export default AdvertisedProducts;