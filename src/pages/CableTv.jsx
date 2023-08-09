import React from "react";
import ProvidersCommon from "./ProvidersCommon";
import CableTvImg from "../assests/cable-tv.png";
import HeroCommon from "./HeroCommon";
import HeroSection from "./HeroSection";
      

const CableTv = () => {
  return (
    <div className="CableTv">
      <HeroCommon heading="Cable Tv" description="Cable Tv Description" />
      <ProvidersCommon
        title="Cable Tv"
        heading="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vulputate nisl nec diam convallis sodales. Pellentesque semper, tellus at lacinia suscipit, sapien erat tincidunt dolor, quis dictum leo augue id dui. Duis tincidunt nisl turpis, quis fringilla mi fringilla sit amet. Sed auctor, eros non hendrerit tincidunt, eros urna mattis tellus, vitae pellentesque turpis elit sit amet mi. Sed in nunc ac metus viverra ultrices. Integer imperdiet varius consectetur. Nulla id neque vel est varius viverra. Mauris ultricies commodo dui vitae eleifend. Quisque viverra turpis eu augue dapibus tristique.        "
        imageSrc={CableTvImg}
      />
      <HeroSection/>
    </div>
  );
};

export default CableTv;
