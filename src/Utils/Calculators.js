export const percentage = (originalPrice, discountValue) => {
  if (
    isNaN(originalPrice) ||
    isNaN(discountValue) ||
    discountValue < 0 ||
    discountValue > 100
  ) {
    console.log(
      "Invalid input. Please provide valid numbers for mainPrice and percentageValue (0-100)."
    );
  }

  const pt = (originalPrice * discountValue) / 100;
  const discountedPrice = originalPrice - pt;

  return {
    originalPrice: originalPrice,
    percentageValue: discountValue,
    discountedPrice,
    discountAmount: pt,
  };
};

//
export default function calculateTimeDifference(endTime) {
  const now = new Date();
  const timeDifference = endTime - now;

  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  return {
    days,
    hours,
    minutes,
    seconds,
  };
}
