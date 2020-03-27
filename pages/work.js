import React, { Fragment } from "react";
import Header from "../components/Header";
import gallery from "../components/data/galleryWork";
import Footer from "../components/Footer";
import Album from "../components/Album";
function Work() {
  const list = gallery;
  const sortNumber = (a, b) => {
    return a - b;
  };
  const albums = [...new Set(list.map(image => image.album))].sort(sortNumber);

  return (
    <>
      <Header />
      <div className="container mt-4">
        {albums.map(album => (
          <Fragment key={album}>
            <div className="text-center">
              <h6 className="card-title">{album}</h6>
            </div>
            <div className="row">
              <Album album={album} />
            </div>
          </Fragment>
        ))}
      </div>
      <Footer />
      <style global jsx>{`
        .work {
          background-image: url("/foto-napylenie-uteplitelya.jpg");
          height: 250px;
          background-repeat: no-repeat, repeat;
          background-position: center;
          background-size: cover;
        }
      `}</style>
    </>
  );
}
export default Work;
