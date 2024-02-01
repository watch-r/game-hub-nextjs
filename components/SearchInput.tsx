import React from "react";
import { Input, } from "./ui/input";
import { SearchIcon } from "lucide-react";

const SearchInput = () => {
    return (
        <div style={{ position: "relative", display: "inline-block" }}>
            <Input placeholder='Search' style={{ paddingLeft: "40px" }} />
            <SearchIcon
                style={{
                    position: "absolute",
                    left: "10px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    color:'grey'
                }}
            />
        </div>
    );
};

export default SearchInput;
