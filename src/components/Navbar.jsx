import {
  FaCalendarDays,
  FaCirclePlus,
  FaFolder,
  FaUserGroup,
} from "react-icons/fa6";
import { TiHome } from "react-icons/ti";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav className="min-w-screen     text-center fixed bottom-0">
      <ul className="flex  justify-around text-3xl text-blue-600  py-8 rounded-lg bg-blue-200 relative">
        <div className="flex items-center gap-6">
          <li>
            <Link to='/'><TiHome /></Link>
          </li>
          <li>
            <FaCalendarDays />
          </li>
        </div>
        <li>
          <Link to= '/add-task'>
          <FaCirclePlus className="h-20 p-2 w-20 text-blue-700  rounded-full absolute bottom-8 right-[33%] bg-white mx-4" />
          </Link>
        </li>
        <div className="flex gap-6">
          <li>
            <FaFolder />
          </li>
          <li>
            <FaUserGroup />
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
