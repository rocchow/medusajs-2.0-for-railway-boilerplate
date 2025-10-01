"use client"

import { Popover, Transition } from "@headlessui/react"
import { ArrowRightMini, XMark } from "@medusajs/icons"
import { Text, clx, useToggleState } from "@medusajs/ui"
import { Fragment } from "react"

import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CountrySelect from "../country-select"
import { HttpTypes } from "@medusajs/types"

const SideMenuItems = {
  Home: "/",
  Shop: "/store",
  Search: "/search",
  Account: "/account",
  Cart: "/cart",
}

const SideMenu = ({ regions }: { regions: HttpTypes.StoreRegion[] | null }) => {
  const toggleState = useToggleState()

  return (
    <div className="h-full">
      <div className="flex items-center h-full">
        <Popover className="h-full flex">
          {({ open, close }) => (
            <>
              <div className="relative flex h-full">
                <Popover.Button
                  data-testid="nav-menu-button"
                  className="relative h-full flex items-center transition-all ease-out duration-200 focus:outline-none hover:text-ui-fg-base p-2"
                >
                  {/* Hamburger Icon */}
                  <div className="flex flex-col gap-1 w-6 h-6 justify-center">
                    <span className={clx(
                      "block w-6 h-0.5 bg-current transition-all duration-300 ease-in-out",
                      open ? "rotate-45 translate-y-1.5" : ""
                    )}></span>
                    <span className={clx(
                      "block w-6 h-0.5 bg-current transition-all duration-300 ease-in-out",
                      open ? "opacity-0" : ""
                    )}></span>
                    <span className={clx(
                      "block w-6 h-0.5 bg-current transition-all duration-300 ease-in-out",
                      open ? "-rotate-45 -translate-y-1.5" : ""
                    )}></span>
                  </div>
                </Popover.Button>
              </div>

              {/* Backdrop overlay */}
              <Transition
                show={open}
                as={Fragment}
                enter="transition-opacity ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div 
                  className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
                  onClick={close}
                />
              </Transition>

                  <Transition
                    show={open}
                    as={Fragment}
                    enter="transition ease-out duration-300"
                    enterFrom="opacity-0 -translate-x-full"
                    enterTo="opacity-100 translate-x-0"
                    leave="transition ease-in duration-200"
                    leaveFrom="opacity-100 translate-x-0"
                    leaveTo="opacity-0 -translate-x-full"
                  >
                    <Popover.Panel className="flex flex-col fixed w-[50vw] left-0 top-0 h-screen z-50 text-sm shadow-2xl">
                  <div
                    data-testid="nav-menu-popup"
                    className="flex flex-col h-full bg-gradient-to-br from-pink-50 via-white to-rose-50 justify-between p-6"
                  >
                    <div className="flex justify-end" id="xmark">
                      <button 
                        data-testid="close-menu-button" 
                        onClick={close}
                        className="p-2 hover:bg-pink-100 rounded-full transition-colors duration-200"
                      >
                        <XMark className="text-slate-700" />
                      </button>
                    </div>
                    <ul className="flex flex-col gap-6 items-start justify-start">
                      {Object.entries(SideMenuItems).map(([name, href]) => {
                        return (
                          <li key={name}>
                            <LocalizedClientLink
                              href={href}
                              className="text-2xl leading-10 text-slate-700 font-medium hover:text-pink-600 transition-colors duration-200"
                              onClick={close}
                              data-testid={`${name.toLowerCase()}-link`}
                            >
                              {name}
                            </LocalizedClientLink>
                          </li>
                        )
                      })}
                    </ul>
                    <div className="flex flex-col gap-y-6">
                      <div
                        className="flex justify-between items-center"
                        onMouseEnter={toggleState.open}
                        onMouseLeave={toggleState.close}
                      >
                        {regions && (
                          <CountrySelect
                            toggleState={toggleState}
                            regions={regions}
                          />
                        )}
                        <ArrowRightMini
                          className={clx(
                            "transition-transform duration-150 text-slate-700",
                            toggleState.state ? "-rotate-90" : ""
                          )}
                        />
                      </div>
                      <Text className="flex justify-between txt-compact-small text-slate-600">
                        © {new Date().getFullYear()} Beauty Store. All rights reserved.
                      </Text>
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
      </div>
    </div>
  )
}

export default SideMenu
