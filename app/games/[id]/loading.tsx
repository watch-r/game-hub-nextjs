import { UpdateIcon } from "@radix-ui/react-icons";
import { Container, Flex } from "@radix-ui/themes";

const LoadingPageOfGameDetails = () => {
    return (
        <Container>
            <Flex direction={"row"} align={"center"} gap={"3"}>
                LoadingPage Of GameDetails Page
                <UpdateIcon
                    className="animate-spin"
                    width="15"
                    height="15"
                />
            </Flex>
        </Container>
    );
};

export default LoadingPageOfGameDetails;
