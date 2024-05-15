import React from "react";
import Image from "/src/components/Image";

const DealButton = ({text, icon}) => {
  return (
    <button type="submit" className="flex justify-center items-center p-3 text-xl px-16 space-x-3 rounded-3xl bg-pokeblue text-white hover:bg-pokeorange transition hover:transition">
      <Image src={icon} alt="button-deal" width={35} height={35} />
      {text}
    </button>
  );
};

export default DealButton;