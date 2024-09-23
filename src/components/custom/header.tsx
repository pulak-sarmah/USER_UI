import React from "react";
import Image from "next/image";
import logo from "../../public/logo.png";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const Header = () => {
  return (
    <header className="bg-neutral">
      <nav className="mx-auto container py-5">
        <div className="flex gap-5">
          <Image alt="logo" src={logo} priority width={150} />

          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select Restaurent" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="cheesy-delight">Cheesy Delight</SelectItem>
              <SelectItem value="pizza-menia">Pizza Menia</SelectItem>
              <SelectItem value="lazziz-origin">Lazziz Origin</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </nav>
    </header>
  );
};

export default Header;
