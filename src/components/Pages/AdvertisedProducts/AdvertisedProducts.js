import React, { useContext, useEffect, useState } from 'react';
import Modal from '../../Shared/Modal/Modal';
import { GoVerified } from 'react-icons/go';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

const AdvertisedProducts = () => {

    const { loading, setLoading, user, allUsers } = useContext(AuthContext)

    // let [advertiseItems, setAdvertiseItems] = useState([])

    // const [categories, setCategories] = useState('')

    // useEffect(() => {
    //     fetch('https://buyandsell24-server.vercel.app/categorylist')
    //         .then(res => res.json())
    //         .then(data => setCategories(data))
    // }, [])

    const { data: advertiseItems = [] } = useQuery({
        queryKey: ['products'],
        queryFn: () => fetch('https://buyandsell24-server.vercel.app/products')
            .then(res => res.json())
    })


    // useEffect(() => {
    //     fetch('https://buyandsell24-server.vercel.app/products')
    //         .then(res => res.json())
    //         .then(data => setAdvertiseItems(data))
    // }, [])

    if (loading) {
        <progress className="progress w-56"></progress>
    }


    const [product, SetProduct] = useState('')

    const handleSetProduct = data => {
        SetProduct(data)
    }

    console.log(advertiseItems)
    let advertiseItemsFiltered = advertiseItems.filter(item => item?.Advertise === true)

    setLoading(false)

    if (advertiseItemsFiltered.length != 0) {
        return (
            <div>
                <div className="p-6 py-12 bg-secondary  mt-5 rounded-xl">
                    <div className="container mx-auto">
                        <div className="flex flex-col lg:flex-row items-center justify-center">
                            <div className="space-x-2 text-center py-2 lg:py-0">
                                <span className='font-bold text-5xl text-white'>Advertised Items</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-3 mt-5 justify-items-center gap-5'>

                    {advertiseItemsFiltered &&
                        advertiseItemsFiltered.map(item =>
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
                                                <label onClick={() => handleSetProduct(item)} htmlFor="bookModal" className="btn btn-primary">Book Now</label>
                                                :

                                                <Link to='/login' className="btn btn-primary">Please Login First</Link>
                                            }
                                            <Modal key={item._id} product={product} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        )
                    }


                </div>
            </div>
        );
    }
};

export default AdvertisedProducts;