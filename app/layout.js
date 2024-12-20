import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Sagar Karmoker Portfolio",
  description: "Official Portfolio of Sagar Karmoker ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="inter"
      >
        {children}
      </body>
    </html>
  );
}
