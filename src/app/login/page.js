"use client";
import Header from "../components/Header";
import { useAuth0 } from "@auth0/auth0-react";
import BoxReveal from "../components/magicui/box-reveal";
import { Button } from "../components/ui/button";
import AnimatedBeamMultipleInputDemo from "../beam";
import BiBeamDemo from "../biline";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  const onExecutePostLogin = async (event, api) => {
    api.redirect.sendUserTo("http://localhost:3000/dashboard");
  };
  return (
    <>
      <Header />
      <div className="max-w-5xl mx-auto flex justify-center px-3 mt-20 lg:mt-40">
        <div className="max-w-[32rem] overflow-hidden">
          <BoxReveal boxColor={"#5046e6"} duration={0.3}>
            <p className="text-[3.5rem] font-semibold">
              School Flow<span className="text-[#]">.</span>
            </p>
          </BoxReveal>

          <BoxReveal boxColor={"#5046e6"} duration={0.3}>
            <h2 className="mt-[.5rem] text-[1rem]">
              A School management System for{" "}
              <span className="text-[#]">Schools.</span>
            </h2>
          </BoxReveal>

          <BoxReveal boxColor={"#5046e6"} duration={0.3}>
            <div className="mt-[1.5rem]">
              <div>
                Experience a new era of school administration with SchoolFlow.
                We're dedicated to providing you with a comprehensive,
                user-friendly, and efficient solution that makes managing your
                educational institution a breeze.
                <li className="font-semibold text-[#5046e6]">
                  {" "}
                  Real-Time Gradebook
                </li>
                <li className="font-semibold text-[#5046e6]">
                  {" "}
                  Security and Privacy
                </li>
                <li className="font-semibold text-[#5046e6]">
                  {" "}
                  Data-Driven Insights
                </li>
                <li className="font-semibold text-[#5046e6]">
                  {" "}
                  Performance Analytics
                </li>
                <li className="font-semibold text-[#5046e6]">
                  {" "}
                  Progress Tracking
                </li>
              </div>
            </div>
          </BoxReveal>

          <BoxReveal boxColor={"#5046e6"} duration={0.3}>
            <div className="max-w-4xl">
              <div className=" mx-auto flex flex-col justify-centers">
                <div className="flex sm:hidden mx-auto w-[22rem]">
                  <BiBeamDemo />
                </div>
                <Button
                  onClick={() => loginWithRedirect()}
                  className="mt-[1.6rem] bg-[#5046e6] rounded-full w-[20rem] mx-auto font-bold sm:px-40"
                >
                  Log In
                </Button>
              </div>
            </div>
          </BoxReveal>
        </div>
        <div className="w-[30rem] mx-auto ml-6 hidden lg:flex">
          <AnimatedBeamMultipleInputDemo />
        </div>
      </div>
    </>
  );
};

export default LoginButton;
