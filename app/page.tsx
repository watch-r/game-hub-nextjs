import SimpleSlider from "@/components/AutoCaroasal";
import { Container, Flex, Heading } from "@radix-ui/themes";
import { fetchGamesWithParameters } from "./lib/data";

export default async function Home() {
    const { count, results } = await fetchGamesWithParameters(
        '5');
    return (
        <>
            <Container className="justify-center">
                <div className="mx-5">
                    <Heading size={"7"}>Top Games</Heading>
                    <SimpleSlider games={results}/>
                </div>
            </Container>
        </>
    );
}
