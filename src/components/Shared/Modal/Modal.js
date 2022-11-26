import React, { useContext } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';


const Modal = ({ item }) => {


    const { user } = useContext(AuthContext)

    const notify = () => toast.success('Successfully Booked!');
    return (
        <div>

            <input type="checkbox" id="bookModal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10   ">
                        <div className="mb-8 text-center">
                            <h1 className="my-3 text-4xl font-bold">Confirm Order!</h1>
                        </div>
                        <form novalidate="" action="" className="space-y-12 ng-untouched ng-pristine ng-valid">
                            <div className="space-y-4">
                                <div>
                                    <label for="email" className="block mb-2 text-sm">User Name</label>
                                    <input type="text" name="name" id="name" defaultValue={user?.displayName} placeholder="John Doe" className="w-full px-3 py-2 border rounded-md  " disabled />
                                </div>
                                <div>
                                    <label for="email" className="block mb-2 text-sm">Email address</label>
                                    <input type="email" name="email" id="email" defaultValue={user?.email} placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md  " disabled />
                                </div>
                                <div>
                                    <label for="email" className="block mb-2 text-sm">Item Name</label>
                                    <input type="text" name="item" id="item" defaultValue={item.name} placeholder="iPhone 13 Pro Max" className="w-full px-3 py-2 border rounded-md  " disabled />
                                </div>
                                <div>
                                    <label for="email" className="block mb-2 text-sm">Price</label>
                                    <input type="text" name="item" id="item" defaultValue={item.price} placeholder="$$$" className="w-full px-3 py-2 border rounded-md  " disabled />
                                </div>
                                <div>
                                    <label for="email" className="block mb-2 text-sm">Meeting Location</label>
                                    <input type="text" name="meetlocation" id="meetlocation" placeholder="Infront of National Museum front gate" className="w-full px-3 py-2 border rounded-md  " />
                                </div>
                                <div>
                                    <label for="email" className="block mb-2 text-sm">Contact Number</label>
                                    <input type="text" name="phoneNo" id="phoneNo" placeholder="+88012345678" className="w-full px-3 py-2 border rounded-md  " />
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="modal-action justify-center">
                        <label onClick={notify} htmlFor="bookModal" className="btn btn-primary">Confirm Book</label>
                        <Toaster />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;