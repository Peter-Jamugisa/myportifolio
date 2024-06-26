// import "@fortawesome/fontawesome-free/css/all.css";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./dropdown-menu";
import { Menu } from "lucide-react";

const NavBar = () => {
  return (
    <>
      <div className=" px-4 sm:px-6 lg:px-8 fixed top-0 w-full rounded-xl z-50 ">
        <div
          className="px-4 sm:px-6 lg:px-8 bg-primary bg-opacity-60 backdrop-blur-md rounded-3xl bg-gradient-to-b from-teal-600 via-teal-600 to-teal-500"
          style={{
            background:
              "linear-gradient(-60deg, #143E4F 0%, rgba(33, 88, 110, 0.45) 70%)",
          }}
        >
          <div className="mt-7 p-4 md:p-5 flex md:flex-row justify-between items-center ">
            <div className="text-background text-white font-bold text-3xl mb-2 md:mb-0 md:mr-4">
              My Portifolio
            </div>

            <div className="hidden md:flex md:flex-row text-white items-center md:justify-center flex-grow space-x-4">
              <div className="flex items-center space-x-1 text-background font-heavy">
                <i className="text-white fa-solid fa-house-user"></i>
                <Link href="#Home"><div>Home</div></Link>
              </div>

              <div className="flex items-center space-x-1 text-background font-heavy">
                <i className="text-white fa-solid fa-circle-info"></i>
                <Link href="#About"><div>About</div></Link>
              </div>

              <div className="flex items-center space-x-1 text-background font-heavy">
                <i className="text-white fa-solid fa-user"></i>
                <Link href="#Projects"><div>Projects</div></Link>
              </div>

              <div className="flex items-center space-x-1 text-background font-heavy">
                <i className="text-white fa-solid fa-briefcase"></i>
                <Link href="#Services"><div>Services</div></Link>
              </div>
            </div>

            <DropdownMenu>
              <DropdownMenuTrigger className="md:hidden">
                <Menu color="white" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <Link href="#Home">
                  <DropdownMenuItem>
                    Home
                  </DropdownMenuItem>
                </Link>
                <Link href="#About">
                  <DropdownMenuItem>
                    About
                  </DropdownMenuItem>
                </Link>
                <Link href="#Projects">
                  <DropdownMenuItem>
                    Projects
                  </DropdownMenuItem>
                </Link>
                <Link href="#Services">
                  <DropdownMenuItem>
                    Services
                  </DropdownMenuItem>
                </Link>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
