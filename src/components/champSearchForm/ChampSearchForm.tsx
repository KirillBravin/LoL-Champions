import { SearchInput } from "./SearchInput/searchInput";
import { SearchRoles } from "./SearchRoles/searchRoles";
import { SearchDifficulty } from "./SearchDifficulty/searchDifficulty";

import "./champSearchForm.css";

interface SingleChampionData {
  id: string;
  name: string;
  key: string;
  title: string;
  tags: string;
  difficulty: number;
}

interface ChampionFormProps {
  championList: SingleChampionData[];
  getChampionSelected: string;
  getRoleSelected: string;
}

export function ChampSearchForm({
  championList,
  getChampionSelected,
  getRoleSelected,
}: ChampionFormProps) {
  return (
    <>
      <div className="search-section">
        <div className="container">
          <div className="row">
            <div className="style-wrapper">
              <div className="col">
                <SearchInput
                  championList={championList}
                  getChampionSelected={getChampionSelected}
                />
              </div>
              <div className="col-8">
                <SearchRoles getRoleSelected={getRoleSelected} />
              </div>
              <div className="col">
                <SearchDifficulty />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
