import React from "react";
import Link from "next/link";

function ButtonMain({ text, href }) {
  return (
    <Link
      className="px-20 py-4 bg-pokeorange hover:bg-pokeblue transition hover:transition  text-white font-bold rounded-full text-2xl mt-10"
      href={href}
    >
      {text}
    </Link>
  );
}

export default ButtonMain;
