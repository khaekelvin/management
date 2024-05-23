"use client";
import Header from "../components/Header";
import Logo from "../components/Logo";
import { FaHubspot } from "react-icons/fa";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "../logout/page";


const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  const onExecutePostLogin = async (event, api) => {
    api.redirect.sendUserTo("http://localhost:3000/dashboard");
  };
  return(
  <>
  <Header/>
  <div className="max-w-5xl mx-auto">  
  <LogoutButton/>
  <button onClick={() => loginWithRedirect()}>Log In</button>  
  </div> 
  </>
  );
};


export default LoginButton;
