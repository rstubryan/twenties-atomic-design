import Label from "@/components/atoms/Label/index.jsx";
import Input from "@/components/atoms/Input/index.jsx";

export default function InputForm({
  htmlFor,
  label,
  type,
  id,
  name,
  placeholder,
}) {
  return (
    <>
      <Label htmlFor={htmlFor}>{label}</Label>
      <Input type={type} id={id} name={name} placeholder={placeholder} />
    </>
  );
}
