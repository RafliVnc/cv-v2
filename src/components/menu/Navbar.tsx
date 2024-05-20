import { contact, social } from '@common/constants/contact'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from '@nextui-org/react'
import Img from '@common/assets/images/foto.png'

export default function Navbar() {
  return (
    <nav className="sticky top-36 hidden h-[500px] w-[500px] flex-col items-center justify-center gap-3 rounded-xl bg-primary px-8 shadow-md lg:flex">
      <img
        src={Img}
        alt="img"
        className="absolute -top-24 h-44 w-36 rounded-xl"
      ></img>
      <h4>Muhammad Rafli</h4>
      <div className="flex gap-3">
        {social.map((item, index) => (
          <Button
            key={index}
            className="border-2 shadow-sm "
            color="primary"
            isIconOnly
            radius="md"
            size="lg"
            onClick={() => window.open(item.navigate)}
          >
            <FontAwesomeIcon icon={item.icon} color={item.color} />
          </Button>
        ))}
      </div>
      <div className="flex w-full flex-col gap-3 rounded-lg border-2  p-6">
        {contact.map(item => (
          <div
            key={item.color}
            className="grid w-full grid-flow-col items-center justify-start gap-2 "
          >
            <div
              className={`${item.color}  flex size-12 items-center justify-center rounded-md `}
            >
              <FontAwesomeIcon icon={item.icon} color={item.icColor} />
            </div>
            <p className="leading-4 ">
              {item.title}
              <span className="block text-xs font-normal">{item.desc}</span>
            </p>
          </div>
        ))}
      </div>
    </nav>
  )
}
