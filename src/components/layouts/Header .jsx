'use client';
import React from "react";
import Link from "next/link";
import Search from "./Search";
import Image from "next/image";
import { User, Badge } from "@nextui-org/react";
import { CartIcon } from "../CartIcon";


import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


const Header = () => {
  const [isInvisible, setIsInvisible] = React.useState(false);
  return (
    <header className="bg-white py-2 border-b">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 mr-5">
            <Link href="/#">
              <Image
                src="/images/nextjs.png"
                style={{ height: "auto", width: "auto" }}
                height={60}
                width={70}
                alt="BuyItNow"
              />
            </Link>
          </div>
          <Search />

          <div className="flex items-center space-x-2 ml-auto">
            <Link
              href="/#"
              className=" px-3 py-2 inline-block text-center text-gray-700 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 hover:border-gray-300"
            >
              <i className="text-gray-400 w-5 fa fa-shopping-cart"></i>
              <span className="hidden lg:inline ml-1">
                Cart (<b>0</b>)
              </span>
            </Link>

            {/* <Badge color="danger" content={5} isInvisible={isInvisible} shape="circle">
              <CartIcon size={30} />
            </Badge> */}



            <Link
              href="/#"
              className="px-3 py-2 inline-block text-center text-gray-700 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 hover:border-gray-300"
            >
              <i className="text-gray-400 w-5 fa fa-user"></i>
              <span className="hidden lg:inline ml-1">Sign in</span>
            </Link>
            {/* <Link href="/#"> */}
              <div className="flex items-center mb-4 space-x-3 mt-4 cursor-pointer">
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open user menu</span>
                      <Image
                        style={{ width: "auto", height: "auto" }}
                        src={"/images/default.png"}
                        alt="logo"
                        width="40"
                        height="40"
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
                          <Link
                            href="/#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Your Profile
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            href="/#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Settings
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            href="/#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Sign out
                          </Link>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
                <div className="space-y-1 font-medium">
                  <p>
                    Clinton
                    <time className="block text-sm text-gray-500 dark:text-gray-400">
                      Clinton@gmail.com
                    </time>
                  </p>
                </div>
              </div>
            {/* </Link> */}

            {/* ---- */}

            {/* ---- */}


            {/* <User
              name="Clinton Mejia"
              description={(
                <Link href="https://twitter.com/jrgarciadev" size="xs" isexternal="true">
                  @ClintonDev
                </Link>
              )}
              avatarProps={{
                src: "https://avatars.githubusercontent.com/u/107317012?v=4"
              }}
            /> */}
          </div>




          <div className="lg:hidden ml-2">
            <button
              type="button"
              className="bg-white p-3 inline-flex items-center rounded-md text-black hover:bg-gray-200 hover:text-gray-800 border border-transparent"
            >
              <span className="sr-only">Open menu</span>
              <i className="fa fa-bars fa-lg"></i>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;