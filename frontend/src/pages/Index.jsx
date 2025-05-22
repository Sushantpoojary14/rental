import {
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
const fields = ["vehicleType", "categoryType", "vehicles", "book_date"];
const Index = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [errors, setErrors] = React.useState(null);
  const { handleSubmit, watch, register, control } = useForm({
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

  const onSubmit = (data) => console.log(data);

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
      <Box sx={{ flexGrow: 1 }}>
        <CustomerForm
          register={register}
          steps={activeStep}
          control={control}
          errors={errors}
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
                onClick={handleSubmit(onSubmit)}
              >
                Submit
              </Button>
            ) : (
              <Button
                variant="contained"
                onClick={handleNext}
                disabled={activeStep === 4}
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
