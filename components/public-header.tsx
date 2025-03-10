import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const navItems = [
  { name: "Features", href: "#features" },
  { name: "How It Works", href: "#how-it-works" },
  { name: "Use Cases", href: "#use-cases" },
];

const PublicHeader = () => {
  return (
    <header className="bg-gray-900 shadow-md px-2 sm:px-3 md:px-0">
      <div className="container mx-auto py-4">
        <nav className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center space-x-3">
              <div className="relative h-8 w-8 sm:h-10 sm:w-10">
                <img
                  src='https://th.bing.com/th/id/OIP.FjihlHgcigNpqR4kzuK_QgHaFj?w=276&h=208&c=7&r=0&o=5&dpr=1.5&pid=1.7'
                  className="rounded-lg"
                  height={100}
                  width={100}
                />
              </div>
              <div className="flex flex-col">
                <span className="text-base sm:text-lg font-bold text-white whitespace-nowrap">
                  Scriptify
                </span>
                <span className="hidden sm:block text-xs text-gray-600 whitespace-nowrap">
                  AI Content,Instantly!
                </span>
              </div>
            </Link>
          </div>
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-white transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <SignedIn>
              <Link href="/dashboard">
                <Button className="w-full border-[#704ef8] text-[#704ef8] hover:bg-[#704ef8] hover:text-white bg-slate-200">
                  Dashboard
                </Button>
              </Link>
              <UserButton />
            </SignedIn>
            <SignedOut>
              <Link href="/sign-in">
                <Button
                  variant="outline"
                  className="w-full border-[#704ef8] text-[#704ef8] hover:bg-[#704ef8] hover:text-white bg-slate-200"
                >
                  Log In
                </Button>
              </Link>
              <Link href="/sign-up">
                <Button className="w-full bg-[#704ef8] text-white hover:bg-[#5a3cc7]">
                  Sign Up
                </Button>
              </Link>
            </SignedOut>
          </div>
          <Sheet>
            <div className="flex items-center gap-2 md:hidden">
              <SignedIn>
                <Link href="/dashboard">
                  <Button
                    className="w-full hidden md:flex border-[#704ef8] text-[#704ef8] hover:bg-[#704ef8] hover:text-white bg-slate-200"
                    size={"sm"}
                  >
                     Dashboard
                  </Button>
                </Link>
                <UserButton />
              </SignedIn>
              <SignedOut>
                <Link href="/sign-in">
                  <Button variant="outline" size={"sm"}>
                    Log In
                  </Button>
                </Link>
              </SignedOut>
              <SheetTrigger asChild>
                <button className="">
                  <Menu className="h-6 w-6" />
                </button>
              </SheetTrigger>
            </div>
            <SheetContent
              side="right"
              className="w-[300px] sm:w-[400px] bg-gray-800"
            >
              <SheetHeader>
                <SheetTitle className="text-left">
                  AI Content Generator
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col space-y-4 mt-8">
                <SignedIn>
                  
                </SignedIn>
                {navItems.map((item) => (
                  <SheetClose key={item.name} className="text-left">
                    <Link
                      href={item.href}
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {item.name}
                    </Link>
                  </SheetClose>
                ))}
                <Link href="/dashboard">
                    <Button className="text-gray-300 hover:text-white transition-colors w-full">
                      Dashboard
                    </Button>
                  </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </header>
  );
};

export default PublicHeader;
