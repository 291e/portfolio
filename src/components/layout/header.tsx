"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetClose,
  SheetFooter,
} from "@/components/ui/sheet";
import { Menu, Home, FolderKanban, Code, Mail, XIcon } from "lucide-react";

const navItems = [
  { name: "홈", href: "/", icon: <Home className="h-4 w-4 mr-2" /> },
  {
    name: "프로젝트",
    href: "/projects",
    icon: <FolderKanban className="h-4 w-4 mr-2" />,
  },
  { name: "스킬", href: "/skills", icon: <Code className="h-4 w-4 mr-2" /> },
  { name: "연락처", href: "/contact", icon: <Mail className="h-4 w-4 mr-2" /> },
];

export function Header() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300 flex justify-center",
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b"
          : "bg-transparent"
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="font-bold text-xl">
          Portfolio
        </Link>

        {/* 모바일 메뉴 */}
        <div className="flex md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="flex flex-col">
              <div className="flex items-center justify-between mb-6">
                <SheetTitle className="text-lg font-bold">메뉴</SheetTitle>
                <SheetClose asChild>
                  <Button variant="ghost" size="icon">
                    <XIcon className="h-4 w-4" />
                  </Button>
                </SheetClose>
              </div>

              <nav className="flex flex-col space-y-1 flex-grow">
                {navItems.map((item) => (
                  <SheetClose asChild key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        "flex items-center px-4 py-3 rounded-md transition-all",
                        "hover:bg-accent hover:text-accent-foreground",
                        pathname === item.href
                          ? "bg-primary/10 text-primary font-medium"
                          : "text-muted-foreground"
                      )}
                    >
                      {item.icon}
                      <span>{item.name}</span>
                      {pathname === item.href && (
                        <div className="w-1 h-5 bg-primary rounded-full ml-auto" />
                      )}
                    </Link>
                  </SheetClose>
                ))}
              </nav>

              <SheetFooter className="mt-auto border-t py-4">
                <div className="flex items-center justify-between w-full px-2">
                  <span className="text-sm text-muted-foreground">
                    테마 변경
                  </span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() =>
                      setTheme(theme === "dark" ? "light" : "dark")
                    }
                  >
                    <SunIcon className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <MoonIcon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    <span className="sr-only">테마 변경</span>
                  </Button>
                </div>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>

        {/* 데스크탑 메뉴 */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm text-muted-foreground hover:text-foreground transition-colors",
                pathname === item.href && "text-foreground font-medium"
              )}
            >
              {item.name}
            </Link>
          ))}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <SunIcon className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <MoonIcon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">테마 변경</span>
          </Button>
        </nav>
      </div>
    </header>
  );
}
