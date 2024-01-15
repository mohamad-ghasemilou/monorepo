import {HomePage as HomePageUI} from "@monorepo/ui";
import {useQuery} from "@tanstack/react-query";
import {ProductsService} from "@monorepo/data-access";
import {useSelector} from "react-redux";
import {RootState} from "../../../../../apps/client/src/store";
import {useEffect} from "react";

export function HomePage() {
  const category = useSelector((state: RootState) => state.category.selected)

  const {isLoadingCategory, errorCategory, data:categoryProducts, refetch} = useQuery({
    queryKey: [`${category} products`],
    queryFn: () => ProductsService.getByCategory(category),
    enabled: false,
    refetchOnWindowFocus: false,
  })

  console.log({categoryProducts})

  useEffect(() => {
    if (category === 'all') return
    refetch()
  }, [category])

  const {isLoading, error, data:allProducts} = useQuery({
    queryKey: ['allProducts'],
    queryFn: () => ProductsService.getAll(),
  })

  if (isLoading) return <h1>loading products</h1> //todo: use skeleton
  if (isLoadingCategory) return <h1>loading products</h1> //todo: use skeleton

  return (
    <HomePageUI products={category === 'all' ? allProducts : categoryProducts ?? []}/>
  );
}

export default HomePage;
