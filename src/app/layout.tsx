import Submenu from "@/components/Submenu/Submenu";
import "./globals.css";
import { Inter, Quicksand, Roboto } from "next/font/google";
import Menu from "@/components/Menu/Menu";

const inter = Inter({ subsets: ["latin"] });
const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
});
const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
});

export const metadata = {
  title: "Missa Cifras",
  description: "Site de música católica",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body
        className={`${inter.className} ${quicksand.variable} ${roboto.variable}`}
      >
        <Menu />
        <Submenu />
        {children}
      </body>
    </html>
  );
}
