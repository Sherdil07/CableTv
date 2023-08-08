import React from "react";
import About from "./About";
import ProvidersCommon from "./ProvidersCommon";
import CableTvImg from "../assests/cable-tv.png";

const CableTv = () => {
  return (
    <div className="CableTv">
      <About heading="Cable Tv" />
      <ProvidersCommon
        title="Cable Tv"
        heading="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vulputate nisl nec diam convallis sodales. Pellentesque semper, tellus at lacinia suscipit, sapien erat tincidunt dolor, quis dictum leo augue id dui. Duis tincidunt nisl turpis, quis fringilla mi fringilla sit amet. Sed auctor, eros non hendrerit tincidunt, eros urna mattis tellus, vitae pellentesque turpis elit sit amet mi. Sed in nunc ac metus viverra ultrices. Integer imperdiet varius consectetur. Nulla id neque vel est varius viverra. Mauris ultricies commodo dui vitae eleifend. Quisque viverra turpis eu augue dapibus tristique.        "
        imageSrc={CableTvImg}
      />
    </div>
  );
};

export default CableTv;
