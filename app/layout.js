import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Power Of",
  description: `POWER OF was established in Jeddah - Saudi Arabia, and is among
the leading companies in Saudi Arabia that provide services and
products for fire protection systems, fire alarms, firefighting equipment
and security and safety engineering systems. POWER OF has a team of
engineers and technicians, professionally trained and qualified, working
on our commitment to providing our expertise to our customers in
protecting life, the environment and property.`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>{children}</main>
      </body>
    </html>
  );
}
