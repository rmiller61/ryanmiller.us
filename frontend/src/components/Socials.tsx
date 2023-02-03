import { BsGithub, BsLinkedin, BsTwitter, BsEnvelopeFill } from "react-icons/bs"

export default function Socials() {
  return (
    <ul className="flex space-x-6 text-lg">
      <li>
        <a href="">
          <BsTwitter />
        </a>
      </li>
      <li>
        <a href="">
          <BsLinkedin />
        </a>
      </li>
      <li>
        <a href="">
          <BsGithub />
        </a>
      </li>
      <li>
        <a href="">
          <BsEnvelopeFill />
        </a>
      </li>
    </ul>
  )
}
