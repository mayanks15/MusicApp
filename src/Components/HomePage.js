import { useEffect } from "react";
import Header from "../Components/Header";
import axios from "axios";
import { useContext } from "react";
import Context from "../context/Contexts";
import { useState } from "react";
import { useCallback } from "react";

function HomePage() {
  const {accessToken} = useContext(Context);


  const [RandomPlaylists, setRandomPlaylists] = useState([]);
  
  const getRandomPlaylist = useCallback(async () => {
    const categories = [
      "gaming",
      "party",
      "metal",
      "sleep",
      "hiphop",
      "chill",
      "classical",
      "mood",
      "workout",
      "jazz",
      "anime",
      "punk",
      "focus",
      "instrumental",
      "devotional"
    ];
    const response = await axios.get(
      "https://api.spotify.com/v1/browse/categories/" +
        categories[Math.floor(Math.random() * categories.length)] +
        "/playlists",
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + accessToken,
        },
        params: {
          limit: "6",
        },
      }
    );
    setRandomPlaylists(response.data.playlists.items);
  }, [accessToken]);

  useEffect(() => {
    getRandomPlaylist();
  }, [getRandomPlaylist]);


  const renderedRandomPlaylists = RandomPlaylists.map((playlist, index) => {
    return (
      <div
        key={index}
        className="flex bg-opacity-60 space-x-3 items-center bg-zinc-700 hover:bg-zinc-600 transition duration-500 ease-in-out"
      >
        <div className="h-16 w-16">
          <img src={playlist.images[0].url} alt="img" />
        </div>
        <div className="font-semibold text-white text-sm">{playlist.name}</div>
      </div>
    );
  });

  return (
    <div className="h-full text-gray-300  bg-zinc-900 pt-1 px-4">
      <Header />
      <div className="text-2xl text-white font-bold">Good Morning</div>
      <div className="grid grid-cols-3 gap-4 mt-4">
        {renderedRandomPlaylists}
      </div>
    </div>
  );
}
export default HomePage;
