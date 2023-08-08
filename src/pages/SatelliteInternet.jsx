import React from "react";
import About from "./About";
import SatelliteInternetImg from "../assests/satellite-int.png";
import ProvidersCommon from "./ProvidersCommon";

const SatelliteInternet = () => {
  return (
    <div className="SatelliteInternet">
      <About heading="Satellite Internet" />
      <ProvidersCommon
        title="Satellite Internet"
        heading="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vulputate nisl nec diam convallis sodales. Pellentesque semper, tellus at lacinia suscipit, sapien erat tincidunt dolor, quis dictum leo augue id dui. Duis tincidunt nisl turpis, quis fringilla mi fringilla sit amet. Sed auctor, eros non hendrerit tincidunt, eros urna mattis tellus, vitae pellentesque turpis elit sit amet mi. Sed in nunc ac metus viverra ultrices. Integer imperdiet varius consectetur. Nulla id neque vel est varius viverra. Mauris ultricies commodo dui vitae eleifend. Quisque viverra turpis eu augue dapibus tristique.        "
        imageSrc={SatelliteInternetImg}
      />
    </div>
  );
};

export default SatelliteInternet;
