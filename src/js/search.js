import axios from "axios";

window.axios = axios

const searchInput = document.querySelector('#searchbar');

let prdoducts = [];
let filters = {
    searchItems: "",
}
console.log(searchInput)
searchInput.addEventListener("input", (e) => {
    filters.searchItems = e.target.value

    renderSearch(prdoducts, filters)
})

function renderSearch(_product, _filters) {
    const filteredSearch = _product.filter((item) => {
        return item.title.ToLoweCase().includes(_filters.searchItems.ToLoweCase())
    })

    let resultSearch = document.querySelector(".resultSearch")
    resultSearch.innerHTML = ""

    let result = ""

    filteredSearch.forEach(item => {
        result += `<div class="w-full absolute p-2 shadow-md bg-white rounded-xl
        top-8 left-0 z-10 hidden group-hover:block transition-all">
        <a href="/single_product.html?id=${item.id}" class="flex items-center justify-start gap-6 mt-4">
            <div class="w-24 h-auto">
                <img src=${item.imgURL} alt="" class="rounded-xl w-full h-auto">
            </div>

            <div class="flex flex-col justify-evenly gap-3">
                <p class="text-slate-800"> ${item.title} </p>
                <p class="text-slate-700 text-sm"> ${item.price} </p>
            </div>
        </a>
    </div>`
    })

    resultSearch.innerHTML = result;
}

document.addEventListener("DOMContentLoaded", () => {
    axios
        .get('/sample/api/products.php')
        .then((response) => {

            prdoducts = response.data.title;
        })
        .catch((err) => console.log(err))
})
