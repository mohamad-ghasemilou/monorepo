import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import {Product} from "@monorepo/feature";
import Button from "../../button";


export function ProductPageUI({id, title, category, description, image, price}: Product) {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={8} md={8} lg={8} xl={8}>
          <Box
            // sx={{bgcolor: 'blue'}}
          >
            <Typography variant="h5" sx={{mb:8}}>{title}</Typography>
            <Typography sx={{mb:8}}>{description}</Typography>
            <Typography sx={{mb:8}}>{category}</Typography>
            <Typography>${price}</Typography>
            <Button>add to cart</Button>
            {/*<Button>+</Button>*/}
          </Box>
        </Grid>
        <Grid item xs={4} md={4} lg={4} xl={4} sx={{bgColor:' red'}} style={{margin: '0 auto'}}>
          {/*<Box sx={{bgcolor: 'red', margin: '0 auto'}}>*/}
            <img src={image} alt="" style={{maxWidth: '100%'}}/>
          {/*</Box>*/}
        </Grid>
      </Grid>
    </Container>
  );
}

export default ProductPageUI;
