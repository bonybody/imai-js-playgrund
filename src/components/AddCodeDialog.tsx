import React, {useState} from 'react'
import {
  Box,
  Button, FormControl, FormLabel, Input,
  Modal, ModalBody, ModalCloseButton,
  ModalContent, ModalFooter, ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";
import {useForm} from "react-hook-form";
import {PlaygroundApiDocDialog} from "./PlaygroundApiDocDialog";

export type AddCodeHandlerArgs = {
  codeTitle: string
  codeStr: string
}

export type AddCodeHandler = (addCodeHandlerArgs: AddCodeHandlerArgs) => void

export const AddCodeDialog: React.VFC<{ addCodeHandler: AddCodeHandler }> = ({addCodeHandler}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [code, setCode] = useState<string>("")
  const {register, handleSubmit} = useForm<{ codeTitle: string }>();

  const onSubmit = handleSubmit((data: { codeTitle: string; }) => {
    addCodeHandler({codeTitle: data.codeTitle, codeStr: code})
    setIsOpen(false)
  })

  return (
    <>
      <Button colorScheme="blue" onClick={() => setIsOpen(true)}>ADD CODE</Button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ModalOverlay/>
        <ModalContent>
          <ModalHeader>コードを追加</ModalHeader>
          <form onSubmit={onSubmit}>
            <ModalCloseButton/>
            <ModalBody>
              <FormControl mb={4}>
                <FormLabel>Code Title</FormLabel>
                <Input {...register("codeTitle")} />
              </FormControl>
              <Box padding={2} boxSizing="border-box" backgroundColor="gray.200" borderRadius="base">
                <AceEditor
                  width="100%"
                  mode="javascript"
                  theme="monokai"
                  value={code}
                  onChange={(value) => setCode(value)}
                  name="UNIQUE_ID_OF_DIV"
                />
              </Box>
            </ModalBody>
            <ModalFooter>
              <PlaygroundApiDocDialog/>
              <Button type="submit" colorScheme="blue" ml={3}>ADD</Button>
              <Button onClick={() => setIsOpen(false)} ml={3}>Close</Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  )
}
