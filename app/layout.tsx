import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

// Poppins matches the template's look
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Muhammad Haris | Computer Science Student – AI, Cybersecurity & Web Development",
  description:
    "Portfolio of Muhammad Haris, a Computer Science student building AI, cybersecurity and web projects such as Custos AI, Convertify Pro and Enhance Me.",
  openGraph: {
    title: "Muhammad Haris | Portfolio",
    description: "Computer Science student focused on AI, Cybersecurity and Web Development.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}