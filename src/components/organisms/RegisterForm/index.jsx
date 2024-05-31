import InputForm from "@/components/molecules/InputForm/index.jsx";

export default function RegisterForm() {
  return (
    <>
      <InputForm
        htmlFor="fname"
        label="First Name"
        type="text"
        id="fname"
        name="fname"
        placeholder="First Name"
      />
      <InputForm
        htmlFor="lname"
        label="Last Name"
        type="text"
        id="lname"
        name="lname"
        placeholder="Last Name"
      />
      <InputForm
        htmlFor="email"
        label="E-Mail"
        type="email"
        id="email"
        name="email"
        placeholder="E-Mail"
      />
      <InputForm
        htmlFor="password"
        label="Password"
        type="password"
        id="password"
        name="password"
        placeholder="Password"
      />
    </>
  );
}
