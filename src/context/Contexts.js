import { createContext, useEffect, useState } from "react";
import axios from "axios";

const Context = createContext();

//CLIENT ID -> f4968337564f4a118d2e0f10d1528291
//CLIENT SECRET ID -> 3ccdb32fd3ee4c09852c8fa6931157de

function Provider({ children }) {
  //Token Fetching
  const [accessToken, setToken] = useState("");
  const [loading, setLoading] = useState(true);
  const [loggedIn,setLogging] = useState(false);
  useEffect(() => {
    fetchToken();
  }, []);
  const fetchToken = async () => {
    const response = await axios.post(
      "https://accounts.spotify.com/api/token",
      "grant_type=client_credentials&client_id=f4968337564f4a118d2e0f10d1528291&client_secret=3ccdb32fd3ee4c09852c8fa6931157de",
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    setLoading(false);
    setToken(response.data.access_token);
  };
  if (loading) {
    return <div className="text-white">Loading...</div>;
  }
  
  return (
    <Context.Provider value={{accessToken,loggedIn,setLogging}}>
      {children}
    </Context.Provider>
  );
}

export { Provider };
export default Context;
