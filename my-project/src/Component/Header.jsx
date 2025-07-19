import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@heroui/react";

export const AcmeLogo = () => {
  return (
    <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
      <path
        clipRule="evenodd"
        d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = ["Product", "Pricing", "Customers", "Solutions", "Log Out"];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="bg-[#002228]">
      <NavbarContent>
        <NavbarBrand>
          <img src="Logo.png" />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4 " justify="center ">
        <NavbarItem>
          <Link className="text-white" href="#">
            About Us
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link className="text-white" href="#">
            Pricing
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link className="text-white" href="#">
            Customers
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link className="text-white" href="#">
            Solutions
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden md:flex  ">
          <Button variant="solid" className="text-black bg-[#0FF1F6]">
            Book a Demo
          </Button>
        </NavbarItem>
        <NavbarItem className="hidden md:flex">
          <Button variant="bordered" className="text-white">
            Contact Us
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className=" ">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full "
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="sm:hidden text-white "
      />
    </Navbar>
  );
}

export default Header;
