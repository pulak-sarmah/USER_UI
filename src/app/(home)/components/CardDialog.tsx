import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import React from "react";
import ToppingList from "./ToppingList";
import {
  DialogTrigger,
  DialogTitle,
  DialogContent,
  Dialog,
} from "@/components/ui/dialog";
import Image from "next/image";
import { ProductCardProps } from "./ProductCard";

const CardDialog = ({ product }: ProductCardProps) => {
  return (
    <Dialog>
      <DialogTrigger className="bg-primary hover:bg-primary-foreground text-neutral hover:text-primary px-6 py-2 rounded-full shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150">
        Choose
      </DialogTrigger>
      <DialogTitle className="text-xl font-bold hidden">
        Choose Product
      </DialogTitle>
      <DialogContent className="max-w-3xl p-0">
        <div className="flex">
          <div className="w-1/4 bg-neutral rounded-l-xl p-2">
            <Image
              alt="product-image"
              src={product.image}
              width={150}
              height={150}
              style={{ height: "auto", width: "auto" }}
              className="flex items-center justify-center pt-24
          rounded-l-xl
          "
            />
          </div>
          <div className="w-2/4 p-8">
            <h3 className="text-xl font-bold">{product.name}</h3>
            <p className="mt-1 ">{product.description}</p>

            <div>
              <h4 className="text-sm mt-6">Choose the size</h4>
              <RadioGroup
                defaultValue="card"
                className="grid grid-cols-3 gap-4 mt-2"
              >
                <div>
                  <RadioGroupItem
                    value="small"
                    id="small"
                    className="peer sr-only"
                    aria-label="Small"
                  />
                  <Label
                    htmlFor="small"
                    className="flex flex-col items-center justify-between rounded-md border-2  bg-neutral p-2 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                  >
                    Small
                  </Label>
                </div>

                <div>
                  <RadioGroupItem
                    value="medium"
                    id="medium"
                    className="peer sr-only"
                    aria-label="Medium"
                  />
                  <Label
                    htmlFor="medium"
                    className="flex flex-col items-center justify-between rounded-md border-2 bg-neutral p-2 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                  >
                    Medium
                  </Label>
                </div>

                <div>
                  <RadioGroupItem
                    value="large"
                    id="large"
                    className="peer sr-only"
                    aria-label="Large"
                  />
                  <Label
                    htmlFor="large"
                    className="flex flex-col items-center    justify-between rounded-md border-2  bg-neutral p-2 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                  >
                    Large
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div>
              <h4 className="text-sm mt-6">Choose the crust</h4>
              <RadioGroup
                defaultValue="card"
                className="grid grid-cols-3 gap-4 mt-2"
              >
                <div>
                  <RadioGroupItem
                    value="thin"
                    id="thin"
                    className="peer sr-only"
                    aria-label="Thin"
                  />
                  <Label
                    htmlFor="thin"
                    className="flex flex-col items-center justify-between rounded-md border-2  bg-neutral p-2 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                  >
                    Small
                  </Label>
                </div>

                <div>
                  <RadioGroupItem
                    value="thick"
                    id="thick"
                    className="peer sr-only"
                    aria-label="Thick"
                  />
                  <Label
                    htmlFor="thick"
                    className="flex flex-col items-center justify-between rounded-md border-2 bg-neutral p-2 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                  >
                    Medium
                  </Label>
                </div>
              </RadioGroup>
            </div>
            <ToppingList />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CardDialog;
