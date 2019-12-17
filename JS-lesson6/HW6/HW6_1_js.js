"use strict";

/**
 *  Объект каталога товаров
 */
const catalog = {
    catalogBlock: null,
    cart: {},
    list: [
        {
            id_product: 123,
            product_name: 'Ноутбук',
            price: 45600,
            quantity: 1,
        },
        {
            id_product: 456,
            product_name: 'Мышка',
            price: 1000,
            quantity: 1,
        },
        {
            id_product: 245,
            product_name: 'Клавиатура',
            price: 1500,
            quantity: 1,
        },
        {
            id_product: 345,
            product_name: 'Коврик',
            price: 300,
            quantity: 1,
        }
    ],

    /**
     * Инициальзация каталога.
     * @param catalogBlockClass - класс блока каталога
     * // addCartButton -   класс кнопки добавки в корзину
     * @param cart
     */
    init(catalogBlockClass, cart) {
      this.catalogBlock = document.querySelector(`.${catalogBlockClass}`);
      this.cart = cart;
      this.render();
      this.addEventHandlers();
    },


    // обработчик события положить в корзину

    addEventHandlers() {
        this.catalogBlock.addEventListener('click', event => this.addToCart(event));
    },

    // метод добавления в корзину     передать выбранные товары в корзину

    addToCart(event) {
        if (!event.target.classList.contains('product__add-to-cart')) return;
        const id_product = +event.target.dataset.id_product;
        this.cart.addToCart(id_product);
    },

    /**
     * Рендер каталога
     */
    render() {
        if (this.getCatalogListLength() > 0) {
            this.renderCatalogList();
        } else {
            this.renderEmptyCatalog();
        }
    },

    /**
     * Метод получения количества товаров в каталоге
     * @returns {number}
     */
    getCatalogListLength() {
        return this.list.length;
    },

    /**
     * Рендер списка товаров
     */
    renderCatalogList() {
        this.catalogBlock.innerHTML = '';
        this.list.forEach(item => {
            this.catalogBlock.insertAdjacentHTML('beforeend', this.renderCatalogItem(item));
        });
    },

    /**
     * Рендер отдельного товара из списка
     * @param item - товар
     * @returns {string} - сгенерированая строка разметки
     */
    renderCatalogItem(item) {
        return `<div class="product">
                <h3>${item.product_name}</h3>
                <p>${item.price} руб.</p>
                <button class="product__add-to-cart" data-id_product="${item.id_product}">Добавить в корзину</button>
            </div>`;
    },

    /**
     * Рендер пустого каталога
     */
    renderEmptyCatalog() {
        this.catalogBlock.innerHTML = '';
        this.catalogBlock.insertAdjacentHTML('beforeend', `Каталог товаров пуст.`);
    },
};

/**
 *  Объект корзины
 */
const cart = {
    cartBlock: null,
    clrCartButton: null,
    catalogList: [],
    goods: [
        {
            id_product: 123,
            product_name: 'Ноутбук',
            price: 45600,
            quantity: 2,
        },
    ],

    /**
     * Метод инициальзации корзины
     * @param cartBlockClass - класс блока корзины
     * @param clrCartButton - класс кнопки очистки корзины
     * @param catalogList
     */
    init(cartBlockClass, clrCartButton, catalogList) {
      this.cartBlock = document.querySelector(`.${cartBlockClass}`);
      this.clrCartButton = document.querySelector(`.${clrCartButton}`);
      this.catalogList = catalogList;

        this.addEventHandlers();
        this.render();
    },

    /**
     * Метод установки обработчиков событий
     */
    addEventHandlers() {
        this.clrCartButton.addEventListener('click', this.dropCart.bind(this));
    },

    /**
     * Метод очистки корзины
     */
    dropCart() {
        this.goods = [];
        this.render();
    },

    /**
     * Рендер корзины
     */
    render() {
        if (this.getCartGoodsLength() > 0) {
            this.renderCartList();
        } else {
            this.renderEmptyCart();
        }
    },

    findProduct(id_product) {
      return this.catalogList.find(product => product.id_product === id_product);
    },


    // Добавление товаров

    addToCart(id_product) {
        const product = this.findProduct(id_product);

        if (product) {
            this.goods.push(product);
            this.render();
        } else {
            alert('Ошибка добавления!');
        }

    },

    /**
     * Получение количества товаров в корзине
     * @returns {number}
     */
    getCartGoodsLength() {
        return this.goods.length;
    },

    /**
     * Рендер пустой корзины
     */
    renderEmptyCart() {
        this.cartBlock.innerHTML = '';
        this.cartBlock.insertAdjacentHTML('beforeend', 'Корзина пуста.');
    },

    /**
     * Рендер списка товаров в корзине
     */
    renderCartList() {
        this.cartBlock.innerHTML = '';
        this.goods.forEach(item => {
            this.cartBlock.insertAdjacentHTML('beforeend', this.renderCartItem(item));
        });
    },

    /**
     * Рендер отдельного товара в корзине
     * @param item - товар
     * @returns {string} - сгененрированая строка разметки
     */
    renderCartItem(item) {
        return `<div>
                <h3>${item.product_name}</h3>
                <p>${item.price} руб.</p>
                <p>${item.quantity} шт.</p>
            </div>`;
    },
};

/**
 * Подключение каталога и корзины
 */
console.log(cart);
catalog.init('catalog', cart);
cart.init('cart', 'clr-cart', catalog.list);
