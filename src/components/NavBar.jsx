import { useState } from "react";
import { Dialog, Popover } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { navLinks } from "../db";
import { NavLink } from "react-router-dom";
import LogoName from "./LogoName";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white text-black w-full shadow-md">
      <nav className="mx-auto flex max-w-7xl lg:max-w-[85%] items-center justify-between p-4 lg:px-8">
        <div className="flex lg:flex-1">
          <a href="#" className="flex items-center gap-2">
            <LogoName />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2.5 text-black"
            onClick={() => setMobileMenuOpen(true)}>
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          {navLinks.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              className={({ isActive }) =>
                `text-sm font-semibold leading-6 ${
                  isActive
                    ? "text-primary border-b-2 border-primary transition duration-300 ease-in-out"
                    : "text-black hover:text-gray-600 transition duration-300 ease-in-out"
                }`
              }>
              {item.name}
            </NavLink>
          ))}
          <NavLink
            to={"/contact-us"}
            className="hidden lg:block text-sm font-semibold py-1 px-4 bg-primary rounded-md leading-6 text-white hover:bg-secondary hover:text-black transition duration-300 ease-in-out">
            Contact Us
          </NavLink>
        </Popover.Group>
      </nav>

      {/* Mobile Menu */}
      <Dialog
        as="div"
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}>
        <div
          className={`fixed inset-0 z-10 bg-black transition-opacity duration-500 ${
            mobileMenuOpen
              ? "overlay-enter opacity-60"
              : "overlay-exit opacity-0"
          }`}
          aria-hidden="true"
        />
        <Dialog.Panel
          className={`fixed inset-y-0 right-0 z-20 w-4/5 max-w-sm bg-black text-white transform transition-transform duration-500 ease-in-out ${
            mobileMenuOpen ? "mobile-menu-enter" : "mobile-menu-exit"
          }`}>
          <div className="flex items-center justify-between p-6">
            <a href="#" className="flex items-center gap-2">
              <LogoName />
            </a>
            <button
              type="button"
              className="rounded-md p-2.5 text-gray-400"
              onClick={() => setMobileMenuOpen(false)}>
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {navLinks.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={({ isActive }) =>
                    `block text-center text-lg font-semibold py-2 px-4 rounded-md transition duration-300 ease-in-out ${
                      isActive
                        ? "bg-secondary text-black"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white"
                    }`
                  }>
                  {item.name}
                </NavLink>
              ))}
              <NavLink
                to={"/contact-us"}
                className="block mt-4 w-full text-center text-lg font-semibold py-2 px-4 bg-primary rounded-md text-white hover:bg-secondary transition duration-300 ease-in-out">
                Contact Us
              </NavLink>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
