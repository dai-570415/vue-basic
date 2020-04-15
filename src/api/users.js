const database = [
    { id: 1, name: 'UserA', content: 'UserA説明が入ります。UserA説明が入ります。UserA説明が入ります。UserA説明が入ります。', image: require("@/assets/img/UserA.jpg")  },
    { id: 2, name: 'UserB', content: 'UserB説明が入ります。UserB説明が入ります。UserB説明が入ります。UserB説明が入ります。UserB説明が入ります。', image: require("@/assets/img/UserB.jpg") },
    { id: 3, name: 'UserC', content: 'UserC説明が入ります。UserC説明が入ります。UserC説明が入ります。UserC説明が入ります。UserC説明が入ります。', image: require("@/assets/img/UserC.jpg") },
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