import GameCarousel from "@/components/GameCarousel";
import Swiper from "@/components/Swiper";
import { Container, Flex } from "@radix-ui/themes";

export default function Home() {
    return (
        <>
            <Container>
                <Flex direction='column' align='center'>
                    <div>Hello World</div>
                    <GameCarousel />
                </Flex>
                <Swiper/>
            </Container>
        </>
    );
}
