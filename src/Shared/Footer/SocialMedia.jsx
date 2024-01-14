import { Link } from "react-router-dom";
import {
  facebookLiteIcon,
  instagramLiteIcon,
  linkedlnLiteIcon,
  twitterLiteIcon,
} from "../../Utils/all-icons-svg";

const mediaItems = [
  {
    _id: 1,
    name: "facebook",
    icon: facebookLiteIcon,
    link: "https://facebook.com/ShiponHossenRaju",
  },
  {
    _id: 2,
    name: "twitter",
    icon: twitterLiteIcon,
    link: "https://twitter.com/ShiponHossenRa2",
  },
  {
    _id: 3,
    name: "instagram",
    icon: instagramLiteIcon,
    link: "#",
  },
  {
    _id: 2,
    name: "linkedln",
    icon: linkedlnLiteIcon,
    link: "https://www.linkedin.com/in/shipon-hossen-raju-7927211a2/",
  },
];

const SocialMedia = () => {
  return (
    <>
      <div className="flex items-center justify-start gap-3 mt-6">
        {mediaItems?.length &&
          mediaItems.map((item, idx) => (
            <Link
              key={idx}
              className="w-9 h-9 flex items-center justify-center"
              to={item?.link}
            >
              <span> {item?.icon} </span>
            </Link>
          ))}
      </div>
    </>
  );
};

export default SocialMedia;
