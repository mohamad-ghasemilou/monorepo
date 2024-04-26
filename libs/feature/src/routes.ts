const home = '/';
const product = 'product';
export const singleProduct = product + '/:productId';
const cart = 'cart';

export const routes = {
    home,
    product,
    singleProduct,
    cart
};

export default routes;

export function homeRoute(query?:string):string {
    return routes.home + (query ? `?category=${query}` : '');
}

export function productRoute(productId:string|undefined):string {
    return routes.product + '/' + productId;
}

export function cartRoute():string {
    return routes.cart;
}
