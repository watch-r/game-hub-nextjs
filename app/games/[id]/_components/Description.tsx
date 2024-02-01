import React from "react";
import { Box, Heading, Section, Text } from "@radix-ui/themes";
interface Props {
    description: string;
}
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
