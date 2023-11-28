/* eslint-disable */
"use client";
import { createContext, useReducer, useState } from "react";
import AppReducer from "./AppReducer";
import supabase from "../components/supebase";
import { useRouter } from "next/navigation";

const initialcontext = {
  dharbadan: [],
  totalclothes: 0,
};

export const GlobalContextcreated = createContext(initialcontext);

const ContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [state, dispatch] = useReducer(AppReducer, initialcontext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [User, setUser] = useState(null);
  const router = useRouter();

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const { user, error } = await supabase.auth.signUp({
        email: email,
        password: password,
      });
      if (error) {
        console.error("Sign-up error:", error);
      } else {
        setUser(user);
        router.push("/");
        console.log("Sign-up successful:", user);
      }
    } catch (error) {
      console.error("Sign-up error:", error);
    }
  };

  const addClothes = (dharbadan) => {
    dispatch({
      type: "add",
      payload: dharbadan,
    });
  };
  const removeClothes = (id) => {
    dispatch({
      type: "remove",
      payload: id,
    });
  };

  const isadded = (id) => {
    dispatch({
      type: "isadded",
      payload: id,
    });
  };

  return (
    <GlobalContextcreated.Provider
      value={{
        dharbadan: state.dharbadan,
        totalclothes: state.dharbadan.length,
        removeClothes,
        addClothes,
        isadded,
        products,
        setProducts,
        email,
        setEmail,
        password,
        setPassword,
        handleSignUp,
        User,
      }}
    >
      {children}
    </GlobalContextcreated.Provider>
  );
};

export default ContextProvider;
