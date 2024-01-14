import appStore from "../../assets/AppStore.png";
import qrCode from "../../assets/QrCode.png";
import playStore from "../../assets/google-play-store.png";
import SocialMedia from "./SocialMedia";

const DownloadApp = () => {
  return (
    <>
      <div>
        <p> Save $3 with app new user only </p>
        <div className="grid grid-cols-2 grid-flow-row-dense gap-1">
          <figure className="p-2 col-span-1 row-span-2">
            <img className="w-full h-full" src={qrCode} alt="qr code" />
          </figure>

          <figure className="p-2 col-span-1">
            <img className="w-full h-full" src={playStore} alt="play Store" />
          </figure>

          <figure className="p-2 col-span-1">
            <img className="w-full h-full" src={appStore} alt="app Store" />
          </figure>
        </div>

        <SocialMedia />
      </div>
    </>
  );
};

export default DownloadApp;
