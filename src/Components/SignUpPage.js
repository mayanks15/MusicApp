import app from "../firebase";
import { BsSpotify } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useReducer } from "react";
import { useNavigate } from "react-router-dom";

function SignUpPage({loggedIn , setLogging}) {
  const navigate = useNavigate();
  const auth = getAuth(app);
  const reducer = (state, action) => {
    if (action.type === "email") {
      return { ...state, userEmail: action.payload };
    } else if (action.type === "password") {
      return { ...state, userPass: action.payload };
    }
  };
  const [state, dispatch] = useReducer(reducer, {
    userEmail: "",
    userPass: "",
  });
  const signupUser = () => {
    createUserWithEmailAndPassword(auth, state.userEmail, state.userPass);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    signupUser();
    dispatch({ type: "email", payload: "" });
    dispatch({ type: "password", payload: "" });
    navigate(-1);
  };
  return (
    <div className="h-screen flex flex-col items-center">
      <div className="flex items-center space-x-2 mt-10">
        <BsSpotify className="text-3xl" />
        <div className="text-black font-semibold text-xl">Spotify(riyal) </div>
      </div>
      <div className="text-xl font-bold mt-8">
        Sign up for free to start listening.
      </div>
      <button className="flex border-2 border-gray-900 rounded-full space-x-4 px-20 py-2 mt-4 scale-100 hover:scale-105">
        <FcGoogle className="text-xl" />
        <span className="text-sm text-stone-700 font-semibold">
          Sign up with Google
        </span>
      </button>
      <div className="flex items-center mt-4">
        <div className="w-36 border border-gray-300" />
        <span className="h-7 ">or</span>
        <div className="w-36 border border-gray-300" />
      </div>
      <form className="mt-6 space-y-3 w-1/3" onSubmit={handleSubmit}>
        <div className="flex flex-col space-y-1">
          <label className="text-xs font-semibold">What's your email?</label>
          <input
            placeholder="Enter your email."
            required
            value={state.userEmail}
            className=" outline-none border border-gray-600 rounded-md p-2 text-sm  focus:border-2 focus:border-green-500"
            onChange={(event) => {
              dispatch({ type: "email", payload: event.target.value });
            }}
          />
        </div>
        <div className="flex flex-col space-y-1 ">
          <label className="text-xs font-semibold">Create a password</label>
          <input
            placeholder="Enter your password."
            required
            value={state.userPass}
            className="outline-none border border-gray-600 rounded-md p-2 text-sm focus:border-2 focus:border-green-500"
            onChange={(event) => {
              dispatch({ type: "password", payload: event.target.value });
            }}
          />
        </div>
        <div className="flex flex-col space-y-1 ">
          <label className="text-xs font-semibold">
            What should we call you?
          </label>
          <input
            type="text"
            placeholder="Enter a profile name."
            className="outline-none border border-gray-600 rounded-md p-2 text-sm focus:border-2 focus:border-green-500"
          />
        </div>
        <div className="flex justify-center pt-4">
          <button
            className="bg-green-500 rounded-full text-sm font-bold px-12 py-3 "
            onClick={handleSubmit}
          >
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
}
export default SignUpPage;
