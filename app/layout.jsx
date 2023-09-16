import "./globals.css";
import { Space_Grotesk } from "next/font/google";
import ContextProvider from "./context/GlobalContext";
import Header from "./components/Header";


const lato = Space_Grotesk({
  weight: ["300", "700"],
  subsets: ["latin"],
});
/* Rubik look good Kanit to Space_Grotesk to*/

export const metadata = {
  title: "BaxarCoder",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={lato.className}>
          <ContextProvider>
            <Header />
            <main className="container">{children}</main>
          </ContextProvider>
      </body>
    </html>
  );
}
