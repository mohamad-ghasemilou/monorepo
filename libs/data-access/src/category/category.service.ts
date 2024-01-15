import {ApiClient} from "../api";
import {productsUrl} from "@monorepo/data-access";

export const CategoryService = {
    getAll() {
        return ApiClient.get(productsUrl + '/categories')
    }
}
