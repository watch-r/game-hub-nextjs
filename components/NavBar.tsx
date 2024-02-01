"use client";
import { usePathname } from "next/navigation";
import { ModeToggle } from "./ui/toggleMode";
import Link from "next/link";
import classnames from "classnames";
import { Container, Flex, Avatar } from "@radix-ui/themes";
import { PiGameControllerDuotone } from "react-icons/pi";

const NavBar = () => {
    return (
        <>
            <nav className='border-b px-5 mb-5 py-3'>
                <Container>
                    <Flex justify={"between"}>
                        <Flex align='center' gap='4'>
                            <Link href='/'>
                                <PiGameControllerDuotone size={"2rem"} />
                            </Link>
                            <NavLinks />
                        </Flex>
                        <Flex align='center' gap='5'>
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

    const links = [
        { label: "Games", href: "/games" },
    ];
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
