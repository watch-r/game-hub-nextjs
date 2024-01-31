"use client";

import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import { useTheme } from "next-themes";
import { Button } from "@radix-ui/themes";

export function ModeToggle() {
    const { theme, setTheme } = useTheme();

    return (
        <Button
            radius="full"        
            variant='surface'
            className='h-8 w-8 '
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
            <IoSunnyOutline className='h-4 w-4 absolute rotate-0 scale-100 transition-all dark:scale-0 dark:-rotate-90' />
            <IoMoonOutline className='h-4 w-4 absolute rotate-90 scale-0 transition-all dark:scale-100 dark:rotate-0' />
            {/* <span className='sr-only'> Toogle theme</span> */}
        </Button>
    );
}

