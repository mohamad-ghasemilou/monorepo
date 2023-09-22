import Grid from "@mui/material/Grid";
import type {Product} from "@monorepo/feature";
import {ProductCard} from "@monorepo/ui"

interface Props {
  products: Product[];
}

export function HomePage(props: Props) {
  return (
    <Grid container spacing={4}>
      {
        props.products.map(product =>
          <Grid item xs={12} sm={6} md={4} lg={3} sx={{padding: 0}}>
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              description={product.description}
              image={product.image}
              price={product.price}
            />
          </Grid>
        )
      }
    </Grid>
  );
}
