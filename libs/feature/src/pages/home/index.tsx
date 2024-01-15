import {HomePage as HomePageUI} from "@monorepo/ui";
import {useQuery} from "@tanstack/react-query";
import {ProductsService} from "@monorepo/data-access";
import {useSelector} from "react-redux";
import {RootState} from "../../../../../apps/client/src/store";

export function HomePage() {
  const count = useSelector((state: RootState) => state.category.selected)

  const {isLoading, error, data} = useQuery({
    queryKey: ['allProducts'],
    queryFn: () => ProductsService.getAll(),
  })

  if (isLoading) return <h1>loading products</h1> //todo: use skeleton

  return <h1>{count}</h1>

  return (
    <HomePageUI products={data}/>
  );
}

export default HomePage;
