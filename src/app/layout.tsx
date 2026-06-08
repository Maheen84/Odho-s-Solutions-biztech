import type { Metadata } from "next";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import "../index.css";

export const metadata: Metadata = {
  title: "Odho's Solutions | Digital Agency - Web Design, Development & Marketing",
  description: "Odho's Solutions is a full-service digital agency offering web design, development, CRM, AI automation, SEO, and branding services. Elevating your digital presence since 2010.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="relative flex flex-col min-h-screen overflow-x-hidden">
          <Navbar />
          <main className="flex-grow relative z-10">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
