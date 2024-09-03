import { useEffect } from "react";
import { Table } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchData } from "../slices/dataAPI";

const AllitemsDisplay = () => {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <div className="flex justify-center items-center flex-col py-4">
      <h1 className="font-bold my-4">items List</h1>
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
              <td colSpan="4">No items found.</td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default AllitemsDisplay;
