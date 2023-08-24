import { useState } from "react";
import { BsSpotify, BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../firebase";
import { useReducer } from "react";

function LoginPage() {
  const [toggle, setToggle] = useState(false);
  const auth = getAuth(app);
  const reducer = (state,action)=>{
    if(action.type==="username"){
      return {...state,username:action.payload}
    }
    else if(action.type==="password"){
      return {...state,password:action.payload}
    }
  }
  const [state, dispatch] = useReducer(reducer, { username: "", password: "" });
  const handleSubmit = (event)=>{
    event.preventDefault();
    signInWithEmailAndPassword(auth, state.username, state.password);
    dispatch({type:"username",payload:""});
    dispatch({type:"password",payload:""});
  }
  return (
    <div className="">
      <div className="bg-black flex items-center py-7 px-10 space-x-2">
        <BsSpotify className="text-3xl text-white" />
        <div className="text-lg text-white font-bold">Spotify</div>
      </div>
      <div className="bg-zinc-900 h-screen flex justify-center pt-8 ">
        <div className="bg-black py-12 rounded-md ">
          <div className="text-white flex justify-center font-bold text-3xl  mb-12">
            Log in to Spotify
          </div>
          <div className="rounded-full border border-gray-400 hover:border-white space-x-8 py-3 flex px-8 items-center mx-36 mb-2">
            <FcGoogle className="text-xl" />
            <div className="font-bold text-white text-sm">
              Continue with Google
            </div>
          </div>
          <div className="rounded-full border border-gray-400 hover:border-white space-x-8 py-3 px-8 flex items-center mx-36 mb-2">
            <BsFacebook className="text-xl text-blue-600" />
            <div className="font-bold text-white text-sm">
              Continue with Facebook
            </div>
          </div>
          <div className="rounded-full border border-gray-400 hover:border-white space-x-8 py-3 px-8 flex items-center mx-36 mb-8 text-white font-bold text-sm justify-center">
            Continue with Phone Number
          </div>
          <div className="border border-zinc-700 w-3/4 mx-auto" />
          <form className="my-6 space-y-3 mx-36" onSubmit={handleSubmit}>
            <div className="flex flex-col space-y-1">
              <label className="text-xs font-semibold text-white">
                Email or Username
              </label>
              <input
                placeholder="Email or Username"
                required
                onChange={(event)=>{dispatch({type:"username",payload:event.target.value})}}
                className=" outline-none rounded-sm p-2 text-sm bg-zinc-900 border border-zinc-400 text-white font-semibold focus:border-2 focus:border-green-400"
              />
            </div>
            <div className="flex flex-col space-y-1 ">
              <label className="text-xs font-semibold text-white">
                Password
              </label>
              <input
                placeholder="Password"
                required
                onChange={(event)=>{dispatch({type:"password",payload:event.target.value})}}
                className=" outline-none rounded-sm p-2 text-sm bg-zinc-900 border border-zinc-400 text-white font-semibold focus:border-2 focus:border-green-400"
              />
            </div>
          </form>
          <div className="flex items-center space-x-2 relative mx-36 ">
            <div
              className={`rounded-full ${
                toggle
                  ? "bg-green-500 outline outline-white outline-offset-2"
                  : "bg-zinc-500"
              } w-8 h-4 items-center pt-0.5 group`}
              onClick={() => {
                setToggle(!toggle);
              }}
            >
              <div
                className={`rounded-full w-3 h-3 bg-black transition-all ease-in-out duration-300 absolute ${
                  toggle ? " left-4" : "left-0.5"
                }`}
              />
            </div>
            <div className="text-white font-semibold text-xs">Remember me</div>
          </div>
          <div className="w-full flex justify-center pt-8">
            <button onClick={handleSubmit} className="bg-green-600 text-black font-bold rounded-full flex justify-center w-5/12 p-2">
              Log in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default LoginPage;
