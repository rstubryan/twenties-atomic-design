import AuthLayout from "@/components/templates/AuthLayout.jsx";
import LoginForm from "@/components/organisms/LoginForm/index.jsx";

export default function LoginPages() {
  const isAuthenticated = localStorage.getItem("isAuthenticated");
  return (
    <>
      <div className="">
        {isAuthenticated ? (
          (window.location.href = "/")
        ) : (
          <AuthLayout label="Login">
            <LoginForm />
          </AuthLayout>
        )}
      </div>
    </>
  );
}
