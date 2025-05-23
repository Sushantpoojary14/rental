import {
  Alert,
  Box,
  Button,
  Card,
  Step,
  StepLabel,
  Stepper,
  Tab,
  Tabs,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import CustomerForm from "./components/CustomerForm";
import axios from "axios";
const apiUrl = import.meta.env.VITE_API_URL;
const Index = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [errors, setErrors] = React.useState(null);
  const [success, setSuccess] = React.useState(null);
  const [Loading, setLoading] = React.useState(false);

  const { handleSubmit, watch, register, control, reset } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      vehicleType: "",
      categoryType: "",
      vehicles: "",
      book_date: "",
    },
  });

  const handleNext = () => {
    const values = watch();
    console.log(values);
    if (activeStep === 0) {
      if (!values.firstName?.trim()) {
        setErrors({ firstName: true });
        return;
      }
      if (!values.lastName?.trim()) {
        setErrors({ lastName: true });
        return;
      }
    }

    if (activeStep === 1) {
      if (!values.vehicleType) {
        setErrors({ vehicleType: true });
        return;
      }
    }

    if (activeStep === 2) {
      if (!values.categoryType) {
        setErrors({ categoryType: true });
        return;
      }
    }

    if (activeStep === 3) {
      if (!values.vehicles) {
        setErrors({ vehicles: true });
        return;
      }
    }

    if (activeStep === 4) {
      if (!values.book_date) {
        setErrors({ book_date: true });
        return;
      }
    }
    setErrors(null);

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setErrors(null);
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const onSubmit = async () => {
    const { firstName, lastName, vehicles, book_date } = watch();
    setErrors(null);

    if (!book_date || new Date(book_date) <= new Date()) {
      setErrors({ book_date: true });
      return;
    }

    if (firstName && lastName && vehicles && book_date) {
      const body = {
        first_name: firstName,
        last_name: lastName,
        vehicle_id: vehicles,
        book_date: book_date,
      };
      console.log(body);
      setLoading(true);
      try {
        const res = await axios.post(`${apiUrl}/vehicleBooking`, body);
        if (res.status === 200) {
          setSuccess("Successfully Booked Vehicle");
          reset({
            firstName: "",
            lastName: "",
            vehicleType: "",
            categoryType: "",
            vehicles: "",
            book_date: "",
          });
          setActiveStep(0);
        }
      } catch (error) {
        console.error(error);
        setErrors({ book: error.response.data.message ?? "Already Booked" });
      } finally {
        setLoading(false);
      }
    } else {
      setErrors({ book: "Missing Fields" });
    }
  };

  return (
    <Card
      sx={{
        maxWidth: 600,
        width: "90%",
        mx: "auto",
        my: 8,
        p: 4,
        borderRadius: 2,
        boxShadow: 4,
        display: "flex",
        flexDirection: "column",
      }}
    >
      {errors?.book ? (
        <Alert variant="filled" severity="error">
          {errors.book}
        </Alert>
      ) : null}

      {success ? (
        <Alert variant="filled" severity="success">
          {success}
        </Alert>
      ) : null}
      <Box sx={{ flexGrow: 1 }}>
        <CustomerForm
          register={register}
          steps={activeStep}
          control={control}
          errors={errors}
          setLoading={setLoading}
          watch={watch}
        />

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mt: 4,
          }}
        >
          <Button
            variant="outlined"
            disabled={activeStep === 0}
            onClick={handleBack}
          >
            Back
          </Button>
          <Box>
            {activeStep === 4 ? (
              <Button
                variant="contained"
                disabled={activeStep !== 4}
                type="submit"
                onClick={onSubmit}
              >
                Submit
              </Button>
            ) : (
              <Button
                variant="contained"
                onClick={handleNext}
                disabled={activeStep === 4}
                loading={Loading}
              >
                Next
              </Button>
            )}
          </Box>
        </Box>
      </Box>
    </Card>
  );
};

export default Index;
