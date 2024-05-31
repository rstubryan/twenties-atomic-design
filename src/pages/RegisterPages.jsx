import AuthLayout from "@/components/templates/AuthLayout.jsx";
import RegisterForm from "@/components/organisms/RegisterForm/index.jsx";

export default function RegisterPages() {
  return (
    <>
      <AuthLayout label="Register">
        <RegisterForm />
      </AuthLayout>
    </>
  );
}
