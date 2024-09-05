import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
const UserInfoDisplay = () => {
  const { items } = useSelector((state) => state.users);
  const { id } = useParams();
  const user = items.find((item) => item.id === parseInt(id));
  console.log("User ID from URL:", id);
  console.log("Users in Redux:", items);

  if (!user) {
    return <div>User Not Found!</div>;
  }
  return (
    <div className="flex justify-center items-center flex-col py-4">
      <h1 className="font-bold my-4">User Details</h1>
      <div className="border border-gray-900 p-4 text-center">
        <p>Name: {user.name || "N/A"}</p>
        <p>Email: {user.email || "N/A"}</p>
        <p>City: {user.address?.city || "N/A"}</p>
        {/* <p>Phone: {user.phone}</p>
        <p>Website: {user.website}</p> */}
        <Link to="/">
          <button className="bg-blue-300 p-2 rounded-lg">Back to Home</button>
        </Link>
      </div>
    </div>
  );
};

export default UserInfoDisplay;
