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
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

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
          <div className="w-3/4 p-8">
            <h3 className="text-xl font-bold">{product.name}</h3>
            <p className="mt-1 ">{product.description}</p>

            {Object.entries(product.category.priceConfiguration).map(
              ([key, value]) => {
                return (
                  <div key={key}>
                    <h4 className="text-sm mt-6">Choose the {key}</h4>
                    <RadioGroup
                      defaultValue={value.availableOptions[0].toLocaleLowerCase()}
                      className="grid grid-cols-3 gap-4 mt-2"
                    >
                      {value.availableOptions.map((option) => {
                        return (
                          <div key={option}>
                            <RadioGroupItem
                              value={option.toLocaleLowerCase()}
                              id={option.toLocaleLowerCase()}
                              className="peer sr-only"
                              aria-label={option}
                            />
                            <Label
                              htmlFor={option.toLocaleLowerCase()}
                              className="flex flex-col items-center justify-between rounded-md border-2  bg-neutral p-2 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                            >
                              {option}
                            </Label>
                          </div>
                        );
                      })}
                    </RadioGroup>
                  </div>
                );
              }
            )}
            <ToppingList />

            <div className="flex items-center justify-between mt-8">
              <span>₹ 400</span>
              <Button>
                <ShoppingCart />
                <span>Add to Cart</span>
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CardDialog;
