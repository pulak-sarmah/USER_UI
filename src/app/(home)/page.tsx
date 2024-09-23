import { Button } from "@/components/ui/button";
import pizza from "../../../public/pizza.jpg";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {
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
        <div className=" container mx-auto py-12">
          <Tabs defaultValue="pizza" className="w-[400px]">
            <TabsList>
              <TabsTrigger value="pizza" className="text-md">
                Pizza
              </TabsTrigger>
              <TabsTrigger value="berverages" className="text-md">
                Berverages
              </TabsTrigger>
            </TabsList>
            <TabsContent value="pizza">Pizza list.</TabsContent>
            <TabsContent value="berverages">Braverages List.</TabsContent>
          </Tabs>
        </div>
      </section>
    </>
  );
}
