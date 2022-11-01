import io from "socket.io-client";
import { useEffect, useState } from "react";
import {
  Flex,
  Grid,
  GridItem,
  Container,
  Heading,
  Center,
  Box,
  VStack,
  Button,
} from "@chakra-ui/react";

//custom components
import { PollOption } from "../components/Poll";

//socket initialization
const socket = io("ws://localhost:4000");

const Poll = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    socket.on("update_value", (data) => {
      setCount(data);
    });

    return () => {
      socket.off("connect");
      socket.off("disconnect");
      socket.off("update_value");
    };
  }, []);

  const handleCLick = async () => {
    const newNum = count + 1;
    socket.emit("increment", newNum);
  };

  return (
    <Grid templateColumns="repeat(12, 1fr)" gap={5}>
      <GridItem colSpan={3} />
      <GridItem colSpan={6} p={5}>
        <VStack spacing={5}>
          <Box
            borderRadius={"md"}
            shadow={"md"}
            p={5}
            alignContent="center"
            justifyContent="center"
            border={"1px solid #CBD5E0"}
          >
            <Heading>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque
              omnis laboriosam quae quibusdam consequuntur laborum, hic
              consequatur incidunt ipsam?
            </Heading>
            {/* <Button colorScheme="blue" onClick={() => handleCLick()}>
              Increment
            </Button> */}
          </Box>

          <Grid
            templateColumns="repeat(2, 1fr)"
            templateRows="repeat(2, 1fr)"
            w={"100%"}
            gap={5}
          >
            <GridItem>
              <PollOption />
            </GridItem>
            <GridItem>
              <PollOption />
            </GridItem>
            <GridItem>
              <PollOption />
            </GridItem>
            <GridItem>
              <PollOption />
            </GridItem>
          </Grid>
        </VStack>
      </GridItem>
      <GridItem colSpan={3} />
    </Grid>
  );
};

export default Poll;
