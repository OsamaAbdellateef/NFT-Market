import React from "react";
import { Link } from "next/link";

const SeeAll = ({ href }) => {
  return (
    <div>
      <Link href={href}>
        <a className="text-slate-500 underline text-xs">See All</a>
      </Link>
    </div>
  );
};

export default SeeAll;
