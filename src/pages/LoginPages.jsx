import AuthLayout from "@/components/templates/AuthLayout.jsx";
import LoginForm from "@/components/organisms/LoginForm/index.jsx";

export default function LoginPages() {
  return (
    <>
      <AuthLayout label="Login">
        <LoginForm />
      </AuthLayout>
    </>
  );
}
