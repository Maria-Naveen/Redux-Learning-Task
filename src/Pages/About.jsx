import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { selectUsers } from "../slices/userSlice";
const About = () => {
  const { id } = useParams();
  const users = useSelector(selectUsers);
  const user = users.find((user) => user.id === parseInt(id));

  if (!user) {
    return <div>User Not Found!</div>;
  }
  return (
    <div>
      <h1>User Details:</h1>
      <p>UserName:{user.name}</p>
      <p>Age:{user.age}</p>
      <p>Degree:{user.degree}</p>
      <Link to="/">
        <button>Back to users List(home)</button>
      </Link>
    </div>
  );
};

export default About;
