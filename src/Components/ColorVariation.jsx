import { useEffect, useState } from "react";

export default function ColorVariation({ colorItems, setBuyData }) {
  const [radio, setRadio] = useState({ value: "", id: "" });

  useEffect(() => {
    if (radio) {
      setBuyData((pre) => {
        return { ...pre, color: radio?.id };
      });
    }
  }, [radio]);

  // console.log("radio ", radio);

  return (
    <div className="flex items-center justify-start gap-1">
      {colorItems?.length &&
        colorItems?.map((color, idx) => (
          <label
            key={idx}
            className={`w-6 h-6 rounded-full border-2  flex items-center justify-center cursor-pointer ${
              radio?.id == `${color}`
                ? "border-primary shadow-lg"
                : "border-gray-400"
            }`}
            htmlFor={`${color}`}
          >
            <span
              style={{ backgroundColor: `${color}` }}
              className={`rounded-full inline-block ${
                radio?.id == `${color}` ? "w-4 h-4 " : "w-2 h-2 "
              }`}
            ></span>
            <input
              style={{ backgroundColor: `${color}` }}
              className={`hidden`}
              type="radio"
              name="color"
              id={`${color}`}
              onChange={(e) =>
                setRadio({
                  value: e.target.checked,
                  id: `${color}`,
                })
              }
            />
          </label>
        ))}
    </div>
  );
}
