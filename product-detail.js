document.addEventListener('DOMContentLoaded', function(){
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    const products = [
        { 
            id: 1, 
            name: 'Product 1', 
            price: 'Rp. 70.000', 
            image: 'image 1.jpg', 
            description: 'Cocok untuk Kulit kamu yang berjerawat di daerah T-zone',
            reviews: [
                { title: 'Great product', body: 'Loved it', name: 'User 1' },
                { title: 'Amazing', body: 'Best product I have used so far', name: 'User 2' },
                { title: 'Not bad', body: 'Good value for money', name: 'User 3' }
            ]
        },
        { 
            id: 2, 
            name: 'Product 2', 
            price: 'Rp. 80.000', 
            image: 'image 2.jpg', 
            description: 'Cocok untuk Kulit kamu yang berminyak',
            reviews: [
                { title: 'Not bad', body: 'Good value for money', name: 'User 3' },
                { title: 'Decent', body: 'Does the job well', name: 'User 4' },
                { title: 'Amazing', body: 'Best product I have used so far', name: 'User 2' }
            ]
        },
        { 
            id: 3, 
            name: 'Product 3', 
            price: 'Rp. 88.000', 
            image: 'image 3.jpg', 
            description: 'Cocok untuk Kulit kombinasi',
            reviews: [
                { title: 'Works well', body: 'Helped my skin a lot', name: 'User 5' },
                { title: 'Not bad', body: 'Good value for money', name: 'User 3' },
                { title: 'Decent', body: 'Does the job well', name: 'User 4' }
            ]
        }
    ];

    function showProduct(productId) {
        const productDetail = document.getElementById('product-detail');
        const product = products.find( p => p.id == productId);

        if (product) {
            productDetail.innerHTML = `
                <div class="product-image">
                    <img src="assets/product/${product.image}" alt="${product.name}">
                </div>

            <div class="product-info">
                <h2>${product.name}</h2>
                <p class="price">${product.price}</p>
                <div class="description-product">
                    <p class="title">Deskripsi Produk</p>
                    <p class="description">${product.description}</p>
                </div>
                <button type="button">Add to Cart</button>
            </div>
            `;
            showReviews(product.reviews);
        } else {
            productDetail.innerHTML = '<p>Product tidak ada</p>';
        }
    }

    function showReviews(reviews) {
        const reviewsColumn = document.querySelector('.product-reviews-detail');

        if (reviews && reviews.length > 0) {
            reviewsColumn.innerHTML = reviews.map(review => `
                    <div class="review-card">
                        <h3>${review.title}</h3>
                        <p>${review.body}</p>
                        <div class="reviewer-info">
                            <img src="assets/review.jpg" alt="Reviewer Image">
                            <div class="reviewer-name">${review.name}</div>
                        </div>
                    </div>
                `).join('');
        } else {
            reviewsColumn.innerHTML = '<p> Belum ada review untuk product ini </p>'
        }
    }


    if (productId) {
        showProduct(productId);
    } else {
        document.getElementById('product-detail').innerHTML = '<p>Product tidak ada</p>';
    }
});