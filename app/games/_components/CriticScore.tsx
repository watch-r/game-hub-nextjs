import { Badge } from "@radix-ui/themes";

const CriticScore = ({ score }: { score: number }) => {

    const color =
        score > 90
            ? "green"
            : score > 60
            ? "orange"
            : score > 50
            ? "yellow"
            : score > 40
            ? "red"
            : "cyan";
    return (
        <Badge variant='surface' color={color} size={"1"}>
            {score ||'N/S'}
        </Badge>
    );
};

export default CriticScore;
