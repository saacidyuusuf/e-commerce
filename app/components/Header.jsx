"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaShoppingCart } from "react-icons/fa";
import { useContext, useState } from "react";
import { GlobalContextcreated } from "../context/GlobalContext";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [mobile, setmobile] = useState(false);
  const { totalclothes, User } = useContext(GlobalContextcreated);

  return (
    <>
      <div className="header">
          <div className="searchlogo">
            <Link className="logo" href="/">
              Baxar<span className="coder">Coder</span>
            </Link>
          </div>
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
            {User ? (
              <Link href="/Auth/signup/signup" className="signup">
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
            onClick={() => setmobile(true)}
          >
            <FaBars  />
          </div>
      </div>

      {mobile && (
        <div className="mobile">
          <motion.nav className="navheader">
            <div className="navmenuMobile">
              <div onClick={() => setmobile(false)}>
                <FaTimes className="close" />
              </div>
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
              {User ? (
                <Link href="/Auth/signup/signup" className="signup">
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
          </motion.nav>
        </div>
      )}
    </>
  );
};

export default Header;
