import {lazy, Suspense} from 'react'
import {Route, Routes, Link} from 'react-router-dom';
import {routes, Layout} from "@monorepo/feature"
//import styles from './app.module.scss';

const LazyHomePage = lazy(() => import("../../../libs/feature/src/pages/home/index"));
const LazyProductPage = lazy(() => import("../../../libs/feature/src/pages/product/index"));

export function App() {
  return (
    <Suspense fallback={null}>
      <Layout>
        <Routes>
          <Route path={routes.home} element={<LazyHomePage/>}/>
          <Route path={routes.singleProduct} element={<LazyProductPage/>}/>
        </Routes>
      </Layout>
    </Suspense>
  );
}

export default App;
