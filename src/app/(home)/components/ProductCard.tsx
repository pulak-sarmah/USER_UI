import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export type Product = {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
};

type ProductCardProps = {
  product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card className="border-none rounded-xl">
      <CardHeader className="items-center flex justify-center">
        <Image
          alt="product-image"
          src={product.image}
          width={150}
          height={150}
          style={{ height: "auto", width: "auto" }}
        />
      </CardHeader>
      <CardContent>
        <h2 className="text-xl font-bold">{product.name}</h2>
        <p className="mt-2">{product.description}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <p>
          <span>From </span>
          <span className="font-bold">₹{product.price}</span>
        </p>
        <Button className="bg-primary hover:bg-primary-foreground text-neutral hover:text-primary px-6 py-2 rounded-full shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150">
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
