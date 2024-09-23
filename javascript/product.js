// category products

// get products

const getProducts = async ()=>{
    try {
        const results = await fetch("/data/product.json");
        const data = await results.json();
        const products = data.products;
        return products;
    } catch (err) {
        console.log(err);
    }
}

// load products
window.addEventListener('DOMContentLoaded', async () =>{
    const products = await getProducts();
    displayProductItems(products);
});

const categoryCenter = document.querySelector(".category_center");
//display products

function displayProductItems(items) {
    let displayProduct = items.map(product => ` <div class="product category_product">
                                    <div class="product_header">
                                        <img src=${product.image} alt="">
                                    </div>
                                    <div class="product_footer">
                                        <h3>${product.title}</h3>
                                        <div class="rating">
                                            <?xml version="1.0" encoding="UTF-8"?>
                                                <!-- The Best Svg Icon site in the world: iconSvg.co, Visit us! https://iconsvg.co -->
                                                <svg id="svg" fill="#000000" stroke="#000000" width="200px" height="200px" version="1.1" viewBox="144 144 512 512" xmlns="http://www.w3.org/2000/svg">
                                                <g id="IconSvg_bgCarrier" stroke-width="0"></g>
                                                <g id="IconSvg_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC"></g>
                                                    <g id="IconSvg_iconCarrier">
                                                        <path xmlns="http://www.w3.org/2000/svg" d="m485.14 445.84 27.207 126.96-112.35-64.992-112.35 64.992 27.207-126.96-96.227-86.652 128.47-13.605 52.902-118.39 52.898 118.39 128.47 13.605z"/>
                                                    </g>
                                                </svg>
    
                                            <?xml version="1.0" encoding="UTF-8"?>
                                                <!-- The Best Svg Icon site in the world: iconSvg.co, Visit us! https://iconsvg.co -->
                                                <svg id="svg" fill="#000000" stroke="#000000" width="200px" height="200px" version="1.1" viewBox="144 144 512 512" xmlns="http://www.w3.org/2000/svg">
                                                <g id="IconSvg_bgCarrier" stroke-width="0"></g>
                                                <g id="IconSvg_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC"></g>
                                                    <g id="IconSvg_iconCarrier">
                                                        <path xmlns="http://www.w3.org/2000/svg" d="m485.14 445.84 27.207 126.96-112.35-64.992-112.35 64.992 27.207-126.96-96.227-86.652 128.47-13.605 52.902-118.39 52.898 118.39 128.47 13.605z"/>
                                                    </g>
                                                </svg>
    
                                            <?xml version="1.0" encoding="UTF-8"?>
                                                <!-- The Best Svg Icon site in the world: iconSvg.co, Visit us! https://iconsvg.co -->
                                                <svg id="svg" fill="#000000" stroke="#000000" width="200px" height="200px" version="1.1" viewBox="144 144 512 512" xmlns="http://www.w3.org/2000/svg">
                                                <g id="IconSvg_bgCarrier" stroke-width="0"></g>
                                                <g id="IconSvg_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC"></g>
                                                    <g id="IconSvg_iconCarrier">
                                                        <path xmlns="http://www.w3.org/2000/svg" d="m485.14 445.84 27.207 126.96-112.35-64.992-112.35 64.992 27.207-126.96-96.227-86.652 128.47-13.605 52.902-118.39 52.898 118.39 128.47 13.605z"/>
                                                    </g>
                                                </svg>
    
                                            <?xml version="1.0" encoding="UTF-8"?>
                                                <!-- The Best Svg Icon site in the world: iconSvg.co, Visit us! https://iconsvg.co -->
                                                <svg id="svg" fill="#000000" stroke="#000000" width="200px" height="200px" version="1.1" viewBox="144 144 512 512" xmlns="http://www.w3.org/2000/svg">
                                                <g id="IconSvg_bgCarrier" stroke-width="0"></g>
                                                <g id="IconSvg_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC"></g>
                                                    <g id="IconSvg_iconCarrier">
                                                        <path xmlns="http://www.w3.org/2000/svg" d="m485.14 445.84 27.207 126.96-112.35-64.992-112.35 64.992 27.207-126.96-96.227-86.652 128.47-13.605 52.902-118.39 52.898 118.39 128.47 13.605z"/>
                                                    </g>
                                                </svg>
    
                                            <?xml version="1.0" encoding="UTF-8"?>
                                                <!-- The Best Svg Icon site in the world: iconSvg.co, Visit us! https://iconsvg.co -->
                                                <svg id="svg" fill="#000000" stroke="#000000" width="200px" height="200px" version="1.1" viewBox="144 144 512 512" xmlns="http://www.w3.org/2000/svg">
                                                <g id="IconSvg_bgCarrier" stroke-width="0"></g>
                                                <g id="IconSvg_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC"></g>
                                                    <g id="IconSvg_iconCarrier">
                                                        <path xmlns="http://www.w3.org/2000/svg" d="m485.14 445.84 27.207 126.96-112.35-64.992-112.35 64.992 27.207-126.96-96.227-86.652 128.47-13.605 52.902-118.39 52.898 118.39 128.47 13.605z"/>
                                                    </g>
                                                </svg>
                                        </div>
                                        <div class="product_price">
                                            <h4>$${product.price}</h4>
                                            <a href="#"><button type="button" class="product_btn">Add To Cart</button></a>
                                        </div>
                                        <ul>
                                                <a href="#">
                                                    <?xml version="1.0" encoding="UTF-8"?>
                                                        <!-- The Best Svg Icon site in the world: iconSvg.co, Visit us! https://iconsvg.co -->
                                                        <svg id="svg" fill="#000000" stroke="#000000" width="200px" height="200px" version="1.1" viewBox="144 144 512 512" xmlns="http://www.w3.org/2000/svg">
                                                            <g id="IconSvg_bgCarrier" stroke-width="0"></g>
                                                            <g id="IconSvg_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC"></g>
                                                            <g id="IconSvg_iconCarrier">
                                                                <g xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="m291.91 285.65c-51.449 25.648-93.051 63.434-117.25 88.473-13.895 14.426-13.895 37.176 0 51.602 24.047 24.961 65.496 62.594 116.71 88.242-30.152-28.703-49.008-69.16-49.008-113.97 0.078124-45.035 19.16-85.645 49.543-114.35z"/>
                                                                    <path d="m625.34 374.12c-24.121-25.039-65.723-62.824-117.18-88.473 30.383 28.777 49.465 69.312 49.465 114.35 0 44.809-18.855 85.191-49.008 113.97 51.297-25.648 92.672-63.281 116.71-88.242 13.895-14.504 13.895-37.176 0.003906-51.602z"/>
                                                                    <path d="m400 273.82c-69.617 0-126.18 56.562-126.18 126.18-0.003906 69.621 56.637 126.18 126.18 126.18 69.539 0 126.18-56.641 126.18-126.18 0-69.543-56.562-126.18-126.18-126.18zm0 214.58c-48.93 0-88.395-39.695-88.395-88.395 0-48.93 39.465-88.395 88.395-88.395 48.777 0 88.395 39.465 88.395 88.395 0.074219 48.777-39.617 88.395-88.395 88.395z"/>
                                                                    <path d="m400 342.21c-31.906 0-57.785 25.953-57.785 57.785 0 8.7031 7.0234 15.727 15.727 15.727s15.727-7.0234 15.727-15.727c0-14.504 11.832-26.336 26.336-26.336 8.7031 0 15.727-7.0234 15.727-15.727-0.007813-8.7031-7.0312-15.723-15.73-15.723z"/>
                                                                </g>
                                                            </g>
                                                        </svg>
                                                </a>
                                                <a href="#">
                                                    <?xml version="1.0" encoding="UTF-8"?>
                                                        <!-- The Best Svg Icon site in the world: iconSvg.co, Visit us! https://iconsvg.co -->
                                                        <svg id="svg" fill="#000000" stroke="#000000" width="200px" height="200px" version="1.1" viewBox="144 144 512 512" xmlns="http://www.w3.org/2000/svg">
                                                            <g id="IconSvg_bgCarrier" stroke-width="0"></g>
                                                            <g id="IconSvg_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC"></g>
                                                                <g id="IconSvg_iconCarrier">
                                                                    <path xmlns="http://www.w3.org/2000/svg" d="m514.36 224.67c-36.777-6.5508-87.664 7.5586-114.36 67.512-26.703-60.457-77.586-74.562-114.36-67.512-41.82 7.5586-87.16 46.352-87.16 112.35 0 72.547 39.297 105.8 128.98 164.24 56.426 36.777 68.52 66 69.023 66.504l3.5273 9.0703 3.5273-9.0703c0-0.50391 12.594-29.727 69.023-66.504 89.672-58.441 128.97-91.695 128.97-164.24 0-66-45.344-104.79-87.16-112.35z"/>
                                                                </g>
                                                        </svg>
                                                </a>
                                                <a href="#">
                                                    <?xml version="1.0" encoding="UTF-8"?>
                                                        <!-- The Best Svg Icon site in the world: iconSvg.co, Visit us! https://iconsvg.co -->
                                                        <svg id="svg" fill="#000000" stroke="#000000" width="200px" height="200px" version="1.1" viewBox="144 144 512 512" xmlns="http://www.w3.org/2000/svg">
                                                            <g id="IconSvg_bgCarrier" stroke-width="0"></g>
                                                            <g id="IconSvg_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC"></g>
                                                            <g id="IconSvg_iconCarrier">
                                                                <path xmlns="http://www.w3.org/2000/svg" d="m583.69 445.89h-122.48c-10.941 0-21.055 5.8398-26.527 15.316-5.4727 9.4766-5.4727 21.156 0 30.633s15.586 15.316 26.527 15.316h68.469c-26.152 31.738-63.035 52.793-103.66 59.172-40.629 6.3828-82.188-2.3516-116.81-24.543-34.625-22.195-59.91-56.312-71.078-95.895h-63.18c10.773 53.066 39.973 100.61 82.434 134.22 42.457 33.605 95.434 51.113 149.56 49.414 54.121-1.6992 105.9-22.488 146.17-58.691v28.164c-0.33594 8.332 2.7383 16.441 8.5117 22.457 5.7773 6.0156 13.758 9.4141 22.094 9.4141 8.3398 0 16.32-3.3984 22.098-9.4141 5.7734-6.0156 8.8477-14.125 8.5117-22.457v-122.48c0-8.125-3.2266-15.914-8.9727-21.66-5.7461-5.7461-13.535-8.9727-21.66-8.9727zm-367.38-91.844h122.48c10.641-0.42969 20.293-6.3594 25.492-15.648 5.1992-9.293 5.1992-20.621 0-29.914-5.1992-9.293-14.852-15.219-25.492-15.648h-68.469c26.137-31.766 63.016-52.84 103.65-59.238 40.637-6.3945 82.203 2.332 116.84 24.531 34.629 22.199 59.918 56.324 71.07 95.918h63.18c-10.781-53.062-39.988-100.6-82.449-134.2-42.457-33.598-95.438-51.094-149.55-49.395-54.121 1.7031-105.89 22.496-146.16 58.699v-28.164c0.33984-8.332-2.7344-16.441-8.5117-22.457s-13.754-9.4141-22.094-9.4141-16.32 3.3984-22.094 9.4141c-5.7773 6.0156-8.8516 14.125-8.5117 22.457v122.43c0 8.125 3.2266 15.918 8.9688 21.66 5.7461 5.7461 13.539 8.9727 21.66 8.9727z" fill-rule="evenodd"/>
                                                            </g>
                                                        </svg>
                                                </a>
                                        </ul>
                                    </div>
                                </div>`
    );

    displayProduct = displayProduct.join('');
    if (categoryCenter) {
        categoryCenter.innerHTML = displayProduct;
    }
}
// filtering

const filterBtn = document.querySelectorAll('.filter-btn');
const categoryContainer = document.getElementById('category');

if(categoryContainer){
    categoryContainer.addEventListener('click',async e =>{
        const target = e.target.closest(".section_title");
        if(!target) return;

        const id = target.dataset.id;
        const products = await getProducts();

        if (id){
            // remove active class and add it
            Array.from(filterBtn).forEach(btn =>{
                btn.classList.remove("active");
            });
            target.classList.add("active");

            //loaded products
            let menuCategory = products.filter(product=>{
                if(product.category == id){
                    return product;
                }
            });

            if(id == "All Products"){
                displayProductItems(products);
            }else{
                displayProductItems(menuCategory);
            }
        }
    });
}