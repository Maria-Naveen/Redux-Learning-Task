import { Table } from "reactstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectUsers } from "../slices/userSlice";
const Home = () => {
  const users = useSelector(selectUsers);

  return (
    <div>
      <h1>Users List</h1>
      <Table
        className="border border-gray-900 mx-auto text-center w-1/2"
        size="lg"
      >
        <thead>
          <tr className="border border-gray-900">
            <th>Name</th>
            <th>Age</th>
            <th>Degree</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.degree}</td>
              <td>
                <Link to={`/about/${user.id}`}>
                  <button>View</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Home;
