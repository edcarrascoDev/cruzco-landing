import Image from "next/image";
import MobileNav from "@cruzco/components/mobile-nav";

export default function Header() {
  const links: { name: string; href: string }[] = [
    { name: "Nosotros", href: "#about" },
    { name: "Bosques del Rio", href: "#mainProject" },
    { name: "Próximos proyectos", href: "#nextProjects" },
    { name: "Contáctanos", href: "#contact" },
  ];

  return (
    <header className="absolute top-0 left-0 right-0 py-2 md:py-5 z-30">
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="w-52">
            <Image
              src="/cruzco-logo.svg"
              className="w-auto max-h-8"
              alt="Cruzco Logo"
              width={100}
              height={10}
            />
          </div>
          <nav className="flex items-center gap-3">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="max-md:hidden text-white font-medium"
              >
                {link.name}
              </a>
            ))}
            <MobileNav className="md:hidden">
              {links.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="block py-3 text-lg pl-6 pr-20 font-medium border-b border-gray-200"
                >
                  {link.name}
                </a>
              ))}
            </MobileNav>
          </nav>
        </div>
      </div>
    </header>
  );
}
