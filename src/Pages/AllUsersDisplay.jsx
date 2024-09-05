import { useState, useEffect } from "react";
import { Table } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchData } from "../slices/dataAPI";
import AddUserForm from "../components/AddUserForm";
const AllUsersDisplay = () => {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.users);
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  const handleAddUserClick = () => {
    setIsFormOpen(true); // Open the form when the button is clicked
  };

  const closeForm = () => {
    setIsFormOpen(false); // Close the form
  };

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <div className="flex justify-center items-center flex-col py-4">
      <h1 className="font-bold my-4">Users List</h1>
      {/* Button to open form */}
      <button
        onClick={handleAddUserClick}
        className="bg-yellow-400 rounded-lg px-4 py-2 my-2"
      >
        Add New User
      </button>
      {/* Render form if open */}
      {isFormOpen && <AddUserForm onClose={closeForm} />}{" "}
      <Table
        className="border border-gray-900 mx-auto text-center w-1/2"
        size="lg"
      >
        <thead>
          <tr className="border border-gray-900">
            <th>Name</th>
            <th>Email</th>
            <th>City</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {items.length > 0 ? (
            items.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.address.city}</td>
                <td>
                  <Link to={`/about/${item.id}`}>
                    <button>View</button>
                  </Link>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No users found.</td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default AllUsersDisplay;
