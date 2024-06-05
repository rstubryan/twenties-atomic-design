import { signUp } from "@/api";
import InputForm from "@/components/molecules/InputForm/index.jsx";
import Button from "@/components/atoms/Button/index.jsx";

export default function RegisterForm() {
  async function handleSubmit(event) {
    event.preventDefault();

    const username = event.target.elements.username.value;
    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;

    try {
      const data = await signUp(username, email, password);
      console.log(data);
      window.location.href = "/login";
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
          htmlFor="email"
          label="Email"
          type="email"
          id="email"
          name="email"
          placeholder="Email"
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
      <Button type="submit" className="w-full">
        Register
      </Button>
    </form>
  );
}
