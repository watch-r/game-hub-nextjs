import Image from "next/image";
import gogIcon from "/public/icons/gog.svg";
import React from "react";

const GOGgame = () => {
    return <Image src={gogIcon} alt="Your Icon" width={15} height={15} className="bg-white rounded-s" />;
};

export default GOGgame;
