import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure
} from '@nextui-org/react'

export default function CustomModal({ content }: { content: React.ReactNode }) {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <div className="fixed left-0 top-0 h-[60px] w-full  lg:hidden">
        <div className="flex pl-2 pt-3  ">
          <button
            className="size-10 rounded-full border bg-primary shadow-md dark:border-white "
            onClick={() => onOpen()}
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
      </div>
      <Modal size="full" isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {onClose => (
            <>
              <ModalHeader className="flex flex-col gap-1">Profile</ModalHeader>
              <ModalBody>{content}</ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}
