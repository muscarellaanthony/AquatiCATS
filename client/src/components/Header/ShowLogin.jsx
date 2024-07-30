import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import Login from "../Login_Modal/Modal";
import Signup from "../SignUpModal/Signup";
import { Button } from "flowbite-react";
import { FaUser } from "react-icons/fa";

function ShowLogin() {
  if (Auth.loggedIn()) {
    return (
      <div className="flex justify-center items-start gap-5 ">
        <div className="mx-1 mt-4">
          <Button href="/" onClick={() => Auth.logout()}>
            Logout
          </Button>
        </div>

        <div className="mx-1 mt-6 text-white">
          <Link to="/orderHistory">
            <FaUser size={24} />
          </Link>
        </div>
      </div>
    );
  } else {
    return (
    <>
      <Login />
    </>);
  }
}

export default ShowLogin;
