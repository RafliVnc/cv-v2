import MainTemplate from '@components/templates/MainTemplate'
import { Button, Input, Textarea } from '@nextui-org/react'
import { motion } from 'framer-motion'

export default function ContactPage() {
  return (
    <MainTemplate header="Contact">
      <motion.div
        className="my-6 block w-full space-y-6 "
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h4>Send me a message</h4>
        <Input type="text" variant="flat" label="Name" />
        <Input type="email" variant="flat" label="Email" />
        <Textarea
          label="Description"
          variant="flat"
          disableAnimation={false}
          disableAutosize={false}
          classNames={{
            input: 'resize-y min-h-[100px]'
          }}
        />
        <Button className="w-full bg-primary-200 text-white hover:bg-primary-400">
          Send
        </Button>
      </motion.div>
    </MainTemplate>
  )
}
