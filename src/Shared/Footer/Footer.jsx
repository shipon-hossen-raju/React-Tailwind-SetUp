import PageSection from "../../Components/PageSection";
import DownloadApp from "./DownloadApp";
import FooterLink from "./FooterLink";
import SubscribeOfferFT from "./SubscribeOfferFT";

const Footer = () => {
  return (
    <>
      <PageSection className="bg-black">
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 text-secondary">
            <div>
              <SubscribeOfferFT />
            </div>

            {/* support */}
            <div className="space-y-7">
              <h3 className="text-xl"> Support </h3>

              <div>
                <p className="mb-3">
                  Dhalarchar, Aminpur, Pabna, Rajshahi, Bangladesh
                </p>

                <a className="block my-1"> msshipon234@gmail.com </a>
                <a className="block my-1"> +880 1765037372 </a>
              </div>
            </div>

            {/* account */}
            <div className="space-y-7">
              <h3 className="text-xl"> Account </h3>

              <div>
                <FooterLink to="#">
                  <span>My Account</span>
                </FooterLink>

                <FooterLink to="#">
                  <span>Login / Register</span>
                </FooterLink>

                <FooterLink to="#">
                  <span>Cart</span>
                </FooterLink>

                <FooterLink to="#">
                  <span>Wishlist</span>
                </FooterLink>

                <FooterLink to="#">
                  <span>shop</span>
                </FooterLink>
              </div>
            </div>

            {/* quick link */}
            <div className="space-y-7">
              <h3 className="text-xl"> Quick Link </h3>

              <div>
                <FooterLink to="#">
                  <span>Privacy Policy</span>
                </FooterLink>

                <FooterLink to="#">
                  <span>Terms of use </span>
                </FooterLink>

                <FooterLink to="#">
                  <span>FAQ</span>
                </FooterLink>

                <FooterLink to="#">
                  <span>Contact</span>
                </FooterLink>
              </div>
            </div>

            {/* download app */}
            <div className="space-y-7">
              <h3 className="text-xl"> Download App </h3>

              <div>
                <DownloadApp />
              </div>
            </div>
          </div>
        </div>
      </PageSection>
    </>
  );
};

export default Footer;
