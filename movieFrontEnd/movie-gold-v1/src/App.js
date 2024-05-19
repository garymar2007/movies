import logo from './logo.svg';
import './App.css';
import api from './api/axiosConfig';
import { useEffect, useState } from 'react';
import Layout from './components/Layout';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';

function App() {

  const [movies, setMovies] = useState();
  const [movie, setMovie] = useState();
  const [reviews, setReviews] = useState();

  const getMovies = async () => {
    try {
        const response = await api.get('/api/v1/movies');
        console.log(response);
        setMovies(response.data);
    } catch(err) {
      console.log(err);
    }
  }

  const getMovieData = async (id) => {
    try {
        const response = await api.get(`/api/v1/movies/${id}`);
        const singleMovie = response.data;
        setMovie(singleMovie);
        setReviews(singleMovie.reviews);
    } catch(err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="App">
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route path="/" element={<Home/>}></Route>
                //<Route path="/Trailer/:ytTrailerId" element={<Trailer/>}></Route>
                //<Route path="/Reviews/:Id" element ={<Reviews getMovieData = {getMovieData} movie={movie} reviews ={reviews} setReviews = {setReviews} />}></Route>
                //<Route path="*" element={<NotFound/>}></Route>
            </Route>
        </Routes>
    </div>
  );
}

export default App;
