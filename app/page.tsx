import FormGenerator from "./Components/FormGenerator";

export default function Home() {
  const formData = [
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
      field_type: "text",
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
    </main>
  );
}
