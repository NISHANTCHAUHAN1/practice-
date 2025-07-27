import { useState } from "react";
import "./add.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from 'react-hot-toast';

const Add = () => {

  const users = {
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  }
  const [user, setUser] = useState(users);
  const navigate = useNavigate();

  const inputHandler = (e) => {
    const {name, value} = e.target;
    setUser({...user, [name]: value});
    console.log(user);
  }

  const submitForm = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:8000/api/create', user).then((response) => {
      console.log(response);
      toast.success(response.data.msg, {position: "top-right"});
      navigate("/");
    })
    .catch(error => console.log(error));
  }

  return (
    <div className="addUser">
      <Link to={"/"}>Back</Link>
      <h3>Add new user</h3>

      <form className="addUserForm" onSubmit={submitForm}>
        <div className="inputGroup">
          <label htmlFor="firstName">First name</label>
          <input
            onChange={inputHandler}
            type="text"
            id="firstName"
            name="firstName"
            autoComplete="off"
            placeholder="First Name"
          />
        </div>

        <div className="inputGroup">
          <label htmlFor="lastName">Last name</label>
          <input
            onChange={inputHandler}
            type="text"
            id="lastName"
            name="lastName"
            autoComplete="off"
            placeholder="Last Name"
          />
        </div>

        <div className="inputGroup">
          <label htmlFor="email">Email</label>
          <input
            onChange={inputHandler}
            type="email"
            id="email"
            name="email"
            autoComplete="off"
            placeholder="Email"
          />
        </div>

        <div className="inputGroup">
          <label htmlFor="password">Password</label>
          <input
            onChange={inputHandler}
            type="password"
            id="password"
            name="password"
            autoComplete="off"
            placeholder="Password"
          />
        </div>

        <div className="inputGroup">
          <button type="submit">ADD USER</button>
        </div>
      </form>
    </div>
  );
};

export default Add;
