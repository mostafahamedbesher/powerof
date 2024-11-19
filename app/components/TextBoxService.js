function TextBoxService({ headingArab, headingEng, type }) {
  const primary = "text-xl max-md:text-lg";
  const secondary = "text-md";

  return (
    <div className="flex flex-col gap-4">
      <p
        dir="rtl"
        className={`text-[#444] font-semibold ${
          type === "primary" ? primary : ""
        } ${type === "secondary" ? secondary : ""}`}
      >
        {headingArab}
      </p>
      <p
        className={`text-red-600 font-semibold ${
          type === "primary" ? primary : ""
        } ${type === "secondary" ? secondary : ""}`}
      >
        {headingEng}
      </p>
    </div>
  );
}

export default TextBoxService;
