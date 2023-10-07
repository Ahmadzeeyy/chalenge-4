/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

/* eslint-disable react/prop-types */
function SearchMovie({ data }) {
  const [searchResult, setSearchResult] = useState([]);
  const [searchParaams] = useSearchParams();
  const query = searchParaams.get("query");
  const page = searchParaams.get("page");
  const language = searchParaams.get("language");
  useEffect(() => {
    function handlesearch() {
      let searchItem = query.toLowerCase();
      setSearchResult(
        data.filter((item) => item.title.toLowerCase().includes(searchItem))
      );
    }
    handlesearch();
  }, [data, query]);

  console.log(searchResult);
  return (
    <>
      {searchResult.map((item) => (
        <div key={item.id}>{item.id}</div>
      ))}
    </>
  );
}

export default SearchMovie;
