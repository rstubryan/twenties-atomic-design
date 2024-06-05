import ContainerLayout from "@/components/templates/ContainerLayout.jsx";
import { Link } from "react-router-dom";
import Button from "@/components/atoms/Button/index.jsx";
import HeadingText from "@/components/atoms/HeadingText/index.jsx";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import TypographyText from "@/components/atoms/TypographyText/index.jsx";
import SubheadingText from "@/components/atoms/SubheadingText/index.jsx";

export default function ProfilePagesLayout() {
  const token = localStorage.getItem("token");
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("isAuthenticated");
    window.location.href = "/";
  };
  return (
    <>
      <ContainerLayout className="w-full p-5 flex justify-between">
        <HeadingText>Profile Pages</HeadingText>
      </ContainerLayout>
      <div>
        {token ? (
          <>
            <ContainerLayout className="max-w-xl">
              <Alert className="p-5">
                <AlertTitle>
                  <SubheadingText>Welcome back!</SubheadingText>
                </AlertTitle>
                <AlertDescription>
                  <TypographyText className="truncate">
                    Have a nice day{" "}
                    <span className="text-sky-500">{token}</span>
                  </TypographyText>
                </AlertDescription>
              </Alert>
            </ContainerLayout>
            <div className="py-5 flex gap-3 justify-center">
              <Button onClick={() => {}}>
                <Link to="/">Home</Link>
              </Button>
              <Button onClick={handleLogout}>
                <Link to="/logout" />
                Logout
              </Button>
            </div>
          </>
        ) : (
          <>
            <ContainerLayout className="max-w-xl">
              <Alert className="p-5">
                <AlertTitle>
                  <SubheadingText>Unauthorized</SubheadingText>
                </AlertTitle>
                <AlertDescription>
                  <TypographyText className="truncate">
                    You are not authorized to access this page
                  </TypographyText>
                </AlertDescription>
              </Alert>
            </ContainerLayout>
          </>
        )}
      </div>
    </>
  );
}
