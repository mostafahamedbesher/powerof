import { BiSolidLeftArrow } from "react-icons/bi";
import { BiSolidRightArrow } from "react-icons/bi";

const primary =
  "text-2xl mr-8 ml-8 mb-6 mt-6 max-lg:text-xl max-md:text-lg max-sm:text-base";
const secondary = "text-lg mr-8 ml-8 mb-6 mt-6 max-lg:text-base max-md:text-sm";

function HeadingSection({ children, txtDir = "ltr", type = "primary" }) {
  return (
    <h2
      className={`text-red-600 font-bold ${type === "primary" ? primary : ""} ${
        type === "secondary" ? secondary : ""
      } text-2xl m-8 mb-6 mt-6 flex items-center gap-2`}
      dir={txtDir}
    >
      {txtDir === "rtl" && <BiSolidLeftArrow />}
      {txtDir === "ltr" && <BiSolidRightArrow />}

      {children}
    </h2>
  );
}

export default HeadingSection;
