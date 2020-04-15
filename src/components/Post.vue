<template>
  <div class="container">
    <b-button @click="button_all" variant="outline-primary">全て</b-button>
    <b-button @click="button_example1" variant="outline-primary">example-1</b-button>
    <b-button @click="button_example2" variant="outline-primary">example-2</b-button>
    <b-button @click="button_example3" variant="outline-primary">example-3</b-button>

    <transition-group name="transition">
        <div v-for="post in posts" :key="post.id">
            <div v-if='post.cont_type=="example-1"' v-show="show_example1">
                {{ post.id }} - {{ post.name }}: {{ post.cont }} - {{ post.cont_type }}
            </div>
            <div v-if='post.cont_type=="example-2"' v-show="show_example2">
                {{ post.id }} - {{ post.name }}: {{ post.cont }} - {{ post.cont_type }}
            </div>
            <div v-if='post.cont_type=="example-3"' v-show="show_example3">
                {{ post.id }} - {{ post.name }}: {{ post.cont }} - {{ post.cont_type }}
            </div>
        </div>
    </transition-group>

  </div>
</template>
<script>
import firebase from 'firebase'

export default {
    data() {
        return {
            posts: [],
            show_example1: true,
            show_example2: true,
            show_example3: true,
        }
    },
    created: function() {
        firebase.firestore().collection('posts_table').where('id','>=','1')
        .onSnapshot(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                let id_ary = new Array()
                this.posts.forEach(function(post) {
                    id_ary.push(post.id)
                })
                if(id_ary.indexOf(doc.data().id) == -1) {
                    this.posts.push(doc.data())
                }
            }.bind(this))
        }.bind(this))
    },
    methods: {
        button_all: function() {
            this.show_example1 = true
            this.show_example2 = true
            this.show_example3 = true
        },
        button_example1: function() {
            this.show_example1 = true
            this.show_example2 = false
            this.show_example3 = false
        },
        button_example2: function() {
            this.show_example1 = false
            this.show_example2 = true
            this.show_example3 = false
        },
        button_example3: function() {
            this.show_example1 = false
            this.show_example2 = false
            this.show_example3 = true
        }
    }
}
</script>

<style scoped>
    .transition-enter-active, .transition-leave-active {
        transition: opacity 1s, transform 1s;
    }
    .transition-enter {
        opacity: 0;
        transform: translateX(-100px);
    }
    .transition-leave-to {
        opacity: 0;
        transform: translateX(100px);
    }
</style>