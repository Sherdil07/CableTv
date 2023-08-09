import React from "react";
import ProvidersCommon from "./ProvidersCommon";
import CableTvImg from "../assests/cable-tv.png";
import HeroCommon from "./HeroCommon";
import HeroSection from "./HeroSection";
import "../styles/CableTv.css";

const CableTv = () => {
  return (
    <div className="CableTv">
      <HeroCommon
        heading="Cable Tv"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat tortor lorem, quis tempor felis commodo vel."
      />
      <ProvidersCommon
        imageSrc={CableTvImg}
        title="Cable Tv"
        heading="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vulputate nisl nec diam convallis sodales. Pellentesque semper, tellus at lacinia suscipit, sapien erat tincidunt dolor, quis dictum leo augue id dui. Duis tincidunt nisl turpis, quis fringilla mi fringilla sit amet. Sed auctor, eros non hendrerit tincidunt, eros urna mattis tellus, vitae pellentesque turpis elit sit amet mi. Sed in nunc ac metus viverra ultrices. Integer imperdiet varius consectetur. Nulla id neque vel est varius viverra. Mauris ultricies commodo dui vitae eleifend. Quisque viverra turpis eu augue dapibus tristique. Donec eget purus dictum mi interdum efficitur. Duis eu ex vel orci pulvinar blandit feugiat nec ex. Sed posuere augue ut sodales aliquam. Praesent ac orci at ex placerat congue. Sed ac erat non felis vulputate iaculis. Praesent facilisis nunc nec tortor aliquam iaculis. Nulla nibh lorem, ultrices vitae nibh a, malesuada blandit ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
      />
      <HeroSection />
    </div>
  );
};

export default CableTv;
