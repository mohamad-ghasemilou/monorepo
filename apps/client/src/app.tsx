import {useQuery} from "@tanstack/react-query";
import {ProductsService} from "../../../libs/data-access/src";
import {Button} from "../../../libs/ui/src/button";

import styles from './app.module.scss';

import { Route, Routes, Link } from 'react-router-dom';

export function App() {
  const {isLoading, error, data} = useQuery({
    queryKey: ['allProducts'],
    queryFn: () => ProductsService.getAll()
  })

  if (isLoading) return 'Loading...'
  if (error) return 'An error has occurred: '

  return (
    <div>
      <h1>{data[0].title}</h1>
      <Button/>
      <br />
      <hr />
      <br />
      <div role="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/page-2">Page 2</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              This is the generated root route.{' '}
              <Link to="/page-2">Click here for page 2.</Link>
            </div>
          }
        />
        <Route
          path="/page-2"
          element={
            <div>
              <Link to="/">Click here to go back to root page.</Link>
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
