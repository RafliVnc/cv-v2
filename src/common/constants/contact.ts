import {
  faGithub,
  faInstagram,
  faLinkedin,
  faWhatsapp
} from '@fortawesome/free-brands-svg-icons'
import {
  faEnvelope,
  faLocationDot,
  faPhone
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome'

export const contact: {
  icon: FontAwesomeIconProps['icon']
  title: string
  desc: string | JSX.Element
  color: string
  icColor?: string
}[] = [
  {
    icon: faPhone,
    title: 'Phone',
    desc: '+62 812 8350 6120',
    color: 'bg-primary-100'
  },
  {
    icon: faEnvelope,
    title: 'Email',
    desc: ' rafli21ti@mahasiswa.pcr.ac.id',
    color: 'bg-success-100'
  },
  {
    icon: faLocationDot,
    title: 'Location',
    desc: 'PekanBaru, Riau',
    color: 'bg-warning-100'
  }
]

export const social: {
  icon: FontAwesomeIconProps['icon']
  title: string
  navigate?: string
  color?: string
}[] = [
  {
    icon: faGithub,
    title: 'Github',
    navigate: 'https://github.com/raflivnc'
  },
  {
    icon: faLinkedin,
    title: 'Linkedin',
    navigate: 'https://www.linkedin.com',
    color: '#0A66C2'
  },
  {
    icon: faInstagram,
    title: 'Instagram',
    navigate: 'https://www.instagram.com/muhammad_rafli_8/',
    color: '#E1306C'
  },
  {
    icon: faWhatsapp,
    title: 'Whatsapp',
    navigate: 'https://wa.me/+6281283506120',
    color: '#25D366'
  }
]
