import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ramzi Benchadi Official Website",
  description: "Web Developer, Software Engineer, and Open Source Contributor, Ramzi Benchadi's personal website, blog, and portfolio, built with Next.js and Tailwind CSS, MERN stack Developer, Next JS Developer, React Native Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/me.jpg" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.1/flowbite.min.css" rel="stylesheet" />
      </head>

      <body className={inter.className}>
        {children}
      
        <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.1/flowbite.min.js"></script>
  
      </body>
    </html>
  );
}
