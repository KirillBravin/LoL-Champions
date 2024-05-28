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
      <div className="championAbilities-style__abilities">Abilities</div>
      <div className="container">
        <h2 className="championAbilities-style__header">Abilities</h2>
      </div>
    </div>
  );
}
