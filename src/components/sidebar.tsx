import {
  Cog6ToothIcon,
  HomeIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import Menu from "./menu";
import { ForwardRefExoticComponent, RefAttributes, SVGProps } from "react";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const navigation = [
  { name: "Dashboard", href: "#", icon: HomeIcon, current: true },
  { name: "Team", href: "#", icon: UsersIcon, current: false },
];

export default function Sidebar() {
  return (
    <>
      <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4">
        <div className="flex h-20 shrink-0 items-center font-semibold text-lg">
          A. Tool Compiler
        </div>
        <nav className="flex flex-1 flex-col">
          <ul role="list" className="flex flex-1 flex-col gap-y-7">
            <li>
              <Menu />
              <ul role="list" className="-mx-2 space-y-1 py-10">
                {navigation.map((item) => (
                  <PageNav item={item} key={item.name} />
                ))}
              </ul>
            </li>
            <li>
              <div className="text-xs font-semibold leading-6 text-gray-400"></div>
              <ul role="list" className="-mx-2 mt-2 space-y-1"></ul>
            </li>
            <li className="mt-auto">
              <a
                href="#"
                className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
              >
                <Cog6ToothIcon
                  className="h-6 w-6 shrink-0 text-gray-400 group-hover:text-indigo-600"
                  aria-hidden="true"
                />
                Settings
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

function PageNav({
  item,
}: {
  item: {
    name: string;
    href: string;
    icon: ForwardRefExoticComponent<
      Omit<SVGProps<SVGSVGElement>, "ref"> & {
        title?: string | undefined;
        titleId?: string | undefined;
      } & RefAttributes<SVGSVGElement>
    >;
    current: boolean;
  };
}) {
  return (
    <>
      <li key={item.name}>
        <a
          href={item.href}
          className={classNames(
            item.current
              ? "bg-gray-50 text-indigo-600"
              : "text-gray-700 hover:text-indigo-600 hover:bg-gray-50",
            "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
          )}
        >
          <item.icon
            className={classNames(
              item.current
                ? "text-indigo-600"
                : "text-gray-400 group-hover:text-indigo-600",
              "h-6 w-6 shrink-0"
            )}
            aria-hidden="true"
          />
          {item.name}
        </a>
      </li>
    </>
  );
}
