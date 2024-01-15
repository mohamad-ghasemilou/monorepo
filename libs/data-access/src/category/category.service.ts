import {ApiClient} from "../api";
import {Category} from "@monorepo/feature";
import {productsUrl} from "@monorepo/data-access";

export const CategoryService = {
    getAll() {
        return ApiClient.get(productsUrl + '/categories')
    },

    getByName(category:Category) {
      return ApiClient.get(productsUrl + '/category/' + category)
    }
}
