import MainTemplate from '@components/templates/MainTemplate'

export default function AboutPage() {
  return (
    <MainTemplate header="About">
      <div className="flex flex-col  ">
        <div className="block h-fit w-full rounded-md bg-primary py-3">
          <p className="mt-2 lg:text-[16px]">
            <span className="text-sm font-bold lg:text-lg">Hi there!👋</span>
            I'm a sixth-semester Computer Science student passionate about web
            development. I specialize in creating dynamic and user-friendly
            websites using HTML, CSS, JavaScript, and modern frameworks. Whether
            it's crafting sleek designs or building robust back-end systems, I
            love bringing ideas to life on the web.
          </p>
        </div>
        <h6 className="my-3 font-bold">What I Do</h6>
        <div className="space-y-3 lg:space-y-0 lg:flex h-fit w-full lg:gap-6">
          <div className="w-full rounded-md  bg-amber-100 p-3 dark:bg-amber-300/20">
            <h4>Front-End</h4>
            <p className="text-md mt-2 ">
              Createing awesome websites that look great and feel smooth to use.
              I use cool tools like React, Tailwind CSS, MUI and Atomic design
              to make sure your site is top-notch. From eye-catching designs to
              smooth interactions
            </p>
          </div>
          <div className="w-full rounded-md bg-lime-100 p-3 pb-8 dark:bg-lime-300/20">
            <h4>Back-End</h4>
            <p className="text-md mt-2 ">
              Crafting powerful back-end systems for web applications is my
              forte. Using Node.js, Express.js, and PostgreSQL, I develop
              reliable and scalable infrastructures that keep your web platforms
              running seamlessly. By using Prisma, I optimize database
              operations for efficiency and reliability.
            </p>
          </div>
        </div>
      </div>
    </MainTemplate>
  )
}
