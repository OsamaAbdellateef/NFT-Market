import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <footer class="custom-footer  p-20 mt-40">
        <div class="md:flex md:justify-between">
          <div style={{ maxWidth: "430px" }} class="mb-6 md:mb-0 ">
            <a href="/" target="_blank" class="flex items-center">
              <>
                <img src="./logo.png" class="mr-4 h-10" alt="FlowBite Logo" />
              </>
            </a>
            <p
              style={{
                fontSize: "1rem",
                fontWeight: "200",
                fontStyle: "italic",
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa sint
              libero laborum
              <br /> cum magni blanditiis vero exercitationem. Quaerat quia
              laudantium temporibus dolore a minus modi cupiditate! Aliquid
              iusto incidunt facilis.
            </p>
          </div>
          <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h3 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Explore
              </h3>
              <ul>
                <li class="mb-4">
                  <a
                    href="https://flowbite.com"
                    target="_blank"
                    class="text-gray-600 hover:underline dark:text-gray-400"
                  >
                    About us
                  </a>
                </li>
                <li>
                  <a
                    href="https://tailwindcss.com/"
                    target="_blank"
                    rel="nofollow"
                    class="text-gray-600 hover:underline dark:text-gray-400"
                  >
                    Terms and Conditions
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                About Us
              </h3>
              <ul>
                <li class="mb-4">
                  <a
                    href="https://github.com/themesberg/flowbite"
                    target="_blank"
                    class="text-gray-600 hover:underline dark:text-gray-400"
                  >
                    Github
                  </a>
                </li>
                <li>
                  <a
                    href="https://discord.gg/4eeurUVvTy"
                    target="_blank"
                    class="text-gray-600 hover:underline dark:text-gray-400"
                  >
                    Discord
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Terms and Conditions
              </h3>
              <ul>
                <li class="mb-4">
                  <a
                    href="#"
                    target="_blank"
                    class="text-gray-600 hover:underline dark:text-gray-400"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    target="_blank"
                    class="text-gray-600 hover:underline dark:text-gray-400"
                  >
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div class="sm:flex sm:items-center sm:justify-between">
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            <a
              href="https://flowbite.com"
              target="_blank"
              class="hover:underline"
            >
              Flowbite™
            </a>
            © 2021 OpenSky. All rights reserved{" "}
          </span>
          <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            <a href="#">OpenSky.com</a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
