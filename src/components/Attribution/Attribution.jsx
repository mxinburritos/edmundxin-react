import React from "react";
import { Box, Text, Link } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

function Attribution() {
  return (
    <Box
      position="absolute"
      bottom="10px"
      left="50%"
      transform="translateX(-50%)"
    >
      <Text color="white" fontFamily="Poppins" fontSize="10px">
        Photo by{" "}
        <Link
          href="https://unsplash.com/photos/Jztmx9yqjBw?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
          fontFamily="Poppins"
          textDecoration="none"
          color="white"
        >
          Ryan Hutton <ExternalLinkIcon />
        </Link>{" "}
        on Unsplash
      </Text>
    </Box>
  );
}

export default Attribution;
