"use client";
import React, { FC } from "react";
import { Form, Input, Select, Checkbox, DatePicker } from "antd";
import { NumberFormatValues, PatternFormat } from "react-number-format";
import { FormDataType } from "../../../page";
import dayjs, { Dayjs } from "dayjs";

type IFormProps = {
  data: FormDataType[];
};

const FormGenerator: FC<IFormProps> = ({ data }) => {
  const [form] = Form.useForm();
  const isDisabledDate = (current: Dayjs) => {
    return current && current >= dayjs().endOf("day");
  };

  const onSubmit = (formData: IFormProps) => {
    console.log(formData);
  };

  const renderFormField = (item: FormDataType) => {
    switch (item.field_type) {
      case "text":
      case "number":
        return (
          <Form.Item
            className="w-full"
            name={item.field}
            rules={[{ required: item.flg_required }]}
          >
            <input
              className="border rounded-md p-2 mb-2 w-full"
              type={item.field_type}
            />
          </Form.Item>
        );
      case "email":
        return (
          <Form.Item
            className="border rounded-md p-2 mb-2 w-full"
            name={item.field}
            rules={[
              {
                required: item.flg_required,
                type: "email",
                message: "email inválido",
              },
            ]}
          >
            <Input type={item.field_type} />
          </Form.Item>
        );

      case "checkbox":
        return (
          <Form.Item name={item.field} valuePropName="checked">
            <Checkbox className="border rounded-md p-2 mb-2 w-full" />
          </Form.Item>
        );
      case "select":
        return (
          <Form.Item className=" rounded-md p-2 mb-2 w-full" name={item.field}>
            <Select>
              {item.options.map((option) => (
                <Select.Option key={option.value} value={option.value}>
                  {option.label}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
        );
      case "date":
        return (
          <Form.Item name={item.field} className="w-full">
            <DatePicker
              className="border rounded-md p-2 mb-2 w-full"
              placeholder=""
              format="DD/MM/YYYY"
              allowClear={false}
              disabledDate={isDisabledDate}
            />
          </Form.Item>
        );
      case "cellphone":
      case "cpf":
        return (
          <Form.Item
            // validar se o cpf é válido
            name={item.field}
            normalize={({ floatValue }: NumberFormatValues) => floatValue}
            rules={[{ required: item.flg_required, message: "Informe o CEP" }]}
            id={item.field}
            trigger="onValueChange"
            className="w-full"
          >
            <PatternFormat
              format={item.format ? item.format : ""}
              className="border rounded-md p-2 mb-2 w-full"
              mask="_"
              placeholder={item.label}
              readOnly={!item.flg_editable}
              customInput={Input}
            />
          </Form.Item>
        );

      default:
        return null;
    }
  };

  return (
    <form className="w-full mx-auto" onFinish={onSubmit}>
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
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Submit
      </button>
    </form>
  );
};

export default FormGenerator;
