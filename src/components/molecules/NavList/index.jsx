import { Link } from "react-router-dom";

export default function NavList() {
  const navItems = [
    { id: 1, url: "/", text: "Home" },
    { id: 2, url: "/login", text: "Login" },
    { id: 3, url: "/register", text: "Register" },
  ];
  return (
    <>
      <nav>
        <ul className="flex flex-col md:flex-row md:items-center py-3 md:py-0 gap-2 md:gap-5">
          {navItems.map((item) => (
            <li
              key={item.id}
              className="hover:underline hover:underline-offset-8"
            >
              <Link to={item.url}>{item.text}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
