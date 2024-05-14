import Link from "next/link";
import { Heading, Text, Highlight, Flex, Button } from "@chakra-ui/react";
import { FiArrowRight } from "react-icons/fi";

import MainLayout from "../components/layouts/main-layout";

export default function HomePage() {
  return (
    <>
      <MainLayout>
        <Flex
          w={{
            base: "full",
            lg: "50%",
          }}
          alignSelf="center"
          px={4}
          gap={8}
          minH="full"
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Heading
            as="h1"
            lineHeight="tall"
            textAlign="center"
          >
            <Highlight
              query="MBTI Personality Test"
              styles={{
                py: 1,
                px: 4,
                rounded: "full",
                bg: "primary.500",
                color: "white",
              }}
            >
              Chào mừng bạn đến với Bài Kiểm Tra Tính Cách MBTI
            </Highlight>
          </Heading>
          <Text
            fontSize="xl"
            align="center"
          >
            Hãy học để hiểu bản thân mình hơn qua bài kiểm tra này.
          </Text>
          <Link href="/test">
            <Button
              w="min-content"
              colorScheme="primary"
              variant="outline"
              rightIcon={<FiArrowRight size={20} />}
            >
              Làm Bài Kiểm Tra
            </Button>
          </Link>
        </Flex>
      </MainLayout>
    </>
  );
}
