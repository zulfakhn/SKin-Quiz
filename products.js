document.addEventListener('DOMContentLoaded', function() {
    // Ambil parameter 'type' dari URL
    const urlParams = new URLSearchParams(window.location.search);
    const skinType = urlParams.get('type') || 'normal';

    // Pilih elemen untuk menampilkan produk yang sesuai
    const recommendedProductsCard = document.querySelector('#recom-product .recom-product-card');
    const otherProductsCard = document.querySelector('#other-product .other-product-card');

    // Data produk (simulasi)
    const productsKering = [
        { id: 1, type: 'Kulit kering', name: 'Product 1', price: 'Rp. 70.000', image: 'image 1.jpg' },
        { id: 2, type: 'Kulit kering', name: 'Product 2', price: 'Rp. 80.000', image: 'image 2.jpg' },
        { id: 3, type: 'Kulit kering', name: 'Product 3', price: 'Rp. 88.000', image: 'image 3.jpg' },
    ];
    
    const productsBerminyak = [
        { id: 1, type: 'Kulit berminyak', name: 'Product 1', price: 'Rp. 70.000', image: 'image 1.jpg' },
        { id: 2, type: 'Kulit berminyak', name: 'Product 2', price: 'Rp. 80.000', image: 'image 2.jpg' },
        { id: 3, type: 'Kulit berminyak', name: 'Product 3', price: 'Rp. 88.000', image: 'image 3.jpg' },
    ];
    
    const productsNormal = [
        { id: 1, type: 'Kulit normal', name: 'Product 1', price: 'Rp. 70.000', image: 'image 1.jpg' },
        { id: 2, type: 'Kulit normal', name: 'Product 2', price: 'Rp. 80.000', image: 'image 2.jpg' },
        { id: 3, type: 'Kulit normal', name: 'Product 3', price: 'Rp. 88.000', image: 'image 3.jpg' },
    ];
    
    const productsKombinasi = [
        { id: 1, type: 'Kulit kombinasi', name: 'Product 1', price: 'Rp. 70.000', image: 'image 1.jpg' },
        { id: 2, type: 'Kulit kombinasi', name: 'Product 2', price: 'Rp. 80.000', image: 'image 2.jpg' },
        { id: 3, type: 'Kulit kombinasi', name: 'Product 3', price: 'Rp. 88.000', image: 'image 3.jpg' },
    ];


    // Fungsi untuk menampilkan produk
    function filterProduct(skinType) {
        let recommendedProducts = [];
        let otherProducts = [];

        switch(skinType) {
            case 'kering':
                recommendedProducts = productsKering;
                otherProducts = [...productsBerminyak, ...productsKombinasi, ...productsNormal];
                break;
            case 'berminyak':
                recommendedProducts = productsBerminyak;
                otherProducts = [...productsKering, ...productsNormal, ...productsKombinasi];
                break;
            case 'normal':
                recommendedProducts = productsNormal;
                otherProducts = [...productsKering, ...productsBerminyak, ...productsKombinasi];
                break;
            case 'kombinasi':
                recommendedProducts = productsKombinasi;
                otherProducts = [...productsKering, ...productsBerminyak, ...productsNormal];
                break;
            default:
                recommendedProducts = [];
                otherProducts = [];
        }

        recommendedProductsCard.innerHTML = '';
        otherProductsCard.innerHTML = '';

        // Tampilkan produk yang sesuai
        recommendedProducts.forEach(product => {
            const productCard = `
                 <div class="product-card">
                    <a href="product-detail.html?id=${product.id}">
                        <img src="assets/product/${product.image}" alt="${product.name}">
                    </a>
                    <div class="product-info">
                        <p class="category">${product.type}</p>
                        <a href="product-detail.html?id=${product.id}"><h3>${product.name}</h3></a>
                        <p class="price">${product.price}</p>
                    </div>
                 </div>
            `;
            recommendedProductsCard.innerHTML += productCard;
        });

        otherProducts.forEach(product => {
            const productCard = `
                <div class="product-card">
                    <a href="product-detail.html?id=${product.id}">
                        <img src="assets/product/${product.image}" alt="${product.name}">
                    </a>
                    <div class="product-info">
                        <p class="category">${product.type}</p>
                        <a href="product-detail.html?id=${product.id}"><h3>${product.name}</h3></a>
                        <p class="price">${product.price}</p>
                    </div>
                </div>
            `;
            otherProductsCard.innerHTML += productCard;
        });
    }

    // Panggil fungsi untuk menampilkan produk
    filterProduct(skinType);
});


