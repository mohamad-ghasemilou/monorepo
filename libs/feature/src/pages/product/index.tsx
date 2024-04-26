import {ProductPageUI} from "@monorepo/ui";
import {useQuery} from "@tanstack/react-query";
import {ProductsService} from "@monorepo/data-access";
import {useParams} from "react-router-dom";
import {QueryCache} from '@tanstack/react-query'

export function ProductPage() {
  const queryCache = new QueryCache({
    onError: (error) => {
      console.log(error)
    },
    onSuccess: (data) => {
      console.log(data)
      return data
    },
    onSettled: (data, error) => {
      console.log(data, error)
      return data
    },
  })

  // const query = queryCache.find(['allProducts'])
  console.log({queryCache})
  let {productId} = useParams();

  const {isLoading:isLoading, error, data} = useQuery({
    queryKey: ['product' + productId],
    queryFn: () => ProductsService.getById(productId),
  })

  if (isLoading) return <span>loading product</span>

  return (
    <ProductPageUI {...data}/>
  );

}

export default ProductPage;
