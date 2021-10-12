import React, {useState} from 'react'
import {Box, Button, Code, Heading, Text} from "@chakra-ui/react";
import {Queue} from "./Queue";
import {PlaygroundApi} from "../Utils/PlaygroundApi";
import {RunCode} from "../domain/RunCode";

export const RunCodeBox: React.VFC<RunCode> = ({codeTitle, codeStr}) => {
  const formatCodeStr = codeStr.toString().replace(/\r?\n/g, "<br>").replace(/\t/g, "&nbsp;&nbsp;&nbsp;&nbsp;")
  const [queue, setQueue] = useState<Array<String>>([])

  const clickRunHandler = () => {
    const playgroundApi = new PlaygroundApi()
    const runCode = new Function("playgroundApi", codeStr)
    runCode(playgroundApi)
    setQueue(playgroundApi.messageQueue)
  }

  return (
    <Box m="auto"
         w="sm"
         p={3}
         boxSizing="border-box"
         boxShadow="base"
         borderRadius="md"
         bg="white"
    >
      <Heading size="md" textAlign="center" mb="3">{codeTitle}</Heading>
      <Box mb={3}>
        <Heading size="xs" mb={1}>コード</Heading>
        <Text mb={3}>
          <Code w="100%" dangerouslySetInnerHTML={{__html: formatCodeStr}}/>
        </Text>
        <Text textAlign="right">
          <Button colorScheme="blue" onClick={clickRunHandler} mr={2}>
            RUN
          </Button>
        </Text>
      </Box>
      <Box>
        <Heading mb={1} size="xs">playground.messageQueue</Heading>
        <Queue textList={queue}/>
      </Box>
    </Box>
  )
}
