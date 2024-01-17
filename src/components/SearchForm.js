import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const SearchForm = ({ setResults }) => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const url = "http://localhost:3000/products";

  const FetchData = (value) => {
    const lowercasedValue = value.toLowerCase();
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((product) => {
          return (
            value &&
            product &&
            product.name &&
            product.name.toLowerCase().includes(lowercasedValue)
          );
        });
        {
          /*console.log(results);*/
        }
        setResults(results);
        navigate("/search");
      });
  };

  const handleChange = (value) => {
    setInput(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    FetchData(input);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => handleChange(e.target.value)}
        />
        <input type="submit" value="Buscar" />
      </form>
    </div>
  );
};

export default SearchForm;
