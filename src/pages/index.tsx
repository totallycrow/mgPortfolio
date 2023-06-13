import Image from "next/image";

import { Header } from "@/components/header/Header";
import { GridContainer } from "@/components/grid/GridContainer";

import StaticImageCard from "@/components/grid/StaticImageCard";
import ShowcaseImageCard from "@/components/grid/ShowcaseImageCard";

export default function Home() {
  return (
    <div>
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
  );
}
