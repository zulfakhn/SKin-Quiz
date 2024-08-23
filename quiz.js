const questions = [
    {
        question: "Bagaimana kondisi kulitmu setelah mencuci wajah tanpa menggunakan produk apa pun?",
        option: [
                "Kencang atau Kering",
                "Berminyak dan mengkilap",
                "Hanya beminyak di area zona-T (dahi, hidung, dan dagu)",
                "Tidak terlalu kering dan berminyak, nyaman saja"
            ],
        skinType: ["kering", "berminyak", "kombinasi", "normal"]
    },

    {
        question: "Seberapa sering kulitmu terasa berminyak sepanjang hari?",
        option: [
                "Hampir tidak pernah",
                "Selalu",
                "Hanya beminyak di area T-zone (dahi, hidung, dan dagu)",
                "Kadang-kadang"
            ],
        skinType: ["kering", "berminyak", "kombinasi", "normal"]
    },

    {
        question: "Bagaimana reaksi kulitmu terhadap produk baru?",
        option: [
                "Sering iritasi atau kemerahan",
                "Tidak ada reaksi",
                "Kadang iritasi, tergantung produk yang dipakai",
                "Diawal ada iritasi sedikit, tapi setelahnya tidak"
            ],
        skinType: ["kering", "berminyak", "kombinasi", "normal"]
    },

    {
        question: "Apakah kamu sering mengalami jerawat atau komedo?",
        option: [
                "Jarang atau tidak pernah",
                "Sering, namun di bagian T-zone (dahi, hidung, dan dagu) saja",
                "Hanya saat menggunakan produk tertentu",
                "Sering di seluruh wajah"
            ],
        skinType: ["kering", "berminyak", "kombinasi", "normal"]
    },

    {
        question: "Bagaimana kulitmu pada malam hari?",
        option: [
                "Kering atau berisik",
                "Berminyak di seluruh wajah",
                "Berminyak di beberapa area saja, terutama di T-zone",
                "Tidak terlalu kering atau berminyak"
            ],
        skinType: ["kering", "berminyak", "kombinasi", "normal"]
    },

    {
        question: "Bagaimana kulitmu bereaksi terhadap perubahan cuaca?",
        option: [
                "Kulit akan sangat kering saat cuaca dingin",
                "Semakin berminyak saat cuaca panas",
                "Kering saat cuaca dingin dan berminyak di cuaca panas",
                "Tidak ada perubahan"
            ],
        skinType: ["kering", "berminyak", "kombinasi", "normal"]
    },

    {
        question: "Apakah kulitmu mudah terbakar saat terpapar sinar matahari?",
        option: [
                "Sangat mudah terbakar",
                "Jarang terbakar",
                "Kadang terbakar, tergantung paparan sinar matahari",
                "Tidak pernah terbakar"
            ],
        skinType: ["kering", "berminyak", "kombinasi", "normal"]
    },
];

let currentPage = 0;
let scores = {
    kering: 0,
    berminyak: 0,
    kombinasi: 0,
    normal: 0
};



function showPageQuiz(pageIndex) {
    const currentQuestion = questions[pageIndex];
    const numberQuestion = document.getElementById('number-quiz');
    const quizContainer = document.getElementById('questions-quiz');
    const optionsContainer = document.getElementById('options');

    numberQuestion.textContent = `${(pageIndex + 1).toString().padStart(2, '0')}`;
    quizContainer.innerHTML = `
        <div class="question">${currentQuestion.question}</div>
    `;
    
    optionsContainer.innerHTML = `
        <ul>
            ${currentQuestion.option.map((option, index) => `
                <li class="option">
                    <input type="radio" id="option${index}" name="answer" value="${currentQuestion.skinType[index]}">
                    <label for="option${index}">${option}</label>
                </li>
            `).join('')}
        </ul>
    `;
}

function submitAnswer() {
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    if (selectedOption) {
        const skinType = selectedOption.value;
        scores[skinType]++;
        currentPage++;
        if (currentPage < questions.length) {
            showPageQuiz(currentPage);
        } else {
            showResult();
        }    
    } else {
        alert('Pilih jawaban yang sesuai dengan kulit kamu dulu, ya!');
    }
}

function showResult() {
    const pageQuiz = document.getElementById('page-quiz');
    const pageResult = document.getElementById('page-result');
    const resultContainer = document.getElementById('result-quiz');
    const restartButton = document.getElementById('restart');
    const buttonNext = document.getElementById('button-next');

    pageQuiz.classList.remove('active');
    pageResult.classList.add('active');

    buttonNext.style.display = 'none';
    restartButton.style.display = 'block';

    let finalSkinType = Object.keys(scores).reduce((accumulator, currentKey) => {
        if (scores[currentKey] > scores[accumulator]) {
            return currentKey; // Jika nilai currentKey lebih besar, update accumulator
        } else {
            return accumulator; // Jika tidak, pertahankan accumulator yang ada
        }
    });
    
    const resultMap = {
        kering:  `
            <h2>Kulit Kering</h2>
            <br>
            <p>Kulit kamu cenderung kering. Kulit kering biasanya terasa kencang, kasar, atau bersisik setelah mencuci wajah. 
            Hal ini disebabkan oleh kurangnya kelembapan alami dan minyak pada kulit. 
            Perawatan kulit yang disarankan termasuk menggunakan pelembap intensif yang menghidrasi dan menghindari produk yang dapat mengeringkan kulit lebih lanjut.</p>
            <br>
            <p>Penting untuk menghindari sabun keras dan menjaga kulit tetap terhidrasi dengan baik. 
            Pastikan juga untuk minum cukup air setiap hari untuk membantu menjaga kelembapan kulit dari dalam.</p>
            <p> Untuk mengetahui produk yang sesuai dengan kulit kamu, kunjungi halaman berikut <a href="products.html?type=kering">shopping</a>.</p>
        `,
        berminyak: `
            <h2>Kulit Berminyak</h2>
            <br>
            <p>Kulit kamu cenderung berminyak. Kulit berminyak biasanya tampak mengkilap dan berminyak di seluruh wajah, terutama di area T-zone (dahi, hidung, dan dagu). 
            Ini disebabkan oleh produksi minyak yang berlebihan oleh kelenjar sebaceous di kulit. Perawatan kulit yang disarankan termasuk menggunakan produk yang dapat mengontrol produksi minyak, seperti pembersih wajah yang lembut dan non-komedogenik.</p>
            <br>
            <p>Penting untuk menjaga kebersihan wajah secara rutin dan menggunakan pelembap ringan yang tidak menyumbat pori-pori.</p>
            <p> Untuk mengetahui produk yang sesuai dengan kulit kamu, kunjungi halaman berikut <a href="products.html?type=berminyak">shopping</a>.</p>
        
            `,
        kombinasi:`
            <h2>Kulit Kombinasi</h2>
            <br>
            <p>Kulit kamu cenderung kombinasi. Kulit kombinasi biasanya berminyak di area T-zone (dahi, hidung, dan dagu), namun kering atau normal di area lainnya. 
            Perawatan kulit yang disarankan termasuk menggunakan produk yang menargetkan kebutuhan kulit yang berbeda di area yang berbeda, seperti pelembap ringan untuk area berminyak dan pelembap yang lebih kaya untuk area kering.</p>
            <br>
            <p>Disarankan untuk menggunakan pembersih wajah yang lembut dan tidak mengiritasi untuk menjaga keseimbangan kelembapan kulit di seluruh wajah.</p>
            <p> Untuk mengetahui produk yang sesuai dengan kulit kamu, kunjungi halaman berikut <a href="products.html?type=kombinasi">shopping</a>.</p>
            `,
        normal: `
            <h2>Kulit Normal</h2>
            <br>
            <p>Kulit kamu cenderung normal. Kulit normal biasanya seimbang, tidak terlalu kering atau berminyak, dan jarang mengalami iritasi atau masalah kulit lainnya. 
            Perawatan kulit yang disarankan termasuk menjaga rutinitas perawatan yang sederhana namun efektif, seperti pembersihan wajah secara teratur dan penggunaan pelembap yang sesuai.</p>
            <br>        
            <p>Meski kulit normal jarang mengalami masalah, tetap penting untuk melindungi kulit dari sinar matahari dan menjaga hidrasi yang baik.</p>
            <p> Untuk mengetahui produk yang sesuai dengan kulit kamu, kunjungi halaman berikut <a href="products.html?type=normal">shopping</a>.</p>
            `,
    };

    resultContainer.innerHTML = resultMap[finalSkinType];
    resultContainer.style.display = 'block';
}

function restartQuiz() {
    const pageQuiz = document.getElementById('page-quiz');
    const pageResult = document.getElementById('page-result');
    const buttonNext = document.getElementById('button-next');

    currentPage = 0;
    scores = { kering: 0, berminyak: 0, kombinasi: 0, normal: 0 };

    pageQuiz.classList.add('active');
    pageResult.classList.remove('active');
    buttonNext.style.display = 'block';

    showPageQuiz(currentPage);
}

showPageQuiz(0);

document.getElementById('button-next').addEventListener('click', submitAnswer);

