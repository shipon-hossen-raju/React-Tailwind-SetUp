export default function Input({
  id,
  labelText,
  type = "text",
  placeholder,
  name,
  handle,
}) {
  if (type === "password") {
    return (
      <div>
        {labelText && <label htmlFor={id}> {labelText} </label>}
        <input
          className="text-base py-1 px-2 font-poppins font-normal text-primary focus:outline-none focus:border-primary border-b border-gray-300"
          type={type}
          name={name}
          onChange={(e) => handle(e.target)}
          placeholder={placeholder}
        />
      </div>
    );
  }

  return (
    <div>
      {labelText && <label htmlFor={id}> {labelText} </label>}
      <input
        className="text-base py-1 px-2 font-poppins font-normal text-primary focus:outline-none focus:border-primary border-b border-gray-300"
        type={type}
        name={name}
        onChange={(e) => handle(e.target)}
        placeholder={placeholder}
      />
    </div>
  );
}
