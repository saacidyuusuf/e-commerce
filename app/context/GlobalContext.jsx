/* eslint-disable */
"use client";
import { createContext, useReducer, useState } from "react";
import AppReducer from "./AppReducer";

const initialcontext = {
  dharbadan: [],
  totalclothes: 0,
};

export const GlobalContextcreated = createContext(initialcontext);

const ContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
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
        isadded,
        products,
        setProducts
      }}
    >
      {children}
    </GlobalContextcreated.Provider>
  );
};

export default ContextProvider;
