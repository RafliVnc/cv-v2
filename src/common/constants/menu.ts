import webRoute from "./webRoute";
import {
  faUser,
  faAddressBook,
  faBriefcase,
  faFileAlt,
} from "@fortawesome/free-solid-svg-icons";

const menu = [
  {
    name: "About",
    icon: faUser,
    navigate: webRoute.about,
  },
  {
    name: "Resume",
    icon: faFileAlt,
    navigate: webRoute.resume,
  },
  {
    name: "Portfolio",
    icon: faBriefcase,
    navigate: webRoute.portofolio,
  },
  {
    name: "Contact",
    icon: faAddressBook,
    navigate: webRoute.contact,
  },
];
export default menu;
