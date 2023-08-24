import { RiSearchLine, RiPlayFill } from "react-icons/ri";
import { TfiTimer } from "react-icons/tfi";
import { TiDelete } from "react-icons/ti";
import { useState } from "react";
import Header from "./Header";
import axios from "axios";
import { useContext } from "react";
import Context from "../context/Contexts";

function SearchPage() {
  //searchInput in searchbar
  const [searchInput, setSearch] = useState("");

  const [tracks, setTracks] = useState([]);

  //access token from spotify
  const {accessToken} = useContext(Context);

  // Fetch Songs using search Input
  const fetchSong = async () => {
    const response = await axios.get(
      "https://api.spotify.com/v1/search?q=" +
        searchInput +
        "&type=track&limit=50",
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + accessToken,
        },
      }
    );
    setTracks(response.data.tracks.items);
  };

  //Type and search in searchbar
  const handleInput = (event) => {
    setSearch(event.target.value);
  };
  const handleSearch = (event) => {
    event.preventDefault();
    fetchSong();
  };

  const formatMilliseconds = (milliseconds) => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const [hoverIndex, setHoverIndex] = useState(-1);
  const renderedSongs = tracks.map((track, index) => {
    return (
      <div
        key={index}
        className="flex mx-4 px-4  py-2 items-center hover:bg-zinc-700 text-sm"
        onMouseEnter={() => setHoverIndex(index)}
        onMouseLeave={() => setHoverIndex(-1)}
      >
        {hoverIndex === index ? (
          <div className="text-lg">
            <RiPlayFill />
          </div>
        ) : (
          <div>{index + 1}</div>
        )}
        <div className="flex ml-4 basis-7/12 items-center font-bold space-x-4">
          <img
            src={track.album.images[2].url}
            alt={track.name}
            className="h-8"
          />
          <div>
            <div>{track.name}</div>
            <div className="text-xs">{track.artists[0].name}</div>
          </div>
        </div>
        <div className="basis-4/12">{track.album.name}</div>
        <div className="basis-1/12 justify-center flex">
          {formatMilliseconds(track.duration_ms)}
        </div>
      </div>
    );
  });

  return (
    <div className="h-full bg-zinc-900 rounded-md text-gray-300 pt-1 ">
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
      <div className="h-5/6 overflow-y-auto mt-10">
        {renderedSongs.length > 0 && (
          <div className="flex px-8 h-8 items-center text bg-zinc-800 text-xs">
            <div>#</div>
            <div className="ml-4 basis-7/12">Title</div>
            <div className="basis-4/12">Album</div>
            <TfiTimer className="basis-1/12 text-base" />
          </div>
        )}
        <div className="pt-2">{renderedSongs}</div>
      </div>
    </div>
  );
}
export default SearchPage;
