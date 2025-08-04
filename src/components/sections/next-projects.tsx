"use client";
import Image from "next/image";
import Button from "@cruzco/components/common/button";
import { Modal } from "@mui/material";
import { useState } from "react";
import SubscriptionForm from "@cruzco/components/subscription-form";

export default function NextProjects() {
  const [open, setOpen] = useState(false);
  return (
    <section className="py-20">
      <div className="container">
        <h3 className="title-3 uppercase first-letter:text-4xl mb-8">
          Nuestros nuevos proyectos
        </h3>
        <div className="md:flex gap-16 items-stretch">
          <div className="rounded-2xl flex items-center justify-center w-72 min-h-[300px] bg-secondary relative">
            <h6 className="title-4 first-letter:text-4xl relative z-10">
              Andalucia
            </h6>
            <Image
              className="opacity-10"
              src="/leaves.png"
              alt="Imagen de bosques del rio"
              fill
            />
          </div>
          <div className="py-8 flex-1">
            <h6 className="title-5 mb-6">Conoce Andalucia</h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
              consequatur debitis doloremque dolores eius eligendi enim est, ex
              expedita maxime molestiae nam odit officiis provident, quo
              reprehenderit sit soluta voluptate. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Accusantium aliquid animi aspernatur
              at autem beatae eos esse excepturi in itaque iure laborum magni,
              quaerat quam quo quod sed vel vitae! Lorem ipsum dolor sit amet,
              consectetur adipisicing excepturi in itaque iure laborum magni.
            </p>
            <Button
              type="button"
              className="mt-10"
              onClick={() => setOpen(true)}
            >
              ¡Quiero acceso anticipado!
            </Button>
            <Modal
              open={open}
              onClose={() => setOpen(false)}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <div className="absolute top-1/2 left-1/2 -translate-1/2 bg-white rounded-2xl p-8">
                <SubscriptionForm />
              </div>
            </Modal>
          </div>
        </div>
      </div>
    </section>
  );
}
