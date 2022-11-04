import { Link } from "react-router-dom";
import * as userService from '../utilities/users-service';

const NavBar = ({user, setUser}) => {
  function handleLogOut(){
    userService.logOut();
    setUser(null)
  }
  return (
    <nav>
      <Link to="/orders">Order History</Link> | {" "}
      <Link to="/orders/new">New Order</Link> {" "}
      &nbsp;&nbsp;<span>Welcome, {user.name} </span>
      &nbsp;&nbsp;<Link to=" " onClick={handleLogOut}>Log Out</Link>
    </nav>
  );
};
export default NavBar;


