"use client";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/AboutUs" },
  { name: "Portfolio", href: "/Portfolio" },
  { name: "Services", href: "/Services" },
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const pathname = usePathname();
  return (
    <Disclosure as="nav" className="bg-darkShade3  p-3 border-grayshade1">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>

              <Image
                aria-hidden="true"
                className="block size-5 group-data-[open]:hidden"
                src="/icon.png"
                alt="menu"
                width={34}
                height={34}
              />

              <XMarkIcon
                aria-hidden="true"
                className="hidden size-6 group-data-[open]:block"
              />
            </DisclosureButton>
          </div>
          <div className="flex    flex-1 items-center justify-center sm:items-center sm:justify-start">
            <div className="flex  shrink-0 items-center">
              <Image
                className="max-w-xl"
                width={150}
                alt="logo"
                height={150}
                src="/wesleylogo.svg"
              />
            </div>
            <div className="hidden sm:ml-6 flex-1   sm:block">
              <div className="flex justify-center space-x-4">
                {Navigation.map((item) => {
                  console.log(pathname);

                  const currentpathname = pathname === item.href;
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      aria-current={currentpathname ? "page" : undefined}
                      className={classNames(
                        currentpathname
                          ? "bg-darkShade4 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "rounded-md px-3 py-2 text-sm font-medium"
                      )}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
          <button className="rounded flex items-center justify-center gap-2 bg-darkShade3 border border-darkShade4 py-2 px-4 text-sm text-white data-[hover]:bg-sky-500 data-[active]:bg-sky-700">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
            </span>
            Contact Me
          </button>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {Navigation.map((item) => {
            const currentpathname = pathname === item.href;

            return (
              <DisclosureButton
                key={item.name}
                as="a"
                href={item.href}
                aria-current={currentpathname ? "page" : undefined}
                className={classNames(
                  currentpathname
                    ? "bg-darkShade4 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white",
                  "block rounded-md px-3 py-2 text-base font-medium"
                )}
              >
                {item.name}
              </DisclosureButton>
            );
          })}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
