import Image from "next/image";
import { CldImage } from "next-cloudinary";

import { Header } from "@/components/header/Header";
import { GridContainer } from "@/components/grid/GridContainer";

import StaticImageCard from "@/components/grid/StaticImageCard";
import ShowcaseImageCard from "@/components/grid/ShowcaseImageCard";
import Layout from "@/components/ui/Layout";

export default function Home() {
  return (
    <Layout>
      <main>
        <div>Hello World!</div>
        <GridContainer>
          <ShowcaseImageCard
            imageUrl="https://via.placeholder.com/1080x1080/eee?text=1:1"
            hoverText="Lorem ipsum dolor sit amet"
            link="#"
          />

          <CldImage
            width="600"
            height="600"
            src="v1686668032/cld-sample-4.jpg"
            alt={"test"}
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
          <StaticImageCard imageUrl="https://via.placeholder.com/1080x1080/eee?text=1:1" />
          <StaticImageCard imageUrl="https://via.placeholder.com/1080x1080/eee?text=1:1" />
        </GridContainer>
      </main>
    </Layout>
  );
}
