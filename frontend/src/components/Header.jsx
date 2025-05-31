import React from 'react'
//import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@heroui/react";
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


export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const menuItems = [
        "Home",
        "Clients",
        "Services",
        "Projects",
        "About",
        "Contact",
        "Testimonial",
            
    ];
    return (
        <nav className="p-4">
            <Navbar onMenuOpenChange={setIsMenuOpen} className='bg-transparent w-max mx-auto ' >
                <NavbarContent>
                    <NavbarMenuToggle
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                        className="sm:hidden text-white"
                        
                    />
                    <NavbarBrand>
                        <p className="font-bold text-inherit text-white">Pritech Solutions</p>
                    </NavbarBrand>
                </NavbarContent>

                <NavbarContent className="hidden sm:flex gap-10 text-white" justify="between">
                    <NavbarItem className='text-white'>
                        <Link href="#">
                            Home
                        </Link>
                    </NavbarItem>

                    <NavbarItem>
                        <Link  href="#">
                            Clients
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link href="#">
                            Services
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link href="#">
                            Projects
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link href="#">
                            About
                        </Link>
                    </NavbarItem>

                </NavbarContent>

                <NavbarContent justify="end">

                    <NavbarItem>
                        <Button as={Link} href="#" variant="flat" className='text-white'>
                            Contact us
                        </Button>
                    </NavbarItem>

                </NavbarContent>
                <NavbarMenu >
                    {menuItems.map((item, index) => (
                        <NavbarMenuItem key={`${item}-${index}`}>
                            <Link
                                className="w-full text-white "
                                color={
                                    index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
                                }
                                href="#"
                                size="lg"
                            >
                                {item}
                            </Link>
                        </NavbarMenuItem>
                    ))}
                </NavbarMenu>
            </Navbar>
        </nav>
    )
}
