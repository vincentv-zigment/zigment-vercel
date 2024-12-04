"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// lib
import { cn } from "@/lib/utils";

// types
import { MenuDataType } from "@/types";

// shadcn components
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

type Props = {
  headerNav: MenuDataType;
};

const Menu = ({ headerNav }: Props) => {
  const pathname = usePathname();

  if (!(headerNav && headerNav.length)) {
    return null;
  }

  function onNavChange() {
    setTimeout(() => {
      const triggers = document.querySelectorAll(
        '.submenu-trigger[data-state="open"]'
      );
      if (triggers.length === 0) return;

      const firstTrigger = triggers[0] as HTMLElement;
      const viewports = document.getElementsByClassName("submenu-viewport");

      if (viewports.length > 0) {
        const viewport = viewports[0] as HTMLElement;
        viewport.style.left = `${firstTrigger.offsetLeft}px`;
      }
    });
  }
  return (
    <NavigationMenu onValueChange={onNavChange}>
      <NavigationMenuList className="flex-wrap">
        {headerNav.map((menu, i) => (
          <NavigationMenuItem key={`menu_item-${i}`} className="">
            {menu.hasChildren ? (
              <>
                <NavigationMenuTrigger className="submenu-trigger hover:text-theme flex items-center font-medium text-[16px] leading-none text-primary py-[36px] capitalize">
                  {menu.name}
                </NavigationMenuTrigger>
                {menu.children && menu.children.length && (
                  <NavigationMenuContent>
                    <div className="bg-white-3 w-[250px] border-primary p-4">
                        {menu.children.map((childMenu, j) => {
                          return (<Link key={`child_menu-${i}${j}`}
                            href={childMenu.path}
                            className={`
                              hover:text-theme flex items-center font-medium text-[16px] leading-none text-primary py-[10px] capitalize
                              ${
                                pathname &&
                                  (pathname === childMenu.path + "/" ||
                                    pathname === childMenu.path)
                                  ? "text-theme"
                                  : ""
                              }
                            `}
                          >
                            {childMenu.name}
                          </Link>)
                        })}
                    </div>
                    {/* <NavigationMenuList className="bg-primary block py-[18px] w-[250px]">
                      {menu.children.map((childMenu, j) => (
                            <Link key={`child_menu-${i}${j}`}
                              href={childMenu.path}
                              className={`
                                hover:text-theme flex items-center font-medium text-[16px] leading-none text-white py-[10px] capitalize
                                ${
                                  pathname &&
                                    (pathname === childMenu.path + "/" ||
                                      pathname === childMenu.path)
                                    ? "text-theme"
                                    : ""
                                }
                              `}
                            >
                              {childMenu.name}
                            </Link>
                      ))}
                    </NavigationMenuList> */}
                  </NavigationMenuContent>
                )}
              </>
            ) : (
              <NavigationMenuLink asChild>
                <Link
                  href={menu.path}
                  className={cn(
                    "hover:text-theme flex items-center font-medium text-[16px] leading-none text-primary p-4  py-[27px] capitalize",
                    pathname &&
                      (pathname === menu.path + "/" || pathname === menu.path)
                      ? "text-theme"
                      : ""
                  )}
                >
                  {menu.name}
                </Link>
              </NavigationMenuLink>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Menu;
