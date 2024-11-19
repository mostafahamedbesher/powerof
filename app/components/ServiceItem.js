function ServiceItem({ children, margin }) {
  return (
    <div
      className={`flex items-center gap-6 ${
        margin === "left" ? "justify-start pl-32 max-sm:pl-20" : ""
      }  ${margin === "right" ? "justify-end pr-32 max-sm:pr-20" : ""}  ${
        margin === "center" ? "justify-center" : ""
      } `}
    >
      {children}
    </div>
  );
}

export default ServiceItem;
