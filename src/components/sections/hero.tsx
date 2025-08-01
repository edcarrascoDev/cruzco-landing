import Image from "next/image";
import Button from "@cruzco/components/common/button";

export default function Hero() {
  return (
    <div style={{ backgroundImage: "url(/pattern.jpg)" }} className="hero">
      <div className="relative z-10 container pt-40 pb-16  text-white">
        <div className="hero__title">
          <h1 className="title-1 mb-2 md:-mb-20 text-shadow-xs uppercase">
            <small>Encuentra tu</small> <br />
            <span>Lugar perfecto</span>
          </h1>
        </div>
        <div className="hero__wrapper">
          <div>
            <p className="max-w-xs w-full flex-1">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
              dolores dolorum illum nemo officiis omnis sed! Corporis cupiditate
              earum et, incidunt ipsum laudantium nesciunt quis, ratione,
              recusandae rerum similique totam!
            </p>
            <Button
              className="max-md:!hidden mt-6"
              href="#contact"
              variant="light"
            >
              Contáctanos
            </Button>
          </div>
          <div className="hero__image">
            <Image
              className="object-contain object-bottom-right rounded-2xl"
              src="/cruzco-hero.jpg"
              alt="Imagen de bosques del rio"
              fill
            />
          </div>
        </div>
        <Button className="md:!hidden mt-6" href="#contact" variant="light">
          Contáctenos
        </Button>
      </div>
      <div className="bg-gradient-to-t from-dark to-transparent h-72 w-full absolute bottom-0 z-0"></div>
    </div>
  );
}
