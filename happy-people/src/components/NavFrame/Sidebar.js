import React from "react";
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    IconButton,
    Button,
    useDisclosure,
    Stack,
  } from "@chakra-ui/react"
  import {IoEllipsisVerticalSharp} from "react-icons/io5";
  function Sidebar() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const username = "Kellan"
    const btnRef = React.useRef()
  
    return (
      <>
        <IconButton icon={<IoEllipsisVerticalSharp/>} ref={btnRef} colorScheme="teal" onClick={onOpen}/>
        <Drawer
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Hello, {username}</DrawerHeader>
  
            <DrawerBody>
              <Stack spacing="3">
                <Button>
                    Home
                </Button>
                <Button>
                    Tab 1
                </Button>
                <Button>
                    Tab 2
                </Button>
              </Stack>
            </DrawerBody>
  
            <DrawerFooter>
              <Button variant="outline" mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="blue">Save</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }

  export default Sidebar