"use client";

//we have to mark this page also to be client side rendered
//as onclick events does not works on SSR components
import React, { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

const links = ["all", "Next 13", "frontend", "backend", "fullStack"];

const Filters = () => {
  const [active, setActive] = useState("");
  const router = useRouter();

  const handleFilter = (link: string) => {
    setActive(link);
  };

  return (
    <ul className="text-white-800 body-text no-scrollbar flex w-full max-w-full gap-2 overflow-auto py-12 sm:max-w-2xl">
      {links.map((link) => (
        <button
          key={link}
          className={`${
            active === link ? "gradient_blue-purple" : ""
          } whitespace-nowrap rounded-lg px-8 py-2.5 capitalize`}
          onClick={() => handleFilter(link)}
        >
          {link}
        </button>
      ))}
    </ul>
  );
};

export default Filters;
