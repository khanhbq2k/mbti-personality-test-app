import Link from "next/link";
import { Flex, Button } from "@chakra-ui/react";
import { BiHistory } from "react-icons/bi";

export default function Nav() {
  return (
    <Flex
      as="nav"
      py={2}
      px={5}
      w="full"
      h={20}
      justifyContent="space-between"
      alignItems="center"
      overflowX="hidden"
    >
      <Link href="/">
        <Button
          colorScheme="black"
          variant="link"
          fontWeight="bold"
          textTransform="uppercase"
        >
          Bài Kiểm Tra Tính Cách MBTI
        </Button>
      </Link>
      {/* <Link href="/test/result/history">
        <Button
          variant="outline"
          leftIcon={<BiHistory size={24} />}
        >
          Lịch Sử Kết Quả Kiểm Tra
        </Button>
      </Link> */}
    </Flex>
  );
}
