import Image from "next/image";
import { Inter } from "next/font/google";
import { Header } from "@/components/header/Header";
import { GridContainer } from "@/components/GridContainer";
import { GridItemCard } from "@/components/GridItemCard";
import StaticImageCard from "@/components/StaticImageCard";
import ShowcaseImageCard from "@/components/ShowcaseImageCard";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Header />
      <div className="container mx-auto">
        <main>
          <div>Hello World!</div>
          <GridContainer>
            <ShowcaseImageCard
              imageUrl="https://via.placeholder.com/1080x1080/eee?text=1:1"
              hoverText="Lorem ipsum dolor sit amet"
              link="#"
            />
            <ShowcaseImageCard
              imageUrl="https://via.placeholder.com/1080x1080/eee?text=1:1"
              hoverText="Lorem ipsum dolor sit amet"
              link="#"
            />
            <ShowcaseImageCard
              imageUrl="https://via.placeholder.com/1080x1080/eee?text=1:1"
              hoverText="Lorem ipsum dolor sit amet"
              link="#"
            />
            <ShowcaseImageCard
              imageUrl="https://via.placeholder.com/1080x1080/eee?text=1:1"
              hoverText="Lorem ipsum dolor sit amet"
              link="#"
            />

            <StaticImageCard imageUrl="https://via.placeholder.com/1080x1080/eee?text=1:1" />
            <StaticImageCard imageUrl="https://via.placeholder.com/1080x1080/eee?text=1:1" />
          </GridContainer>
        </main>
      </div>
    </div>
  );
}
