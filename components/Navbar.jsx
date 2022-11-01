import {
  Flex,
  Spacer,
  Box,
  Heading,
  Button,
  ButtonGroup,
  Circle,
} from "@chakra-ui/react";
import { CheckboxIcon } from "@chakra-ui/react";

function Navbar() {
  return (
    <Flex
      minWidth="max-content"
      alignItems="center"
      gap={2}
      ps={20}
      pr={20}
      pt={4}
      pb={4}
      shadow={"base"}
      overflow="hidden"
    >
      <Flex align="center" justifyContent="center" gap={2}>
        <Circle size="40px" bg="teal">
          <CheckboxIcon></CheckboxIcon>
        </Circle>
        <Heading>Foll App</Heading>
      </Flex>
      <Spacer />
      <ButtonGroup gap="1">
        <Button colorScheme="teal" size="lg">
          Sign Up
        </Button>
        <Button colorScheme="teal" size="lg">
          Log in
        </Button>
      </ButtonGroup>
    </Flex>
  );
}

export default Navbar;
