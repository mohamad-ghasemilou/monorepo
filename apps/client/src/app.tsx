import {lazy, Suspense} from 'react'
import {useQuery} from "@tanstack/react-query";
import {ProductsService} from "@monorepo/data-access";
import {routes, Layout} from "@monorepo/feature"
import styles from './app.module.scss';
// import {HomePage} from "@monorepo/feature";
import {Route, Routes, Link} from 'react-router-dom';


const LazyHomePage = lazy(() => import("../../../libs/feature/src/pages/home/index"));

export function App() {
  const {isLoading, error, data} = useQuery({
    queryKey: ['allProducts'],
    queryFn: () => ProductsService.getAll()
  })

  if (isLoading) return 'Loading...'
  if (error) return 'An error has occurred: '

  return (
    <Suspense fallback={null}>
      <Layout>
        <Routes>
          <Route path={routes.home} element={<LazyHomePage/>}/>
          <Route
            path="/page-2"
            element={
              <div>
                <Link to="/">Click here to go back to root page.</Link>
              </div>
            }
          />
        </Routes>
      </Layout>
    </Suspense>
  );
}

export default App;
