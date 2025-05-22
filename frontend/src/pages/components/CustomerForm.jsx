import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { Controller } from "react-hook-form";

const CustomerForm = ({control, register, steps, errors = {} }) => {


  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      sx={{
        maxWidth: 500,
        mx: "auto",
        p: 3,
        bgcolor: "background.paper",
        borderRadius: 2,
        minHeight: 250,
        maxHeight: 250,
      }}
    >
      <Stack spacing={3}>
        {steps === 0 && (
          <>
            <Typography variant="h6">Enter Your Details</Typography>
            <TextField
              fullWidth
              label="First Name"
              placeholder="Enter First Name"
              error={errors?.firstName}
              helperText={errors?.firstName && "First name is required"}
              {...register("firstName", { required: true, maxLength: 150 })}
            />
            <TextField
              fullWidth
              label="Last Name"
              placeholder="Enter Last Name"
              error={errors?.lastName}
              helperText={errors?.lastName && "Last name is required"}
              {...register("lastName", { required: true, maxLength: 150 })}
            />
          </>
        )}

        {steps === 1 && (
          <FormControl component="fieldset" error={errors?.vehicleType}>
            <Typography variant="h6">Vehicle Type</Typography>
            <Controller
              name="vehicleType"
              control={control}
              rules={{ required: "Please select one" }}
              render={({ field }) => (
                <Box
                  sx={{
                    maxHeight: 200,
                    overflowY: "auto",
                    border: "1px solid gray",

                    borderRadius: 1,
                    p: 1,
                  }}
                >
                  <RadioGroup {...field} row={false}>
                    {[
                      { id: "bike", label: "Bike" },
                      { id: "car", label: "Car" },
                      { id: "scooter", label: "Scooter" },
                    ].map((opt) => (
                      <FormControlLabel
                        key={opt.id}
                        value={opt.id}
                        control={<Radio />}
                        label={opt.label}
                      />
                    ))}
                  </RadioGroup>
                </Box>
              )}
            />
            {errors?.vehicleType && (
              <Typography variant="caption" color="error">
                vehicle Type is required
              </Typography>
            )}
          </FormControl>
        )}

        {steps === 2 && (
          <FormControl component="fieldset" error={errors?.categoryType}>
            <Typography variant="h6">Category</Typography>
            <Controller
              name="categoryType"
              control={control}
              rules={{ required: "Please select one" }}
              render={({ field }) => (
                <Box
                  sx={{
                    maxHeight: 200,
                    overflowY: "auto",
                    border: "1px solid gray",

                    borderRadius: 1,
                    p: 1,
                  }}
                >
                  <RadioGroup {...field}>
                    {[
                      { id: "hatchback", label: "Hatchback" },
                      { id: "suv", label: "SUV" },
                      { id: "sedan", label: "Sedan" },
                    ].map((opt) => (
                      <FormControlLabel
                        key={opt.id}
                        value={opt.id}
                        control={<Radio />}
                        label={opt.label}
                      />
                    ))}
                  </RadioGroup>
                </Box>
              )}
            />
            {errors?.categoryType && (
              <Typography variant="caption" color="error">
      
                category is required
              </Typography>
            )}
          </FormControl>
        )}

        {steps === 3 && (
          <FormControl component="fieldset" error={errors?.vehicles}>
            <Typography variant="h6">Vehicle Model</Typography>
            <Controller
              name="vehicles"
              control={control}
              rules={{ required: "Please select one" }}
              render={({ field }) => (
                <Box
                  sx={{
                    maxHeight: 200,
                    overflowY: "auto",
                    border: "1px solid gray",

                    borderRadius: 1,
                    p: 1,
                  }}
                >
                  <RadioGroup {...field}>
                    {[
                      { id: "bmw", label: "BMW" },
                      { id: "audi", label: "Audi" },
                      { id: "tesla", label: "Tesla" },
                    ].map((opt) => (
                      <FormControlLabel
                        key={opt.id}
                        value={opt.id}
                        control={<Radio />}
                        label={opt.label}
                      />
                    ))}
                  </RadioGroup>
                </Box>
              )}
            />
            {errors?.vehicles && (
              <Typography variant="caption" color="error">
                {errors?.vehicles.message}
                vehicle is required
              </Typography>
            )}
          </FormControl>
        )}

        {steps === 4 && (
          <FormControl error={errors?.book_date}>
            <Typography variant="h6">Please Select Date</Typography>
            <TextField
              fullWidth
              type="date"
              error={errors?.book_date}
              helperText={errors?.book_date && "Date is required"}
              {...register("book_date", { required: true })}
            />
          </FormControl>
        )}
      </Stack>
    </Box>
  );
};

export default CustomerForm;
