import { useFetch, useDocTitle } from "../hooks";
import { Card } from "../components";

export const MovieList = ({endPoint, docTitle}) => {
  
  const {data: movies} = useFetch(endPoint);
  useDocTitle(docTitle);

  return (
    <main>
      <section className="max-w-7xl my-10">
        <div className="cards flex flex-wrap items-stretch justify-center gap-8">
          {movies && movies.map(movie => (
            <Card movie={movie} key={movie.id}/>
          ))}
        </div>
      </section>
    </main>
  )
}
