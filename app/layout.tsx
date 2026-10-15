import type { Metadata, Viewport } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AVENOR 10X — Every Sale. Accounted For. | Software & Technology Services",
  description:
    "AVENOR 10X is an independent technology company founded in 2026. We build custom software applications, automate business processes, craft intuitive UI/UX, and provide strategic IT consulting.",
  keywords: [
    "AVENOR 10X",
    "Software Development",
    "Business Process Automation",
    "UI/UX Design",
    "IT Consulting",
    "Sales and Inventory Management",
    "Technology Company 2026",
  ],
  authors: [{ name: "AVENOR 10X" }],
  creator: "AVENOR 10X",
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://avenor10x.com",
    title: "AVENOR 10X — Building Smarter Systems for Business",
    description:
      "Independent technology company founded in 2026. Practical software development, workflow automation, UI/UX design, and IT consulting.",
    siteName: "AVENOR 10X",
  },
  twitter: {
    card: "summary_large_image",
    title: "AVENOR 10X — Building Smarter Systems for Business",
    description:
      "Independent technology company founded in 2026. Practical software development, workflow automation, UI/UX design, and IT consulting.",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${outfit.variable} h-full antialiased`}>
      <head>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
      </head>
      <body className="min-h-full flex flex-col bg-black text-white selection:bg-white selection:text-black">
        {children}
      </body>
    </html>
  );
}
