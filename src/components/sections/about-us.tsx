import Image from "next/image";

export default function AboutUs() {
  return (
    <section id="about" className="py-16 md:py-30 md:mt-20">
      <div className="container">
        <div className="flex max-md:flex-col-reverse gap-8">
          <div className="relative w-auto flex-1">
            <Image
              className="rounded-2xl"
              src="/about-us.jpg"
              alt="Imagen de bosques del rio"
              width={800}
              height={800}
            />
            <div className="absolute bottom-3 -left-5 font-title font-bold text-lg uppercase ">
              <h6 className="inline bg-primary box-decoration-clone px-2 py-2">
                Diseñamos espacios <br />
                que conectan con la vida.
              </h6>
            </div>
          </div>
          <div className="md:w-72 md:pt-6">
            <h3 className="title-4 text-primary uppercase first-letter:text-4xl">
              Nosotros
            </h3>
            <p>
              En Cruzco Constructora diseñamos y desarrollamos proyectos que
              respetan el entorno y mejoran la calidad de vida. Nuestro
              compromiso es construir espacios sostenibles, funcionales y en
              armonía con la naturaleza, como lo demuestra nuestro proyecto
              insignia: Bosques del Río.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
