import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
// import Input from "../../Components/Input";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import ButtonPrimary from "../../Components/Buttons/ButtonPrimary";
import Input from "../../Components/Inputs/Input";

export default function Login({ setState, setLoading }) {
  const { axiosSecure } = useAxiosSecure();
  const navigate = useNavigate();
  const [inputData, setInputData] = useState({
    email: "",
    password: "",
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
      email: inputData?.email,
      password: inputData?.password,
    };

    axiosSecure
      .post(`/auth/login`, userData)
      .then(({ data }) => {
        // console.log("result ", data?.data);
        localStorage.setItem(
          "authUser",
          JSON.stringify({
            ...data?.data,
          })
        );
        toast.success("Account Create Successful!");
        navigate("/");
        window.location.reload();
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
          Log in to Exclusive
        </h1>
        <p className="text-sm font-inter font-normal">
          Enter Your details below
        </p>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <Input
              type="email"
              name="email"
              placeholder="Email or Phon Number"
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
              <span> Login in </span>
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
          I don't have an account?{" "}
          <a
            onClick={() => setState("signUp")}
            className="text-primary hover:underline cursor-pointer"
          >
            {" "}
            Sign Up?{" "}
          </a>
        </p>
      </div>
    </>
  );
}
