import menu from '@common/constants/menu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Tooltip } from '@nextui-org/react'
import { useLocation, useNavigate } from 'react-router-dom'

export default function Sidebar() {
  const navigate = useNavigate()
  const location = useLocation()
  return (
    <aside className="fixed bottom-0 right-0 z-10 flex h-fit w-full flex-row items-center justify-center gap-6 rounded-t-xl bg-primary p-2 shadow-md lg:sticky lg:top-10 lg:w-[150px] lg:flex-col lg:gap-3 lg:py-6">
      {menu.map(item => (
        <Tooltip
          key={item.name}
          placement="left"
          content={item.name}
          color="default"
        >
          <Button
            className={`block h-12 w-12 border-2 shadow-sm  lg:h-16 lg:w-16 ${location.pathname === item.navigate && 'bg-indigo-50 border-none dark:bg-primary-100'}`}
            color="primary"
            isIconOnly
            size="lg"
            onClick={() => navigate(item.navigate)}
            onPress={() => navigate(item.navigate)}
          >
            <FontAwesomeIcon
              icon={item.icon}
              className="mt-2 size-3 lg:size-4"
            />
            <p className="text-[8px] leading-3 lg:text-[10px]">{item.name}</p>
          </Button>
        </Tooltip>
      ))}
    </aside>
  )
}
