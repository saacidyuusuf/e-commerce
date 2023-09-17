This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```
//secret key: sk_test_51NnLXdHahUokiXyYPBdjbam6RXcA6GaXv8Re7fONJRXqplPVyZqppmoTzaQFQSFer4x3lDBHDU3fW7lcCLT7hWA600vEzkubwB
// maandeeq: price_1NnLdDHahUokiXyYyvDhdUcc
// cabdulahi: price_1NnLetHahUokiXyYrs8ILgPP
// samiiro: price_1NnLg0HahUokiXyYwxGxZtBt

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

const insertData = async () => {
    const { data, error } = await supabase.from("Product").insert([
      {
        img: forniture1,
        desc: "Poland Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur animi impedit iste nemo! Ut, nam? Quos maiores suscipit repellendus accusantium ",
        name: "poland",
        price: 13,
      },
      {
        img: forniture2,
        desc: "italian Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur animi impedit iste nemo! Ut, nam? Quos maiores suscipit repellendus accusantium",
        name: "italian",
        price: 10,
      },
      {
        img: forniture3,
        desc: "italian Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur animi impedit iste nemo! Ut, nam? Quos maiores suscipit repellendus accusantium",
        name: "italian",
        price: 22,
      },
      {
        img: forniture4,
        desc: "spanish Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur animi impedit iste nemo! Ut, nam? Quos maiores suscipit repellendus accusantium",
        name: "spanish",
        price: 8,
      },
    ]);
    if (error) {
      console.error(error);
    } else {
      console.log(data,'success');
    }
  };



   const checkout = async () => {
    await fetch("/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ items: products}),
    })
      .then((res) => {
        if (res.ok) return res.json();
        return res.json().then((json) => Promise.reject(json));
      })
      .then(({ url }) => {
        window.location.assign(url);
      })
      .catch((e) => {
        console.log(e.error);
      });
  };

  The resource http://localhost:3000/_next/static/css/app/layout.css?v=1694616571891 was preloaded using link preload but not used within a few seconds from the window's load event. Please make sure it has an appropriate `as` value and it is preloaded intentionally.


  
 import Link from "next/link";
import { motion } from "framer-motion";
import { FaShoppingCart } from "react-icons/fa";
import { useContext, useState } from "react";
import { GlobalContextcreated } from "../context/GlobalContext";

const Header = () => {
  const [mobile, setMobile] = useState(false);
  const { totalclothes } = useContext(GlobalContextcreated);

  return (
    <>
      <motion.header>
        <motion.nav className="header">
          <div
            className={`navmenu ${mobile ? 'slide' : ''}`}
          >
            <div className="menuone"></div>
            <div className="menutwo"></div>
            <div className="menuthree"></div>
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
            onClick={() => setMobile(!mobile)}
          >
            <div className="menuone"></div>
            <div className="menutwo"></div>
            <div className="menuthree"></div>
          </div>
          <div className="searchlogo">
            <Link className="logo" href="/">
              BaxarStore
            </Link>
          </div>
        </motion.nav>
      </motion.header>
    </>
  );
};

export default Header;




 const [loading, setLoading] = useState(false);

  const checkout = async () => {
    setLoading(true);
    const response = await fetch('/api/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ products }),
    });
    if (!response.ok) {
      console.error('Checkout request failed:', response);
      setLoading(false);
      return;
    }
    try {
      const data = await response.json();
      const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
      await stripe.redirectToCheckout({ sessionId: data.id });
    } catch (error) {
      console.error('Failed to parse response as JSON:', error);
      setLoading(false);
    }
  };




