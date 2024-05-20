import MainTemplate from '@components/templates/MainTemplate'
import {
  faCss3,
  faHtml5,
  faJs,
  faNodeJs,
  faReact
} from '@fortawesome/free-brands-svg-icons'
import { faBook, faBusinessTime } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const skills = [
  {
    icon: faReact,
    name: 'React',
    color: 'text-blue-400'
  },
  {
    icon: faJs,
    name: 'JavaScript',
    color: 'text-yellow-500  dark:text-yellow-400 '
  },
  {
    icon: faNodeJs,
    name: 'NodeJS',
    color: 'text-green-400'
  },
  {
    icon: faHtml5,
    name: 'HTML',
    color: 'text-red-400'
  },
  {
    icon: faCss3,
    name: 'CSS',
    color: 'text-blue-400'
  }
]
const knoledges = [
  'Comunication Skills',
  'Problem Solving',
  'Adaptable',
  'Creative',
  'Teamwork',
  'Problem Solving',
  'Critical Thinking',
  'Atomic Design'
]

export default function ResumePage() {
  return (
    <MainTemplate header="Resume">
      <div className="mt-3 h-fit w-full flex-row gap-3 space-y-3 lg:flex lg:space-y-0">
        <div className=" w-full rounded-xl bg-neutral-50 p-3 dark:bg-[#272733]">
          <h4 className="">
            <span>
              <FontAwesomeIcon icon={faBook} className="text-blue-400" />
            </span>{' '}
            My Education
          </h4>
          <div className="mt-2 block  w-full space-y-2 rounded-md bg-amber-100 p-3 dark:bg-amber-300/20 lg:pb-[70px]">
            <div className="flex justify-between">
              <p className="font-semibold lg:text-base">
                Politeknik Caltex Riau
              </p>
              <p className="font-semibold lg:text-base">2021 - Present</p>
            </div>
            <p className="text-[12px] font-normal lg:text-base">
              Accomplishments:
            </p>
            <ul className="ml-5 list-disc ">
              <li className="text-[12px] font-normal lg:text-[14px]">
                Studied the concepts of routing, model-view-controller (MVC),
                and database migrations using the Laravel framework
              </li>
              <li className="text-[12px] font-normal lg:text-[14px]">
                Proficient in using Vue.js to build responsive and visually
                appealing user interfaces, enhancing the user experience
              </li>
              <li className="text-[12px] font-normal lg:text-[14px]">
                Mastered data structures and algorithms, enabling the design and
                implementation of efficient and optimal solutions in web
                application development
              </li>
            </ul>
          </div>
        </div>
        <div className="h-full w-full rounded-xl  bg-neutral-50 p-3 dark:bg-[#272733] ">
          <h4>
            <span>
              <FontAwesomeIcon
                icon={faBusinessTime}
                className="text-blue-400"
              />
            </span>{' '}
            My Experience
          </h4>
          <div className="mt-2 block h-fit w-full space-y-2 rounded-md bg-lime-100  p-3 dark:bg-lime-300/20">
            <div className="flex justify-between">
              <div className="block ">
                <p className="text-[13px] font-semibold lg:text-[15px]">
                  Orenda Digital Agency
                </p>
                <p className="text-[9px] font-semibold lg:text-[13px]">
                  Intern Full Stack Web Developer
                </p>
              </div>
              <p className="text-[9px] font-bold lg:text-[13px]">
                Feb 2024 - June 2024
              </p>
            </div>
            <p className="text-[12px] font-normal lg:text-base">
              Accomplishments:
            </p>
            <ul className="ml-5 list-disc ">
              <li className="text-[12px] font-normal lg:text-[14px]">
                Responsible for developing a learning web application using
                HTML, CSS, and TypeScript, leveraging development tools such as
                Vite and React.js to ensure a responsive and dynamic user
                experience
              </li>
              <li className="text-[12px] font-normal lg:text-[14px]">
                Accountable for building the backend with Express.js to manage
                efficient APIs.
              </li>
              <li className="text-[12px] font-normal lg:text-[14px]">
                In charge of developing and managing the database using
                PostgreSQL, ensuring data integrity and application performance,
                and utilizing Prisma as a library to facilitate database
                interactions.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-6 flex w-full gap-4 rounded-md bg-neutral-50 p-6 dark:bg-[#272733]">
        <div className="w-full ">
          <h4 className="mb-3">Hard Skill</h4>
          <div className="flex flex-wrap gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex w-fit items-center gap-2 rounded-lg bg-[#eeeeee] p-2 px-3 dark:bg-primary"
              >
                <FontAwesomeIcon
                  icon={skill.icon}
                  className={`size-6 ${skill.color}`}
                />
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full">
          <h4 className="mb-3">Knoledges</h4>
          <div className="flex flex-wrap gap-4">
            {knoledges.map((knoledge, index) => (
              <div
                key={index}
                className="flex w-fit items-center gap-2 rounded-lg bg-[#eeeeee] p-2 px-3 dark:bg-primary"
              >
                <p>{knoledge}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MainTemplate>
  )
}
