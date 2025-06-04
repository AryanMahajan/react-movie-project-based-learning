import MovieCard from "../components/MovieCard";
import { useState } from "react";
import '../css/Home.css';
import '../css/MovieCard.css';

function Home() {
    const [searchQuery, setSearchQuery] = useState("");


    const movies = [
        { id: 1, title: "John Wick", releaseDate: "2020" },
        { id: 2, title: "Terminator", releaseDate: "1999" },
        { id: 3, title: "The Matrix", releaseDate: "1998" },
    ]

    const handleSearch = (e) => {
        e.preventDefault();
        alert(searchQuery);
    }

    return <div className="home">
        <form onSubmit={handleSearch} className="search-form">
            <input type="text" placeholder="Search for Movies..." className="search-input" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
        </form>
        <button className="search-btn" type="submit">Search</button>

        <div className="movies-grid">
            {movies.map((movie) =>
            (// movie.title.toLowerCase().startsWith(searchQuery) && 
                <MovieCard movie={movie} key={movie.id} />
            ))}
        </div>
    </div>
}

export default Home;