import React, { Fragment } from "react";

import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import styled from "./NavBar.module.css";

const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const NavBar = () => {
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-8 w-auto"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABCklEQVR4nO2WwWrCQBCGf/XUl6lij32BFu3RvkdPzuzFY1/EQvBsQShmpj30ZivkDWzfY8tujBVNlJJdhOIPPyw7k/+DDZkNYNIeSL/BagP7C0Zv4Rfhw603yQrRwnntHeIC/HYJ2Ab+LNvAcN7OM6oArqGuhvN2NWBkm76J0iuQPIF1klsSkPQ3IUbv/F5Rd73mtetrLqMSUIhlvP/C9HNTd+u985bx7/PHAUkJINsCZCWA5AzI/tURTUvqj+EAD+8X+beytpEOBpNWOMAxnR5AfkzsTsZlOACn12B5BuuLN+kMrPf1AcWwq6PRoWEXfVyTLHJIjQuH5aMaEMOIfum7X4sYEBdOcvMDa2lWPXpqi1YAAAAASUVORK5CYII="
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "rounded-md px-3 py-2 text-sm font-medium",
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEz0lEQVR4nN2Y7U9TVxzHm73Zkv0Hm9ve7iH7C7bEN0CfWxyIGWbLEuO2N3NummWLMU6E7fb23tKCmzACogidmyIPWpfFOVF77z2nrTxYnlogFis4QVjpbekD7W85F5xoBArclmXf5JuenHvuPZ+ec8/vnt9RKP7PUpm47VpGOGFg8ZjWjOaUJj6lM6OQweLiCiiu9MgReG5rwCqEN/UM7i6yecJlF4Opk64wnOuPwyV/Svqt7pqGD2p7wzoGC/nmnhdzCqekkFJHI5H+fTLt8KfBMbKC/WnYb/fNGyz4ci7h3iJwDXhuZbCRx+70p6DI6o6pTXxMz2Ck/J7LyyqgjsFe5spf6UzgHMt8zhsH27UpKKx0iWoafZkVuAKKz99V7QmvOq0jq/vX2zHQMyiipri3ZQc0sLix/FJwXaNXj0LQdCvyRF3ZpeCCnkWnZQfUs2j8tEfMGK65OwI7qz1QZHOD9eqDf+vP3IqAjkETsgNqaCHSOpDICM52bQqKbW644p2CwFQUdh33QPX1aelax9ACqE18XHZAFcUvkFX5NEzrQAKaPCLUOGfh6MW78GFtL3xS3weD98LwSMOTogR8fiABFwYToKGFedkBNWY0R4IwgaoTQvBpYz9ZlVBS7YY9db1woLkfav64A33jIXiWrL+NweH2AJzyhMHA4IDsgEbW5a0T/oZabhZKqhanbz6RgkzVH5yDkupusHVNg9GCr8oOqGUE27ed46ndNb1wfeghrFeR2AJoaAQHz47GVJRwUHZApUko332iJ62mBYjGF2AjUlI8vGd1p1V0FgAXdylY6mSjUlI8FFe5QWfGIdkB9QyaPXx+ZNOA33WOkTg4KzugkcUtx9pGk5sFLO8YWTBaUJPsgBqz8zU9i2ZUJgFS6fS64VLpNJB7yTMKjuFXFNlQHsW/YWBQckZMrBtwRkyAgUXJggrn64psqtjq4jnfzLoBncMPYafV5VRkW2qK3/u1feDxdyxDfdXSL6oobk/WAbcf+fOFQhbdx6OzmbKBMDIDRhZPqmyO5xW5kIri391hQZHhibUHkmwaCi1IzK/g3lHkUhpK0BpZBD/zwWd+k0mdnQsCaaOmeLViK6QkgbfdB0WVLrBeHoUHobhkUiZ1VIdfin1bAvcIkCgUTUL9tQC8f9wtmZRJHVFOAfOoG68qKX6fgXVxegZPkM5Xi9nkGmlD2pJ7VDT3WVaCtIoStulY3KI1o+j+Fn+EbN9beqKwt8ELzc7gioBnnEH4uMErtSWnDZ/bfRHyDK0ZN2vLuZflgaO5HSQfOdwWSFwYTD6VRsah9IduKGv1Sas1lkhJJuWjrT4o/bFbarP8HrLlP9QWiGtoQVSaeMOm4LQmdGBHpUtsdIVXTJDah5JQdvEufPRTH8l5JZMyyU/ahp78Q8t9Es9BYSUWNWbhiw2PnLESi2f75jecqDvW8C+3Y9Jpg4YWjOuDo4RtZFpJtpYtOMeST7lF0NKCmGe6+VLGgDoG2Q9dCMSyDedY8jetd+J6C27OOJRoaRRb7f2R2+1DSSB9kplbE5DEuf12XyRXcI4l72vxR0icXBOQHN9WdS0eU+TStq5pMFjwjQzeP3zf3pu9letYwSSY6xh8b01AFSVEyedpK6yihOiagP81/QMtKiPTAuQ3hAAAAABJRU5ErkJggg=="
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700",
                            )}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700",
                            )}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700",
                            )}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium",
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default NavBar;
