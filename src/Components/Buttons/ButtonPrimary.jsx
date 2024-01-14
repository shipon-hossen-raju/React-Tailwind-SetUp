export default function ButtonPrimary({
  children,
  onClick,
  style,
  type = "button",
}) {
  return (
    <>
      <button
        type={type}
        onClick={onClick}
        className={`inline-block py-1 md:py-2 lg:py-3 px-4 md:px-6 lg:px-9 bg-primary text-secondary my-1 border border-transparent hover:bg-white hover:text-primary hover:border-primary transition duration-300 hover:shadow-md rounded-md ${style}`}
      >
        {children}
      </button>
    </>
  );
}
