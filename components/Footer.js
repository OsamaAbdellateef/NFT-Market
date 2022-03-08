import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="custom-footer  p-20 mt-40">
        <div className="container mx-auto">
          <div className="md:flex md:justify-between container">
            <div style={{ maxWidth: "430px" }} className="mb-6 md:mb-0 ">
              <Link href="/">
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center"
                >
                  <>
                    <img
                      src="./logo.png"
                      className="mr-4 h-10"
                      alt="FlowBite Logo"
                    />
                  </>
                </a>
              </Link>
              <p
                style={{
                  fontSize: "1rem",
                  fontWeight: "200",
                  fontStyle: "italic",
                }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                sint libero laborum
                <br /> cum magni blanditiis vero exercitationem. Quaerat quia
                laudantium temporibus dolore a minus modi cupiditate! Aliquid
                iusto incidunt facilis.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h3 className="mb-6 text-sm font-semibold  uppercase text-white">
                  Explore
                </h3>
                <ul>
                  <li className="mb-4">
                    <a
                      href="https://flowbite.com"
                      target="_blank"
                      rel="noreferrer"
                      className="text-gray-200 hover:underline "
                    >
                      About us
                    </a>
                  </li>
                  <li>
                    <Link href="https://tailwindcss.com/">
                      <a
                        target="_blank"
                        rel="noreferrer"
                        rel="nofollow"
                        className="text-gray-300 hover:underline "
                      >
                        Terms and Conditions
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="mb-6 text-sm font-semibold  uppercase text-white">
                  About Us
                </h3>
                <ul>
                  <li className="mb-4">
                    <a
                      href="https://github.com/themesberg/flowbite"
                      target="_blank"
                      rel="noreferrer"
                      className="text-gray-300 hover:underline "
                    >
                      Github
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://discord.gg/4eeurUVvTy"
                      target="_blank"
                      rel="noreferrer"
                      className="text-gray-300 hover:underline "
                    >
                      Discord
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="mb-6 text-sm font-semibold  uppercase text-white">
                  Terms and Conditions
                </h3>
                <ul>
                  <li className="mb-4">
                    <a
                      href="#"
                      target="_blank"
                      rel="noreferrer"
                      className="text-gray-300 hover:underline "
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      target="_blank"
                      rel="noreferrer"
                      className="text-gray-300 hover:underline "
                    >
                      Terms &amp; Conditions
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-200 sm:text-center ">
              <a
                href="https://flowbite.com"
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                Flowbite™
              </a>
              © 2021 OpenSky. All rights reserved{" "}
            </span>
            <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
              <a href="#">OpenSky.com</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
