"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaShoppingCart } from "react-icons/fa";
import { useContext, useState } from "react";
import { GlobalContextcreated } from "../context/GlobalContext";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = ({ user }) => {
  const [mobile, setmobile] = useState(false);
  const { totalclothes } = useContext(GlobalContextcreated);

  return (
    <>
      <div className="header">
        <Link className="logo" href="/">
          Baxar<span className="coder">Flow</span>
        </Link>
        <div className="navmenu">
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/store">Store</Link>
            </li>
            <li>
              <Link href="/Contact">Contact</Link>
            </li>
          </ul>
          {!user ? (
            <Link href="/Auth" className="signup">
              Sign Up
            </Link>
          ) : (
            <div className="cartBox">
              <Link className="visible" href="/SoldingItems">
                <span className="badge">{totalclothes}</span>
                <FaShoppingCart className="cart" />
              </Link>
            </div>
          )}
        </div>
        <div
          className={mobile === true ? "menu" : "menu"}
          onClick={() => setmobile(!mobile)}
        >
          <FaBars />
        </div>
      </div>

      {mobile && (
        <div className="mobile">
          <motion.nav className="navheader">
            <div className="navmenuMobile">
              <ul>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/store">Store</Link>
                </li>
                <li>
                  <Link href="/Contact">Contact</Link>
                </li>
                {!user ? (
                  <Link href="/Auth" className="signup">
                    <li>Sign Up</li>
                  </Link>
                ) : (
                  <div className="cartBox">
                    <Link className="visible" href="/SoldingItems">
                      <span className="badge">{totalclothes}</span>
                      <FaShoppingCart className="cart" />
                    </Link>
                  </div>
                )}
              </ul>
            </div>
          </motion.nav>
        </div>
      )}
    </>
  );
};

export default Header;
