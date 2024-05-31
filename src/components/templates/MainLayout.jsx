import ContainerLayout from "@/components/templates/ContainerLayout.jsx";
import CardItem from "@/components/molecules/CardItem/index.jsx";
import SubheadingText from "@/components/atoms/SubheadingText/index.jsx";
import TypographyText from "@/components/atoms/TypographyText/index.jsx";
import HeadingText from "@/components/atoms/HeadingText/index.jsx";
import Button from "@/components/atoms/Button/index.jsx";
import { Link } from "react-router-dom";
import IconPlaceholder from "@/components/atoms/IconPlaceholder/index.jsx";

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
          <div className="flex items-center gap-2 ">
            <IconPlaceholder
              children={
                <>
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.5 1C4.22386 1 4 1.22386 4 1.5C4 1.77614 4.22386 2 4.5 2H12V13H4.5C4.22386 13 4 13.2239 4 13.5C4 13.7761 4.22386 14 4.5 14H12C12.5523 14 13 13.5523 13 13V2C13 1.44772 12.5523 1 12 1H4.5ZM6.60355 4.89645C6.40829 4.70118 6.09171 4.70118 5.89645 4.89645C5.70118 5.09171 5.70118 5.40829 5.89645 5.60355L7.29289 7H0.5C0.223858 7 0 7.22386 0 7.5C0 7.77614 0.223858 8 0.5 8H7.29289L5.89645 9.39645C5.70118 9.59171 5.70118 9.90829 5.89645 10.1036C6.09171 10.2988 6.40829 10.2988 6.60355 10.1036L8.85355 7.85355C9.04882 7.65829 9.04882 7.34171 8.85355 7.14645L6.60355 4.89645Z"
                      fill="currentColor"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </>
              }
            />
            <Link to="/login">Let's Go</Link>
          </div>
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
              <Button className="flex items-center gap-2 py-3 px-5">
                <IconPlaceholder
                  children={
                    <>
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.5 1C4.22386 1 4 1.22386 4 1.5C4 1.77614 4.22386 2 4.5 2H12V13H4.5C4.22386 13 4 13.2239 4 13.5C4 13.7761 4.22386 14 4.5 14H12C12.5523 14 13 13.5523 13 13V2C13 1.44772 12.5523 1 12 1H4.5ZM6.60355 4.89645C6.40829 4.70118 6.09171 4.70118 5.89645 4.89645C5.70118 5.09171 5.70118 5.40829 5.89645 5.60355L7.29289 7H0.5C0.223858 7 0 7.22386 0 7.5C0 7.77614 0.223858 8 0.5 8H7.29289L5.89645 9.39645C5.70118 9.59171 5.70118 9.90829 5.89645 10.1036C6.09171 10.2988 6.40829 10.2988 6.60355 10.1036L8.85355 7.85355C9.04882 7.65829 9.04882 7.34171 8.85355 7.14645L6.60355 4.89645Z"
                          fill="currentColor"
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </>
                  }
                />
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
