"use client";

import { useEffect, useState } from "react";
import formData from "../data/form.json";
import { useForm } from "react-hook-form";
import DynamicField from "../components/DynamicField";
import {
  Button,
  Box,
  Typography,
  Card,
  CardContent
} from "@mui/material";

export default function Home() {

  const [submittedData, setSubmittedData] = useState<any>(null);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  useEffect(() => {
    const saved = localStorage.getItem("formData");
    if (saved) {
      setSubmittedData(JSON.parse(saved));
    }
  }, []);

  const onSubmit = (data: any) => {
    console.log("Submitted:", data);

    localStorage.setItem("formData", JSON.stringify(data));

    setSubmittedData(data);
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 6 }}>

      <Card sx={{ width: 500 }}>
        <CardContent>

          <Typography variant="h5" gutterBottom>
            Dynamic Signup Form
          </Typography>

          <form onSubmit={handleSubmit(onSubmit)}>

            {formData.data.map((field: any) => (
              <Box key={field.id} sx={{ mb: 2 }}>
                <DynamicField
                  field={field}
                  register={register}
                  errors={errors}
                />
              </Box>
            ))}

            <Button
              variant="contained"
              type="submit"
              fullWidth
            >
              Save
            </Button>

          </form>

          {submittedData && (
            <Box mt={4}>
              <Typography variant="h6">
                Saved Data
              </Typography>

              <pre>
                {JSON.stringify(submittedData, null, 2)}
              </pre>
            </Box>
          )}

        </CardContent>
      </Card>

    </Box>
  );
}