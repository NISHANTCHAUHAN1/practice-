import { Link } from 'react-router-dom'
import './user.css'

const User = () => {
  return (
    <div className="userTable">
      <Link to={"/add"} className='addButton'> Add Users</Link>
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
          <td>1.</td>
          <td>Nishant Chauhan</td>
          <td>Nish@gmail.com</td>
          <td className='actionButtons'>
            <button><i className="fa-solid fa-trash"></i></button>
            <Link to={"/edit"}><i className="fa-solid fa-pen-to-square"></i></Link>
          </td>
        </tbody>
      </table>
    </div>
  )
}

export default User