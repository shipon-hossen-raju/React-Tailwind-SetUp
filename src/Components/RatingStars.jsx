import {
  starFilledIcon,
  starHalfFilledIcon,
  unFilledIcon,
} from "../Utils/all-icons-svg";

const RatingStars = ({ rating }) => {
  const maxRating = 5;
  const filledStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= maxRating; i++) {
      if (i <= filledStars) {
        stars.push(<span key={i}>{starHalfFilledIcon}</span>);
      } else if (hasHalfStar && i === filledStars + 1) {
        stars.push(<span key={i}>{starFilledIcon}</span>);
      } else {
        stars.push(<span key={i}>{unFilledIcon}</span>);
      }
    }
    return stars;
  };

  return (
    <div className="flex gap-1 items-center justify-start">
      {renderStars().map((s, idx) => (
        <p key={idx}>{s}</p>
      ))}
    </div>
  );
};

export default RatingStars;
