import { createContext, useEffect, useState } from "react";
import axios from "axios";

const tokenContext = createContext();

//CLIENT ID -> f4968337564f4a118d2e0f10d1528291
//CLIENT SECRET ID -> 3ccdb32fd3ee4c09852c8fa6931157de

function Provider({ children }) {
  //Token Fetching
  const [accessToken, setToken] = useState("");
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
    setToken(response.data.access_token);
  };
  return (
    <tokenContext.Provider value={accessToken}>
      {children}
    </tokenContext.Provider>
  );
}

export { Provider };
export default tokenContext;
