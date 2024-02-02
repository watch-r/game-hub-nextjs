import { Box, Heading, Text } from "@radix-ui/themes";
type Props = {
    description: string;
};
const Descriptions = ({ description }: Props) => {
    return (
        <Box>
            <Heading size={"3"}>Description</Heading>
            <Text
                dangerouslySetInnerHTML={{
                    __html: description,
                }}
            />
        </Box>
    );
};

export default Descriptions;
