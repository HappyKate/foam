import React, { Fragment } from "react";
import Header from "../components/Header";
import gallery from "../components/data/galleryWork";
import Footer from "../components/Footer";
import Album from "../components/Album";
import ButtonShare from "../components/ButtonShare";
function Work() {
    const list = gallery;
    const sortNumber = (a, b) => {
        return a - b;
    };
    const albums = [...new Set(list.map((image) => image.album))].sort(
        sortNumber
    );

    return (
        <>
            <Header />
            <div className="container mt-5 mb-5">
                {albums.map((album) => (
                    <Fragment key={album}>
                        <div className="text-center">
                            <div className="work_title mt-4">{album}</div>
                        </div>
                        <div className="row">
                            <Album album={album} />
                        </div>
                    </Fragment>
                ))}
                <ButtonShare />
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
        .work_title {
          color: #ffd178;
          font-family: Arial Narrow, sans-serif;
          font-size: 3vh;
        }
      `}</style>
        </>
    );
}
export default Work;
