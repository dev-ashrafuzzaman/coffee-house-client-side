import Swal from 'sweetalert2'

const AddCoffee = () => {

    const handelCoffeeAdd = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value
        const chef = form.chef.value
        const supplier = form.supplier.value
        const taste = form.taste.value
        const category = form.category.value
        const details = form.details.value
        const photo = form.photo.value
        const newCoffee = {
            name,
            chef,
            supplier,
            taste,
            category,
            details,
            photo
        }
        console.log(newCoffee);

        //  add to server db
        fetch('http://localhost:5000/coffee' , {
            method: 'POST',
            headers: {
                "content-type" : "application/json"
            },
            body: JSON.stringify(newCoffee)

        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    title: 'Successfully added a Coffee',
                    text: 'Do you want to continue',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })

    }


    return (
        <div>
            <form onSubmit={handelCoffeeAdd} className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-3xl mb-4 text-center font-bold">Add Coffee!</h1>

                    </div>
                    <div className="card  w-full shadow-2xl bg-base-100">
                        <div className="card-body">
                            {/* from row */}
                            <div className="flex gap-4">
                                <div>
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" placeholder="Name" name="name" className="input input-bordered" />
                                </div>
                                <div>
                                    <label className="label">
                                        <span className="label-text">Chef</span>
                                    </label>
                                    <input type="text" placeholder="Chef" name="chef" className="input input-bordered" />
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div>
                                    <label className="label">
                                        <span className="label-text">Supplier</span>
                                    </label>
                                    <input type="text" placeholder="Supplier" name="supplier" className="input input-bordered" />
                                </div>
                                <div>
                                    <label className="label">
                                        <span className="label-text">Taste</span>
                                    </label>
                                    <input type="text" placeholder="Taste" name="taste" className="input input-bordered" />
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div>
                                    <label className="label">
                                        <span className="label-text">Category</span>
                                    </label>
                                    <input type="text" placeholder="Category" name="category" className="input input-bordered" />
                                </div>
                                <div>
                                    <label className="label">
                                        <span className="label-text">Details</span>
                                    </label>
                                    <input type="text" placeholder="Details" name="details" className="input input-bordered" />
                                </div>
                            </div>
                            <div className="w-full">
                                <div>
                                    <label className="label">
                                        <span className="label-text">Photo</span>
                                    </label>
                                    <input type="text" placeholder="Photo" name="photo" className="input input-bordered w-full" />
                                </div>

                            </div>

                            <input className="btn btn-success mt-4" type="submit" value="Add Coffee" />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddCoffee;