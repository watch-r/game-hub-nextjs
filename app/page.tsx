import { Button as Botton } from "@/components/ui/button";
import { Button, Container, Flex } from "@radix-ui/themes";
// import TestPurposesOnly from "./test";
import Pagination from "./games/_components/Pagination";
import SortSelector from "./games/_components/SortSelector";
import PlatformGameFilterList from "./games/_components/PlatformGameFilterList";
import SearchInput from "@/components/SearchInput";
import { fetchTest } from "./api/FetchData";
// import { fetchThings } from "./api/games/route";

export default async function Home() {
    const games = await fetchTest();
    // console.log(games)
    return (
        <>
            <Container>
                <div>Hello World</div>
                <Flex direction='column' gap={"3"} width={"auto"}>
                    <Button>Button radix ui check</Button>
                    <Botton>Button shadcn ui check</Botton>
                    {/* <SortSelector/> */}
                    <SearchInput />
                </Flex>
            </Container>
        </>
    );
}
