import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const ProductCardSkeleton = () => {
  return (
    <Card className="border-none rounded-xl ">
      <div className="flex justify-center p-4">
        <Skeleton className="h-[300px] w-[300px] rounded-md" />
      </div>
      <div className="p-4">
        <Skeleton className="h-6 w-3/4 mx-auto" />{" "}
        <Skeleton className="mt-2 h-4 w-2/3 mx-auto" />{" "}
      </div>
      <div className="flex justify-between items-center p-4">
        <Skeleton className="h-5 w-1/4" />
      </div>
    </Card>
  );
};

export default ProductCardSkeleton;
