import { Link } from "react-router-dom";
import sachitlogo from "@/assets/Logo/sachit-logo.png";
import logo from "@/assets/Logo/logo.png";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { ModeToggle } from "./mode-toggle";
import { useTheme } from "./theme-provider";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";
import { Menu } from "lucide-react";

interface RouteProps {
  href: string;
  label: string;
}

const mainRoutes: RouteProps[] = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/cv",
    label: "CV",
  },

  {
    href: "/contact",
    label: "Contact",
  },

  // {
  //   href: "/projects",
  //   label: "Projects",
  // },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const { theme } = useTheme();

  return (
    <header className="relative border-b-[1px] top-0 z-40 w-full font-mono bg-white dark:border-b-slate-700 dark:bg-background">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container h-20 px-4 w-screen flex justify-between items-center">
          <NavigationMenuItem>
            <Link to="/" className="ml-2 font-bold text-xl flex items-center">
              <img
                src={logo}
                alt="MonalTech"
                width={200}
              />
            </Link>
          </NavigationMenuItem>

          {/* mobile */}
          <span className="flex md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger className="px-2">
                <Menu
                  className="flex md:hidden h-5 w-5"
                  onClick={() => setIsOpen(true)}
                >
                  <span className="sr-only">Menu Icon</span>
                </Menu>
              </SheetTrigger>

              <SheetContent side={"left"}>
                <SheetHeader></SheetHeader>
                <nav className="flex flex-col justify-center items-center gap-2 mt-4">
                  <ModeToggle />
                  {mainRoutes.map((route) => (
                    <Link
                      key={route.label}
                      to={route.href}
                      className={`text-[17px] ${{ variant: "ghost" }}`}
                    >
                      {route.label}
                    </Link>
                  ))}
                  <div className="relative"></div>
                </nav>
              </SheetContent>
            </Sheet>
          </span>

          {/* Desktop menu */}
          <nav className="hidden md:flex gap-10 items-center">
            {mainRoutes.map((route) => (
              <Link
                key={route.label}
                to={route.href}
                className={`text-[17px] ${{ variant: "ghost" }}`}
              >
                {route.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex gap-2 items-center">
            <ModeToggle />
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};
