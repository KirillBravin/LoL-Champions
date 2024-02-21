import { Container } from "react-bootstrap";
import { useLeagueService } from "../../services/LeagueService";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function SkinDiscounts() {
  const { getChampionLoading } = useLeagueService();
  const _imgWidth = `162px`;

  const settings = {
    dots: true,
    infinite: true,
    speed: 2500,
    slidesToShow: 8,
    slidesToScroll: 8,
    /*     autoplay: true,
    autoplaySpeed: 10000, */
    arrows: false,
  };

  return (
    <section className="skin-discount h-500">
      <Container>
        <h2 className="d-flex justify-content-center pt-5">
          Weekly skin discount
        </h2>
        <Slider {...settings}>
          <div>
            <img
              src={getChampionLoading(`Ahri_2.jpg`)}
              alt=""
              style={{ maxWidth: _imgWidth }}
            />
            {/* <div
              style={{
                width: _imgWidth,
                height: `25px`,
                backgroundColor: `black`,
              }}></div> */}
          </div>
          <div>
            <img
              src={getChampionLoading(`Akali_15.jpg`)}
              alt=""
              style={{ maxWidth: _imgWidth }}
            />
          </div>
          <div>
            <img
              src={getChampionLoading(`Ashe_23.jpg`)}
              alt=""
              style={{ maxWidth: _imgWidth }}
            />
          </div>
          <div>
            <img
              src={getChampionLoading(`Caitlyn_11.jpg`)}
              alt=""
              style={{ maxWidth: _imgWidth }}
            />
          </div>
          <div>
            <img
              src={getChampionLoading(`Camille_11.jpg`)}
              alt=""
              style={{ maxWidth: _imgWidth }}
            />
          </div>
          <div>
            <img
              src={getChampionLoading(`Darius_15.jpg`)}
              alt=""
              style={{ maxWidth: _imgWidth }}
            />
          </div>
          <div>
            <img
              src={getChampionLoading(`Evelynn_3.jpg`)}
              alt=""
              style={{ maxWidth: _imgWidth }}
            />
          </div>
          <div>
            <img
              src={getChampionLoading(`Garen_22.jpg`)}
              alt=""
              style={{ maxWidth: _imgWidth }}
            />
          </div>
          <div>
            <img
              src={getChampionLoading(`Gwen_11.jpg`)}
              alt=""
              style={{ maxWidth: _imgWidth }}
            />
          </div>
          <div>
            <img
              src={getChampionLoading(`Janna_5.jpg`)}
              alt=""
              style={{ maxWidth: _imgWidth }}
            />
          </div>
          <div>
            <img
              src={getChampionLoading(`Jayce_2.jpg`)}
              alt=""
              style={{ maxWidth: _imgWidth }}
            />
          </div>
          <div>
            <img
              src={getChampionLoading(`Jinx_38.jpg`)}
              alt=""
              style={{ maxWidth: _imgWidth }}
            />
          </div>
          <div>
            <img
              src={getChampionLoading(`Katarina_10.jpg`)}
              alt=""
              style={{ maxWidth: _imgWidth }}
            />
          </div>
          <div>
            <img
              src={getChampionLoading(`Kayle_42.jpg`)}
              alt=""
              style={{ maxWidth: _imgWidth }}
            />
          </div>
          <div>
            <img
              src={getChampionLoading(`LeeSin_31.jpg`)}
              alt=""
              style={{ maxWidth: _imgWidth }}
            />
          </div>
          <div>
            <img
              src={getChampionLoading(`Leona_10.jpg`)}
              alt=""
              style={{ maxWidth: _imgWidth }}
            />
          </div>
        </Slider>
      </Container>
    </section>
  );
}
