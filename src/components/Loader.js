import React from "react";
import ClipLoader from "react-spinners/ClipLoader";
import {Cell} from "../elements"
const ActivityIndicator = () => {
    return (
        <Cell
             height={"calc(100vh - 8rem)"}
            justifyContent={"center"}
            alignItems={"center"}
        >
            <ClipLoader size={35} margin={2} color={"rgba(237, 47, 89, 1)"} />
        </Cell>
    )
}

export default ActivityIndicator;