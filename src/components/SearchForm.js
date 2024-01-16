import * as React from "react";
import { useSearchParams } from "react-router-dom";

function SearchForm() {
  let [searchParams, setSearchParams] = useSearchParams();
  const logSearchParams = () => {
    console.log(searchParams.get("samplekey")); // url is assumed as https://.....com?samplekey="dummy"
  };
  logSearchParams();

  function handleSubmit(event) {
    event.preventDefault();

    setSearchParams("/search");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => e.target.value} />
        <input type="submit" value="Buscar" />
      </form>
    </div>
  );
}
