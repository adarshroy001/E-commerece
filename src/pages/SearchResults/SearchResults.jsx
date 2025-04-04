import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { server } from "../../App";
import ProductMiniCard from "../../components/ProductMiniCard/ProductMiniCard";


const SearchResults = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get("query");

  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        
        const res = await axios.get(`${server}/api/search?query=${query}`);
        console.log(res);
        setResults(res.data);
      } catch (err) {
        console.error("Search error", err);
      } finally {
        setLoading(false);
      }
    };

    fetchSearchResults();
  }, [query]);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">
        Results for: <span className="text-blue-500">"{query}"</span>
      </h2>

      {loading ? (
        <p>Loading...</p>
      ) : results.length === 0 ? (
        <p>No products found.</p>
      ) : (
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 sm:gap-2 md:gap-3 mt-6 mb-6'>
            {
              results.map((item) => (
                <ProductMiniCard key={item.id} product={item} />
              ))
            }
          </div>
      )}
    </div>
  );
};

export default SearchResults;
