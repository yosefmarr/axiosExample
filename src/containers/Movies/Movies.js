import axios from 'axios';
import { useEffect, useState } from 'react';
import Movie from '../../components/Movie/Movie';

const Movies = (props) =>
{
    
    const [moviesState, setMoviesState] = useState({
        starwarsMovies: []
    });

    useEffect(() => {
        axios.get('https://swapi.dev/api/films')
        .then(response => {
            let moviesInfo = response.data.results;
            moviesInfo = moviesInfo.map(movie => ( { 
                title: movie.title,
                episode_id: movie.episode_id,
                opening_crawl: movie.opening_crawl,
                characters: [...movie.characters]
            }));
            setMoviesState({ starwarsMovies: [...moviesInfo] });
        });
    }, []);

    const movies = moviesState.starwarsMovies.map((m, i) => {
        return <Movie
                    key={m.episode_id}
                    characters={m.characters}
                    title={m.title}
                    episode_id={m.episode_id}
                    opening_crawl={m.opening_crawl}
                />
    });

    return (<div>{movies}</div>);
}

export default Movies;