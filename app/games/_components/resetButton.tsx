"use client";
import { ReloadIcon } from "@radix-ui/react-icons";
import { IconButton, Tooltip } from "@radix-ui/themes";
import { useRouter } from "next/navigation";

const ResetButton = () => {
    const router = useRouter();
    return (
        <Tooltip content='Reset'>
            <IconButton
                variant='soft'
                onClick={() => {
                    router.push("/games");
                    router.refresh();
                }}
            >
                <ReloadIcon radius='full' />
            </IconButton>
        </Tooltip>
    );
};

export default ResetButton;
