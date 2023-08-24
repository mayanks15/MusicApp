import { BiLibrary } from "react-icons/bi";
import { FiPlus } from "react-icons/fi";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import { useState } from "react";

function Library({ isExpanded, handleExpand }) {
  const [playlists, setPlaylists] = useState([]);
  return (
    <div className="h-full bg-zinc-900 rounded-md ">
      <div className="flex flex-col space-y-5 p-3 ">
        <div className="flex items-center ml-1 ">
          <div className="flex text-gray-300 hover:text-white space-x-2 ">
            <BiLibrary className="text-xl" />
            <span className="text-sm">Your Library</span>
          </div>
          <div className="flex text-gray-300 space-x-4 text-xl ml-auto">
            <FiPlus className="rounded-full hover:bg-zinc-700" />
            <div
              className=" rounded-full hover:bg-zinc-700"
              onClick={handleExpand}
            >
              {isExpanded ? <AiOutlineArrowLeft /> : <AiOutlineArrowRight />}
            </div>
          </div>
        </div>
        <div className="flex space-x-2">
          <button className="text-xs text-white font-semibold px-3 py-1 rounded-full bg-zinc-800 hover:bg-zinc-700 transition-all duration-500 ease-in-out">
            Playlists
          </button>
          <button className="text-xs text-white font-semibold px-3 py-1 rounded-full bg-zinc-800 hover:bg-zinc-700 transition-all duration-500 ease-in-out">
            Artists
          </button>
        </div>
      </div>
      {playlists.length === 0 ? 
      <div className=" bg-zinc-800 p-3 m-2 rounded-lg space-y-4 ">
           <div className="text-white font-bold text-sm">Create your first playlist</div>
           <div className="text-white font-semibold text-xs">Its easy, give it a try</div>
           <button className="text-black font-semibold px-4 py-2 text-xs scale-100 hover:scale-105 bg-white rounded-full">Create playlist</button>
      </div> : null}
      {isExpanded && (
        <div className="flex px-3 py-1">
          <div className="text-xxs text-gray-300">Title</div>
          <div className=" text-xxs text-gray-300 ml-auto">Date Added</div>
        </div>
      )}
      {isExpanded && <hr className="mx-3 my-1 border border-zinc-800" />}
    </div>
  );
}
export default Library;
