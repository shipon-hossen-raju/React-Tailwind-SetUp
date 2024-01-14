import { Link } from "react-router-dom";

const FooterLink = ({ children, to }) => {
  return (
    <>
      <Link className="block hover:underline py-1.5 my-1" to={to}>
        {children}
      </Link>
    </>
  );
};

export default FooterLink;
