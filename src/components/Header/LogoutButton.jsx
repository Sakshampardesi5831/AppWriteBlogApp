import { Fragment } from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";
const LogoutButton = () => {
  const dispatch = useDispatch();

  const logoutHandler = async () => {
    authService.logout().then(() => {
      dispatch(logout());
    });
  };

  return (
    <Fragment>
      <button
        className="inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
        onClick={logoutHandler}
      >
        Logout
      </button>
    </Fragment>
  );
};

export default LogoutButton;
