import { Heading } from "@radix-ui/themes";
import Image from "next/image";

type Props = {
    name: string;
    url: string;
};

const TextOverImageComponent = ({ name, url }: Props) => {
    return (
        <div
            style={{
                position: "relative",
                textAlign: "center",
                color: "white",
                width: "100%",
                height: "auto",
            }}
        >
            <Image
                quality={100}
                priority
                src={url}
                width={2048}
                height={1024}
                content="cover"
                alt="Background"
                style={{
                    width: "100%",
                    height: "100%",
                    maxHeight: "800px",
                    borderRadius: "10px",
                }}
            />
            <div
                className=""
                style={{
                    position: "absolute",
                    bottom: "0",
                    left: "50%",
                    transform: "translateX(-50%)",
                    background: "rgba(0, 0, 0, .5)",
                    width: "100%",
                    padding: "10px",
                    borderRadius: "10px",
                }}
            >
                <Heading size={{ initial: "2", sm: "6", md: "8" }}>
                    {name}
                </Heading>
            </div>
        </div>
    );
};

export default TextOverImageComponent;
