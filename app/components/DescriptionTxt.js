function DescriptionTxt({ children, txtDir = "ltr", type = "primary" }) {
  const primary = "text-xl mt-8 max-sm:text-base";
  const secondary = "text-base mt-4 max-lg:text-sm";

  return (
    <div
      className={`w-[60%] font-semibold text-[#333] ${
        txtDir === "rtl"
          ? "text-right ml-auto mr-16 max-sm:mr-8"
          : "ml-16 max-sm:ml-8"
      } ${type === "primary" ? primary : ""} ${
        type === "secondary" ? secondary : ""
      }`}
      dir={txtDir}
    >
      {children}
    </div>
  );
}

export default DescriptionTxt;
