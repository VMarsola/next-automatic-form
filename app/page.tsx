import FormGenerator from "./Components/shared/FormGenerator";
import Modal from "./Components/shared/Modal";

export interface FormDataType {
  id: number;
  order: number;
  field: string;
  label: string;
  value: string;
  field_type: string;
  options: any[]; // Change `any` to the type of your options array if applicable
  flg_editable: boolean;
  flg_required: boolean;
  break_line: boolean;
  placeholder?: string;
  format?: string;
}
export default function Home() {
  const formData: FormDataType[] = [
    {
      id: 19,
      order: 1,
      field: "cpf",
      label: "Cpf: ",
      value: "",
      field_type: "cpf",
      options: [],
      flg_editable: true,
      flg_required: false,
      break_line: false,
      placeholder: "111.111.111-11",
      format: "###.###.###-##",
    },
    {
      id: 20,
      order: 1,
      field: "birth_date",
      label: "Data de Nascimento",
      value: "2019-08-01",
      field_type: "date",
      options: [],
      flg_editable: true,
      flg_required: false,
      break_line: true,
    },
    {
      id: 21,
      order: 1,
      field: "name",
      label: "Nome: ",
      value: "",
      field_type: "text",
      options: [],
      flg_editable: true,
      flg_required: false,
      break_line: true,
    },
    {
      id: 21,
      order: 1,
      field: "email",
      label: "Email",
      value: "",
      field_type: "email",
      options: [],
      flg_editable: true,
      flg_required: false,
      break_line: false,
    },
    {
      id: 22,
      order: 1,
      field: "telefone",
      label: "Telefone: ",
      value: "",
      field_type: "cellphone",
      options: [],
      flg_editable: true,
      flg_required: false,
      break_line: false,
      format: "(##) #####-####",
    },
    {
      id: 22,
      order: 1,
      field: "type",
      label: "Tipo",
      value: "",
      field_type: "select",
      options: [
        { value: 33, label: "codigo unico registro" },
        { value: 22, label: "codigo unico registro2" },
        { value: 11, label: "codigo unico registro3" },
      ],
      flg_editable: true,
      flg_required: false,
      break_line: false,
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
      <FormGenerator data={formData} />
      <Modal isOpen={false}>
        <h1>opa</h1>{" "}
      </Modal>
    </main>
  );
}
