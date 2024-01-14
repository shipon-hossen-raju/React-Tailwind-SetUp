import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthLoading from "../../Components/Loading/AuthLoading";
import loginImg from "../../assets/Authentication/login-image.png";
import useUser from "../../hooks/useUser";
import Login from "./Login";
import SignUp from "./SignUp";

const Authentication = () => {
  const [loading, setLoading] = useState(false);
  const [userState, setUserState] = useState("signUp");
  const navigate = useNavigate();
  const { user } = useUser();

  useEffect(() => {
    user?.email && navigate("/");
  }, [user]);

  return (
    <>
      <div className="py-16">
        {loading ? (
          <AuthLoading />
        ) : (
          <div className="md:flex gap-20 h-screen w-full md:max-h-[90vh] justify-between items-center relative">
            <div className="md:flex-grow bg-[#c7e0e5] h-full md:h-[90vh]">
              <figure className="h-full">
                <img
                  className="bg-cover object-cover h-full"
                  src={loginImg}
                  alt="authentication"
                />
              </figure>
            </div>

            <div className="w-[350px] md:mr-10 lg:mr-20 absolute md:static top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:translate-x-0 md:translate-y-0 backdrop-blur-md py-4 px-2 text-center md:text-left">
              {userState === "signUp" ? (
                <SignUp setState={setUserState} setLoading={setLoading} />
              ) : (
                <Login setState={setUserState} setLoading={setLoading} />
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Authentication;
