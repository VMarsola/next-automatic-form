"use client";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { PatternFormat } from "react-number-format";

const FormGenerator = ({ data }: any) => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (formData: any) => {
    // Manipulate the formData object as needed
    console.log(formData);
  };

  const renderFormField = (item: any) => {
    switch (item.field_type) {
      case "text":
      case "number":
        return (
          <input
            type={item.field_type}
            id={item.field}
            {...register(item.field)}
            placeholder={item.label}
            readOnly={!item.flg_editable}
            className="border rounded-md p-2 mb-2 w-full"
          />
        );
      case "checkbox":
        return (
          <input
            type="checkbox"
            id={item.field}
            {...register(item.field)}
            checked={item.value}
            className="mr-2"
            readOnly={!item.flg_editable}
          />
        );
      case "select":
        return (
          <select
            id={item.field}
            {...register(item.field)}
            className="border rounded-md p-2 mb-2 w-full"
            defaultValue={""}
          >
            <option value="">{item.placeholder}</option>
            {item.options.map((option: any) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        );
      case "date":
        return (
          <input
            type="date"
            id={item.field}
            {...register(item.field)}
            readOnly={!item.flg_editable}
            className="border rounded-md p-2 mb-2 w-full"
          />
        );
      case "cellphone":
      case "cpf":
        return (
          <Controller
            name={item.field}
            control={control}
            render={({ field }) => (
              <PatternFormat
                onValueChange={(value) => field.onChange(value.floatValue)}
                format={item.format ? item.format : null}
                mask="_"
                id={item.field}
                placeholder={item.label}
                readOnly={!item.flg_editable}
                className="border rounded-md p-2 mb-2 w-full"
              />
            )}
          />
        );

      default:
        return null;
    }
  };

  return (
    <form className="w-full  mx-auto" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-wrap -mx-2  flex-row justify-between">
        {data.map((item: any) => (
          <>
            <div
              className={`mb-4 w-1/2 px-2 flex flex-row justify-between items-center`}
            >
              <label
                htmlFor={item.field}
                className="block mb-2 font-bold mx-10 w-28"
              >
                {item.label}
              </label>
              {renderFormField(item)}
              {item.flg_required && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
            {item.break_line && <div className="w-full"></div>}
          </>
        ))}
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default FormGenerator;
