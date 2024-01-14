import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
// import Input from "../../Components/Input";
import ButtonPrimary from "../../Components/Buttons/ButtonPrimary";
import Input from "../../Components/Inputs/Input";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const serverURL = `http://localhost:3000`;

export default function SignUp({ setState, setLoading }) {
  const { axiosSecure } = useAxiosSecure();
  const navigate = useNavigate();
  const [inputData, setInputData] = useState({
    email: "",
    password: "",
    name: "",
  });

  const handleInputData = (e) => {
    setInputData({
      ...inputData,
      [e.name]: e.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const userData = {
      name: inputData?.name,
      email: inputData?.email,
      password: inputData?.password,
    };

    axiosSecure
      .post(`/auth/register`, userData)
      .then(({ data }) => {
        console.log("result ", data?.data);
        localStorage.setItem(
          "authUser",
          JSON.stringify({
            ...data?.data,
          })
        );
        toast.success("Account Create Successful!");
        navigate("/");
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        toast.error("Something Wrong!");
        console.log("error ", err);
      });
  };

  return (
    <>
      <div className="space-y-4">
        <h1 className="font-inter text-2xl md:text-3xl lg:text-4xl font-medium">
          Create an account
        </h1>
        <p className="text-sm font-inter font-normal">
          Enter Your details below
        </p>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <Input
              name="name"
              placeholder="Full Name "
              handle={handleInputData}
            />
          </div>

          <div>
            <Input
              name="email"
              type="email"
              placeholder="Write your Email "
              handle={handleInputData}
            />
          </div>

          <div>
            <Input
              name="password"
              type="password"
              placeholder="Password"
              handle={handleInputData}
            />
          </div>

          <div className="flex flex-col-reverse md:flex-row gap-3 items-center justify-between">
            <ButtonPrimary type="submit">
              <span> Create Account </span>
            </ButtonPrimary>

            <a
              className="text-base text-primary hover:underline capitalize"
              href="#"
            >
              forget password
            </a>
          </div>
        </form>
        <p>
          {" "}
          Already have account?{" "}
          <a
            onClick={() => setState("login")}
            className="text-primary hover:underline cursor-pointer"
          >
            {" "}
            log in?{" "}
          </a>
        </p>
      </div>
    </>
  );
}
