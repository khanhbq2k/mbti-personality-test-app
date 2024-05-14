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
          Bài kiểm tra trong khoảng 15 phút. Dưới đây là một số lưu ý:
        </Text>
        <UnorderedList spacing={2}>
          <ListItem>
            Không có câu trả lời đúng cho bất kỳ câu hỏi nào.
          </ListItem>
          <ListItem>
            Trả lời các câu hỏi một cách nhanh chóng, đừng phân tích quá kỹ.
          </ListItem>
        </UnorderedList>
      </Flex>
      <Button
        w="min-content"
        colorScheme="primary"
        alignSelf="flex-end"
        onClick={props.onCloseTestInstructions}
      >
        Bắt đầu!
      </Button>
    </Flex>
  );
}
