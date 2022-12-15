import {
  Box,
  Container,
  Image,
  Text,
  Grid,
  SkeletonCircle,
  SkeletonText,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import SingleCard from "./SingleCard";

export default function ProductCard({ item}) {



  return (
    <>
      <Box>
        <SingleCard key={item.id} item={item} />
     </Box>
    </>
  );
}
