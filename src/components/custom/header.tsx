import React from "react";
import Image from "next/image";
import logo from "../../../public/logo.png";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import Link from "next/link";
import { Phone, ShoppingBasket } from "lucide-react";
import { Button } from "../ui/button";
import { Tenant } from "@/lib/types";

const Header = async () => {
  const tenantsResponse = await fetch(
    `${process.env.BACKEND_URL}/api/auth/tenants?perPage=100`,
    {
      next: {
        revalidate: 3600,
      },
    }
  );
  const restaurant: Tenant[] = await tenantsResponse.json();

  if (!tenantsResponse.ok) {
    throw new Error("Failed to fetch tenants");
  }

  return (
    <header className="bg-neutral">
      <nav className="mx-auto container py-5 flex justify-between items-center flex-col md:flex-row gap-y-6">
        <div className="flex gap-5">
          <Image
            alt="logo"
            src={logo}
            priority
            width={150}
            height={150}
            style={{ height: "auto", width: "auto" }}
          />

          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select Restaurent" />
            </SelectTrigger>
            <SelectContent>
              {restaurant.map((tenant: Tenant) => (
                <SelectItem key={tenant.id} value={tenant.id}>
                  {tenant.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex gap-4 items-center">
          <ul className="flex items-center font-medium space-x-4">
            <li>
              <Link className="hover:text-primary  transition-all" href="/">
                Menu
              </Link>
            </li>
            <li>
              <Link className="hover:text-primary transition-all" href="/">
                Orders
              </Link>
            </li>
          </ul>
          <div className="hover:text-primary transition-all relative ">
            <Link href="/cart">
              <ShoppingBasket size={24} />
            </Link>
            <span className="absolute -top-3 -right-3 h-6 w-6 flex items-center justify-center rounded-full bg-primary font-bold text-neutral">
              3
            </span>
          </div>
          <div className="flex items-center gap-x-2 ml-8">
            <Phone size={15} />
            <span className="text-xs font-medium">+91 9929495088</span>
          </div>
          <Button size={"sm"}>Logout</Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
