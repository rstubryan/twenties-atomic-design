import ContainerLayout from "@/components/templates/ContainerLayout.jsx";
import HeadingText from "@/components/atoms/HeadingText/index.jsx";
import SubheadingText from "@/components/atoms/SubheadingText/index.jsx";
import TypographyText from "@/components/atoms/TypographyText/index.jsx";

export default function FooterBar() {
  const snsList = [
    {
      id: 1,
      name: "Facebook",
      url: "https://www.facebook.com",
    },
    {
      id: 2,
      name: "Instagram",
      url: "https://www.instagram.com/",
    },
    {
      id: 3,
      name: "Threads",
      url: "https://www.threads.net/",
    },
    {
      id: 4,
      name: "X",
      url: "https://www.x.com/",
    },
  ];
  return (
    <>
      <div className="py-10">
        <ContainerLayout className="flex flex-col md:flex-row justify-between">
          <div className="md:mb-0 mb-5">
            <HeadingText>Twenties</HeadingText>
          </div>
          <div className="">
            <SubheadingText className="mb-3">Our SNS</SubheadingText>
            <ul className="flex flex-col gap-2">
              {snsList.map((sns) => (
                <li key={sns.id}>
                  <TypographyText className="hover:underline hover:underline-offset-8">
                    <a href={sns.url} target="_blank" rel="noreferrer">
                      {sns.name}
                    </a>
                  </TypographyText>
                </li>
              ))}
            </ul>
          </div>
        </ContainerLayout>
      </div>
      <div className="text-center bg-sky-50 py-5">
        <TypographyText className="font-normal text-sm">
          &copy;Copyright 2024 - Twenties (Forum Discussion App)
        </TypographyText>
      </div>
    </>
  );
}
