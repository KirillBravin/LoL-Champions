import { Container } from "react-bootstrap";
import { useLeagueService } from "../../services/LeagueService";

export function SkinDiscounts() {
  const { getChampionLoading } = useLeagueService();

  return (
    <section className="skin-discount h-500">
      <Container>
        <h2 className="d-flex justify-content-center pt-5">
          Weekly skin discount
        </h2>
        <div className="row row-cols-auto">
          <div className="col">
            <img
              src={`${getChampionLoading(`Ahri_2.jpg`)}`}
              alt=""
              className="rounded"
              style={{ maxWidth: `187px` }}
            />
          </div>
          <div className="col">
            <div className="col">
              <img
                src={`${getChampionLoading(`Ahri_2.jpg`)}`}
                alt=""
                style={{ maxWidth: `187px` }}
              />
            </div>
          </div>
          <div className="col">
            <div className="col">
              <img
                src={`${getChampionLoading(`Ahri_2.jpg`)}`}
                alt=""
                style={{ maxWidth: `187px` }}
              />
            </div>
          </div>
          <div className="col">
            <div className="col">
              <img
                src={`${getChampionLoading(`Ahri_2.jpg`)}`}
                alt=""
                style={{ maxWidth: `187px` }}
              />
            </div>
          </div>
          <div className="col">
            <div className="col">
              <img
                src={`${getChampionLoading(`Ahri_2.jpg`)}`}
                alt=""
                style={{ maxWidth: `187px` }}
              />
            </div>
          </div>
          <div className="col">6</div>
          <div className="col">7</div>
          <div className="col">8</div>
          <div className="col">9</div>
          <div className="col">10</div>
          <div className="col">11</div>
          <div className="col">12</div>
          <div className="col">13</div>
          <div className="col">14</div>
          <div className="col">15</div>
          <div className="col">16</div>
        </div>
      </Container>
    </section>
  );
}
