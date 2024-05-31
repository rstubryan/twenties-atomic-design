import ContainerLayout from "@/components/templates/ContainerLayout.jsx";
import HeadingText from "@/components/atoms/HeadingText/index.jsx";
import CardItem from "@/components/molecules/CardItem/index.jsx";
import { Link } from "react-router-dom";
import Button from "@/components/atoms/Button/index.jsx";

export default function AuthLayout({ label, children }) {
  return (
    <>
      <ContainerLayout className="w-full max-w-lg">
        <div className="flex flex-col justify-center h-screen">
          <form>
            <CardItem
              title={
                <>
                  <HeadingText className="text-center">{label}</HeadingText>
                </>
              }
              content={
                <>
                  <div className="flex flex-col">{children}</div>
                  <p className="text-center text-sm max-w-full">
                    {label === "Login" ? (
                      <>
                        <div className="py-5">
                          Don't have an account?{" "}
                          <Link
                            to="/register"
                            className="text-sky-500 hover:text-sky-600"
                          >
                            Register here
                          </Link>
                        </div>
                        <div className="">
                          <Button className="px-4 py-2 w-full">Login</Button>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="py-5">
                          Already have an account?{" "}
                          <Link
                            to="/login"
                            className="text-sky-500 hover:text-sky-600"
                          >
                            Login here
                          </Link>
                        </div>
                        <div className="">
                          <Button className="px-4 py-2 w-full">Login</Button>
                        </div>
                      </>
                    )}
                  </p>
                </>
              }
            />
          </form>
        </div>
      </ContainerLayout>
    </>
  );
}
