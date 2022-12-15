import { Box } from "@chakra-ui/react";

import SingleCard from "./SingleCard";

export default function ProductCard({ item }) {
  return (
    <>
      <Box>
        <SingleCard key={item.id} item={item} />
      </Box>
    </>
  );
}
