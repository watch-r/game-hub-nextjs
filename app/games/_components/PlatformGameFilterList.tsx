"use client";
import { Platform } from "@/app/lib/TypeDefinations";
import { Select } from "@radix-ui/themes";
import { useRouter, useSearchParams } from "next/navigation";

type MyPageProps = {
    platforms: Platform[];
};

const PlatformGameFilterList = ({ platforms }: MyPageProps) => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const handleValueChange = (p: string) => {
        const params = new URLSearchParams();
        if (p !== "all") params.append("platform", p);
        if (searchParams.get("search"))
            params.append("search", searchParams.get("search")!);
        if (searchParams.get("genres"))
            params.append("genres", searchParams.get("genres")!);
        if (searchParams.get("sortOrder"))
            params.append("sortOrder", searchParams.get("sortOrder")!);
        const query = params.size ? "?" + params.toString() : "";
        router.push("/games" + query);
    };
    return (
        <>
            <Select.Root
                defaultValue={searchParams.get("platform") || "all"}
                onValueChange={handleValueChange}
            >
                <Select.Trigger variant='soft' />
                <Select.Content position='popper' className='h-60'>
                    <Select.Item value={"all"}>All</Select.Item>
                    {platforms.map((p: Platform) => (
                        <Select.Item key={p.id} value={p.id.toString()}>
                            {p.name}
                        </Select.Item>
                    ))}
                </Select.Content>
            </Select.Root>
        </>
    );
};

export default PlatformGameFilterList;
