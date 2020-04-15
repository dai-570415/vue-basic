const database = [
    { 
        id: 1, 
        name: '商品A', 
        price: 1000, 
        content: '商品説明が入ります。商品説明が入ります。商品説明が入ります。', 
        image: require("@/assets/img/productA.jpg") 
    },
    { 
        id: 2, 
        name: '商品B', 
        price: 2000, 
        content: '商品説明が入ります。商品説明が入ります。商品説明が入ります。', 
        image: require("@/assets/img/productB.jpg") 
    },
    { 
        id: 3, 
        name: '商品C', 
        price: 3000, 
        content: '商品説明が入ります。商品説明が入ります。商品説明が入ります。', 
        image: require("@/assets/img/productC.jpg") 
    },
    { 
        id: 4, 
        name: '商品D', 
        price: 4000, 
        content: '商品説明が入ります。商品説明が入ります。商品説明が入ります。', 
        image: require("@/assets/img/productD.jpg") 
    },
    { 
        id: 5, 
        name: '商品E', 
        price: 5000, 
        content: '商品説明が入ります。商品説明が入ります。商品説明が入ります。', 
        image: require("@/assets/img/productE.jpg") 
    },
    { 
        id: 6, 
        name: '商品F', 
        price: 6000, 
        content: '商品説明が入ります。商品説明が入ります。商品説明が入ります。', 
        image: require("@/assets/img/productF.jpg") 
    },
]

export default {
    fetch(id) { return database },
    find(id) { return database.find(el => el.id === id) },
    asyncFind(id, callback) {
        setTimeout(() => {
            callback(database.find(el => el.id === id))
        }, 100)
    }
}