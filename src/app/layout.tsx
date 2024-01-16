import type { Metadata } from "next";
import { Red_Hat_Display } from "next/font/google";
import "./globals.css";

const Red_Hat = Red_Hat_Display({
  weight: ["400", "700"],
  display: "swap",
  subsets: ["latin"],
  variable: "---red-hat-display",
});

export const metadata: Metadata = {
  title: "Varos",
  description: "Teste tecnico",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={Red_Hat.variable}>
      <body className="bg-[#131313] min-h-screen">{children}</body>
    </html>
  );
}
