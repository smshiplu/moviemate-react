import { useSearchParams } from "react-router-dom";
import { useFetch, useDocTitle } from "../hooks";
import { Card } from "../components";

export const Search = ({endPoint}) => {
  
  const [searchParam] = useSearchParams();
  const searchTerm = searchParam.get("q");
  useDocTitle(`Search result for ${searchTerm}`);
  const {data: movies} = useFetch(endPoint, searchTerm);

  return (
    <main>
      <section className="my-10">
        { movies.length && <h2 className="text-4xl text-slate-800 mb-10 dark:text-slate-200">Search Result for: '{`${searchTerm}`}'</h2> }
        { !movies.length && <h2 className="text-4xl text-slate-800 mb-10 dark:text-slate-200">No Result Found for: '{`${searchTerm}`}'</h2> }

        { movies.length &&
          <div className="cards flex flex-wrap gap-8">
            {movies.map(movie => (
              <Card movie={movie} key={movie.id} />
            ))}
          </div>
        }

      </section>
    </main>
  )
}
