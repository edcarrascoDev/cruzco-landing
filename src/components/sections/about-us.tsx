import Image from "next/image";

export default function AboutUs() {
  return (
    <section className="py-16 md:py-30 md:mt-20">
      <div className="container">
        <div className="flex max-md:flex-col-reverse gap-8">
          <div className="relative w-auto flex-1">
            <Image
              className="rounded-2xl"
              src="/cruzco-hero.jpg"
              alt="Imagen de bosques del rio"
              width={500}
              height={500}
            />
            <div className="absolute bottom-3 -left-5 font-title font-bold text-lg uppercase ">
              <h6 className="inline bg-primary box-decoration-clone px-2 py-2">
                Aquí va una frase <br />
                interesante, <br />
                que resalte muy bien
              </h6>
            </div>
          </div>
          <div className="w-64 md:pt-6">
            <h3 className="title-4 text-primary uppercase first-letter:text-4xl">Nosotros</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
              cum ducimus ea earum impedit, magni nam nisi non nulla odit
              officia quaerat quam qui repudiandae sequi veniam voluptate.
              Incidunt, temporibus.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
