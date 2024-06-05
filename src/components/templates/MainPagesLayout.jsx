import NavigationBar from "@/components/organisms/NavigationBar/index.jsx";
import FooterBar from "@/components/organisms/FooterBar/index.jsx";
import MainLayout from "@/components/templates/MainLayout.jsx";
import { Link } from "react-router-dom";
import Button from "@/components/atoms/Button/index.jsx";

export default function MainPagesLayout() {
  const token = localStorage.getItem("token");
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("isAuthenticated");
    window.location.href = "/";
  };
  return (
    <>
      <div className="bg-sky-50 h-20 text-center">
        {token ? (
          <div className="py-5">
            <Button onClick={handleLogout}>
              <Link to="/logout" className="text-sky-500 hover:text-sky-600" />
              Logout
            </Button>
          </div>
        ) : (
          <div className="text-center py-5">
            <p className="text-lg">Welcome to Discussion App!</p>
          </div>
        )}
      </div>
      <header className="top-0 sticky bg-white shadow-md border-b">
        <NavigationBar />
      </header>
      <main>
        <MainLayout />
      </main>
      <footer>
        <FooterBar />
      </footer>
    </>
  );
}
