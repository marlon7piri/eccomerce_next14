import { Inter } from "next/font/google";
import "./globals.css";
import NextAutnProvider from "./client/NextAutnProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pizzas.Hub",
  description: "Las mejores pizzas de Panama",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <NextAutnProvider>
        <body className={inter.className}>{children}</body>
      </NextAutnProvider>
    </html>
  );
}
