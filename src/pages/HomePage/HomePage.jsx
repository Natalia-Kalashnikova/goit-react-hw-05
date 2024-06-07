import { useEffect, useState } from 'react';
import MovieList from '../../components/MovieList/MovieList';
import { getTrendingMovies } from '../../api/movies-api';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import Loader from '../../components/Loader/Loader';
import css from './HomePage.module.css';

const HomePage =()=> {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function fetchTrendMovies() {
      try {
        setIsLoading(true);
        setIsError(false);
        const data = await getTrendingMovies();
        setTrendingMovies(data.results);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchTrendMovies();
  }, [setTrendingMovies]);

  return (
    <div>
      <h2 className={css.home_title}>Trending today</h2>
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {trendingMovies.length > 0 && <MovieList movies={trendingMovies} />}
    </div>
  );
}

export default HomePage;