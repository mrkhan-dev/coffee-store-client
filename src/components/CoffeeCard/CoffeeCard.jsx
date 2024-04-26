import {MdDelete, MdEdit, MdOutlineRemoveRedEye} from "react-icons/md";
import {Link} from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({coffee, coffees, setCoffees}) => {
  const {_id, name, supplier, category, chef, taste, details, photo} = coffee;

  const handleDelete = (_id) => {
    console.log(_id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              const remaining = coffees.filter((cof) => cof._id !== _id);
              setCoffees(remaining);
            }
          });
      }
    });
  };

  return (
    <div>
      <div className="card card-side shadow-xl bg-[#F5F4F1] p-8">
        <figure>
          <img className="h-[239px] w-[185]" src={photo} />
        </figure>
        <div className="flex justify-between w-full">
          <div className="flex flex-col  ml-8 justify-center">
            <h2 className="card-title">{name}</h2>
            <p> Details : {details}</p>
            <p> Category : {category}</p>
          </div>
          <div className="card-actions justify-end items-center">
            <div className="join join-vertical">
              <button className="btn join-item bg-[#D2B48C]">
                <MdOutlineRemoveRedEye className="h-8 w-8 text-white" />
              </button>
              <Link to={`update_product/${_id}`}>
                <button className="btn join-item bg-[#3C393B]">
                  <MdEdit className="h-8 w-8 text-white" />
                </button>
              </Link>
              <button
                onClick={() => handleDelete(_id)}
                className="btn join-item bg-[#EA4744]"
              >
                <MdDelete className="h-8 w-8 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
