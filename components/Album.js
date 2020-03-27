import React, { useState, useEffect, useMemo } from "react";
import queryString from "querystring";
import FsLightbox from "fslightbox-react";
import gallery from "./data/galleryWork";
import { CardImg, Col, Row } from "react-bootstrap";
function Album({ album }) {
  const list = gallery;
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1
  });
  function openLightboxOnSlide(number) {
    setLightboxController({
      toggler: !lightboxController.toggler,
      slide: number
    });
  }
  const filteredList = list.filter(image => image.album === album);
  const urlParams = useMemo(() => {
    if (process.browser) {
      return queryString.parse(location.search.replace("?", ""));
    } else {
      return {};
    }
  }, []);

  useEffect(() => {
    if (urlParams.image) {
      filteredList.forEach((el, index) => {
        if (el.id === parseInt(urlParams.image)) {
          openLightboxOnSlide(index + 1);
        }
      });
    }
  }, []);

  return (
    <>
      <div className=" mt-4">
        <Row>
          {filteredList.map((image, index) => (
            <Col sm="3" key={image.image}>
              <div
                onClick={() => {
                  openLightboxOnSlide(index + 1);
                  window.history.pushState(
                    {},
                    document.title,
                    `/work?image=${image.id}`
                  );
                }}
                className="card mb-4 mt-3"
              >
                <CardImg width="100%" src={image.image} alt={"img"} />
              </div>
            </Col>
          ))}
        </Row>
        <FsLightbox
          toggler={lightboxController.toggler}
          sources={filteredList.map(image => image.image)}
          slide={lightboxController.slide}
          onClose={() => {
            window.history.pushState({}, document.title, `/work`);
          }}
        />
      </div>
      <style global jsx>{`
        .row {
          margin-right: 0;
          margin-left: 0;
        }
      `}</style>
    </>
  );
}
export default Album;
