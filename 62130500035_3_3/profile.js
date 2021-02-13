    const app = {
        data() {
            return {
                msg: 'Hello, Vue3',
                myPhotoPhofile: './images/LogoProfile.jpg',
                myBackground: './images/kobkieaw.jpg',
                fullname: 'Tanawat Srijarattanon',
                firstname: 'Tanawat',
                lastname: 'Srijarattanon',
                myJob: 'Data Analysis',
                myFollower: '200k',
                myArticle: '20',
                myRating: '9.9',
                products: [{
                        id: 1,
                        title: 'kobkieaw',
                        price: 120,
                        qty: 1,
                        image: "./images/kobkieaw.jpg",
                        done: false
                    },
                    {
                        id: 2,
                        title: 'kobkieawAlmond',
                        price: 240,
                        qty: 1,
                        image: "./images/kobkieawAlmond.jpg",
                        done: false
                    },
                    {
                        id: 3,
                        title: 'kobkieawCashew',
                        price: 120,
                        qty: 1,
                        image: "./images/kobkieawCashew.jpg",
                        done: false
                    },
                    {
                        id: 4,
                        title: 'kobkieaw',
                        price: 120,
                        qty: 1,
                        image: "./images/kobkieawReview.jpg",
                        done: false
                    },
                    {
                        id: 5,
                        title: 'kobkieaw',
                        price: 240,
                        qty: 1,
                        image: "./images/kobkieawBigone.jpg",
                        done: false
                    },
                    {
                        id: 6,
                        title: 'kobkieaw',
                        price: 240,
                        qty: 1,
                        image: "./images/kobkieawWatch.jpg",
                        done: false
                    }
                ],

                followed: false,
                cartItems: [],
                carts: 0,
               
            }
        },

        methods: {
            toggleDone(index) {
                this.products[index].done = !this.products[index].done
            },

            toggleFollow() {
                this.followed = !this.followed
            },

            // addToCart(itemToAdd) {
            //     let found = false;

            //     // Add the item or increase qty
            //     let itemInCart = this.cartItems.filter(item => item.id === itemToAdd.id);
            //     let isItemInCart = itemInCart.length > 0;

            //     if (isItemInCart === false) {
            //         this.cartItems.push(Vue.util.extend({}, itemToAdd));
            //     } else {
            //         itemInCart[0].qty += itemToAdd.qty;
            //     }

            //     itemToAdd.qty = 1;
            // },

            plusOneCart(){
                this.carts += 1
            }
            

        },

        computed: {
            countDone() {
                return this.products.filter(p => p.done).length
            },

            countPost() {
                return this.products.filter(p => p.image).length
            }
            
        }


    }
    Vue.createApp(app).mount('#app')