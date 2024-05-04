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
}

export function ChampSearchForm({ championList }: ChampionFormProps) {
  return (
    <>
      <div className="search-section">
        <div className="container">
          <div className="row">
            <div className="style-wrapper">
              <div className="col">
                <SearchInput championList={championList} />
              </div>
              <div className="col-8">
                <SearchRoles />
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
