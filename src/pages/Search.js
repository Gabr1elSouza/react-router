import { SearchResults } from "../components/SearchResults";

const Search = ({ results }) => {
  return (
    <div>
      <h1>
        Resultados disponíveis:
        <SearchResults items={results} />
      </h1>
    </div>
  );
};

export default Search;
