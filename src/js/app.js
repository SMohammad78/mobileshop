const productsBody = document.querySelector("#products-row");
import axios from "../../node_modules/axios";

window.axios = axios

window.UI = class UI {
    displayProducts(products) {
        let result = "";

        products.forEach((item) => {
            result += `<a href=${item.pageUrl} class="bg-white flex flex-col justify-between rounded-xl p-3 shadow-sm shadow-blue-100" data-id=${item.id}>
            <div class="relative rounded-xl bg-gray-100">
                <img alt="apple" src=${item.imgURL}>
                <span class="absolute p-2 bg-slate-300 top-4 right-3 rounded-full cursor-pointer"><svg
                        class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                    </svg>
                </span>
            </div>

            <div class="flex flex-col justify-between items-end pt-4">
                <h3 class="text-slate-700 text-xs lg:text-sm font-medium"> ${item.title} </h3>
                <h4 class="text-left pt-5 text-slate-700 font-medium text-sm lg:text-base"> تومان ${item.price} </h4>
            </div>
        </a>`

            productsBody.innerHTML = result
        })
    }
}

window.Storage = class Storage { 
    saveProducts (products) {
        localStorage.setItem('products', JSON.stringify(products))
    }
}