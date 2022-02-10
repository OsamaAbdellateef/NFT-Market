import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "next/link";

const Breadcrumb = ({ links }) => {
  return (
    <div className="breadcrumb-container my-5 pb-4">
      <nav className="flex" aria-label=" Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          {links.map((l, index) => (
            <>
              <li className="inline-flex items-center">
                <a
                  href={l === "home" ? "/" : { l }}
                  className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                >
                  <>
                    {l}
                    {links.length === index + 1 ? null : (
                      <FontAwesomeIcon
                        className="ml-4"
                        icon={faAngleDoubleRight}
                      />
                    )}
                  </>
                </a>
              </li>
            </>
          ))}
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;
