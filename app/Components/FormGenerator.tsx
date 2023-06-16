"use client";
import React from "react";
import { PatternFormat } from "react-number-format";

const FormGenerator = ({ data }: any) => {
  const renderFormField = (item: any) => {
    switch (item.field_type) {
      case "text":
      case "number":
        return (
          <input
            type={item.field_type}
            id={item.field}
            name={item.field}
            placeholder={item.label}
            value={item.value}
            readOnly={!item.flg_editable}
            className="border rounded-md p-2 mb-2 w-full"
          />
        );
      case "checkbox":
        return (
          <input
            type="checkbox"
            id={item.field}
            name={item.field}
            checked={item.value}
            className="mr-2"
            readOnly={!item.flg_editable}
          />
        );
      case "select":
        return (
          <select
            id={item.field}
            name={item.field}
            value={item.value}
            className="border rounded-md p-2 mb-2 w-full"
          >
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
            name={item.field}
            value={item.value}
            readOnly={!item.flg_editable}
            className="border rounded-md p-2 mb-2 w-full"
          />
        );
      case "cellphone":
        return (
          <PatternFormat
            format="(##) #####-####"
            mask="_"
            id={item.field}
            name={item.field}
            placeholder={item.label}
            value={item.value}
            readOnly={!item.flg_editable}
            className="border rounded-md p-2 mb-2 w-full"
          />
        );
      case "cpf":
        return (
          <PatternFormat
            format="###.###.###-##"
            mask="_"
            id={item.field}
            name={item.field}
            placeholder={item.placeholder}
            readOnly={!item.flg_editable}
            className="border rounded-md p-2 mb-2 w-full"
          />
        );
      default:
        return null;
    }
  };

  return (
    <form className="w-full  mx-auto">
      <div className="flex flex-wrap -mx-2  flex-row justify-between">
        {data.map((item: any) => (
          <>
            <div
              key={item.id}
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
      </div>
    </form>
  );
};

export default FormGenerator;
