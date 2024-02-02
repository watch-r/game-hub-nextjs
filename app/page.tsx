"use client";
import SearchInput from "@/components/SearchInput";
import { Button as Botton } from "@/components/ui/button";
import { Button, Container, Flex, Select } from "@radix-ui/themes";

export default function Home() {
    // console.log(games)
    return (
        <>
            <Container>
                <div>Hello World</div>
                <Flex direction='column' gap={"3"} width={"min-content"}>
                    <Button>Button radix ui check</Button>
                    <Botton>Button shadcn ui check</Botton>
                    <SearchInput />
                </Flex>
            </Container>
        </>
    );
}
