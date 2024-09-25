"use client";

import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { Product } from "@/lib/types";
import { Button } from "@/components/ui/button";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import ProductCardSkeleton from "./ProductCardSkeliton";

type PaginationProps = {
  categoryId: string;
};

export default function Pagination({ categoryId }: PaginationProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  const perPage = 20;

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const productsResponse = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/catalog/products?categoryId=${categoryId}&page=${page}&perPage=${perPage}`
      );
      const productsData = await productsResponse.json();
      setProducts(productsData.data);
      setTotalPages(productsData.totalPages);
      setLoading(false);
    };

    fetchProducts();
  }, [page, categoryId]);

  const handleNextPage = () => {
    if (page < totalPages) setPage(page + 1);
  };

  const handlePreviousPage = () => {
    if (page > 1) setPage(page - 1);
  };

  return (
    <>
      {loading ? (
        <ProductCardSkeleton />
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-4">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      )}

      <div className="flex justify-center space-x-4 mt-6">
        <Button
          variant={"outline"}
          size={"icon"}
          onClick={handlePreviousPage}
          disabled={page === 1}
        >
          <ArrowLeft />
        </Button>
        <span className="self-center">Page {page}</span>
        <Button
          onClick={handleNextPage}
          variant={"outline"}
          size={"icon"}
          disabled={page === totalPages}
        >
          <ArrowRight />
        </Button>
      </div>
    </>
  );
}
