import "./championInfoAbilities.scss";

export function ChampionAbilities() {
  return (
    <div className="championAbilities">
      <div className="championAbilities-style__background">
        <img
          className="championAbilities-style__icon"
          src="https://www.leagueoflegends.com/_next/static/node_modules/@riotgames/blades-ui/dist/skins/common/assets/roleMage.svg"
          alt="Mage"
        />
      </div>
      <div className="championAbilities-style__abilities-sideText">
        Abilities
      </div>
      <div className="container">
        <div className="championAbilities-style__wrapper">
          <div className="championAbilities-style__abilities-info">
            <h2 className="championAbilities-style__header">Abilities</h2>
            <div className="championAbilities-style__ability-icons-wrapper">
              <img
                className="championAbilities-style__ability-icon"
                src="https://ddragon.leagueoflegends.com/cdn/14.10.1/img/passive/Ahri_SoulEater2.png"
                alt=""
              />
              <img
                className="championAbilities-style__ability-icon"
                src="https://ddragon.leagueoflegends.com/cdn/14.10.1/img/spell/AhriQ.png"
                alt=""
              />
              <img
                className="championAbilities-style__ability-icon"
                src="https://ddragon.leagueoflegends.com/cdn/14.10.1/img/spell/AhriW.png"
                alt=""
              />
              <img
                className="championAbilities-style__ability-icon"
                src="https://ddragon.leagueoflegends.com/cdn/14.10.1/img/spell/AhriE.png"
                alt=""
              />
              <img
                className="championAbilities-style__ability-icon"
                src="https://ddragon.leagueoflegends.com/cdn/14.10.1/img/spell/AhriR.png"
                alt=""
              />
            </div>
          </div>
          <div className="championAbilities-style__abilities-preview"></div>
        </div>
      </div>
    </div>
  );
}
