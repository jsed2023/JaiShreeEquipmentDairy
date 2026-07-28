"use client";

import { useState } from "react";
import NextLink from "next/link";
import Image from "next/image";
import { Dropdown, Label } from "@heroui/react";
import { FaAngleDown } from "react-icons/fa";

import { ThemeSwitch } from "@/components/theme-switch";
import { siteConfig } from "@/config/site";
import { cld } from "@/utils/cloudinary";

export const Navbar = () => {
  // =========================
  // STATE
  // =========================

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [mobileProductsOpen, setMobileProductsOpen] =
    useState(false);

  // =========================
  // CLOSE MOBILE MENU
  // =========================

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
    setMobileProductsOpen(false);
  };

  return (
    <nav
      aria-label="Main Navigation"
      className="
        sticky
        top-0
        z-50
        w-full
        bg-sky-300
        text-black
        shadow-md
      "
    >
      {/* =========================
          MAIN NAVBAR
      ========================= */}

      <div
        className="
          mx-auto
          flex
          h-16
          w-full
          items-center
          px-3
          sm:px-4
          lg:px-3
          xl:px-4
        "
      >
        {/* =========================
            LOGO
        ========================= */}

        <NextLink
          href="/"
          aria-label="Jai Shree Equipment Dairy homepage"
          onClick={closeMobileMenu}
          className="
            flex
            shrink-0
            items-center
            justify-center
          "
        >
          <Image
            src={cld(
              "v1728902101/bp2mmtxztn5xuzjdeuop.png",
              {
                width: 50,
                height: 50,
                crop: "fit",
                quality: "auto",
                format: "auto",
              }
            )}
            alt="Jai Shree Equipment Dairy Logo"
            width={50}
            height={50}
            sizes="50px"
            priority
            className="
              size-12
              object-contain
            "
          />
        </NextLink>

        {/* =========================
            DESKTOP NAVIGATION
        ========================= */}

        <ul
          className="
            ml-4
            hidden
            min-w-0
            flex-1
            items-center
            justify-between
            gap-2
            lg:flex
            xl:ml-6
            xl:gap-3
          "
        >
          {siteConfig.navItems.map((item) => (
            <li
              key={item.href}
              className="
                flex
                shrink-0
                items-center
                whitespace-nowrap
              "
            >
              {/* =========================
                  PRODUCTS DROPDOWN
              ========================= */}

              {item.href === "/products" ? (
                <Dropdown>
                  <Dropdown.Trigger
                    aria-label={`${item.label} menu`}
                    className="
                      flex
                      cursor-pointer
                      items-center
                      gap-1
                      whitespace-nowrap
                      bg-transparent
                      p-0
                      text-sm
                      font-medium
                      text-black
                      outline-none
                      transition-colors
                      hover:text-gray-700
                      xl:text-base
                    "
                  >
                    <span className="text-black">
                      {item.label}
                    </span>

                    <FaAngleDown
                      aria-hidden="true"
                      className="
                        shrink-0
                        text-xs
                        text-black
                      "
                    />
                  </Dropdown.Trigger>

                  {/* =========================
                      DROPDOWN POPOVER
                  ========================= */}

                  <Dropdown.Popover
                    placement="bottom start"
                    className="
                      min-w-55
                      bg-white
                      text-black
                    "
                  >
                    <Dropdown.Menu
                      aria-label={`${item.label} categories`}
                    >
                      {item.items?.map(
                        (productItem) => (
                          <Dropdown.Item
                            key={productItem.href}
                            id={productItem.href}
                            textValue={
                              productItem.product
                            }
                          >
                            <NextLink
                              href={`/${productItem.href}`}
                              className="
                                block
                                w-full
                                whitespace-nowrap
                                text-black
                              "
                            >
                              <Label className="cursor-pointer text-black">
                                {productItem.product}
                              </Label>
                            </NextLink>
                          </Dropdown.Item>
                        )
                      )}
                    </Dropdown.Menu>
                  </Dropdown.Popover>
                </Dropdown>
              ) : (
                /* =========================
                    NORMAL DESKTOP LINK
                ========================= */

                <NextLink
                  href={item.href}
                  className="
                    block
                    whitespace-nowrap
                    text-sm
                    font-medium
                    text-black
                    transition-colors
                    hover:text-gray-700
                    xl:text-base
                  "
                >
                  {item.label}
                </NextLink>
              )}
            </li>
          ))}
        </ul>

        {/* =========================
            RIGHT SIDE
        ========================= */}

        <div
          className="
            ml-auto
            flex
            shrink-0
            items-center
            gap-2
            lg:ml-3
          "
        >
          {/* =========================
              THEME SWITCH
          ========================= */}

          <div className="text-black">
            <ThemeSwitch className="text-black" />
          </div>

          {/* =========================
              MOBILE MENU BUTTON
          ========================= */}

          <button
            type="button"
            aria-label={
              isMenuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() =>
              setIsMenuOpen(
                (previous) => !previous
              )
            }
            className="
              flex
              size-10
              cursor-pointer
              flex-col
              items-center
              justify-center
              gap-1.5
              lg:hidden
            "
          >
            {/* TOP LINE */}

            <span
              aria-hidden="true"
              className={`
                h-0.5
                w-6
                bg-black
                transition-transform
                duration-300
                ${
                  isMenuOpen
                    ? "translate-y-2 rotate-45"
                    : ""
                }
              `}
            />

            {/* MIDDLE LINE */}

            <span
              aria-hidden="true"
              className={`
                h-0.5
                w-6
                bg-black
                transition-opacity
                duration-300
                ${
                  isMenuOpen
                    ? "opacity-0"
                    : ""
                }
              `}
            />

            {/* BOTTOM LINE */}

            <span
              aria-hidden="true"
              className={`
                h-0.5
                w-6
                bg-black
                transition-transform
                duration-300
                ${
                  isMenuOpen
                    ? "-translate-y-2 -rotate-45"
                    : ""
                }
              `}
            />
          </button>
        </div>
      </div>

      {/* =========================
          MOBILE NAVIGATION
      ========================= */}

      {isMenuOpen && (
        <div
          id="mobile-navigation"
          className="
            border-t
            border-black/10
            bg-sky-600
            text-black
            shadow-lg
            lg:hidden
          "
        >
          <ul
            className="
              flex
              flex-col
              px-4
              py-3
            "
          >
            {siteConfig.navItems.map((item) => {
              // =========================
              // PRODUCTS MOBILE MENU
              // =========================

              if (item.href === "/products") {
                return (
                  <li
                    key={item.href}
                    className="
                      border-b
                      border-black/10
                    "
                  >
                    <button
                      type="button"
                      aria-expanded={
                        mobileProductsOpen
                      }
                      aria-controls="mobile-products-menu"
                      onClick={() =>
                        setMobileProductsOpen(
                          (previous) =>
                            !previous
                        )
                      }
                      className="
                        flex
                        w-full
                        cursor-pointer
                        items-center
                        justify-between
                        py-3
                        font-medium
                        text-black
                      "
                    >
                      <span className="text-black">
                        {item.label}
                      </span>

                      <FaAngleDown
                        aria-hidden="true"
                        className={`
                          text-black
                          transition-transform
                          duration-300
                          ${
                            mobileProductsOpen
                              ? "rotate-180"
                              : ""
                          }
                        `}
                      />
                    </button>

                    {/* =========================
                        MOBILE PRODUCTS SUBMENU
                    ========================= */}

                    {mobileProductsOpen && (
                      <ul
                        id="mobile-products-menu"
                        className="
                          space-y-1
                          pb-3
                          pl-4
                        "
                      >
                        {item.items?.map(
                          (productItem) => (
                            <li
                              key={
                                productItem.href
                              }
                            >
                              <NextLink
                                href={`/${productItem.href}`}
                                onClick={
                                  closeMobileMenu
                                }
                                className="
                                  block
                                  rounded-md
                                  px-3
                                  py-2
                                  text-sm
                                  font-medium
                                  text-black
                                  transition-colors
                                  hover:bg-black/10
                                  hover:text-black
                                "
                              >
                                {
                                  productItem.product
                                }
                              </NextLink>
                            </li>
                          )
                        )}
                      </ul>
                    )}
                  </li>
                );
              }

              // =========================
              // NORMAL MOBILE LINKS
              // =========================

              return (
                <li
                  key={item.href}
                  className="
                    border-b
                    border-black/10
                    last:border-b-0
                  "
                >
                  <NextLink
                    href={item.href}
                    onClick={closeMobileMenu}
                    className="
                      block
                      py-3
                      font-medium
                      text-black
                      transition-colors
                      hover:text-gray-700
                    "
                  >
                    {item.label}
                  </NextLink>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </nav>
  );
};