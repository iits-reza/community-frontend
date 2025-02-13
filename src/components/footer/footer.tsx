import {
  faFacebook,
  faInstagram,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <footer className="bg-[#F0F4E6] p-[80px] flex flex-col gap-7" id="footer">
      <h2 className="text-[23px] font-title border-primary border-b-2 pb-4">
        <FontAwesomeIcon icon={faLeaf} fontSize={25} className="mr-2" />
        The Community
      </h2>
      <div className="flex flex-col justify-between">
        <span>©️ Charithy 2025, All right reserved </span>
        <ul className="flex gap-1 justify-center lg:justify-end">
          <li className="hover:bg-primary hover:text-[#f0f4fe] p-4 cursor-pointer">
            <FontAwesomeIcon icon={faXTwitter} fontSize={25} />
          </li>
          <li className="hover:bg-primary hover:text-[#f0f4fe] p-4 cursor-pointer">
            <FontAwesomeIcon icon={faInstagram} fontSize={25} />
          </li>
          <li className="hover:bg-primary hover:text-[#f0f4fe] p-4 cursor-pointer">
            <FontAwesomeIcon icon={faFacebook} fontSize={25} />
          </li>
          <li className="hover:bg-primary hover:text-[#f0f4fe] p-4 cursor-pointer">
            <FontAwesomeIcon icon={faYoutube} fontSize={25} />
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
