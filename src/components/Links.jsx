import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaAlignRight,
} from "react-icons/fa";

export default function Links() {
  const icon_size = 24;

  return (
    <div className="flex gap-4">
      <FaAlignRight size={icon_size} />
      <FaLinkedin size={icon_size} />
      <FaInstagram size={icon_size} />
      <FaGithub size={icon_size} />
    </div>
  );
}
