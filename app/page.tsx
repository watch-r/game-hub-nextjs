import NavBar from "@/components/NavBar";
import { Button as Botton } from "@/components/ui/button";
import { Button, Container, Flex } from "@radix-ui/themes";
import Image from "next/image";

export default function Home() {
    return (
        <>
            <Container>
                <div>Hello World</div>
                <Flex direction='column' gap={"3"} width={"auto"}>
                    <Button>Button radix ui check</Button>
                    <Botton>Button shadcn ui check</Botton>
                </Flex>
            </Container>
        </>
    );
}
