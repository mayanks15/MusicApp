import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { RiAccountCircleLine } from "react-icons/ri";
import { MdOutlineDownloadForOffline } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
function Header() {
  const navigate = useNavigate();
  return (
    <div className="flex items-center h-12 bg-transparent  justify-between">
      <div className="flex space-x-2 ">
        <BsChevronLeft
          className="rounded-full bg-black p-1 text-2xl cursor-pointer"
          onClick={() => navigate(-1)}
        />
        <BsChevronRight
          className="rounded-full bg-black p-1 text-2xl cursor-pointer"
          onClick={() => navigate(1)}
        />
      </div>

      <div className="flex w-44  items-center space-x-8">
        <a
          href="/sign-up"
          className="text-sm w-20  hover:text-white hover:font-semibold scale-100 "
        >
          Sign up
        </a>
        <a
        href="/log-in"       
        className=" text-sm w-28 px-6 py-3 text-black font- font-bold bg-white scale-100 hover:scale-105 hover:font-bold rounded-full">
          Log in
        </a>
      </div>
    </div>
  );
}
export default Header;

/*
<div className="flex items-center ml-auto space-x-2">
        <button className="text-black font-bold bg-white rounded-full border text-xs px-3 py-1">
          Explore Premium
        </button>
        <button className="flex items-center text-white bg-black rounded-full gap-1 text-xs font-bold px-2 py-1">
          <MdOutlineDownloadForOffline className=" text-lg" />
          Install App
        </button>
        <RiAccountCircleLine className="text-xl cursor-pointer" />
      </div>
*/
