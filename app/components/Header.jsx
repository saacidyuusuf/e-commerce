"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaShoppingCart } from "react-icons/fa";
import { useContext, useState } from "react";
import { GlobalContextcreated } from "../context/GlobalContext";
import Nav from "./Nav";
const Header = () => {
  const [mobile, setmobile] = useState(false);
  const { totalclothes } = useContext(GlobalContextcreated);

  return (
    <>
      <motion.header>
        <motion.nav className="header">
          <div className="searchlogo">
            <Link className="logo" href="/">
              BaxarStore
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
            <Link className="visible" href="/SoldingItems">
              <span className="badge">{totalclothes}</span>
              <FaShoppingCart className="cart" />
            </Link>
          </div>
          <div
            className={mobile !== true ? "menu" : "close navmenu slide"}
            onClick={() => setmobile(!mobile)}>
            <div className="menuone"></div>
            <div className="menutwo"></div>
            <div className="menuthree"></div>
          </div>
        </motion.nav>
      </motion.header>
    </>
  );
};

export default Header;
