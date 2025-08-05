import Image from "next/image";
import ContactForm from "@cruzco/components/contact-form";

export default function ContactUs() {
  return (
    <section className="relative bg-white text-black">
      <div className="absolute top-0 left-0 right-0 bottom-0">
        <div className="grid grid-cols-2 gap-8 w-full h-full">
          <div className="w-full h-full relative">
            <Image
              className="w-full h-full object-cover"
              src="/contact-us.jpeg"
              alt="Imagen de bosques del rio"
              fill
            />
          </div>
          <div className="empty" />
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-8 relative z-10">
        <div className="empty" />
        <div className="md:px-10 py-10 md:py-20 max-w-2xl mx-auto">
          <h3 className="title-4 uppercase first-letter:text-4xl mb-8">
            Queremos entender tu visión
          </h3>
          <p>
            Con tus respuestas podremos orientarte con mayor precisión y
            presentarte una propuesta a tu medida.
          </p>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
