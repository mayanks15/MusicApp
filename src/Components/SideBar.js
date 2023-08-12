import { Link } from "react-router-dom";
import { AiOutlineHome, AiFillHome } from "react-icons/ai";
import { RiSearchLine, RiSearchFill } from "react-icons/ri";

function SideBar({ activeTab, handle }) {
  return (
    <div className="h-full bg-zinc-900 rounded-md space-y-5 p-3">
      <Link
        to="/"
        className={` flex items-center space-x-4 ml-1 text-xl hover:text-green-400 transition ease-in  ${
          activeTab === "home" ? "text-green-400" : "text-gray-300"
        }`}
        onClick={() => handle("home")}
      >
        {activeTab === "home" ? <AiFillHome /> : <AiOutlineHome />}
        <div className="text-sm">Home</div>
      </Link>
      <Link
        to="/search"
        className={`flex items-center ml-1 space-x-4 text-xl hover:text-green-400 transition ease-in  ${
          activeTab === "search" ? "text-green-400" : "text-gray-300"
        }`}
        onClick={() => handle("search")}
      >
        {activeTab === "search" ? <RiSearchFill /> : <RiSearchLine />}
        <div className="text-sm">Search</div>
      </Link>
    </div>
  );
}
export default SideBar;
