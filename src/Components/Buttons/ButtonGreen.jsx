export default function ButtonGreen({
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
        className={`inline-block py-1 md:py-2 lg:py-3 px-4 md:px-6 lg:px-9 bg-green text-secondary my-1 border border-transparent hover:bg-white hover:text-green hover:border-green transition duration-300 hover:shadow-md rounded-md ${style}`}
      >
        {children}
      </button>
    </>
  );
}
