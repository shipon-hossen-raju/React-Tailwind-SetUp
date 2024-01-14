import { Link } from "react-router-dom";

export default function Identity({ style }) {
  return (
    <>
      <Link
        className={`inline-block text-xl md:text-2xl lg:text-[1.6rem] py-5 px-3`}
        to="/"
      >
        <span className={`text-black px-3 font-bold  ${style}`}>
          Basic<span className="text-primary"> SetUp</span>
        </span>
      </Link>
    </>
  );
}
