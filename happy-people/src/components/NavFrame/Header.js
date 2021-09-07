import React from "react";
import {
    Flex,
    Text,
    Image
} from "@chakra-ui/react";
import Sidebar from "./Sidebar.js";
import logo from "../../images/tk_logo.png";

function Header() {

    return(
        <Flex justifyContent="space-between" width="100%" alignItems="center" paddingLeft={3}>
            <Sidebar/>
            <Text fontSize="5xl" color="white">
                Dibs on being the power stone :)
            </Text>
            <Image boxSize="80px" src={logo}/>
        </Flex>
    )
}
export default Header