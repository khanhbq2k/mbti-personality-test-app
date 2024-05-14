import {
  Flex,
  Heading,
  Text,
  UnorderedList,
  ListItem,
  Button,
} from "@chakra-ui/react";

interface TestInstructionsProps {
  onCloseTestInstructions: () => void;
}

export default function TestInstructions(props: TestInstructionsProps) {
  return (
    <Flex
      h="full"
      px={4}
      direction="column"
      gap={8}
    >
      <Heading>Hướng dẫn</Heading>
      <Flex
        direction="column"
        gap={2}
      >
        <Text>
          Việc hoàn thành bài kiểm tra chỉ mất khoảng 15 phút. Dưới đây là một số gợi ý về cách thực hiện bài kiểm tra này:
        </Text>
        <UnorderedList spacing={2}>
          <ListItem>
            Không có câu trả lời đúng cho bất kỳ câu hỏi nào.
          </ListItem>
          <ListItem>
            Trả lời các câu hỏi một cách nhanh chóng, đừng phân tích quá kỹ. Một số câu hỏi có vẻ được diễn đạt kém. Hãy đi theo cảm giác tốt nhất của bạn.
          </ListItem>
          <ListItem>
            Trả lời các câu hỏi theo “cách bạn là”, không phải “cách bạn muốn được nhìn nhận bởi người khác”.
          </ListItem>
        </UnorderedList>
      </Flex>
      <Button
        w="min-content"
        colorScheme="primary"
        alignSelf="flex-end"
        onClick={props.onCloseTestInstructions}
      >
        Được rồi, tôi hiểu!
      </Button>
    </Flex>
  );
}
