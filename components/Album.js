import React, { useState } from "react";
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
  console.log(openLightboxOnSlide);
  return (
    <>
      <div className=" mt-4">
        <Row>
          {filteredList.map((image, index) => (
            <Col sm="3" key={image.image}>
              <div
                onClick={() => openLightboxOnSlide(index + 1)}
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
