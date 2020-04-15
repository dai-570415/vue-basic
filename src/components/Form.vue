<template>
  <div class="container">

    <transition name="post-alert">
      <b-alert v-show="post_message" variant="success" show>内容が投稿されました</b-alert>
    </transition>
    <transition name="post-validataion">
      <b-alert v-show="post_validation" variant="danger" show>内容を入力して下さい</b-alert>
    </transition>

    <b-card-text>
        <div id="spinner" v-show="spinner">
            <b-spinner variant="success" label="Spinning"></b-spinner>
        </div>
        <b-form>
            <div v-show="card_form_cont">
                <b-form-input v-model="form_data.name" placeholder="name" required></b-form-input>
                <b-form-select v-model="form_data.cont_type" :options="cont_types" required></b-form-select>
                <b-form-textarea v-model="form_data.cont" placeholder="content" required></b-form-textarea>
            </div>
            <b-button @click="submit_form" variant="outline-success">お問い合わせ</b-button>
        </b-form>
    </b-card-text>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  data() {
    return {
        form_data: {
            name: '',
            cont_type: 'example-1',
            cont: '',
        },
        cont_types: [
            { text: 'example-1', value: 'example-1' },
            { text: 'example-2', value: 'example-2' },
            { text: 'example-3', value: 'example-3' }
        ],
        id_last: '0',
        post_message: false,
        post_validation: false,
        spinner: false,
        card_form_cont: true,
    }
  },
  created: function() {
      firebase.firestore().collection('posts_table').get().then(function(querySnapshot) {
          querySnapshot.forEach(function(doc){
              if(Number(doc.data().id) > Number(this.id_last)) {
                  this.id_last = doc.data().id
              }
          }.bind(this))
      }.bind(this))
  },
  methods: {
    submit_form: function() {
        if (this.form_data.name == '' || this.form_data.cont == '') {
            this.post_validation = true
            setTimeout(function(){
                this.post_validation = false
            }.bind(this), 3000)
            return
        }

        this.id_last = String(Number(this.id_last) + 1)

        firebase.firestore().collection('posts_table').add({
            id: this.id_last,
            name: this.form_data.name.trim(),
            cont_type: this.form_data.cont_type.trim(),
            cont: this.form_data.cont.trim()
        })

        this.form_data.name = ''
        this.form_data.cont_type = 'example-1'
        this.form_data.cont = ''

        this.card_form_cont = false
        this.spinner = true
        setTimeout(function(){ this.card_form_cont = true }.bind(this), 700)
        setTimeout(function(){ this.spinner = false }.bind(this), 700)

        this.post_message = true
        setTimeout(function(){ this.post_message = false }.bind(this), 2000)
    }
  }
}
</script>

<style scoped>
    .post-alert-enter-active, .post-alert-leave-active {
        transition: opacity 2s, transform 1.5s;
    }
    .post-alert-enter {
        opacity: 0;
        transform: translateY(-50px);
    }
    .post-alert-leave-to {
        opacity: 0;
        transform: translateY(200px);
    }
    .post-validataion-enter-active, .post-validataion-leave-active {
        transition: opacity 1s, transform 1s;
    }
    .post-validataion-enter, .post-validataion-leave-to {
        opacity: 0;
        transform: translateY(-50px);
    }
</style>