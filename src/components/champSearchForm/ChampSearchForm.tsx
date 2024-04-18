import { SearchInput } from "./SearchInput/searchInput";
import { SearchRoles } from "./SearchRoles/searchRoles";
import { SearchDifficulty } from "./SearchDifficulty/searchDifficulty";

import "./champSearchForm.css";

export function ChampSearchForm({ championList }) {
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
