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
import React, { useEffect, useState } from "react";
import { Controller } from "react-hook-form";
import { getApi } from "../../utils/api";

const CustomerForm = ({
  control,
  register,
  steps,
  watch,
  errors = {},
  setLoading = false,
}) => {
  const [data, setData] = useState({
    vehicleTypes: [],
    vehicleCategories: [],
    vehicles: [],
  });
  const { vehicleType, categoryType } = watch();

  useEffect(() => {
    (async () => {
      await getApi("vehicleType", setLoading, setData, "vehicleTypes");
    })();
  }, []);

  useEffect(() => {
    if (vehicleType) {
      (async () => {
        await getApi(
          `getVehicleCategories/${vehicleType}`,
          setLoading,
          setData,
          "vehicleCategories"
        );
      })();
    }
  }, [vehicleType]);

  useEffect(() => {
    if (categoryType) {
      (async () => {
        await getApi(
          `getVehicles/${categoryType}`,
          setLoading,
          setData,
          "vehicles"
        );
      })();
    }
  }, [categoryType]);

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
        borderRadius: 10,
        minHeight: 250,
        maxHeight: 250,
      }}
    >
      <Stack spacing={3}>
        {steps === 0 && (
          <>
            <Typography variant="h6" mb={2}>
              Enter Your Details
            </Typography>
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
            <Typography variant="h6" mb={2}>
              Vehicle Type
            </Typography>
            {data?.vehicleTypes?.length < 1 ? (
              <Typography variant="p" align="center" mt={10}>
                Currently UnAvailable
              </Typography>
            ) : (
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
                      {data?.vehicleTypes?.map(({ id, name }) => (
                        <FormControlLabel
                          key={name}
                          value={id}
                          control={<Radio />}
                          label={name}
                        />
                      ))}
                    </RadioGroup>
                  </Box>
                )}
              />
            )}
            {errors?.vehicleType && (
              <Typography variant="caption" color="error">
                Vehicle Type is required
              </Typography>
            )}
          </FormControl>
        )}

        {steps === 2 && (
          <FormControl component="fieldset" error={errors?.categoryType}>
            <Typography variant="h6" mb={2}>
              Category
            </Typography>
            {data?.vehicleCategories?.length < 1 ? (
              <Typography variant="p" align="center" mt={10}>
                Currently UnAvailable
              </Typography>
            ) : (
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
                      {data?.vehicleCategories?.map(({ id, name }) => (
                        <FormControlLabel
                          key={name}
                          value={id}
                          control={<Radio />}
                          label={name}
                        />
                      ))}
                    </RadioGroup>
                  </Box>
                )}
              />
            )}
            {errors?.categoryType && (
              <Typography variant="caption" color="error">
                category is required
              </Typography>
            )}
          </FormControl>
        )}

        {steps === 3 && (
          <FormControl component="fieldset" error={errors?.vehicles}>
            <Typography variant="h6" mb={2}>
              Vehicle Model
            </Typography>
            {data?.vehicles?.length < 1 ? (
              <Typography variant="p" align="center" mt={10}>
                No Vehicle Model Available
              </Typography>
            ) : (
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
                      {data?.vehicles?.map(({ id, name }) => (
                        <FormControlLabel
                          key={name}
                          value={id}
                          control={<Radio />}
                          label={name}
                        />
                      ))}
                    </RadioGroup>
                  </Box>
                )}
              />
            )}
            {errors?.vehicles && (
              <Typography variant="caption" color="error">
                vehicle is required
              </Typography>
            )}
          </FormControl>
        )}

        {steps === 4 && (
          <FormControl error={errors?.book_date}>
            <Typography variant="h6" mb={2}>
              Please Select Date
            </Typography>
            <TextField
              fullWidth
              type="date"
              error={errors?.book_date}
              {...register("book_date")}
            />
            {errors?.book_date && (
              <Typography variant="caption" color="error">
                Date cannot be less than today date
              </Typography>
            )}
            {errors?.book && (
              <Typography variant="caption" color="error">
                {errors.book}
              </Typography>
            )}
          </FormControl>
        )}
      </Stack>
    </Box>
  );
};

export default CustomerForm;
