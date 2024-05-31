import Label from "@/components/atoms/Label/index.jsx";
import Input from "@/components/atoms/Input/index.jsx";
import Button from "@/components/atoms/Button/index.jsx";

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
          <Button>Search</Button>
        </div>
      </div>
    </>
  );
}
