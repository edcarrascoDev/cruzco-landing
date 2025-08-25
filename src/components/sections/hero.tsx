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
              Bosques del Río en Arbeláez, el proyecto estrella de Cruzco
              Constructora, es un condominio construido que integra una reserva
              natural, permitiéndote vivir rodeado de aire puro, paisajes verdes
              y tranquilidad, sin renunciar al confort.
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
            <div className="w-full h-full">
              <Image
                className="object-cover object-bottom-right rounded-2xl w-full h-full"
                src="/bra_house.jpeg"
                alt="Imagen de bosques del rio"
                priority
                width={624}
                height={400}
              />
            </div>
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
