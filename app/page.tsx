import { Button as Botton } from "@/components/ui/button";
import { Button, Container, Flex } from "@radix-ui/themes";
// import TestPurposesOnly from "./test";
import Pagination from "./games/_components/Pagination";
import SortSelector from "./games/_components/SortSelector";

export default async function Home() {
    return (
        <>
            <Container>
                <div>Hello World</div>
                <Flex direction="column" gap={"3"} width={"auto"}>
                    <Button>Button radix ui check</Button>
                    <Botton>Button shadcn ui check</Botton>
                    {/* <SortSelector/> */}
                </Flex>
            </Container>
        </>
    );
}
