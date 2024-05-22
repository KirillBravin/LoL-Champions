import "./championInfo.css";

export function ChampionInfo() {
  const backgroundStyle = {
    background:
      "url('https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_0.jpg') no-repeat center center ",
    backgroundSize: "cover",
  };

  return (
    <div className="championInfo">
      <div className="championInfo__background" style={backgroundStyle}></div>
      <div className="container">
        <div className="wrapper">
          <img
            className="championInfo__main-picture"
            src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_0.jpg"
            alt="Ahri splash art"
          />
        </div>
      </div>
    </div>
  );
}
