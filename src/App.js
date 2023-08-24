import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./Components/HomePage";
import SearchPage from "./Components/SearchPage";
import SideBar from "./Components/SideBar";
import Library from "./Components/Library";
import { useEffect, useState } from "react";
import SignUpPage from "./Components/SignUpPage";
import LoginPage from "./Components/LogInPage";
function App() {
  const [activeTab, setActive] = useState("");
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      setActive("home");
    } else if (location.pathname === "/search") {
      setActive("search");
    }
  }, [location.pathname]);

  const handle = (tab) => {
    setActive(tab);
  };

  const [isExpanded, setExpanded] = useState(false);

  const handleExpand = () => {
    setExpanded(!isExpanded);
  };
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="h-screen bg-black flex">
            <div
              className={`${
                isExpanded ? "basis-3/7" : "basis-2/7"
              } flex flex-col`}
            >
              <div className="basis-2/12 p-2">
                <SideBar activeTab={activeTab} handle={handle} />
              </div>
              <div className="basis-10/12 px-2 pb-2 ">
                <Library isExpanded={isExpanded} handleExpand={handleExpand} />
              </div>
            </div>
            <div className="basis-5/7 pt-2 pr-2 pb-2">
                <HomePage/>
            </div>
          </div>
        }
      />
      <Route
        path="/search"
        element={
          <div className="h-screen bg-black flex">
            <div
              className={`${
                isExpanded ? "basis-3/7" : "basis-2/7"
              } flex flex-col`}
            >
              <div className="basis-2/12 p-2">
                <SideBar activeTab={activeTab} handle={handle} />
              </div>
              <div className="basis-10/12 px-2 pb-2 ">
                <Library isExpanded={isExpanded} handleExpand={handleExpand} />
              </div>
            </div>
            <div className="basis-5/7 pt-2 pr-2 pb-2">
              <SearchPage />
            </div>
          </div>
        }
      />
      <Route path="/sign-up" element={<SignUpPage />} />
      <Route path="/log-in" element={<LoginPage/>} />
    </Routes>
  );
}
export default App;
