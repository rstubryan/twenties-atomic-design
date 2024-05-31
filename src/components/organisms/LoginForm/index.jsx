import InputForm from "@/components/molecules/InputForm/index.jsx";

export default function LoginForm() {
  return (
    <>
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
