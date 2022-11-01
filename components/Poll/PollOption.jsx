import { Flex, Heading } from "@chakra-ui/react";

const PollOption = () => {
  return (
    <Flex
      shadow={"xl"}
      width="100%"
      alignItems={"center"}
      justifyContent="center"
      p={8}
      bg={"teal"}
      color={"white"}
      borderRadius={"xl"}
      cursor={"pointer"}
    >
      <Heading>Option</Heading>
    </Flex>
  );
};

export default PollOption;
