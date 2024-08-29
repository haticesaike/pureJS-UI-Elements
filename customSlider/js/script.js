const data = [
    {
        "title": "Kütahya Porselen Moderna 16 Parça 4 Kişilik Yemek Takımı Mavi",
        "image": "../assets/image1.jpg",
        "discount": 55,
        "oldPrice": "1108 TL",
        "newPrice": "498 TL"
    },
    {
        "title": "Kütahya Porselen Moderna 12 Parça 4 Kişilik Yemek Takımı Gri",
        "image": "../assets/image2.jpg",
        "discount": 30,
        "oldPrice": "950 TL",
        "newPrice": "665 TL"
    },
    {
        "title": "Kütahya Porselen Moderna 12 Parça 4 Kişilik Yemek Takımı Mavi",
        "image": "../assets/image3.jpg",
        "discount": 45,
        "oldPrice": "1200 TL",
        "newPrice": "660 TL"
    },
    {
        "title": "Kütahya Porselen Moderna 12 Parça 4 Kişilik Yemek Takımı Gri",
        "image": "../assets/image4.jpg",
        "discount": 20,
        "oldPrice": "1050 TL",
        "newPrice": "840 TL"
    },
    {
        "title": "Kütahya Porselen Bevel 16 Parça 4 Kişilik Yemek Takımı",
        "image": "../assets/image5.jpg",
        "discount": 35,
        "oldPrice": "1300 TL",
        "newPrice": "845 TL"
    },
    {
        "title": "Kütahya Porselen Moderna 12 Parça 4 Kişilik Yemek Takımı Siyah",
        "image": "../assets/image6.jpg",
        "discount": 50,
        "oldPrice": "1400 TL",
        "newPrice": "700 TL"
    },
    {
        "title": "Kütahya Porselen Moderna 16 Parça 4 Kişilik Yemek Takımı Yeşil",
        "image": "../assets/image7.jpg",
        "discount": 40,
        "oldPrice": "1250 TL",
        "newPrice": "750 TL"
    },
    {
        "title": "Kütahya Porselen Forza 16 Parça 4 Kişilik Yemek Takımı",
        "image": "../assets/image8.jpg",
        "discount": 25,
        "oldPrice": "1000 TL",
        "newPrice": "750 TL"
    },
    {
        "title": "Kütahya Porselen Moderna 12 Parça 4 Kişilik Yemek Takımı Parlak Mavi",
        "image": "../assets/image9.jpg",
        "discount": 60,
        "oldPrice": "1500 TL",
        "newPrice": "600 TL"
    }
]

function truncateText(selector, maxLength) {
    const elements = document.querySelectorAll(selector);
    elements.forEach(element => {
        const originalText = element.textContent.trim();
        if (originalText.length > maxLength) {
            element.textContent = originalText.slice(0, maxLength) + '...';
        }
    });
}


document.addEventListener("DOMContentLoaded", function () {
    const swiperWrapper = document.querySelector(".swiper-wrapper");
    data.forEach(product => {
        const swiperSlide = document.createElement("div");
        swiperSlide.classList.add("swiper-slide");

        swiperSlide.innerHTML = `
                    <div class="image">
                        <img src="${product.image}" alt="${product.title}">
                    </div>
                    <div class="details">
                        <p class="title">${product.title}</p>
                        <div class="content">
                            <div class="discount">
                                <p style="font-size: 1.2rem">%${product.discount}</p>
                                <p>indirim</p>
                            </div>
                            <div>
                                <div class="oldPrice">${product.oldPrice}</div>
                                <div class="price">${product.newPrice}</div>
                            </div>
                        </div>
                        <div class="addBasketButton">
                            <button>SEPETE EKLE</button>
                        </div>
                    </div>
                `;
        swiperWrapper.appendChild(swiperSlide);
    });

    const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        slidesPerView: 4,
        loop: true,
        spaceBetween: 10,
        pagination: {
            el: '.swiper-pagination',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        scrollbar: {
            el: '.swiper-scrollbar',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            480: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 40,
            },
        }
    });
    truncateText('.details p', 35);
});


