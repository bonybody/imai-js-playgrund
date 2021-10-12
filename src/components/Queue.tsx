import React from 'react'
import { StackDivider, Text, VStack} from "@chakra-ui/react";

export const Queue: React.VFC<{ textList: Array<String> }> = ({textList}) => (
    <VStack
      m="auto"
      boxSizing="border-box"
      p={3}
      boxShadow="base"
      borderRadius="md"
      bg="white"
      divider={<StackDivider borderColor="gray.200"/>}
      align="stretch"
      color="black"
    >
      {textList.map((text, index) =>
        <Text fontSize="md" key={index}>{text}</Text>
      )}
    </VStack>
  )
