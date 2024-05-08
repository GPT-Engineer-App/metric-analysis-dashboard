import { Container, VStack, Heading, Text } from "@chakra-ui/react";
import FundCard from "../components/FundCard";

const FundDashboard = () => {
  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={8}>
        <Heading as="h1" size="xl">
          Investment Fund Dashboard
        </Heading>
        <FundCard fundName="Fund A" assets="$10M" />
        <FundCard fundName="Fund B" assets="$20M" />
        <FundCard fundName="Fund C" assets="$30M" />
      </VStack>
    </Container>
  );
};

export default FundDashboard;
