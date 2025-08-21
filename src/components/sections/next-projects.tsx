import Image from "next/image";
import Button from "@cruzco/components/common/button";

export default function NextProjects() {
  return (
    <section id="nextProjects" className="py-20">
      <div className="container">
        <h3 className="title-3 uppercase first-letter:text-4xl mb-8">
          Nuestros nuevos proyectos
        </h3>
        <div className="md:flex gap-16 items-stretch">
          <div className="rounded-2xl flex items-center justify-center w-72 min-h-[300px] bg-secondary relative">
            <h6 className="title-4 first-letter:text-4xl relative z-10">
              Andalucía
            </h6>
            <Image
              className="opacity-10"
              src="/leaves.png"
              alt="Imagen de bosques del rio"
              fill
            />
          </div>
          <div className="py-8 flex-1">
            <h6 className="title-5 mb-6">Conoce Andalucía</h6>
            <p>
              Bienvenido a Andalucía, un proyecto <b>agroliving</b> en
              Sabanalarga, Casanare, diseñado para quienes sueñan con una vida
              en armonía con la naturaleza. Con <b>121 lotes</b> disponibles, de{" "}
              <b>2.000 a 3.600 m2</b>, ofrecemos el espacio ideal para construir
              tu hogar. Ubicado en la vereda San Pedro, este paraíso sostenible
              prioriza las <b>energías renovables</b>, garantizando un futuro
              verde y autosuficiente. Disfruta de la tranquilidad del campo sin
              renunciar a la modernidad.
            </p>
            <Button
              href="/documents/loteo_andalucia.pdf"
              target="_blank"
              className="mt-10"
            >
              Ver loteo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
