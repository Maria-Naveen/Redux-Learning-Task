import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { selectUsers } from "../slices/userSlice";
const UserInfoDisplay = () => {
  const { id } = useParams();
  const users = useSelector(selectUsers);
  const user = users.find((user) => user.id === parseInt(id));

  if (!user) {
    return <div>User Not Found!</div>;
  }
  return (
    <div className="w-1/3 shadow-2xl mx-auto p-4 ">
      <h1>User Details:</h1>
      <p>UserName:{user.name}</p>
      <p>Age:{user.age}</p>
      <p>Degree:{user.degree}</p>
      <Link to="/">
        <button className="bg-blue-300 p-2 rounded-lg">Back to Home</button>
      </Link>
    </div>
  );
};

export default UserInfoDisplay;
