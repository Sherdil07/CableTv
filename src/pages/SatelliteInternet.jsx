import React from "react";
import HeroCommon from "./HeroCommon";
import SatelliteInternetImg from "../assests/satellite-int.png";
import ProvidersCommon from "./ProvidersCommon";
import HeroSection from "./HeroSection";
import { Helmet } from "react-helmet";

const SatelliteInternet = () => {
  return (
    <div className="SatelliteInternet">
      {/* START POINT FOR SEO PURPOSE */}
      <Helmet>
        <title>About Us - Your Website</title>
        <meta
          name="description"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat tortor lorem, quis tempor felis commodo vel."
        />
        <meta name="slug" content="about-us" />
      </Helmet>
      {/* END POINT FOR SEO PURPOSE */}
      <HeroCommon
        heading="Satellite Internet"
        description="Satellite Internet Description"
      />
      <ProvidersCommon
        title="Satellite Internet"
        heading="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vulputate nisl nec diam convallis sodales. Pellentesque semper, tellus at lacinia suscipit, sapien erat tincidunt dolor, quis dictum leo augue id dui. Duis tincidunt nisl turpis, quis fringilla mi fringilla sit amet. Sed auctor, eros non hendrerit tincidunt, eros urna mattis tellus, vitae pellentesque turpis elit sit amet mi. Sed in nunc ac metus viverra ultrices. Integer imperdiet varius consectetur. Nulla id neque vel est varius viverra. Mauris ultricies commodo dui vitae eleifend. Quisque viverra turpis eu augue dapibus tristique. Donec eget purus dictum mi interdum efficitur. Duis eu ex vel orci pulvinar blandit feugiat nec ex. Sed posuere augue ut sodales aliquam. Praesent ac orci at ex placerat congue. Sed ac erat non felis vulputate iaculis. Praesent facilisis nunc nec tortor aliquam iaculis. Nulla nibh lorem, ultrices vitae nibh a, malesuada blandit ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        imageSrc={SatelliteInternetImg}
      />
      <HeroSection />
    </div>
  );
};

export default SatelliteInternet;
