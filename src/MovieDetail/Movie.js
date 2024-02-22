import React, {useEffect, useState} from "react"
import '../MovieDetail/Movie.css';
import { useParams } from "react-router-dom"

const Movie = () => {
    const [currentMovieDetail, setMovie] = useState()
    const { id } = useParams()

    useEffect(() => {
        getData()
        window.scrollTo(0,0)
    }, [])

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
        .then(res => res.json())
        .then(data => setMovie(data))
    }

    return (
        <div className="movie">
            <div className="movie__intro">
                <img className="movie__backdrop" src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.backdrop_path : ""}`} alt="soon" />
            </div>
            <div className="movie__detail">
                <div className="movie__detailLeft">
                    <div className="movie__posterBox">
                        <img className="movie__poster" src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.poster_path: ""}`} alt="soon"/>
                    </div>
               
                <div className="movie__detailRight">
                    <div className="movie__detailRightTop">
                        <div className="original_title">{currentMovieDetail ?  "original_title : " + currentMovieDetail.original_title : ""}</div>
                        <div className="title">{currentMovieDetail ?  "title : " + currentMovieDetail.title : ""}</div>
                        <div className="tagline">{currentMovieDetail ? "tagline : "+ currentMovieDetail.tagline : ""}</div>
                        <div className="status">{currentMovieDetail ?  "status : " + currentMovieDetail.status : ""}</div>
                        <div className="vote_average"> {currentMovieDetail ? "vote_average : "+currentMovieDetail.vote_average: ""} <i class="fas fa-star" /></div>  
                        <div className="vote_count">{currentMovieDetail ?  "vote_count : " + currentMovieDetail.vote_count : ""}</div>
                        <div className="runtime">{currentMovieDetail ? "runtime : "+ currentMovieDetail.runtime + " mins" : ""}</div>
                        <div className="release_date">{currentMovieDetail ? "Release date: " + currentMovieDetail.release_date : ""}</div>
                        <div className="revenue">{currentMovieDetail ? "revenue : "+ currentMovieDetail.revenue : ""}</div>
                        <div className="popularity">{currentMovieDetail ? "popularity : " + currentMovieDetail.popularity : ""}</div>
                        <div className="original_language">{currentMovieDetail ? "original_language : " + currentMovieDetail.original_language : ""}</div>
                        <div className="budget">{currentMovieDetail ? "budget : " + currentMovieDetail.budget : ""}</div>
                       
                        <div className="movie__genres">
                            {
                                currentMovieDetail && currentMovieDetail.genres
                                ? 
                                currentMovieDetail.genres.map(genre => (
                                    <><span className="movie__genre" id={genre.id}> {genre.name}</span></>
                                )) 
                                : 
                                ""
                            }
                        </div>

                      

   
                        <div className="movie__releaseDate">
                            {
                                currentMovieDetail && currentMovieDetail.production_countries
                                ? 
                                currentMovieDetail.production_countries.map(production_countries => (
                                    <>production_countries : <span className="movie__releaseDate" >{production_countries.name} <br></br></span></>
                                )) 
                                : 
                                ""
                            }
                        </div>
                        
                        <div className="movie__releaseDate">
                            {
                                currentMovieDetail && currentMovieDetail.spoken_languages
                                ? 
                                currentMovieDetail.spoken_languages.map(spoken_languages => (
                                    <>spoken_languages : <span className="movie__releaseDate" >{spoken_languages.name} <br></br></span></>
                                )) 
                                : 
                                ""
                            }
                        </div>


                   
                        
                       
 
             
                    <div className="overview__highlight">
                      
                        <div className="overview">{currentMovieDetail ? "overview : "+ currentMovieDetail.overview : ""}</div>
                    </div>
                    
                </div>
            </div>






            <div className="movie__releaseDate">
                <div className="movie__releaseDate">Useful Links</div>
                {
                    currentMovieDetail && currentMovieDetail.homepage && <a href={currentMovieDetail.homepage}  style={{textDecoration: "none"}}><p><span className="movie__homeButton movie__Button">Homepage <i className="newTab fas fa-external-link-alt"></i></span></p></a>
                }
                {
                    currentMovieDetail && currentMovieDetail.imdb_id && <a href={"https://www.imdb.com/title/" + currentMovieDetail.imdb_id}  style={{textDecoration: "none"}}><p><span className="movie__imdbButton movie__Button">IMDb<i className="newTab fas fa-external-link-alt"></i></span></p></a>
                }
            </div>
            <div className="movie__releaseDate">
                {
                    currentMovieDetail && currentMovieDetail.production_companies && currentMovieDetail.production_companies.map(company => (
                        <>
                            {
                                company.logo_path 
                                && 
                                <div className="productionCompanyImage">
                                    <img className="movie__productionComapany" src={"https://image.tmdb.org/t/p/original" + company.logo_path} alt="soon" />
                                    <div>{company.name}</div>
                                </div>
                            }
                        </>
                    ))
                }
            </div>
            </div>
        </div>
        </div>
    )
}

export default Movie