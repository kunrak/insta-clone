import { Box, Flex, Text } from "@chakra-ui/react";
import { CommentLogo, NotificationsLogo, UnlikeLogo } from "../../assets/Contacts";
import { useState } from "react";


function PostFooter() {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState(0);

  const handleClick = () => {
    if (liked) {
      setLiked(false);
      setLikes(likes - 1);
    } else {
      setLiked(true);
      setLikes(likes + 1);
    }
  }

  return (
    <>
      <Flex gap={4} mt={4}>
        <Box onClick={handleClick} cursor={"pointer"} fontSize={18}>
          {liked ? <UnlikeLogo /> : <NotificationsLogo />}
        </Box>
        <Box cursor={"pointer"} fontSize={18}>
          <CommentLogo />
        </Box>
      </Flex>
      <Text fontWeight={600} fontSize={"sm"} mt={2}>{likes} Likes</Text>
      <Flex gap={1} mt={1}>
        <Text fontWeight={700} fontSize={"sm"}>
          John Doe
        </Text>
        <Text fontSize={"sm"} fontWeight={400}>Nice tutorial! Thanks.</Text>
      </Flex>
      <Text fontSize={"sm"} color={"gray"} mt={1} cursor={"pointer"}>View all {comments} comments.</Text>
    </>
  );
}

export default PostFooter;
