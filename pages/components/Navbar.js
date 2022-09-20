/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Popover, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'


export default function Example() {
  return (
    <Popover className="relative bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-center justify-between border-b-2 border-gray-100 py-2 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="">
              <span className="sr-only">NFT Launch Kit</span>
              <Image
                className="h-8 w-auto sm:h-10"
                src="/logo.svg"
                width={125}
                height={38}
                alt="Home"
              />
            </a>
          </div>
          <div className="-my-2 -mr-2 md:hidden ">
            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:bg-gray-100 outline-none">
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden space-x-10 md:flex ">
            <button className="text-base font-medium text-gray-500 hover:text-gray-900">
              <Link href="/">Home</Link>
            </button>
            <button className="text-base font-medium text-gray-500 hover:text-gray-900">
              <Link href="/">Explore</Link>
            </button>
            <button className="text-base font-medium text-gray-500 hover:text-gray-900">
              <Link href="/">Pricing</Link>
            </button>
            <button className="text-base font-medium text-gray-500 hover:text-gray-900">
              <Link href="/">Membership</Link>
            </button>
          </Popover.Group>
          <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
            <div  className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-gray-900 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-green-500 transition-all hover:text-white hover:shadow-md active:shadow-none">
              <Link href="/dashboard"> Start Building </Link>
            </div>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel focus className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden z-20 ">
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ">
            <div className="px-5 pt-5 pb-6 z-1000">
              <div className="flex items-center justify-between">
                <div className="h-8 w-auto">
                  <Image
                    width={125}
                    height={38}
                    src="/logo.svg"
                    alt="Your Company"
                  />
                </div>{/* Mobile Nav Logo */}
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-200 focus:bg-gray-100 outline-none ">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>{/* Mobile Nav Close Menu Button */}
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  <button className="text-base font-medium text-gray-900 hover:text-gray-700">
                    <Link href="/" >
                      Home
                    </Link>
                  </button>{/* Mobile Nav Button -1 */}
                  <button className="text-base font-medium text-gray-900 hover:text-gray-700">
                    <Link href="/" className="text-base font-medium text-gray-900 hover:text-gray-700">
                      Explore
                    </Link>
                  </button>{/* Mobile Nav Button -2 */}
                  <button className="text-base font-medium text-gray-900 hover:text-gray-700">
                    <Link href="/" className="text-base font-medium text-gray-900 hover:text-gray-700">
                      Pricing
                    </Link>
                  </button>{/* Mobile Nav Button -3 */}
                  <button className="text-base font-medium text-gray-900 hover:text-gray-700">
                    <Link href="/" className="text-base font-medium text-gray-900 hover:text-gray-700">
                      Membership
                    </Link>
                  </button>{/* Mobile Nav Button -4 */}
                </nav>
              </div>
            </div>
            <div className="space-y-6 py-6 px-5">
              <div
                className="flex w-full items-center justify-center rounded-md border border-transparent bg-gray-900 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-gray-500"
              >
                <Link
                  href="/dashboard"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-gray-900 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-slate-600"
                >
                  Start Building
                </Link>
              </div>
            </div>{/* Mobile Start Building Button  */}
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}
