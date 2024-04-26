import {HomePage as HomePageUI} from "@monorepo/ui";
import {useQuery} from "@tanstack/react-query";
import {ProductsService} from "@monorepo/data-access";
import {useSelector} from "react-redux";
import {useEffect} from "react";

export function HomePage() {
  const category = useSelector((state:any) => state.category.selected)

  const {isLoading:isLoadingCategory, error:errorCategory, data:categoryProducts, refetch} = useQuery({
    queryKey: [`${category} products`],
    queryFn: () => ProductsService.getByCategory(category),
    enabled: false,
    refetchOnWindowFocus: false,
  })

  useEffect(() => {
    if (category === 'all') return
    refetch()
  }, [category])

  const {isLoading:isLoadingProducts, error, data:allProducts} = useQuery({
    queryKey: ['allProducts'],
    queryFn: () => ProductsService.getAll(),
  })

  if (isLoadingProducts) return <h1>loading all products</h1> //todo: use skeleton
  //if (isLoadingCategory) return <h1>loading category products</h1> //todo: use skeleton

  return (
    <HomePageUI products={category === 'all' ? allProducts : categoryProducts ?? []}/>
  );
}

export default HomePage;
