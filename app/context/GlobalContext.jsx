/* eslint-disable */
"use client";
import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import { image1, image5, image2, image4, image3 } from "../assets/images/index";

const initialcontext = {
  dharbadan: [
   /*  {
      id: 1,
      category: "Dhar Nin",
      name: "Cabdulahi",
      desc: "dhar Maandeeq Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium, commodi laudantium possimus qui omnis porro nesciunt sapiente aliquam ex magni? ",
      price: 15.25,
      img: image1,
    }, */
  ],
  totalclothes: 0,
};

export const GlobalContextcreated = createContext(initialcontext);

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialcontext);

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
        isadded
      }}
    >
      {children}
    </GlobalContextcreated.Provider>
  );
};

export default ContextProvider;
