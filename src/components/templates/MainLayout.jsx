import ContainerLayout from "@/components/templates/ContainerLayout.jsx";
import CardItem from "@/components/molecules/CardItem/index.jsx";
import SubheadingText from "@/components/atoms/SubheadingText/index.jsx";
import TypographyText from "@/components/atoms/TypographyText/index.jsx";
import HeadingText from "@/components/atoms/HeadingText/index.jsx";
import Button from "@/components/atoms/Button/index.jsx";
import { Link } from "react-router-dom";

export default function MainLayout() {
  const cardItems = [
    {
      id: 1,
      title: "Question",
      desc: "You can ask wherever you want!",
    },
    {
      id: 2,
      title: "Forum",
      desc: "You can discuss with anyone around the world!",
    },
    {
      id: 3,
      title: "Profile",
      desc: "You can customize profile with just one click!",
    },
  ];

  return (
    <>
      <section className="text-center bg-sky-50 py-32">
        <HeadingText className="text-4xl">
          The best looking web Discussion App
        </HeadingText>
        <TypographyText className="py-5">Twenties are the best!</TypographyText>
        <Button className="py-3 px-5">
          <Link to="/login">Let's Go</Link>
        </Button>
      </section>
      <ContainerLayout>
        <section>
          <HeadingText className="text-center py-10">Features</HeadingText>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
            {cardItems.map((item) => (
              <CardItem
                key={item.id}
                title={
                  <>
                    <SubheadingText>{item.title}</SubheadingText>
                  </>
                }
                desc={
                  <>
                    <TypographyText>{item.desc}</TypographyText>
                  </>
                }
              />
            ))}
          </div>
        </section>
      </ContainerLayout>
      <section className="bg-sky-50">
        <ContainerLayout>
          <div className="flex flex-col md:flex-row md:justify-between md:items-center py-10">
            <div className="md:mb-0 mb-5">
              <HeadingText>Join us!</HeadingText>
              <TypographyText className="py-3">
                With just one button below!
              </TypographyText>
              <Button className="py-3 px-5">
                <Link to="/register">Let's Go</Link>
              </Button>
            </div>
            <div className="text-start md:text-end">
              <HeadingText>Twenties</HeadingText>
            </div>
          </div>
        </ContainerLayout>
      </section>
    </>
  );
}
