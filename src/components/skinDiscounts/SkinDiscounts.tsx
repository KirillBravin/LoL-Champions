import { Container } from "react-bootstrap";
import { useLeagueService } from "../../services/LeagueService";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../style/skinDiscount.sass";

export function SkinDiscounts() {
  const { getChampionLoading } = useLeagueService();
  const _imgPath = `.././public/icons/RP_icon.webp`;

  const settings = {
    dots: true,
    infinite: true,
    speed: 2500,
    slidesToShow: 8,
    slidesToScroll: 8,
    autoplay: true,
    autoplaySpeed: 10000,
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
              className="skinImg"
            />
            <div className="black-box">
              <i>-30%</i>
              <div className="black-box__item-align">
                680 <img src={_imgPath} className="black-box__rp-icon" />
              </div>
            </div>
          </div>
          <div>
            <img
              src={getChampionLoading(`Akali_15.jpg`)}
              alt=""
              className="skinImg"
            />
            <div className="black-box">
              <i>-60%</i>
              <div className="black-box__item-align">
                540 <img src={_imgPath} className="black-box__rp-icon" />
              </div>
            </div>
          </div>
          <div>
            <img
              src={getChampionLoading(`Ashe_23.jpg`)}
              alt=""
              className="skinImg"
            />
            <div className="black-box">
              <i>-20%</i>
              <div className="black-box__item-align">
                1080 <img src={_imgPath} className="black-box__rp-icon" />
              </div>
            </div>
          </div>
          <div>
            <img
              src={getChampionLoading(`Caitlyn_11.jpg`)}
              alt=""
              className="skinImg"
            />
            <div className="black-box">
              <i>-50%</i>
              <div className="black-box__item-align">
                910 <img src={_imgPath} className="black-box__rp-icon" />
              </div>
            </div>
          </div>
          <div>
            <img
              src={getChampionLoading(`Camille_11.jpg`)}
              alt=""
              className="skinImg"
            />
            <div className="black-box">
              <i>-40%</i>
              <div className="black-box__item-align">
                810 <img src={_imgPath} className="black-box__rp-icon" />
              </div>
            </div>
          </div>
          <div>
            <img
              src={getChampionLoading(`Darius_15.jpg`)}
              alt=""
              className="skinImg"
            />
            <div className="black-box">
              <i>-50%</i>
              <div className="black-box__item-align">
                910 <img src={_imgPath} className="black-box__rp-icon" />
              </div>
            </div>
          </div>
          <div>
            <img
              src={getChampionLoading(`Evelynn_3.jpg`)}
              alt=""
              className="skinImg"
            />
            <div className="black-box">
              <i>-50%</i>
              <div className="black-box__item-align">
                260 <img src={_imgPath} className="black-box__rp-icon" />
              </div>
            </div>
          </div>
          <div>
            <img
              src={getChampionLoading(`Garen_22.jpg`)}
              alt=""
              className="skinImg"
            />
            <div className="black-box">
              <i>-20%</i>
              <div className="black-box__item-align">
                1080 <img src={_imgPath} className="black-box__rp-icon" />
              </div>
            </div>
          </div>
          <div>
            <img
              src={getChampionLoading(`Gwen_11.jpg`)}
              alt=""
              className="skinImg"
            />
            <div className="black-box">
              <i>-45%</i>
              <div className="black-box__item-align">
                742 <img src={_imgPath} className="black-box__rp-icon" />
              </div>
            </div>
          </div>
          <div>
            <img
              src={getChampionLoading(`Janna_5.jpg`)}
              alt=""
              className="skinImg"
            />
            <div className="black-box">
              <i>-60%</i>
              <div className="black-box__item-align">
                728 <img src={_imgPath} className="black-box__rp-icon" />
              </div>
            </div>
          </div>
          <div>
            <img
              src={getChampionLoading(`Jayce_2.jpg`)}
              alt=""
              className="skinImg"
            />
            <div className="black-box">
              <i>-60%</i>
              <div className="black-box__item-align">
                390 <img src={_imgPath} className="black-box__rp-icon" />
              </div>
            </div>
          </div>
          <div>
            <img
              src={getChampionLoading(`Jinx_38.jpg`)}
              alt=""
              className="skinImg"
            />
            <div className="black-box">
              <i>-40%</i>
              <div className="black-box__item-align">
                810 <img src={_imgPath} className="black-box__rp-icon" />
              </div>
            </div>
          </div>
          <div>
            <img
              src={getChampionLoading(`Katarina_10.jpg`)}
              alt=""
              className="skinImg"
            />
            <div className="black-box">
              <i>-60%</i>
              <div className="black-box__item-align">
                540 <img src={_imgPath} className="black-box__rp-icon" />
              </div>
            </div>
          </div>
          <div>
            <img
              src={getChampionLoading(`Kayle_42.jpg`)}
              alt=""
              className="skinImg"
            />
            <div className="black-box">
              <i>-70%</i>
              <div className="black-box__item-align">
                405 <img src={_imgPath} className="black-box__rp-icon" />
              </div>
            </div>
          </div>
          <div>
            <img
              src={getChampionLoading(`LeeSin_31.jpg`)}
              alt=""
              className="skinImg"
            />
            <div className="black-box">
              <i>-30%</i>
              <div className="black-box__item-align">
                1295 <img src={_imgPath} className="black-box__rp-icon" />
              </div>
            </div>
          </div>
          <div>
            <img
              src={getChampionLoading(`Leona_10.jpg`)}
              alt=""
              className="skinImg"
            />
            <div className="black-box">
              <i>-50%</i>
              <div className="black-box__item-align">
                910 <img src={_imgPath} className="black-box__rp-icon" />
              </div>
            </div>
          </div>
        </Slider>
      </Container>
    </section>
  );
}
