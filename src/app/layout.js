import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/Components/Header";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shofy",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          <Header/>
        </div>
        <div>
          {children}
        </div>

        </body>
    </html>
  );
}
