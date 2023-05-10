import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {
    const coffee = useLoaderData()
    console.log(coffee);
    const { _id, name, quantity, Supplier, Taste, Category, Details, photourl } = coffee || {};

    const handelUpdatecoffe = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const Supplier = form.Supplier.value;
        const Taste = form.Taste.value;
        const Category = form.Category.value;
        const Details = form.Details.value;
        const photourl = form.url.value;
        const Updatedcoffee = { name, quantity, Supplier, Taste, Category, Details, photourl };
        // send data to server
        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: "PUT", // or 'PUT'
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(Updatedcoffee),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'success',
                        text: 'Coffee updated successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })

    }
    return (


        <div className="bg-[#F4F3F0] p-24">

            <h2 className='text-3xl'>Update a coffee</h2>
            <form onSubmit={handelUpdatecoffe}>
                {/* row */}
                <div className='md:flex  '>
                    <div className="form-control md:w-3/6 ">
                        <label className="label">
                            <span className="label-text">Coffee Name</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name='name' defaultValue={name} placeholder="coffee-Name" className="input input-bordered  w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-3/6 ml-5">
                        <label className="label">
                            <span className="label-text">Available quantity</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name='quantity' defaultValue={quantity} placeholder="Quantity" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* row */}
                <div className='md:flex  '>
                    <div className="form-control md:w-3/6 ">
                        <label className="label">
                            <span className="label-text">Supplier</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name='Supplier' defaultValue={Supplier} placeholder="coffee-Supplier" className="input input-bordered  w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-3/6 ml-5">
                        <label className="label">
                            <span className="label-text">Taste</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name='Taste' defaultValue={Taste} placeholder="Taste" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* row */}
                <div className='md:flex  '>
                    <div className="form-control md:w-3/6 ">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name='Category' defaultValue={Category} placeholder="coffee-Category" className="input input-bordered  w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-3/6 ml-5">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name='Details' defaultValue={Details} placeholder="coffe-Details" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className='mb-8 '>
                    <div className="form-control md:w-full ">
                        <label className="label">
                            <span className="label-text">Photo-Url</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name='url' defaultValue={photourl} placeholder="url" className="input input-bordered  w-full" />
                        </label>
                    </div>

                </div>

                <input type="submit" value="Update Coffe" className="btn btn-block" />
            </form>
        </div>

    );
};

export default UpdateCoffee;