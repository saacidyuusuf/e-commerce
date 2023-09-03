"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";
import { GlobalContextcreated } from "../context/GlobalContext";
import SearchClothes from "./SearchClothes";

const Header = () => {
  const {totalclothes } = useContext(GlobalContextcreated);

  return (
    <motion.header>
      <motion.nav
        className="header"
      >
        <div className="searchlogo">
          <Link className="logo" href="/">
            BaxarStore
          </Link>
        </div>
        <div className="liCart">
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/store">Store</Link>
            </li>
            <li>
              <Link href="/Team">Team</Link>
            </li>
          </ul>
          <Link href="/SoldingItems">
            <span className="badge">
              {totalclothes}
            </span>
            <FaShoppingCart className="cart" />
          </Link>
        </div>
      </motion.nav>
    </motion.header>
  );
};

export default Header;
