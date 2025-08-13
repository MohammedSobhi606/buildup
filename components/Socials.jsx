import Link from "next/link";
import {
  RiFacebookFill,
  RiTwitterFill,
  RiInstagramFill,
  RiYoutubeFill,
} from "react-icons/ri";

const socials = [
  {
    icon: <RiFacebookFill />,
    path: "#",
  },
  {
    icon: <RiTwitterFill />,
    path: "#",
  },
  {
    icon: <RiInstagramFill />,
    path: "#",
  },
  {
    icon: <RiYoutubeFill />,
    path: "#",
  },
];
export default function Socials({ containerStyles, iconStyle }) {
  return (
    <div className={`${containerStyles}`}>
      {socials.map((icon, inx) => (
        <Link href={icon.path} className={`${iconStyle}`} key={inx}>
          {icon.icon}
        </Link>
      ))}
    </div>
  );
}
