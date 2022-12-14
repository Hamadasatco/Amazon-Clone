export const initialState = {
    user: null,
    basket: [],
    products: [
        {
            id: 1,
            title: "daniel korpai Smart Watch",
            image: "https://i.ibb.co/Lxy7vYX/daniel-korpai.jpg",
            price: 200,
            rating: 4,
            quntity: 1
        },
        {
            id: 2,
            title: "Samsung LCD Preparing For Hdr Video Production From Camera To Delivery - Led-backlit Lcd Display, HD",
            image: "https://png.pngitem.com/pimgs/s/415-4151781_preparing-for-hdr-video-production-from-camera-to.png",
            price: 630,
            rating: 4,
            quntity: 1
        },
        {
            id: 3,
            title: "Mary Kay Hydrating Gel, HD",
            image: "https://png.pngitem.com/pimgs/s/607-6074952_mary-kay-hydrating-gel-hd-png-download.png",
            price: 30.99,
            rating:  3,
            quntity: 1
        },
        {
            id: 4,
            title: "Powerscan Pm9500-dpm Evo, HD",
            image: "https://png.pngitem.com/pimgs/s/174-1741889_powerscan-pm9500-dpm-evo-hd-png-download.png",
            price: 52,
            rating: 4,
            quntity: 1
        },
        {
            id: 5,
            title: "Sboly Coffee Maker 14oz 3mins Brew Coffee Machine For K Cup Pods & Ground Coffee",
            image: "https://i.pinimg.com/564x/7a/48/f9/7a48f9b1452facd60e6f0ef8e323275c.jpg",
            price: 50.99,
            rating: 3,
            quntity: 1
        },
        {
            id: 6,
            title: "HP 15 15s-gy0003AU Laptop ( AMD 3020e / 4GB / 1TB )",
            image: "https://i.pinimg.com/236x/c8/4a/2b/c84a2be2b4c26377fe0a7047f2f7d3b1.jpg",
            price: 153,
            rating: 4,
            quntity: 1
        },
    ]
};

export const getBasketTotal = (basket) =>
basket?.reduce((amount, item) => item.price * item.quntity + amount, 0);

const reducer = (state, action) => {
    switch(action.type){
        case 'ADD_TO_BASKET':

            let tempCart = JSON.parse(JSON.stringify(state.basket));
            let tempItem = tempCart.find(item => item.id === action.id);
            if (!tempItem) {
                tempCart = [...tempCart, action.item];
            } else {
                tempItem.item.quntity += 1;
            }

            return {
                ...state,
                basket: [...tempCart],
            }


        case "EMPTY_BASKET":
            return {
                ...state,
                basket: []
            }


        case 'REMOVE_FROM_BASKET':
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            );
            let newBasket = [...state.basket];
            if (index >= 0) {
                newBasket.splice(index, 1);
            } else {
                console.warn(
                    `can't remove product (id: ${action.id}) cause it's not in basket`
                );
            }
            return {
                ...state,
                basket: newBasket
            }

        case "SET_USER":
            return {
                ...state,
                user: action.user
            }

        case "INCREMENT_QUNTITY":
            let tempBasket = JSON.parse(JSON.stringify(state.basket));
            let tempProduct = tempBasket.find(product => product.id === action.id);
            if (tempProduct) {
                tempProduct.quntity += 1;
                console.log(getBasketTotal);
                console.log("from reducer " + tempProduct);
            
            }

            return {
                ...state,
                basket: tempBasket
            }
            
            case "DECREMENT_QUNTITY":
                let temp1 = JSON.parse(JSON.stringify(state.basket));
                let Product = temp1.find(product => product.id === action.id);
                if (Product) {
                    Product.quntity -= 1;
                    console.log("from reducer " + Product);
                }
    
                return {
                    ...state,
                    basket: [...temp1]
                }
            
        default:
            return state;
    }
};

export default reducer;