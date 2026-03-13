"use client";

import {
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
  MenuItem
} from "@mui/material";

export default function DynamicField({ field, register, errors }: any) {

  const validationRules = {
    required: field.required ? `${field.name} is required` : false,
    minLength: field.minLength
      ? {
          value: field.minLength,
          message: `Minimum ${field.minLength} characters`
        }
      : undefined,
    maxLength: field.maxLength
      ? {
          value: field.maxLength,
          message: `Maximum ${field.maxLength} characters`
        }
      : undefined
  };

  if (field.fieldType === "TEXT") {
    return (
      <TextField
        label={field.name}
        defaultValue={field.defaultValue || ""}
        fullWidth
        error={!!errors[field.name]}
        helperText={errors[field.name]?.message}
        {...register(field.name, validationRules)}
      />
    );
  }

  if (field.fieldType === "LIST") {
    return (
      <TextField
        select
        label={field.name}
        defaultValue={field.defaultValue || ""}
        fullWidth
        error={!!errors[field.name]}
        helperText={errors[field.name]?.message}
        {...register(field.name, { required: validationRules.required })}
      >
        {field.listOfValues1?.map((item: string, index: number) => (
          <MenuItem key={index} value={item}>
            {item}
          </MenuItem>
        ))}
      </TextField>
    );
  }

  if (field.fieldType === "RADIO") {
    return (
      <div>
        <p>{field.name}</p>

        <RadioGroup {...register(field.name, { required: validationRules.required })}>
          {field.listOfValues1?.map((item: string, index: number) => (
            <FormControlLabel
              key={index}
              value={item}
              control={<Radio />}
              label={item}
            />
          ))}
        </RadioGroup>

        {errors[field.name] && (
          <p style={{ color: "red" }}>
            {errors[field.name]?.message}
          </p>
        )}
      </div>
    );
  }

  return null;
}