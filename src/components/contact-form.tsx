"use client";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Alert,
  CircularProgress,
} from "@mui/material";
import Button from "@cruzco/components/common/button";
import { useState } from "react";
const budgetRanges = [
  "$100'000.000 - $200.000.000",
  "$200.000.000 - $300.000.000",
  "$300.000.000 - $400.000.000",
  "$400.000.000 - $500.000.000",
  "$500.000.000 - $600.000.000",
  "Más de $600.000.000",
];

const lotSizeOptions = [
  "2000 – 2500 m²",
  "2501 – 3000 m²",
  "3001 – 3500 m²",
  "3501 – 4000 m²",
  "4001 – 4500 m²",
  "4501 – 5000 m²",
  "5001 – 6400 m²",
];

export default function ContactForm() {
  const [formMessage, setFormMessage] = useState<string | null>(null);
  const [isError, setIsError] = useState(false);

  const validationSchema = Yup.object().shape({
    firstname: Yup.string().required("Este campo es requerido"),
    lastname: Yup.string().required("Este campo es requerido"),
    budget_client: Yup.string().required("Seleccione por lo menos una opción"),
    desiredLotSize: Yup.string().required("Seleccione por lo menos una opción"),
    project: Yup.string().required("Seleccione por lo menos una opción"),
    email: Yup.string()
      .email("Correo electrónico invalido")
      .required("Este campo es requerido"),
    phone: Yup.string()
      .matches(/^(3\d{9})$/, "El número de celular debe tener 10 dígitos")
      .required("Este campo es requerido"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      firstname: "",
      lastname: "",
      phone: "",
      budget_client: "",
      desiredLotSize: "",
      project: "",
    },
    validateOnBlur: true,
    validateOnChange: true,
    validationSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      setFormMessage(null);
      setIsError(false);
      setSubmitting(true);

      const context = {
        pageUri: window.location.href,
        pageName: document.title,
      };

      try {
        const response = await fetch("/api/hubspot", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            formData: { ...values, phone: `+57${values.phone}` },
            context,
          }),
        });

        const result = await response.json();

        if (!response.ok) {
          throw new Error(result.message || "Algo salió mal.");
        }

        setFormMessage(
          "¡Gracias! Hemos recibido tus datos y nos estaremos comunicando contigo en breve.",
        );
        resetForm();
      } catch (error: unknown) {
        setIsError(true);
        console.error(error);
        setFormMessage("No se pudo enviar el formulario. Inténtalo de nuevo.");
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="grid md:grid-cols-2 gap-6 mt-10">
        <TextField
          name="firstname"
          label="Nombre"
          variant="outlined"
          fullWidth
          value={formik.values.firstname}
          onChange={formik.handleChange}
          error={formik.touched.firstname && Boolean(formik.errors.firstname)}
          helperText={formik.touched.firstname && formik.errors.firstname}
        />
        <TextField
          name="lastname"
          label="Apellido"
          variant="outlined"
          fullWidth
          value={formik.values.lastname}
          onChange={formik.handleChange}
          error={formik.touched.firstname && Boolean(formik.errors.firstname)}
          helperText={formik.touched.firstname && formik.errors.firstname}
        />
        <TextField
          className="md:col-span-2"
          name="email"
          label="Correo electrónico"
          variant="outlined"
          fullWidth
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          className="md:col-span-2"
          name="phone"
          placeholder="Ej: 3123456789"
          label="Télefono celular"
          variant="outlined"
          fullWidth
          value={formik.values.phone}
          onChange={formik.handleChange}
          error={formik.touched.phone && Boolean(formik.errors.phone)}
          helperText={formik.touched.phone && formik.errors.phone}
        />
        <FormControl
          className="md:col-span-2"
          fullWidth
          error={
            formik.touched.budget_client && Boolean(formik.errors.budget_client)
          }
        >
          <InputLabel id="budget_label">Presupuesto</InputLabel>
          <Select
            labelId="budget_label"
            id="budget_client"
            name="budget_client"
            label="Presupuesto"
            value={formik.values.budget_client}
            onChange={formik.handleChange}
            error={
              formik.touched.budget_client &&
              Boolean(formik.errors.budget_client)
            }
          >
            {budgetRanges.map((budgetRange, index) => (
              <MenuItem key={index} value={budgetRange}>
                {budgetRange}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText>
            {formik.touched.budget_client && formik.errors.budget_client}
          </FormHelperText>
        </FormControl>
        <FormControl
          className="md:col-span-2"
          fullWidth
          error={
            formik.touched.desiredLotSize &&
            Boolean(formik.errors.desiredLotSize)
          }
        >
          <InputLabel id="desiredLotSize_label">
            Tamaño del lote deseado
          </InputLabel>
          <Select
            labelId="desiredLotSize_label"
            id="desiredLotSize"
            name="desiredLotSize"
            label="Tamaño del lote deseado"
            value={formik.values.desiredLotSize}
            onChange={formik.handleChange}
            error={
              formik.touched.desiredLotSize &&
              Boolean(formik.errors.desiredLotSize)
            }
          >
            {lotSizeOptions.map((budgetRange, index) => (
              <MenuItem key={index} value={budgetRange}>
                {budgetRange}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText>
            {formik.touched.desiredLotSize && formik.errors.desiredLotSize}
          </FormHelperText>
        </FormControl>
        <FormControl
          error={formik.touched.project && Boolean(formik.errors.project)}
        >
          <FormLabel id="project">Proyecto de interés</FormLabel>
          <RadioGroup
            id="project"
            name="project"
            value={formik.values.project}
            onChange={formik.handleChange}
          >
            <FormControlLabel
              value="Bosques del río "
              control={<Radio />}
              label="Bosques del río "
            />
            <FormControlLabel
              value="Andalucia"
              control={<Radio />}
              label="Andalucía"
            />
          </RadioGroup>
          <FormHelperText>
            {formik.touched.project && formik.errors.project}
          </FormHelperText>
        </FormControl>
        <Button
          disabled={formik.isSubmitting}
          variant="dark"
          type="submit"
          className="md:col-span-2"
        >
          {formik.isSubmitting ? (
            <CircularProgress size={24} color="inherit" />
          ) : (
            "Enviar"
          )}
        </Button>
      </div>
      {formMessage && (
        <Alert
          severity={isError ? "error" : "success"}
          className={`md:col-span-2 mt-4`}
        >
          {formMessage}
        </Alert>
      )}
    </form>
  );
}
