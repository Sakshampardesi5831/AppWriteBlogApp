import { Fragment } from "react";
import { LogoutButton, Container } from "../../components";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const authStatus = useSelector((state) => state.authReducer.status);
  console.log(authStatus);
  const navigate = useNavigate();
  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ];
  return (
    <Fragment>
      <header className="py-3 shadow bg-gray-500">
        <Container>
          <nav>
            <div className="mr-4">
              <Link to="/">Logo</Link>
            </div>
            <ul className="flex ml-auto">
              {navItems.map((item) =>
                item.active ? (
                  <li key={item.name} className="mr-4">
                    <button
                      onClick={() => navigate(item.slug)}
                      className="inline-block px-6 py-2 duration-200 hover:bg-blue-200 rounded-full"
                    >
                      {item.name}
                    </button>
                  </li>
                ) : (
                  ""
                )
              )}
              {authStatus && (<li>
                <LogoutButton/>
              </li>)}
            </ul>
          </nav>
        </Container>
      </header>
    </Fragment>
  );
};

export default Header;
