import Image from "next/image";
import Navbar from "@/components/Navbar";
import { Cinzel, Montserrat } from "next/font/google";

const cinzel = Cinzel({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col relative">
      <Image
        src="/images/image-bg.jpg"
        alt="Background"
        fill
        priority
        quality={100}
        style={{
          objectFit: 'cover',
          objectPosition: 'center',
          zIndex: -1
        }}
      />
      <Navbar
        items={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "Contact", href: "/contact" },
          { label: "Wardrobe", href: "/wardrobe" },
        ]}
      />
      <div className="flex-grow flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className={`${cinzel.className} text-6xl sm:text-8xl font-bold mb-4`}>
            VELUXE
          </h1>
          <h2 className={`${cinzel.className} text-3xl sm:text-5xl font-bold`}>
            VALUE IN EVERY VOGUE
          </h2>
        </div>
      </div>
    </div>
  );
}
