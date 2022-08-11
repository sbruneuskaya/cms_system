import { tableGoods } from "./elems.js"
import { currencyFormatRub } from "./utils.js";


const createRow = ({ id, title, category, price }) => {
    tableGoods.insertAdjacentHTML('beforebegin', `
    <tr class="table-row table-goods-item" data-id="${id}">
        <td>${id}</td>
        <td>${title}</td>
        <td>${category}</td>
        <td class="text-end">${currencyFormatRub(price)}</td>
        <td class="d-flex">
          <button class="btn-table btn-delete">
            <svg width="30" height="30">
              <use xlink:href="#delete" />
            </svg>
          </button>
        </td>
      </tr>`
    )
}

export const tableRender = (goods) => {
    tableGoods.textContent = '';
    goods.forEach(createRow);
}


