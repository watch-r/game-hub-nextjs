import { Button as Botton } from "@/components/ui/button";
import { Button, Container, Flex } from "@radix-ui/themes";
import TestPurposesOnly from "./test";
import Pagination from "./games/_components/Pagination";

export default async function Home() {
    return (
        <>
            <Container>
                <div>Hello World</div>
                <Flex direction="column" gap={"3"} width={"auto"}>
                    <Button>Button radix ui check</Button>
                    <Botton>Button shadcn ui check</Botton>
                    <TestPurposesOnly />
                    <Pagination itemCount={10} pageSize={2} currentpage={2}/>
                </Flex>
            </Container>
        </>
    );
}
