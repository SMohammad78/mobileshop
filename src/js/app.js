const productsBody = document.querySelector("#products-row");
const singlProductDataBody = document.querySelector("#singlProductDataBody");
const singleItem = document.querySelector("#singleItem")

import axios from "../../node_modules/axios";
window.axios = axios

window.UI = class UI {
    displayProducts(products) {
        let result = "";
        products.forEach((item) => {
            result += `<a href=${item.pageUrl} target="_blank" id="addToPage" class="bg-white flex flex-col justify-between rounded-xl p-3 shadow-sm shadow-blue-100" data-id=${item.id}>
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

// window.SinglePageProduct = class SinglePageProduct {
//     singlProduct(singlProduct) {
//         let singlData = "";


//         singlData = singleItem;
//         singleItem.addEventListener("click", (item) => {

//             singlData += ` <div id="singleItem" class="w-4/5 max-w-[250px] xl:max-w-xs">
//             <img src=${item.imgURL}
//                  alt=${item.brand}
//                  class="w-full h-auto">
//         </div>
        
//         <div class="w-full md:w-auto md:mr-8">
//             <!-- brand name descktop view -->
//             <div class="hidden md:flex md:items-center md:gap-x-3 md:mb-5 text-orange-400">
//                 <div>
//                     <svg xmlns="http://www.w3.org/2000/svg"
//                          width="20"
//                          height="25"
//                          fill="none">
//                         <path stroke="#FF755C"
//                               stroke-linecap="round"
//                               stroke-linejoin="round"
//                               stroke-width="1.125"
//                               d="M13 12.75v7.5c0 3-.75 3.75-3.75 3.75h-4.5c-3 0-3.75-.75-3.75-3.75v-7.5C1 9.75 1.75 9 4.75 9h4.5c3 0 3.75.75 3.75 3.75ZM8.5 11.625h-3"/>
//                         <path stroke="#FF755C"
//                               stroke-linecap="round"
//                               stroke-linejoin="round"
//                               stroke-width="1.125"
//                               d="M7 21.825A1.163 1.163 0 1 0 7 19.5a1.163 1.163 0 0 0 0 2.325Z"/>
//                         <circle cx="10.5"
//                                 cy="9.5"
//                                 r="9.5"
//                                 fill="#FFCBCB"
//                                 fill-opacity=".28"/>
//                     </svg>
//                 </div>
//                 <p> تلفن همراه اپل </p>
//             </div>
//             <!-- title product -->
//             <div class="mb-7">
//                 <h1 class="mb-2 text-slate-800 text-lg font-bold text-center lg:text-right"> ${item.title} </h1>
//                 <h2 class="text-slate-500 font-light text-center lg:text-right"> ${item.brand} </h2>
//             </div>
//             <hr class="bg-slate-200 hidden md:block md:mb-3"/>
//             <!-- color selection -->
//             <div class="w-full flex justify-around items-center mb-3 lg:justify-between">
//                 <span class="text-slate-800 text-lg"> انتخاب رنگ: </span>
//                 <div x-data=" {color : 'pink'} "
//                      class="flex">
//                     <div @click=" color = 'pink' "
//                          :class="color === 'pink' ? 'ring-pink-500 ring-2 ring-offset-2 transition-all' : '' "
//                          class="w-6 h-6 bg-pink-500 rounded-full cursor-pointer -ml-1"></div>
        
//                     <div @click=" color = 'blue' "
//                          :class="color === 'blue' ? 'ring-blue-500 ring-2 ring-offset-2 transition-all' : '' "
//                          class="w-6 h-6 bg-blue-500 rounded-full cursor-pointer -ml-1"></div>
        
//                     <div @click=" color = 'gray' "
//                          :class="color === 'gray' ? 'ring-gray-500 ring-2 ring-offset-2 transition-all' : '' "
//                          class="w-6 h-6 bg-gray-500 rounded-full cursor-pointer -ml-1"></div>
        
//                     <div @click=" color = 'yellow' "
//                          :class="color === 'yellow' ? 'ring-yellow-500 ring-2 ring-offset-2 transition-all' : '' "
//                          class="w-6 h-6 bg-yellow-500 rounded-full cursor-pointer"></div>
//                 </div>
//             </div>
        
//             <!-- seller detail -->
//             <div class="px-2 md:hidden flex flex-wrap justify-center items-center gap-4 my-7">
//                 <div class="flex items-center justify-center gap-2 text-sm text-slate-800">
//                     <div class="flex items-center gap-x-2">
//                             <span>
//                                 <svg xmlns="http://www.w3.org/2000/svg"
//                                      width="20"
//                                      height="19"
//                                      fill="none">
//                                     <circle cx="12"
//                                             cy="8"
//                                             r="8"
//                                             fill="#E2E2E2"/>
//                                     <path stroke="#222F5D"
//                                           stroke-linecap="round"
//                                           stroke-linejoin="round"
//                                           stroke-width=".875"
//                                           d="M1.756 11.545v2.62c0 2.618 1.05 3.668 3.669 3.668h3.144c2.62 0 3.67-1.05 3.67-3.669v-2.62"/>
//                                     <path stroke="#222F5D"
//                                           stroke-linecap="round"
//                                           stroke-linejoin="round"
//                                           stroke-width=".875"
//                                           d="M7 12c1.068 0 1.855-.87 1.75-1.937l-.385-3.897H5.641l-.39 3.897c-.106 1.067.682 1.936 1.75 1.936Z"/>
//                                     <path stroke="#222F5D"
//                                           stroke-linecap="round"
//                                           stroke-linejoin="round"
//                                           stroke-width=".875"
//                                           d="M10.681 12c1.178 0 2.042-.957 1.925-2.13l-.163-1.604c-.21-1.517-.794-2.1-2.322-2.1h-1.78l.41 4.09c.098.962.967 1.743 1.93 1.743ZM3.29 12c.963 0 1.832-.782 1.925-1.745l.128-1.289.28-2.8H3.844c-1.528 0-2.111.583-2.321 2.1L1.365 9.87C1.248 11.043 2.112 12 3.29 12ZM7 14.916c-.974 0-1.458.484-1.458 1.458v1.459h2.917v-1.459c0-.974-.485-1.458-1.459-1.458Z"/>
//                                 </svg>
//                             </span>
//                         <span class="font-bold"> فروشنده: </span>
//                     </div>
//                     <span class="text-slate-600"> دیجی تکنو </span>
//                 </div>
        
//                 <div class="flex items-center justify-center gap-2 text-sm text-slate-800">
//                     <div class="flex items-center gap-x-2">
//                             <span><svg width="21"
//                                        height="19"
//                                        viewBox="0 0 21 19"
//                                        fill="none"
//                                        xmlns="http://www.w3.org/2000/svg">
//                                     <circle cx="13"
//                                             cy="8"
//                                             r="8"
//                                             fill="#E2E2E2"/>
//                                     <path
//                                             d="M7.43053 3.57973L3.89594 4.91139C3.08136 5.21598 2.41553 6.17931 2.41553 7.04348V12.3064C2.41553 13.1422 2.96803 14.2401 3.64094 14.7431L6.68678 17.0168C7.68553 17.7676 9.32886 17.7676 10.3276 17.0168L13.3734 14.7431C14.0464 14.2401 14.5989 13.1422 14.5989 12.3064V7.04348C14.5989 6.17223 13.933 5.20889 13.1184 4.90431L9.58386 3.57973C8.98178 3.36014 8.01844 3.36014 7.43053 3.57973Z"
//                                             stroke="#222F5D"
//                                             stroke-width="1.0625"
//                                             stroke-linecap="round"
//                                             stroke-linejoin="round"/>
//                                 </svg>
//                             </span>
//                         <span class="font-bold te"> گارانتی: </span>
//                     </div>
//                     <span class="text-slate-600"> 18ماه خدمات زرین خدمت </span>
//                 </div>
        
//                 <div class="flex items-center justify-center gap-2 text-sm text-slate-800">
//                     <div class="flex items-center gap-x-2">
//                             <span><svg xmlns="http://www.w3.org/2000/svg"
//                                        width="20"
//                                        height="21"
//                                        fill="none">
//                                     <circle cx="12"cy="8" r="8" fill="#E2E2E2"/>
//                                     <path stroke="#222F5D" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.125" d="M10 6.333V13c0 .733-.6 1.333-1.333 1.333H1.334V10.08a2.6 2.6 0 0 0 2.06 563 0 0 0 1.733-.707c.207-.173.38-.393.513-.633.24-.407.373-.887.36-1.387a 0 0 0-.906-1.94H10Z"/>
//                                     <path stroke="#222F5D" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.125" d="M14.667 14.333v2c0 1.107-.893 2-2 2H12C12 17.6 11.4 17 10.667 17s-1.33 333H6.667c0-.733-.6-1.333-1.333-1.333C4.6 17 4 17.6 4 18.333h-.667c 893-2-2v-2h7.334C9.4 14.333 10 13.733 10 13V8.333h1.227c.48 0 .92.26 1.16 11h-.86c-.367 0-.667.3-.667.666v2c0 .367.3.667.667.667h2Z">
//                                     <path stroke="#222F5D"
//                                           stroke-linecap="round"
//                                           stroke-linejoin="round"
//                                           stroke-width="1.125"
//                                           d="M5.333 19.667a1.333 1.333 0 1 0 0-2.667 1.333 1.333 0 0 0 0 2.667ZM10.667 19.667a1.333 1.333 0 1 0 0-2.667 1.333 1.333 0 0 0 0 2.667ZM14.667 13v1.333h-2a.669.669 0 0 1-.667-.666v-2c0-.367.3-.667.667-.667h.86l1.14 2Z"/>
//                                     <path stroke="#222F5D"
//                                           stroke-linecap="round"
//                                           stroke-linejoin="round"
//                                           stroke-miterlimit="10"
//                                           stroke-width="1.125"
//                                           d="M6 8.333c0 .8-.353 1.513-.906 2a2.666 2.666 0 1 1-1.76-4.667A2.666 2.666 0 0 1 6 8.333Z"/>
//                                     <path stroke="#222F5D"
//                                           stroke-linecap="round"
//                                           stroke-linejoin="round"
//                                           stroke-miterlimit="10"
//                                           stroke-width="1.125"
//                                           d="M3.5 7.499v1l-.833.5"/>
//                                 </svg></span>
//                         <span class="font-bold "> ارسال توسط: </span>
//                     </div>
//                     <span class="text-slate-600"> انبار تهران </span>
//                 </div>
//             </div>
        
//             <!-- product detail -->
//             <div class="bg-white rounded-xl text-slate-800 font-bold my-5 p-4">
//                 <h2 class="mb-3 text-lg"> ویژگی های کالا: </h2>
//                 <ul class="list-disc list-inside flex flex-col gap-y-2 marker:text-orange-500">
//                     <li class="mb-2">
//                         <span class="font-normal text-slate-600"> حافظه داخلی: </span>
//                         <span class=""> 128 گیگابایت </span>
//                     </li>
//                     <li class="mb-2">
//                         <span class="font-normal text-slate-600"> بازه اندازه صفحه نمایش: </span>
//                         <span class=""> 6.0 اینچ </span>
//                     </li>
//                     <li class="mb-2">
//                         <span class="font-normal text-slate-600"> شبکه های ارتباطی: </span>
//                         <span class=""> 2G 3G 4G 5G </span>
//                     </li>
//                 </ul>
//             </div>
        
//         </div>`

//             singlProductDataBody.innerHTML = singlData
//             this.getId(singlProduct)
//         })

//     }
// }

window.Storage = class Storage {
    saveProducts(products) {
        localStorage.setItem('products', JSON.stringify(products))
    }

    static getId(id) {
        const singleData = JSON.parse(localStorage.getItem('products'))
        return singleData.find((p) => p.id === parseInt(id))
    }
}