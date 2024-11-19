function FooterSection() {
  return (
    <div className="flex items-center justify-center mt-10">
      <div className="h-1 w-[10%] bg-red-600"></div>

      <div className="flex items-center justify-start text-primary">
        <span className="bg-red-600 text-2xl px-1 py-2">Power</span>
        <span className="bg-orange-400 text-2xl px-1 py-2">Of</span>
      </div>

      <div className="h-1 bg-orange-400 grow"></div>
    </div>
  );
}

export default FooterSection;
