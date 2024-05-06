import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast ,ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useAuth from '../hooks/useAuth';
import loginImg from '../img/sidepic.webp'
import axios from "axios";

export default function Login() {
  const {isLogin,setIsLogin} = useAuth();
  const [values, setValues] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  useEffect(()=>{
    if(isLogin){
      navigate("/");
    }
  })

  const toastOptions = {
    position: "bottom-right",
    autoClose: 4000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const validateForm = () => {
    const { username, password } = values;
    if (username === "") {
      toast.error("Email and Password is required.", toastOptions);
      return false;
    } else if (password === "") {
      toast.error("Email and Password is required.", toastOptions);
      return false;
    }
    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validateForm()) {
      const { email, password } = values;
      const { data } = await axios.post('http://localhost:5000/api/auth/login', {
        email,
        password,
      });
      console.log(data);
      if (data.status === false) {
        toast.error(data.msg, toastOptions);
        return false;
      }
      if (data.status === true) {
        localStorage.setItem('authToken',data.authToken);
        setIsLogin(true);
        navigate("/");
      }
    }
  };
  
  const sstyle={
    marginTop: '120px',
  }

  return (
    <div>
      <div className="container mx-auto md:flex items-center shadow-xl" style={sstyle}>
        <div className="md:w-3/5">
          <div className="border p-8 m-12 rounded-lg">
            <h2 className="custom-color text-4xl">Sign in</h2>
            <p className="my-4">
              And enjoy life during the time you just saved!
            </p>
            <form onSubmit={(event) => handleSubmit(event)}>
              <div className="mb-3">
                <input
                  className="w-full border-b rounded py-2 pl-4"
                  type="email"
                  placeholder="Email Address"
                  name="email"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="mb-3">
                <input
                  className="w-full border-b rounded py-2 pl-4"
                  type="text"
                  placeholder="Password"
                  name="password"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div>
              <button className="py-3 px-5 text-2xl border w-full mt-5 rounded transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white"
                  type="submit">
                  Sign in
                </button>

              </div>
            </form>
            {/* <div className="md:flex justify-between my-8">
              <button
                onClick={handleGoogleSignIn}
                className="px-4 py-2 w-full my-2 md:my-0 mr-2 border border-blue-500 rounded"
              >
                {googleImg} Sign in with Google
              </button>
              <button
                onClick={handleGithubSignIn}
                className="px-4 py-2 w-full my-2 md:my-0 mr-2 border border-blue-500 rounded"
              >
                {githubImg} Sign in with GitHub
              </button>
            </div> */}
            <h2 className="my-8 text-xl text-center md:text-left">
              Haven't Account Yet?{' '}
              <Link
                className="primary-color font-bold"
                to="/signup"
              >
                Sign Up
              </Link>
            </h2>
          </div>
        </div>
        <div className="w-2/5 hidden md:block">
          <img src={loginImg} alt="" />
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}
