import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import React from "react";
import Image from "next/image";
import Dialog from "./CardDialog";
import { Product } from "@/lib/types";

export type ProductCardProps = {
  product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card className="border-none rounded-xl shadow-lg">
      <CardHeader className="flex justify-center p-4">
        <Image
          alt="product-image"
          src={product.image}
          width={150}
          height={150}
          style={{ height: "auto", width: "auto" }}
          className="rounded-md"
        />
      </CardHeader>
      <CardContent className="p-4">
        <h2 className="text-lg font-bold text-center">{product.name}</h2>
        <p className="mt-2 text-sm text-center">{product.description}</p>
      </CardContent>
      <CardFooter className="flex justify-between items-center p-4">
        <p className="text-base">
          <span>From </span>
          <span className="font-bold">₹{}</span>
        </p>
        <Dialog product={product} />
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
