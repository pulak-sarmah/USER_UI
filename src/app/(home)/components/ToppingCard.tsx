import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CircleCheck } from "lucide-react";
import Image from "next/image";
import React from "react";

export type Topping = {
  id: string;
  name: string;
  image: string;
  price: number;
  isAvailable: boolean;
};

type PropType = {
  topping: Topping;
  selectedToppings: Topping[];
  handleCheckBoxCheck: (topping: Topping) => void;
};

const ToppingCard = ({
  topping,
  selectedToppings,
  handleCheckBoxCheck,
}: PropType) => {
  const isCurrentSelectd = selectedToppings.some((element) => {
    return element.id === topping.id;
  });

  return (
    <Button
      variant={"outline"}
      className={cn(
        "flex flex-col h-28 w-24 relative ",
        isCurrentSelectd ? "border-primary border-2" : ""
      )}
      onClick={() => handleCheckBoxCheck(topping)}
    >
      <Image
        src={topping.image}
        width={80}
        height={80}
        alt={topping.name}
        style={{ height: "auto", width: "auto" }}
      />

      <h4 className="text-sm">{topping.name}</h4>
      <p>₹ {topping.price}</p>
      <CircleCheck
        size={24}
        className={cn(
          "absolute top-0 right-0 border-2 border-transparent rounded-full",
          isCurrentSelectd ? "text-primary" : ""
        )}
      />
    </Button>
  );
};

export default ToppingCard;
