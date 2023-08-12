import { RiSearchLine } from "react-icons/ri";
import { TfiTimer } from "react-icons/tfi";
import { TiDelete } from "react-icons/ti";
import { useState } from "react";
import Header from "./Header";
import axios from "axios";
import { useContext } from "react";
import tokenContext from "../context/token";

function SearchPage() {
  //searchInput in searchbar
  const [searchInput, setSearch] = useState("");

  const [tracks, setTracks] = useState([]);

  //access token from spotify
  const accessToken = useContext(tokenContext);

  // Fetch Songs using search Input
  const fetchSong = async () => {
    const response = await axios.get(
      "https://api.spotify.com/v1/search?q=" + searchInput + "&type=track",
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + accessToken,
        },
      }
    );
    setTracks(response.data.tracks.items);
    console.log(tracks);
  };

  //Type and search in searchbar
  const handleInput = (event) => {
    setSearch(event.target.value);
  };
  const handleSearch = (event) => {
    event.preventDefault();
    fetchSong();
  };

  const renderedSongs = tracks.map((track, index) => {
    return (
      <div key={index} className="flex mx-4 px-4 py-2 items-center hover:bg-zinc-700">
        <div>{index + 1}</div>
        <div className="flex ml-4 basis-7/12 items-center font-bold space-x-2">
          <img src={track.album.images[2].url} alt={track.name} className="h-6"/>
          <div>{track.name}</div>
        </div>
        <div className="basis-4/12">{track.album.name}</div>
        <div className="basis-1/12"></div>
      </div>
    );
  });

  return (
    <div className="h-full bg-zinc-900 rounded-md text-gray-300 pt-1">
      <div className=" relative items-center mx-4">
        <Header />
        <form
          className=" flex items-center rounded-full w-72 absolute top-1 bottom-1 left-16"
          onSubmit={handleSearch}
        >
          <input
            className="bg-zinc-800 text-xs px-8 w-72 py-3 outline-none rounded-full hover:brightness-150  focus:border-2"
            placeholder="What do you want to listen to?"
            value={searchInput}
            onChange={handleInput}
          />
          <RiSearchLine className="absolute left-2" />
          <TiDelete
            className="text-xl absolute right-2 "
            onClick={() => {
              setSearch("");
            }}
          />
        </form>
      </div>
      <div className=" h-5/6 overflow-y-auto mt-10  text-xs">
        <div className="flex px-8  h-8 items-center text bg-zinc-800">
          <div>#</div>
          <div className=" ml-4 basis-7/12 ">Title</div>
          <div className="basis-4/12 ">Album</div>
          <TfiTimer className=" basis-1/12  text-base" />
        </div>
        <div className="pt-2">{renderedSongs}</div>
      </div>
    </div>
  );
}
export default SearchPage;

/*

*/
