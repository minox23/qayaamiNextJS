// import { Popover, PopoverButton, PopoverPanel, Transition } from "@headlessui/react";
// import { ChevronDownIcon } from "@heroicons/react/20/solid";
// import Link from "next/link";
// import {
//   ArrowPathIcon,
//   ChartPieIcon,
//   CursorArrowRaysIcon,
//   SquaresPlusIcon,
// } from "@heroicons/react/24/outline";

// const solutions = [
//   {
//     name: "Advertise",
//     description: "Get a better understanding of your traffic",
//     href: "#",
//     icon: ChartPieIcon,
//   },
//   {
//     name: "Manage Business",
//     description: "Connect with third-party tools and find out expectations",
//     href: "#",
//     icon: SquaresPlusIcon,
//   },
//   {
//     name: "Engagement",
//     description: "Speak directly to your customers with our engagement tool",
//     href: "#",
//     icon: CursorArrowRaysIcon,
//   },
//   {
//     name: "Find services",
//     description: "Build strategic funnels that will convert",
//     href: "#",
//     icon: ArrowPathIcon,
//   },
// ];

// export default function Example() {
//   return (
//     <Popover>
//       <PopoverButton className="flex group focus:outline-none ring-blue-600 items-center gap-x-1 text-sm font-semibold leading-6 text-gray-800 hover:text-gray-700">
//         <span>Features</span>
//         <ChevronDownIcon
//           aria-hidden="true"
//           className="relative top-[1px] ml-1 h-5 w-5 transition duration-300 group-data-[open]:rotate-180"
//         />
//       </PopoverButton>
//       <Transition appear={false}>
//       <PopoverPanel 
//       className="absolute ml-48 z-10 mt-3 flex -translate-x-1/2 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in shadow-gray-400 rounded-md shadow-2xl">
//         <div className="w-screen flex-auto overflow-hidden rounded-md bg-white text-sm leading-6 ring-1 ring-gray-900/5 max-w-2xl">
//           <div className="grid gap-1 p-2 grid-cols-2">
//             {solutions.map((item) => (
//               <div
//                 key={item.name}
//                 className="group relative flex gap-x-4 rounded-lg p-3 hover:bg-gray-50"
//               >
//                 <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
//                   <item.icon
//                     aria-hidden="true"
//                     className="h-6 w-6 text-gray-600 group-hover:text-blue-600"
//                   />
//                 </div>
//                 <div>
//                   <Link
//                     href={item.href}
//                     className="font-semibold text-gray-900"
//                   >
//                     {item.name}
//                     <span className="absolute inset-0" />
//                   </Link>
//                   <p className="mt-1 text-gray-600">{item.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <div className="bg-gray-50 px-8 py-4">
//             <div className="flex items-center gap-x-3">
//               <h3 className="text-sm font-semibold leading-6 text-gray-900">
//                 Engagement
//               </h3>
//               <p className="rounded-full bg-indigo-600/10 px-2.5 py-1.5 text-xs font-semibold text-blue-600">
//                 Coming soon
//               </p>
//             </div>
//             <p className="mt-2 text-sm leading-6 text-gray-600">
//               Transform your business and track engagement with even more
//               advanced tools.
//             </p>
//           </div>
//         </div>
//       </PopoverPanel>
//       </Transition>
//     </Popover>
//   );
// }

import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'

export default function Example() {
  return (
    <Popover className="relative">
      <PopoverButton>Solutions</PopoverButton>
      <PopoverPanel anchor="bottom" className="flex flex-col">
        <a href="/analytics">Analytics</a>
        <a href="/engagement">Engagement</a>
        <a href="/security">Security</a>
        <a href="/integrations">Integrations</a>
      </PopoverPanel>
    </Popover>
  )
}