import { signIn } from "@/api";
import InputForm from "@/components/molecules/InputForm/index.jsx";
import Button from "@/components/atoms/Button/index.jsx";

export default function LoginForm() {
  async function handleSubmit(event) {
    event.preventDefault();

    const username = event.target.elements.username.value;
    const password = event.target.elements.password.value;

    try {
      const data = await signIn(username, password);
      console.log(data);
      localStorage.setItem("token", data.token);
      localStorage.setItem("isAuthenticated", true);
      window.location.href = "/profile";
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col mb-5">
        <InputForm
          htmlFor="username"
          label="Username"
          type="username"
          id="username"
          name="username"
          placeholder="Username"
        />
        <InputForm
          htmlFor="password"
          label="Password"
          type="password"
          id="password"
          name="password"
          placeholder="Password"
        />
      </div>
      <div className="text-center">
        <Button type="submit" className="w-full">
          Login
        </Button>
      </div>
    </form>
  );
}
