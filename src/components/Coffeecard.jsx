import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Coffeecard = ({ coffee, setcoffes, coffees }) => {
    const { _id, name, quantity, Supplier, Taste, Category, Details, photourl } = coffee;

    const handeldeletecoffe = _id => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your COFFEE has been deleted.',
                                'success'
                            )
                            const remaining = coffees.filter(cof => cof._id !== _id)
                            setcoffes(remaining)
                        }
                    })
            }
        })
    }

    return (

        <div className="card card-side bg-base-100 shadow-xl ">
            <figure><img src={photourl} /></figure>
            <div className=" items-center pr-4 justify-between w-full flex ">
                <div className="">
                    <h2 className="card-title">Name:{name}</h2>
                    <p>{quantity}</p>
                    <p>{Category}</p>
                    <p>{Taste}</p>
                </div>
                <div className="card-actions justify-end ">
                    <div className="btn-group btn-group-vertical space-y-4">
                        <button className="btn btn-active">View</button>
                        <Link to={`/updatecoffee/${_id}`} >
                            <button className="btn">Edit</button>

                        </Link>
                        <button
                            onClick={() => handeldeletecoffe(_id)}
                            className="btn bg-orange-800">X</button>
                    </div>
                </div>
            </div>
        </div >

    );
};

export default Coffeecard;