import React from "react";
import {
  EmailShareButton,
  FacebookShareButton,
  MailruShareButton,
  OKShareButton,
  TelegramShareButton,
  ViberShareButton,
  VKShareButton,
  WhatsappShareButton,
} from "react-share";
import {
  EmailIcon,
  FacebookIcon,
  MailruIcon,
  OKIcon,
  TelegramIcon,
  ViberIcon,
  VKIcon,
  WhatsappIcon,
} from "react-share";

const ButtonShare = () => {
  return (
    <>
      <div className="text-center">
        <div>
          <div className="button_share mb-2">Поделиться</div>
          <EmailShareButton url={"hdkjsl"} className="ml-2 mr-2 mb-3">
            <EmailIcon size={45} round={true} />
          </EmailShareButton>
          <FacebookShareButton url={"khe"} className="ml-2 mr-2 mb-3">
            <FacebookIcon size={45} round={true} />
          </FacebookShareButton>
          <MailruShareButton url={"khe"} className="ml-2 mr-2mb-3">
            <MailruIcon size={45} round={true} />
          </MailruShareButton>
          <OKShareButton url={"khe"} className="ml-2 mr-2 mb-3">
            <OKIcon size={45} round={true} />
          </OKShareButton>
          <TelegramShareButton url={"khe"} className="ml-2 mr-2 mb-3">
            <TelegramIcon size={45} round={true} />
          </TelegramShareButton>
          <ViberShareButton url={"ldhbfc"} className="ml-2 mr-2 mb-3">
            <ViberIcon size={45} round={true} />
          </ViberShareButton>
          <VKShareButton
            url={"http://localhost:3000/"}
            className="ml-2 mr-2 mb-3"
          >
            <VKIcon size={45} round={true} />
          </VKShareButton>
          <WhatsappShareButton url={"ldhbfc"} className="ml-2 mr-2 mb-3">
            <WhatsappIcon size={45} round={true} />
          </WhatsappShareButton>
        </div>
        <style global jsx>{`
          .button_share {
            font-family: Helvetica Neue, Arial, sans-serif;
            font-weight: 200;
            text-indent: 1.5em;
          }
        `}</style>
      </div>
    </>
  );
};
export default ButtonShare;
