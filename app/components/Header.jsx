"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { navVariants } from "../utilist/motion";
import { FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";
import { GlobalContextcreated } from "../context/GlobalContext";


const Header = () => {
  const {totalclothes} = useContext(GlobalContextcreated)

  return (
    <motion.header>
      <motion.nav
        variants={navVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="header"
      >
        <Link className="logo" href="/">
          BaxarStore
        </Link>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/collection">Collection</Link>
          </li>
          <li>
            <Link href="/Team">Team</Link>
          </li>
        </ul>
          <Link href="/SoldingItems">
            <span className="badge">{totalclothes}</span>
            <FaShoppingCart className="cart"/>
          </Link>
      </motion.nav>
    </motion.header>
  );
};

export default Header;
