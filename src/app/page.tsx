import Hero from "@cruzco/components/sections/hero";
import dynamic from "next/dynamic";
import AboutUs from "@cruzco/components/sections/about-us";
const DynamicMainProject = dynamic(
  () => import("@cruzco/components/sections/main-project"),
);
const DynamicNextProjects = dynamic(
  () => import("@cruzco/components/sections/next-projects"),
);
const DynamicContactUs = dynamic(
  () => import("@cruzco/components/sections/contact-us"),
);

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <DynamicMainProject />
      <DynamicNextProjects />
      <DynamicContactUs />
    </>
  );
}
