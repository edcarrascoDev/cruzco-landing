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
} from "@mui/material";
import Button from "@cruzco/components/common/button";
const budgetRanges = [
  "$100'000.000 - $200.000.000",
  "$200.000.000 - $300.000.000",
  "$300.000.000 - $400.000.000",
  "$400.000.000 - $500.000.000",
  "$500.000.000 - $600.000.000",
  "Más de $600.000.000",
];

const lotSizeOptions = [
  "100 – 200 m²",
  "201 – 300 m²",
  "301 – 400 m²",
  "401 – 500 m²",
  "501 – 600 m²",
  "601 – 700 m²",
  "701 – 800 m²",
  "Más de 800 m²",
];

export default function ContactForm() {
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("Este campo es requerido"),
    lastName: Yup.string().required("Este campo es requerido"),
    budget: Yup.string().required("Seleccione por lo menos una opción"),
    desiredLotSize: Yup.string().required("Seleccione por lo menos una opción"),
    email: Yup.string()
      .email("Correo electrónico invalido")
      .required("Este campo es requerido"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      firstName: "",
      lastName: "",
      budget: "",
      desiredLotSize: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="grid md:grid-cols-2 gap-6 mt-10">
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
        <FormControl
          className="md:col-span-2"
          fullWidth
          error={formik.touched.budget && Boolean(formik.errors.budget)}
        >
          <InputLabel id="budget_label">Presupuesto</InputLabel>
          <Select
            labelId="budget_label"
            id="budget"
            label="Presupuesto"
            defaultValue={formik.values.budget}
            onChange={formik.handleChange}
            error={formik.touched.budget && Boolean(formik.errors.budget)}
          >
            {budgetRanges.map((budgetRange, index) => (
              <MenuItem key={index} value={budgetRange}>
                {budgetRange}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText>
            {formik.touched.budget && formik.errors.budget}
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
            label="Tamaño del lote deseado"
            defaultValue={formik.values.desiredLotSize || ""}
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
          Enviar
        </Button>
      </div>
    </form>
  );
}
