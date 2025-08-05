import Image from "next/image";

export default function Footer() {
  return (
    <footer className="pt-20 pb-10">
      <div className="container">
        <div className="flex flex-col items-center gap-8">
          <div className="w-64">
            <Image
              className="mx-auto"
              src="/cruzco-logo.svg"
              alt="Logo Cruzco"
              width={200}
              height={30}
            />
          </div>
          <div className="h-1 bg-white w-10"></div>
          <a target="_blank" href="mailto:cruzoc@gmail.com">
            cruszcoconstuctora@gmail.com
          </a>
          <nav className="flex gap-4 >a:text-white">
            <a target="_blank" href="tel:+573058117424">
              305 8117424
            </a>
            <a target="_blank" href="tel:+573058117424">
              305 8117424
            </a>
          </nav>
          <nav className="flex gap-4">
            <a
              target="_blank"
              className="block bg-white rounded-full p-2 text-center"
              href="https://www.facebook.com/cruzcoconstructora"
            >
              <Image
                src="/facebook-icon.svg"
                alt="facebook de Cruzco"
                width={20}
                height={20}
              />
            </a>
            <a
              className="block bg-white rounded-full p-2 text-center"
              target="_blank"
              href="https://www.instagram.com/cruzcoconstructora/"
            >
              <Image
                src="/instagram-icon.svg"
                alt="instagram de Cruzco"
                width={20}
                height={20}
              />
            </a>
            <a
              className="block bg-white rounded-full p-2 text-center"
              target="_blank"
              href="https://www.instagram.com/cruzcoconstructora/"
            >
              <Image
                src="/whatsapp-icon.svg"
                alt="whatsapp de Cruzco"
                width={20}
                height={20}
              />
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
