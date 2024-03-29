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
            imageUrl="v1686736457/eee_jywdre.png"
            hoverText="Lorem ipsum dolor sit amet"
            link="#"
          />

          <CldImage
            width="600"
            height="600"
            src="v1686736457/eee_jywdre"
            alt={"test"}
          />

          <CldImage
            width="600"
            height="600"
            src="v1686736457/eee_jywdre"
            alt={"test cloudi"}
          />

          <Image
            width="600"
            height="600"
            src="https://res.cloudinary.com/dhwauc0fb/image/upload/v1686736457/eee_jywdre.png"
            alt={"test nextImage"}
          />

          <CldImage
            width="600"
            height="600"
            src="v1686736457/eee_jywdre"
            alt={"test cloudi"}
          />

          <CldImage
            width="600"
            height="600"
            src="v1686736457/eee_jywdre"
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
