import { category } from "./elems.js"
import { getCategory } from "./serviceApi.js";

export const updateCategory = async () => {
    category.textContent = '';
    const categoryList = await getCategory();
    const categoryOption = categoryList.map(item => {
        const option = document.createElement('option')
        option.value = item
        return option
    });
    category.append(...categoryOption)
}

export const formController = () => {
    updateCategory()
}