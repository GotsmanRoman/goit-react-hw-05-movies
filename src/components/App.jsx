import Header from './Components/Header/Header';
//import { Home } from './Pages/Home';
//import { Movies } from './Pages/Movies';
//import {MovieDetails} from './Pages/MovieDetails';
//import { Cast } from './Pages/Cast';
//import { Reviews } from './Pages/Reviews';
import Loader from './Components/Loader/Loader';
import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const Home = lazy(() => import('./Pages/Home'));
const Movies = lazy(() => import('./Pages/Movies'));
const MovieDetails = lazy(() => import('./Pages/MovieDetails'));
const Cast = lazy(() => import('./Components/CastItem/Cast'));
const Reviews = lazy(() => import('./Components/ReviewItem/Reviews'));

export const App = () => {
  return (
    <div>
      <Header></Header>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="Cast" element={<Cast />} />
            <Route path="Reviews" element={<Reviews />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};
