import { Link } from "react-router-dom";
import "./user.css";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const User = () => {
  const [user, setUser] = useState([]);
  // console.log(user);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:8000/api/getAll");
      setUser(response.data);
    };
    fetchData();
  }, []);

  const deleteUser = async(userId) => {
    axios.delete(`http://localhost:8000/api/delete/${userId}`).then((response) => {
      setUser((prevUser) => prevUser.filter((user) => user._id !== userId))
      // console.log(response);
      toast.success(response.data.msg);
      
    }).catch(error => console.log(error));
  }

  return (
    <div className="userTable">
      <Link to={"/add"} className="addButton">
        {" "}
        Add Users
      </Link>
      <table border={1} cellPadding={10} cellSpacing={0}>
        <thead>
          <tr>
            <th>S.NO.</th>
            <th>User Name</th>
            <th>User Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {user.map((user, index) => {
            return (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td>{user.firstName} {user.lastName}</td>
                <td>{user.email}</td>
                <td className="actionButtons">
                  <button onClick={() => deleteUser(user._id)}>  
                    <i className="fa-solid fa-trash"></i>
                  </button>
                  <Link to={`/edit/` + user._id}>
                    <i className="fa-solid fa-pen-to-square"></i>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default User;
