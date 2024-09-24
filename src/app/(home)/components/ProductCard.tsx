import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import React from "react";
import Image from "next/image";
import Dialog from "./CardDialog";

export type Product = {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
};

export type ProductCardProps = {
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
        <Dialog product={product} />
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
