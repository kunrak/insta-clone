import { Box, Image } from "@chakra-ui/react";
import PostHeader from "./PostHeader";
import PostFooter from "./PostFooter";

function FeedPost() {
  return (
    <>
      <PostHeader />
      <Box my={2}>
        <Image src="/img1.png" alt="user profile pic" borderRadius={4} />
      </Box>
      <PostFooter />
    </>
  );
}

export default FeedPost;
