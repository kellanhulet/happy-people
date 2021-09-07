import React from "react";
import {
    Flex,
} from "@chakra-ui/react";
import Header from "./Header.js"

function NavFrame() {
    return(
        <Flex width="100%" height="100px" bg="blue">
            <Header />
        </Flex>
    )
}

export default NavFrame