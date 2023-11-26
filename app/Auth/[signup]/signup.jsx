'use client'
import React from "react";
import { useContext } from "react";
import { GlobalContextcreated } from "@/app/context/GlobalContext";

const SignUpLink = () => {
  const { email, password, setEmail, setPassword, handleSignUp } =
    useContext(GlobalContextcreated);

  return (
    <div className="signUpContext">
      <h1>Sign Up</h1>
      <form onSubmit={handleSignUp}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpLink;













/* import { useState } from "react";
import supabase from "../components/supebase";
import { useContext } from "react";
import { GlobalContextcreated } from "../context/GlobalContext";

export default function SignUp({setuser}) {
  /*   const [user, setuser] = useState(false);
  
  const {email, password} = useContext(GlobalContextcreated)

  

  return <></>;
}
 */