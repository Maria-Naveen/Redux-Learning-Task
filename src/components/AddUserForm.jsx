import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUserToList } from "../slices/userSlice"; // Ensure this import is correct

const AddUserForm = ({ onClose }) => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.users);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");

  const generateUniqueId = () => {
    let id;
    do {
      id = Math.floor(Math.random() * 1000); // Generate a random integer between 0 and 999
    } while (items.some((user) => user.id === id));
    return id;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      id: generateUniqueId(),
      name,
      email,
      address: { city },
    };
    dispatch(addUserToList(newUser)); // Dispatch the action to add the user
    onClose(); // Close the form after submission
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Add New User</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block font-medium mb-1" htmlFor="name">
              Name:
            </label>
            <input
              className="border rounded-md px-3 py-2 w-full"
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block font-medium mb-1" htmlFor="email">
              Email:
            </label>
            <input
              className="border rounded-md px-3 py-2 w-full"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block font-medium mb-1" htmlFor="city">
              City:
            </label>
            <input
              className="border rounded-md px-3 py-2 w-full"
              type="text"
              id="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />
          </div>
          <div className="flex justify-end">
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md mr-2"
              type="submit"
            >
              Add User
            </button>
            <button
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium py-2 px-4 rounded-md"
              type="button"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUserForm;
