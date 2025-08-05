"use client";
import { useFormik } from "formik";
import * as Yup from "yup";
import { TextField } from "@mui/material";
import Button from "@cruzco/components/common/button";

export default function SubscriptionForm() {
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("Este campo es requerido"),
    lastName: Yup.string().required("Este campo es requerido"),
    email: Yup.string()
      .email("Correo electrónico invalido")
      .required("Este campo es requerido"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      firstName: "",
      lastName: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <h3 className="title-3 text-dark">Acceso anticipado exclusivo</h3>
      <p className="text-dark mb-6">
        Queremos que seas de las primeras personas en conocer nuestro proyecto.
        Déjanos tus datos y te mantendremos al tanto de cada novedad.
      </p>
      <div className="grid md:grid-cols-2 gap-6">
        <TextField
          name="firstName"
          label="Nombre"
          variant="outlined"
          fullWidth
          onChange={formik.handleChange}
          error={formik.touched.firstName && Boolean(formik.errors.firstName)}
          helperText={formik.touched.firstName && formik.errors.firstName}
        />
        <TextField
          name="lastName"
          label="Apellido"
          variant="outlined"
          fullWidth
          onChange={formik.handleChange}
          error={formik.touched.firstName && Boolean(formik.errors.firstName)}
          helperText={formik.touched.firstName && formik.errors.firstName}
        />
        <TextField
          className="md:col-span-2"
          name="email"
          label="Correo electrónico"
          variant="outlined"
          fullWidth
          onChange={formik.handleChange}
          error={formik.touched.firstName && Boolean(formik.errors.firstName)}
          helperText={formik.touched.firstName && formik.errors.firstName}
        />
        <Button variant="dark" type="submit" className="md:col-span-2">
          Subcribirme
        </Button>
      </div>
    </form>
  );
}
