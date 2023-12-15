import { Avatar, Box, Flex } from "@chakra-ui/react";

function PostHeader() {
  return (
    <>
      <Flex
        justifyContent={"space-between"}
        alignItems={"center"}
        w={"full"}
        my={2}
      >
        <Flex alignItems={"center"} gap={2}>
          <Avatar src="/img1.png" size={"sm"} alt="user profile pic" />
          <Flex fontSize={12} alignItems={"center"} gap={2}>
            Rakesh
            <Box>• 1w ago</Box>
          </Flex>
        </Flex>
        <Box></Box>
      </Flex>
    </>
  );
}

export default PostHeader;
