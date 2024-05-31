import Label from "@/components/atoms/Label/index.jsx";
import Input from "@/components/atoms/Input/index.jsx";
import Button from "@/components/atoms/Button/index.jsx";
import IconPlaceholder from "@/components/atoms/IconPlaceholder/index.jsx";
import TypographyText from "@/components/atoms/TypographyText/index.jsx";

export default function SearchInput() {
  return (
    <>
      <div className="flex flex-col">
        <div className="py-2">
          <Label htmlFor="search">Your input here</Label>
        </div>
        <div className="flex">
          <Input
            type="search"
            id="search"
            name="search"
            placeholder="Enter the keyword"
            className="px-3 py-0 border-0 rounded-none"
          />
          <Button className="flex items-center gap-2">
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
                      d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z"
                      fill="currentColor"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </>
              }
            />
            <TypographyText>Search</TypographyText>
          </Button>
        </div>
      </div>
    </>
  );
}
