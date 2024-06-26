import { Flex, Text, Box, Link, VStack } from "@chakra-ui/react";
import SuggestedHeader from "./SuggestedHeader";
import SuggestedUser from "./SuggestedUser";

function SuggestedUsers() {
  return (
    <div>
      <SuggestedHeader />

      <Flex justifyContent={"space-between"} alignItems={"center"}>
        <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>
          Suggested for you
        </Text>
        <Text
          fontSize={12}
          fontWeight={"bold"}
          _hover={{ color: "gray.400" }}
          cursor={"pointer"}
        >
          See All
        </Text>
      </Flex>

      <VStack mt={4} spacing={4}>
        <SuggestedUser
          name="Dan Abrahmov"
          followers={1392}
          avatar="https://bit.ly/dan-abramov"
        />
        <SuggestedUser
          name="Ryan Florence"
          followers={567}
          avatar="https://bit.ly/ryan-florence"
        />
        <SuggestedUser
          name="Christian Nwamba"
          followers={759}
          avatar="https://bit.ly/code-beast"
        />
      </VStack>

      <Box fontSize={12} color={"gray.500"} mt={5} alignSelf={"start"}>
        @2023 Built By{" "}
        <Link
          href="https://www.github.com/rakesh6841"
          target="_blank"
          color="blue.500"
          fontSize={14}
        >
          Rakesh Kundu
        </Link>
      </Box>
    </div>
  );
}

export default SuggestedUsers;
