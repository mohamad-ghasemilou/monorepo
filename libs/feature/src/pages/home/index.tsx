import {HomePage as HomePageUI} from "@monorepo/ui";
import {useQuery} from "@tanstack/react-query";
import {ProductsService} from "@monorepo/data-access";

function HomePage() {
  const {isLoading, error, data} = useQuery({
    queryKey: ['allProducts'],
    queryFn: () => ProductsService.getAll()
  })

  if (isLoading) return <h1>loading products</h1> // skeleton

  return (
    <HomePageUI products={data}/>
  );
}

export default HomePage;
