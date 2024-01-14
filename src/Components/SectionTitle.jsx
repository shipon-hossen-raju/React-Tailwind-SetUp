import PrevNextButton from "./Buttons/PrevNextButton";
import CountdownDigital from "./TimeCalculates/CountdownDigital";

const SectionTitle = ({
  subTitle,
  title,
  timeComeDown = false,
  parentStyle = null,
  buttonPrev = true,
  buttonNext = true,
}) => {
  return (
    <>
      <div className="pb-14 flex flex-col sm:flex-row items-end gap-3 justify-between">
        <div className={`max-w-max space-y-5 ${parentStyle && parentStyle}`}>
          {subTitle && (
            <h3 className="text-primary flex items-center gap-2 relative pl-5 font-inter">
              <span className="absolute top-0 left-0 h-full w-3 bg-primary rounded-sm"></span>
              <span className="text-base font-semibold">{subTitle}</span>
            </h3>
          )}

          {title && (
            <h1 className="text-4xl font-inter font-semibold"> {title} </h1>
          )}
        </div>

        {/* time count */}
        {timeComeDown && (
          <CountdownDigital parentStyle="ml-0 mx-auto md:ml-10 lg:ml-14" />
        )}

        {buttonPrev && buttonNext && <PrevNextButton />}
      </div>
    </>
  );
};

export default SectionTitle;
