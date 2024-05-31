import toast from "react-hot-toast";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";

const BookingModal = ({ productDetails, setProductDetails }) => {
  const { user } = useAuth();
  const [, refetch] = useCart();
  const {
    product_name,
    product_resale_price,
    _id,
    product_condition,
    product_image,
    product_category,
  } = productDetails;
  const [axiosSecure] = useAxiosSecure();

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const resalePrice = form.resalePrice.value;
    const phone = form.phone.value;
    const meetingLocation = form.meetingLocation.value;
    const bookingDetails = {
      product_id: _id,
      product_name,
      product_image,
      product_condition,
      product_category,
      product_resale_price: parseFloat(resalePrice),
      buyer_name: user?.displayName,
      buyer_email: user?.email,
      buyer_phone: phone,
      buyer_meetingLocation: meetingLocation,
    };

    // Submit booking details to MongoDB
    axiosSecure
      .put("/carts", bookingDetails)
      .then((res) => {
        if (res.data.data.acknowledged) {
          Swal.fire({
            icon: "success",
            title: "Product added",
            showConfirmButton: false,
            timer: 1500,
          });
          setProductDetails("");
          refetch();
        } else {
          toast.error(res.data.data);
        }
      })
      .catch((err) => {
        console.error(err);
        toast.error("Something went wrong. Please try again.");
      });
  };

  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2">
            ✕
          </label>
          <h3 className="text-lg font-bold">{product_name}</h3>
          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1 gap-3 mt-6">
            <input
              name="name"
              type="text"
              defaultValue={user?.displayName}
              disabled
              placeholder="Your Name"
              className="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5 outline-none"
            />
            <input
              name="email"
              type="email"
              defaultValue={user?.email}
              disabled
              placeholder="Email Address"
              className="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5 outline-none"
            />
            <input
              name="productName"
              type="text"
              defaultValue={product_name}
              disabled
              placeholder="Product Name"
              className="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5 outline-none"
            />
            <input
              name="resalePrice"
              type="text"
              defaultValue={product_resale_price}
              disabled
              placeholder="Product Resale Price"
              className="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5 outline-none"
            />
            <input
              name="phone"
              type="text"
              placeholder="Phone Number"
              className="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5 outline-none"
            />
            <input
              name="meetingLocation"
              type="text"
              placeholder="Meeting Location"
              className="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5 outline-none"
            />
            <br />
            <input
              className="btn btn-accent w-full"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
