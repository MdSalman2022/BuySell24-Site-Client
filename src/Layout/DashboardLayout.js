import React, { useContext, useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Header from '../components/Shared/Header/Header';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';

const DashboardLayout = () => {

    const { user } = useContext(AuthContext)

    const [role, setRole] = useState('')

    useEffect(() => {
        fetch(`http://localhost:5000/users?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setRole(data[0]?.role))
    }, [user?.email])

    console.log(role)

    return (
        <div>
            <Header></Header>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content  ">
                    <Outlet></Outlet>

                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80  text-base-content">
                        <li><Link to='/dashboard'>Dashboard</Link></li>
                        {
                            role === 'buyer' ?
                                <>
                                    <li><Link to='/dashboard/myorders'>My Orders</Link></li>
                                    <li><Link to='/dashboard/wishlist'>Wishlist</Link></li>
                                </>
                                :
                                ''
                        }
                        {
                            role === 'seller' ?
                                <>
                                    <li><Link to='/dashboard/addproduct'>Add Product</Link></li>
                                    <li><Link to='/dashboard/myproducts'>My Products</Link></li>
                                    <li><Link to='/dashboard/mybuyers'>My Buyers</Link></li>
                                </>
                                :
                                ''
                        }
                        {
                            role === 'admin' ?
                                <>
                                    <li><Link to='/dashboard/allsellers'>All Sellers</Link></li>
                                    <li><Link to='/dashboard/allbuyers'>All Buyers</Link></li>
                                    <li><Link to='/dashboard/reports'>Reported Items</Link></li>
                                </>
                                :
                                ''
                        }


                        {/* {
                            isAdmin && <>
                                <li><Link to='/dashboard/allusers'>All users</Link></li>
                                <li><Link to='/dashboard/adddoctor'>Add A Doctor</Link></li>
                                <li><Link to='/dashboard/managedoctors'>Manage Doctors</Link></li>
                            </>
                        } */}
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;