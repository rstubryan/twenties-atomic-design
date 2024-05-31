import ContainerLayout from "@/components/templates/ContainerLayout.jsx";
import HeadingText from "@/components/atoms/HeadingText/index.jsx";
import NavList from "@/components/molecules/NavList/index.jsx";
import SearchInput from "@/components/molecules/SearchInput/index.jsx";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function NavigationBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <ContainerLayout>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between py-5">
          <div className="md:flex items-center gap-10">
            <HeadingText className="font-semibold">
              <Link to="/">Twenties</Link>
            </HeadingText>
            <NavList />
          </div>
          <div className="md:flex">
            <SearchInput />
          </div>
        </div>
      </ContainerLayout>
    </>
  );
}
