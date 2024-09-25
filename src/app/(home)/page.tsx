import { Button } from "@/components/ui/button";
import pizza from "../../../public/pizza.jpg";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Category } from "@/lib/types";
import Pagination from "./components/Pagination";

export default async function Home() {
  // Fetch categories only (no need to fetch products here)
  const categoryResponse = await fetch(
    `${process.env.BACKEND_URL}/api/catalog/categories`,
    {
      next: {
        revalidate: 3600,
      },
    }
  );

  if (!categoryResponse.ok) {
    throw new Error("Failed to fetch categories");
  }

  const categories: Category[] = await categoryResponse.json();

  return (
    <>
      <section className="bg-neutral py-12 lg:py-24">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="col-span-1 lg:col-span-6 order-2 lg:order-1 flex flex-col justify-center items-center lg:items-start pl-4">
            <h1 className="text-4xl lg:text-6xl font-black leading-tight text-center lg:text-left">
              Super Delicious Pizza <br />
              <span className="text-primary">Only in 45 Minutes!</span>
            </h1>
            <p className="text-lg lg:text-2xl mt-4 lg:mt-6 max-w-lg leading-snug text-center lg:text-left">
              Enjoy a Free Meal if Your Order Takes More than 45 Minutes!
            </p>
            <Button className="mt-6 lg:mt-8 text-lg rounded-full py-4 px-6 font-bold">
              Get it Now
            </Button>
          </div>
          <div className="col-span-1 lg:col-span-6 order-1 lg:order-2 flex justify-center pl-4">
            <Image src={pizza} alt="Delicious pizza" width={600} />
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto py-10">
          <Tabs defaultValue="pizza">
            <TabsList className="mb-8 border-primary border-2">
              {categories.map((category) => (
                <TabsTrigger
                  key={category._id}
                  value={category.name.toLocaleLowerCase()}
                  className="text-md"
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
            {categories.map((category) => (
              <TabsContent
                key={category._id}
                value={category.name.toLocaleLowerCase()}
              >
                {/* Use Pagination component to fetch and display products */}
                <Pagination categoryId={category._id} />
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
    </>
  );
}
