import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

function NavList() {
  return (
    <ul className=" flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-10">
      <Typography
        as="li"
        variant="medium"
        className="p-1 font-small"
      >
        <a
          href="#"
          className="flex items-center text-white hover:text-white"
        >
          Home
        </a>
      </Typography>
      <Typography
        as="li"
        variant="medium"
        className="p-1 font-small"
      >
        <a
          href="#"
          className="flex items-center text-white hover:text-white"
        >
          About Us
        </a>
      </Typography>
      <Typography
        as="li"
        variant="medium" 
        className="p-1 font-small"
      >
        <a
          href="#"
          className="flex items-center text-white hover:text-white"
        >
          Venue
        </a>
      </Typography>
      <Typography
        as="li"
        variant="medium"
        className="p-1 font-small"
      >
        <a
          href="#"
          className="flex items-center text-white hover:text-white"
        >
          Contact
        </a>
      </Typography>
    </ul>
  );
}

export default function NavbarSimple() {
  const [openNav, setOpenNav] = React.useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <Navbar className="w-full mx-auto px-6 py-3 backdrop-blur-sm bg-opacity-40 bg-white sticky top-5 z-50">
      <div className="flex items-center justify-between text-white">
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="mr-4 ml-0 cursor-pointer py-1.5 text-white hover:text-white text-2xl"
        >
          LotteAvenue.
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
}
