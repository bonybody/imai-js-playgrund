import React, {useState} from 'react'
import {
  Box,
  Button, Code,
  Modal, ModalBody, ModalCloseButton,
  ModalContent, ModalFooter, ModalHeader,
  ModalOverlay, Text
} from "@chakra-ui/react";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";

export const PlaygroundApiDocDialog: React.VFC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  return (
    <>
      <Button colorScheme="blue" variant="outline" onClick={() => setIsOpen(true)}>PLAYGROUND API</Button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ModalOverlay/>
        <ModalContent>
          <ModalHeader>PLAYGROUND API</ModalHeader>
          <ModalCloseButton/>
          <ModalBody>
            <Text mb={4}>コードエディタ内では<Code>playgroundApi</Code>が利用出来ます。<br/>
              例：<Code>playgroundApi.pushMessage(&quot;hogehoge&quot;)</Code>
            </Text>
            <Box padding={2} boxSizing="border-box" backgroundColor="gray.200" borderRadius="base">
              <Code w="100%">
                playgroundApi.pushMessage(&quot;文字列&quot;)<br/>
                // playground APIにメッセージを送信できます。<br/>
                <br/>
                playgroundApi.messageQueue<br/>
                // 送信されたメッセージ一覧を確認できます。<br/>
              </Code>
            </Box>
          </ModalBody>
          <ModalFooter>
            <Button onClick={() => setIsOpen(false)}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
