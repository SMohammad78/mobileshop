const productsBody = document.querySelector("#products-row");


class UI {
    displayProducts(products) {
        let result = "";

        products.forEach((item) => {
            result += `<div class="bg-white rounded-xl p-3 shadow-sm shadow-blue-100" data-id=${item.id}>
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

            <div class="flex justify-between items-center pt-4">
                <h3 class="text-slate-400 text-xs lg:text-sm font-medium"> ${item.title} </h3>
                <div class="flex items-center">
                    <div
                        class="w-6 h-6 flex justify-center items-center rounded-full cursor-pointer bg-blue-500 transition-all border-2 border-white -mr-1">
                        <svg class="w-4 h-4 stroke-white" fill="none" stroke="currentColor" stroke-width="1.5"
                            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.5 12.75l6 6 9-13.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                    <div
                        class="w-6 h-6 flex justify-center items-center rounded-full cursor-pointer bg-gray-500 transition-all border-2 border-white -mr-1">
                        <svg class="w-4 h-4 stroke-white" fill="none" stroke="currentColor" stroke-width="1.5"
                            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.5 12.75l6 6 9-13.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                    <div @click="color= 'gold'"
                        class="w-6 h-6 flex justify-center items-center rounded-full cursor-pointer bg-yellow-500 transition-all border-2 border-white -mr-1">
                        <svg class="w-4 h-4 stroke-white" fill="none" stroke="currentColor" stroke-width="1.5"
                            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.5 12.75l6 6 9-13.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                </div>
            </div>

            <div class="py-5 text-slate-800">
                <h4 class="text-sm"></h4>
                <h5 class="text-left pt-3 text-orange-600 font-semibold text-sm lg:text-base"> تومان ${item.price} </h5>
            </div>

            <div
                class="flex justify-center items-center border-t-slate-300 border border-b-0 border-r-0 border-l-0 pt-2">
                <a class="text-center text-orange-600 text-xs lg:text-base font-semibold" href="#">مشاهده و
                    سفارش</a>
            </div>
        </div>`

            productsBody.innerHTML = result
        })
    }
}

class Storage { }

document.addEventListener("DOMContentLoaded", () => {
    // eccho class UI
    const ui = new UI()
    ui.displayProducts(products)

})