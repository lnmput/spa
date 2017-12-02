<template>
    <div class="col-md-8 col-md-offset-2">
      <div v-for="post in posts" :key="post.id" class="panel panel-default">
        <div class="panel-heading">
          <router-link :to="{ name:'posts', params: {id: post.id} }">{{ post.title }}</router-link>
        </div>
        <div class="panel-body">
          {{ post.body }}
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        mounted() {
            axios.get('/api/posts').then(rersponse => {
                this.posts = rersponse.data.data;
                console.log(this.posts)
            })
        },
        data() {
            return {
                posts: []
            }
        }
    }
</script>
