import React from 'react';
import Swal from 'sweetalert2'

const ADDcoffe = () => {
    const handelAddcoffe = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const Supplier = form.Supplier.value;
        const Taste = form.Taste.value;
        const Category = form.Category.value;
        const Details = form.Details.value;
        const photourl = form.url.value;
        const Newcoffe = { name, quantity, Supplier, Taste, Category, Details, photourl };
        // send data to server
        fetch('http://localhost:5000/coffee', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(Newcoffe),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId > 0) {
                    Swal.fire({
                        title: 'success',
                        text: 'Coffee added successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
        // console.log(Newcoffe);
    }
    return (
        <div className="bg-[#F4F3F0] p-24">

            <h2 className='text-3xl'>Add a coffee</h2>
            <form onSubmit={handelAddcoffe}>
                {/* row */}
                <div className='md:flex  '>
                    <div className="form-control md:w-3/6 ">
                        <label className="label">
                            <span className="label-text">Coffee Name</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name='name' placeholder="coffee-Name" className="input input-bordered  w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-3/6 ml-5">
                        <label className="label">
                            <span className="label-text">Available quantity</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name='quantity' placeholder="Quantity" className="input input-bordered w-full" />
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

                            <input type="text" name='Supplier' placeholder="coffee-Supplier" className="input input-bordered  w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-3/6 ml-5">
                        <label className="label">
                            <span className="label-text">Taste</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name='Taste' placeholder="Taste" className="input input-bordered w-full" />
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

                            <input type="text" name='Category' placeholder="coffee-Category" className="input input-bordered  w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-3/6 ml-5">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name='Details' placeholder="coffe-Details" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className='mb-8 '>
                    <div className="form-control md:w-full ">
                        <label className="label">
                            <span className="label-text">Photo-Url</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name='url' placeholder="url" className="input input-bordered  w-full" />
                        </label>
                    </div>

                </div>

                <input type="submit" value="ADD Coffe" className="btn btn-block" />
            </form>
        </div>
    );
};

export default ADDcoffe;