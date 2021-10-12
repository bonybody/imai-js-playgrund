import React, {useState} from 'react'
import {Box, Flex, Heading} from "@chakra-ui/react";
import {addCodeHandlerArgs, AddCodeDialog} from "./components/AddCodeDialog";
import {RunCodeBox} from "./components/RunCodeBox";
import {RunCode} from "./domain/RunCode";
import {PlaygroundApiDocDialog} from "./components/PlaygroundApiDocDialog";
import {getUniqueStr} from "./Utils/UniqueStr";


export const App: React.VFC = () => {
  const [codeList, setCodeList] = useState<Array<RunCode>>([])
  const addCodeHandler = ({codeTitle, codeStr}: addCodeHandlerArgs) => {
    setCodeList([{codeTitle, codeStr, id: getUniqueStr()}, ...codeList,])
  }
  return (
    <div className="App">
      <Heading size='xl' textAlign='center' mb={4}>Imai JavaScript Playground</Heading>
      <Box w="sm" m="auto">
        <Box textAlign="right" mb={4}>
          <Flex justifyContent="space-around">
            <AddCodeDialog addCodeHandler={addCodeHandler}/>
            <PlaygroundApiDocDialog/>
          </Flex>
        </Box>
        {codeList.map(({id, codeTitle, codeStr}) =>
          <Box mb={4}>
            <RunCodeBox codeTitle={codeTitle} codeStr={codeStr} id={id} key={id}/>
          </Box>
        )}
      </Box>
    </div>
  )
}
