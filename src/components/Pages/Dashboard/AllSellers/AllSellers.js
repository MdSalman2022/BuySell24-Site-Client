import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../../contexts/AuthProvider/AuthProvider';

const AllSeller = () => {
    let { allUsers, setAllUsers } = useContext(AuthContext)
    // const [myUsers, setMyUsers] = useState('')
    console.log(allUsers);
    let sellers = allUsers?.filter(allUser => allUser?.role === 'seller')
    console.log(allUsers);


    const handleDelete = data => {
        const permission = window.confirm(`Are you sure you want to delete: ${data.name}`)

        if (permission) {
            fetch(`http://localhost:5000/users/${data._id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        toast.success('User Deleted Successfully')
                        const remainingUsers = allUsers?.filter(user => user._id !== data._id)
                        setAllUsers(remainingUsers)
                    }
                })
        }
    }



    return (
        <div>
            <h1 className="text-3xl my-5 text-center font-bold">All Sellers</h1>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sellers &&
                            sellers?.map((seller, index) =>
                                <tr key={seller?._id}>
                                    <th>{index + 1}</th>
                                    <td>{seller?.name}</td>
                                    <td>{seller?.email}</td>
                                    <td><button onClick={() => handleDelete(seller)} className="btn btn-error">Delete</button></td>
                                </tr>
                            )

                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
};

export default AllSeller;