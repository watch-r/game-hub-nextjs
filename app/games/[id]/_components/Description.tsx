"use client";
import { Badge, Box, Button, Card, Heading, Text } from "@radix-ui/themes";
import { useEffect, useState } from "react";
type Props = {
    description: string;
};
const Descriptions = ({ description }: Props) => {
    const maxLength = 300;
    const [isExpanded, setIsExpanded] = useState(false);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <Card>
            <Heading size={"3"}>Description</Heading>
            {description.length <= maxLength ? (
                <Text
                    dangerouslySetInnerHTML={{
                        __html: description,
                    }}
                />
            ) : (
                <>
                    <Text
                        dangerouslySetInnerHTML={{
                            __html: isExpanded
                                ? description
                                : `${description.slice(0, maxLength)}...`,
                        }}
                    />
                    {isClient && (
                        <Badge
                            radius="full"
                            onClick={() => setIsExpanded(!isExpanded)}
                        >
                            {isExpanded ? "Read Less" : "Read More"}
                        </Badge>
                    )}
                </>
            )}
        </Card>
    );
};

export default Descriptions;
