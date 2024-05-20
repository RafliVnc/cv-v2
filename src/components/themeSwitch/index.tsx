import { MoonIcon } from '@common/assets/icons/MoonIcon'
import { SunIcon } from '@common/assets/icons/SunIcon'
import { cn, Switch } from '@nextui-org/react'
import { useTheme } from 'next-themes'

export default function ThemeSwitch() {
  const { theme, setTheme } = useTheme()

  return (
    <Switch
      classNames={{
        wrapper: ' w-16 h-9 shadow-lg group-data-[selected=true]:border  ',
        thumb: cn(
          'w-6 h-6 border-2 shadow-lg',
          'group-data-[hover=true]:border-primary-foreground',
          'group-data-[selected=true]:ml-7 ',
          'group-data-[pressed=true]:w-7',
          'group-data-[selected]:group-data-[pressed]:ml-4'
        )
      }}
      defaultSelected={theme === 'light'}
      onValueChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      startContent={<SunIcon />}
      endContent={<MoonIcon />}
    />
  )
}
