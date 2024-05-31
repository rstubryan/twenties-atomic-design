import NavigationBar from "@/components/organisms/NavigationBar/index.jsx";
import FooterBar from "@/components/organisms/FooterBar/index.jsx";
import MainLayout from "@/components/templates/MainLayout.jsx";

export default function MainPagesLayout() {
  return (
    <>
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
