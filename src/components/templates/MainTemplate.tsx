import Navbar from '@components/menu/Navbar'
import Profile from '@components/menu/Profile'
import Sidebar from '@components/menu/Sidebar'
import CustomModal from '@components/modal'
import ThemeSwitch from '@components/themeSwitch'
import { motion, useScroll, useSpring } from 'framer-motion'

export default function MainTemplate({
  children,
  header
}: {
  children: React.ReactNode
  header: string
}) {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })
  return (
    <>
      <motion.div
        className="fixed left-0 right-0 top-0 z-50 h-2 origin-left bg-success-200 "
        style={{ scaleX }}
      />
      <div className="relative flex h-full w-full flex-col gap-6 p-3 lg:gap-20 lg:px-14 lg:py-12">
        <CustomModal content={<Profile />} />
        <header className="flex w-full justify-end ">
          <ThemeSwitch />
        </header>
        <article className="mb-12 flex h-fit w-full justify-between gap-4 lg:mb-0">
          <Navbar />
          <motion.section
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="mb-6 h-fit w-full rounded-xl bg-primary p-4 shadow-md lg:p-12  "
          >
            <h1>
              {header}
              <span className="my-[2px] ml-5 inline-block h-[6px] w-2  bg-success-200"></span>
              <span className="my-[2px] ml-2 inline-block h-[6px] w-2 bg-blue-300"></span>
              <span className="my-[2px] ml-3 inline-block h-[6px] w-20 bg-blue-300"></span>
            </h1>
            {children}
          </motion.section>
          <Sidebar />
        </article>
      </div>
    </>
  )
}
