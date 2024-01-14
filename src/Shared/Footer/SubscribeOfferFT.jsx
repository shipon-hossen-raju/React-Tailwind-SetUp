import React from "react";
import Input from "../../Components/Inputs/Input";
import Identity from "../Header/Identity";

const SubscribeOfferFT = () => {
  return (
    <>
      <Identity style="!text-white" />

      <button>Subscribe</button>

      <p> Get 10% of your first order </p>
      <div>
        <Input />
      </div>
    </>
  );
};

export default SubscribeOfferFT;
