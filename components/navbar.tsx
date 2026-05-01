"use client";

import { useState } from "react";
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";

import { Image } from "@nextui-org/react";
import { link as linkStyles } from "@nextui-org/theme";
import NextLink from "next/link";
import clsx from "clsx";
import { FaAngleDown } from "react-icons/fa";

import { ThemeSwitch } from "@/components/theme-switch";
import { siteConfig } from "@/config/site";
import { cld } from "@/utils/cloudinary";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);

  return (
    <nav aria-label="Main Navigation">
      <NextUINavbar
        maxWidth="2xl"
        position="static"
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        className="bg-sky-600 text-white shadow-md fixed top-0 left-0 w-full z-50"
      >
        {/* LEFT */}
        <NavbarContent justify="start">
          <NavbarBrand>
            <NextLink
              href="/"
              aria-label="Homepage"
              className="flex items-center gap-2"
            >
              <Image
                src={cld("v1728902101/bp2mmtxztn5xuzjdeuop.png", {
                  width: 50,
                  height: 50,
                  crop: "fit",
                  quality: "auto",
                  format: "auto",
                })}
                alt="Company Logo"
                width={50}
                height={50}
                className="object-contain"
              />
            </NextLink>
          </NavbarBrand>

          {/* DESKTOP MENU */}
          <NavbarContent className="hidden lg:flex gap-6 ml-6">
            {siteConfig.navItems.map((item) => (
              <NavbarItem key={item.href}>
                {item.href === "/products" ? (
                  <Dropdown placement="bottom-start">
                    <DropdownTrigger>
                      <button className="flex items-center gap-1 font-medium text-white hover:text-gray-200">
                        {item.label}
                        <FaAngleDown />
                      </button>
                    </DropdownTrigger>

                    <DropdownMenu className="min-w-[220px]">
                      {item.items?.map((productItem) => (
                        <DropdownItem
                          key={productItem.href}
                          textValue={productItem.product}
                        >
                          <NextLink
                            href={`/${productItem.href}`}
                            className="block w-full"
                          >
                            {productItem.product}
                          </NextLink>
                        </DropdownItem>
                      ))}
                    </DropdownMenu>
                  </Dropdown>
                ) : (
                  <NextLink
                    href={item.href}
                    className={clsx(
                      linkStyles({ color: "foreground" }),
                      "font-medium text-white hover:text-gray-200"
                    )}
                  >
                    {item.label}
                  </NextLink>
                )}
              </NavbarItem>
            ))}
          </NavbarContent>
        </NavbarContent>

        {/* RIGHT DESKTOP */}
        <NavbarContent justify="end" className="hidden lg:flex">
          <ThemeSwitch />
        </NavbarContent>

        {/* MOBILE TOP */}
        <NavbarContent justify="end" className="lg:hidden">
          <ThemeSwitch />
          <NavbarMenuToggle />
        </NavbarContent>

        {/* MOBILE MENU (FIXED) */}
        <NavbarMenu className="bg-blue-700 text-white">
          {siteConfig.navItems.flatMap((item) => {
            // PRODUCTS MENU
            if (item.href === "/products") {
              const elements = [];

              // Toggle button
              elements.push(
                <NavbarMenuItem key={`toggle-${item.href}`}>
                  <button
                    type="button"
                    aria-expanded={mobileProductsOpen}
                    onClick={() =>
                      setMobileProductsOpen(!mobileProductsOpen)
                    }
                    className="flex items-center justify-between w-full font-medium"
                  >
                    {item.label}
                    <FaAngleDown
                      className={`transition-transform duration-300 ${
                        mobileProductsOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </NavbarMenuItem>
              );

              // Sub items
              if (mobileProductsOpen) {
                item.items?.forEach((productItem) => {
                  elements.push(
                    <NavbarMenuItem key={`product-${productItem.href}`}>
                      <NextLink
                        href={`/${productItem.href}`}
                        onClick={() => {
                          setIsMenuOpen(false);
                          setMobileProductsOpen(false);
                        }}
                        className="text-sm ml-4"
                      >
                        {productItem.product}
                      </NextLink>
                    </NavbarMenuItem>
                  );
                });
              }

              return elements;
            }

            // NORMAL MENU
            return [
              <NavbarMenuItem key={item.href}>
                <NextLink
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="font-medium"
                >
                  {item.label}
                </NextLink>
              </NavbarMenuItem>,
            ];
          })}
        </NavbarMenu>
      </NextUINavbar>
    </nav>
  );
};