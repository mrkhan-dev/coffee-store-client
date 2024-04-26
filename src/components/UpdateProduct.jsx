import {useLoaderData} from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProduct = () => {
  const coffee = useLoaderData();
  const {_id, name, supplier, category, chef, taste, details, photo} = coffee;

  const handleUpdateCoffee = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const supplier = form.supplier.value;
    const category = form.category.value;
    const chef = form.chef.value;
    const taste = form.taste.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const updatedCoffee = {
      name,
      supplier,
      category,
      chef,
      taste,
      details,
      photo,
    };
    console.log(updatedCoffee);
    fetch(`http://localhost:5000/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "success",
            text: "Do you want to update",
            icon: "success",
            confirmButtonText: "Cool",
          });
          form.reset();
        }
      });
  };

  return (
    <div className="max-w-7xl mx-auto bg-[#F4F3F0] rounded-md">
      <h1 className="text-center text-6xl mt-12 py-10 font-semibold">
        Update Coffee
      </h1>
      <form onSubmit={handleUpdateCoffee} className="px-28 py-16">
        <div className="flex justify-between">
          <div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl">Name</span>
              </label>
              <input
                name="name"
                defaultValue={name}
                type="text"
                placeholder="Enter coffee name"
                className="input input-bordered w-[520px]"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl">Supplier</span>
              </label>
              <input
                type="text"
                name="supplier"
                defaultValue={supplier}
                placeholder="Enter coffee supplier"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl">Category</span>
              </label>
              <input
                type="text"
                name="category"
                defaultValue={category}
                placeholder="Enter category name"
                className="input input-bordered"
              />
            </div>
          </div>
          <div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl">Chef</span>
              </label>
              <input
                type="text"
                name="chef"
                defaultValue={chef}
                placeholder="Enter coffee chef"
                className="input input-bordered w-[520px]"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl">Taste</span>
              </label>
              <input
                type="text"
                name="taste"
                defaultValue={taste}
                placeholder="Enter coffee taste"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl">Details</span>
              </label>
              <input
                type="text"
                name="details"
                defaultValue={details}
                placeholder="Enter coffee details"
                className="input input-bordered"
              />
            </div>
          </div>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-xl">Photo</span>
          </label>
          <input
            type="text"
            name="photo"
            defaultValue={photo}
            placeholder="Enter phot URL"
            className="input input-bordered"
          />
        </div>
        <div className="form-control mt-6">
          <input
            type="submit"
            value="Add Coffee"
            className="input input-bordered cursor-pointer bg-[#D2B48C]"
          />
        </div>
      </form>
    </div>
  );
};

export default UpdateProduct;
