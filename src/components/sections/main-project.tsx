import Image from "next/image";
import GallerySlider from "@cruzco/components/gallery-slider";
const features = [
  {
    value: "200m²",
    label: "Areas desde",
  },
  {
    value: "17",
    label: "Lotes disponibles",
  },
  {
    value: "$220M",
    label: "Precios desde",
  },
];

export default function MainProject() {
  return (
    <section className="py-16 md:py-20 bg-black/60">
      <div className="container">
        <h3 className="title-3 uppercase first-letter:text-4xl mb-8">
          Bosques del Rio Arbelaez
        </h3>
        <div className="md:flex gap-8">
          <div className="flex-1">
            <Image
              className="rounded-2xl"
              src="/bra_house.jpeg"
              alt="Imagen de casa bosques del rio"
              width={800}
              height={500}
            />
          </div>
          <div className="min-w-56 flex md:flex-col gap-4 justify-between">
            {features.map((feature, index) => (
              <div key={index} className="py-2 max-md:text-center">
                <h6 className="title-6 text-primary max-sm:!text-xs">
                  {feature.label}
                </h6>
                <h5 className="title-1 max-sm:!text-3xl">{feature.value}</h5>
              </div>
            ))}
          </div>
        </div>
        <div className="md:flex gap-8 mt-4 md:my-10">
          <div className="flex-1">
            <p>
              Bosques del Río es un exclusivo condominio campestre ubicado en
              Arbelaez, que ofrece una propuesta única de conexión con la
              naturaleza sin renunciar al confort. El proyecto cuenta con lotes
              campestres rodeados de una reserva natural, ideales para construir
              la casa de tus sueños. Puedes adquirir solo el lote o contratar a
              Cruzco Constructora para desarrollar tu vivienda con altos
              estándares de calidad, diseño y respeto por el entorno. Es el
              lugar perfecto para invertir con confianza y vivir con
              tranquilidad, rodeado de aire puro, zonas verdes y un ambiente que
              invita al descanso, la armonía y el bienestar.
            </p>
          </div>
          <div className="min-w-56 flex md:flex-col gap-4 justify-between"></div>
        </div>
        <h6 className="title-4 uppercase text-primary font-bold mb-6">
          Nuestras zonas sociales
        </h6>
      </div>
      <GallerySlider />
    </section>
  );
}
