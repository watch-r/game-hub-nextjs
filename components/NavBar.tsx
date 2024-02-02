"use client";
import { Avatar, Container, Flex } from "@radix-ui/themes";
import classnames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PiGameControllerDuotone } from "react-icons/pi";
import SearchInput from "./SearchInput";
import { ModeToggle } from "./ui/toggleMode";

const NavBar = () => {
    return (
        <>
            <nav className='border-b-2 px-5 mb-1 py-3'>
                <Container>
                    <Flex gap='4' direction={"row"} justify={"between"}>
                        <Flex align={"center"} gap={"2"}>
                            <Link href='/'>
                                <PiGameControllerDuotone size={"2rem"} />
                            </Link>
                            <NavLinks />
                            <SearchInput />
                        </Flex>
                        <Flex align={"center"} gap={"2"}>
                            <ModeToggle />
                            <Avatar fallback='?' radius='full' />
                        </Flex>
                    </Flex>
                </Container>
            </nav>
        </>
    );
};
const NavLinks = () => {
    const currentPath = usePathname();

    const links = [{ label: "Games", href: "/games" }];
    return (
        <ul className='flex space-x-6'>
            {links.map((link) => (
                <li key={link.href}>
                    <Link
                        href={link.href}
                        className={classnames({
                            "nav-link": true,
                            "!text-zinc-900 dark:!text-zinc-100":
                                link.href === currentPath,
                        })}
                    >
                        {link.label}
                    </Link>
                </li>
            ))}
        </ul>
    );
};
export default NavBar;
