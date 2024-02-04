import SimpleSlider from "@/components/AutoCaroasal";
import { Container, Flex, Heading } from "@radix-ui/themes";
import { fetchGamesWithParameters } from "./lib/data";

export default async function Home() {
    const { results } = await fetchGamesWithParameters("6");
    const actionresults = await fetchGamesWithParameters(
        "6",
        "",
        "",
        "adventure"
    );
    return (
        <>
            <Container className="justify-center">
                <div className="m-5">
                    <Heading size={"7"}>Top Games</Heading>
                    <SimpleSlider games={results} speed={2000} />
                </div>
                <div className="m-5">
                    <Heading size={"7"}>Top Adventure Games</Heading>
                    <SimpleSlider games={actionresults.results} speed={2222} />
                </div>
            </Container>
        </>
    );
}
