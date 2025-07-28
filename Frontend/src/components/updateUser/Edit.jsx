import { Link, useNavigate, useParams } from 'react-router-dom'
import '../addUser/add.css';
import { useEffect, useState } from 'react';
import axios from "axios";
import toast from 'react-hot-toast';

const Edit = () => {

  const users = {
    firstName: "",
    lastName: "",
    email: "",
  }

  const {id} = useParams();
  const [user, setUser] = useState(users);
  const navigate = useNavigate()
  
  useEffect(() => {
    axios.get(`http://localhost:8000/api/getOne/${id}`).then((response) => {
      setUser(response.data);
    }).catch(error => console.log(error));
  },[id]);

  const inputChangeHnadler = (e) => {
    const {name, value} = e.target;
    setUser({...user, [name]: value});
    // console.log(user);
  }

  const submitForm = async (e) => {
    e.preventDefault();
    await axios.put( `http://localhost:8000/api/update/${id}`,user).then((response) => {
      toast.success(response.data.msg)
      navigate("/");
    }).catch(error => console.log(error));
  }

  return (
     <div className="addUser">
      <Link to={"/"}>Back</Link>
      <h3>Update User</h3>

      <form className="addUserForm " onSubmit={submitForm}>
        <div className="inputGroup">
          <label htmlFor="firstName">First name</label>
          <input
           onChange={inputChangeHnadler}
            type="text"
            value={user.firstName}
            id="firstName"
            name="firstName"
            autoComplete="off"
            placeholder="First Name"
          />
        </div>

        <div className="inputGroup">
          <label htmlFor="lastName">Last name</label>
          <input
           onChange={inputChangeHnadler}
            type="text"
            value={user.lastName}
            id="lastName"
            name="lastName"
            autoComplete="off"
            placeholder="Last Name"
          />
        </div>

        <div className="inputGroup">
          <label htmlFor="email">Email</label>
          <input
           onChange={inputChangeHnadler}
            type="email"
            value={user.email}
            id="email"
            name="email"
            autoComplete="off"
            placeholder="Email"
          />
        </div>

        {/* <div className="inputGroup">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            autoComplete="off"
            placeholder="Password"
          />
        </div> */}

        <div className="inputGroup">
                <button type="submit">Update User</button>
            </div>
      </form>
    </div>
  )
}

export default Edit