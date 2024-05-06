import React, { useEffect, useState } from 'react';
import useAuth from '../hooks/useAuth';
import signUp from '../img/signup.png';
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export default function SignUp() {
  const navigate = useNavigate();
  const {isLogin,setIsLogin} = useAuth();

  useEffect(()=>{
    if(isLogin){
      navigate("/");
    }
  })

  const [values, setValues] = useState({
    username: "",
    email: "",
    password: ""
  });

  const toastOptions = {
    position: "bottom-right",
    autoClose: 4000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  const handleValidation = () => {
    const { password, username, email } = values;
    if (username.length < 3) {
      toast.error(
        "Username should be greater than 3 characters.",
        toastOptions
      );
      return false;
    } else if (email === "") {
      toast.error("Email is required.", toastOptions);
      return false;
    } else if (password.length < 8) {
      toast.error(
        "Password should be equal or greater than 8 characters.",
        toastOptions
      );
      return false;
    }
    return true;
  };

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (handleValidation()) {
      const { email, username, password } = values;
      const response = await axios.post('http://localhost:5000/api/auth/register', {
        username,
        email,
        password,
      });
      console.log(response.data);
      if (response.data.status === false) {
        toast.error(response.data.msg, toastOptions);
      }
      if (response.data.status === true) {
        localStorage.setItem('authToken',response.data.authToken);
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
      <div className="container mx-auto md:flex items-center" style={sstyle}>
        <div className="md:w-3/5">
          <div className="border p-8 m-12 rounded-lg">
            <h2 className="custom-color text-4xl">Sign Up</h2>
            <p className="my-4">
              And enjoy life during the time you just saved!
            </p>
            <form className="" onSubmit={handleSubmit}>
              <div className="md:flex justify-between md:py-5 md:mb-2">
                <div className="md:w-1/2 md:mr-2">
                  <input
                    className="w-full border-b rounded py-2 pl-4"
                    type="text"
                    placeholder="Full Name"
                    name="username"
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className="md:w-1/2 md:ml-2">
                  <input
                    className="w-full border-b rounded py-2 pl-4"
                    type="text"
                    placeholder="Email Address"
                    name="email"
                    onChange={(e) => handleChange(e)}
                  />
                </div>
              </div>
              <div className="mb-4">
                <input
                  className="w-full border-b rounded py-2 pl-4"
                  type="text"
                  placeholder="Password"
                  name="password"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div>
                Creating an account means you are okay with our
                Terms of Service and Privacy Policy
              </div>
              <div>
                <button
                  className="py-3 px-5 text-xl md:text-2xl border w-full mt-5 rounded"
                  type="submit"
                >
                  Create an Account
                </button>
              </div>
            </form>
            <h2 className="my-8 text-xl text-center md:text-left">
              Already have an account ?{' '}
              <Link
                className="primary-color font-bold"
                to="/login"
              >
                Sign In
              </Link>
            </h2>
          </div>
        </div>
        <div className="w-2/5 hidden md:block">
          <img src={signUp} alt="" />
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}
