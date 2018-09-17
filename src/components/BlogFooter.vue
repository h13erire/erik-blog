<template>
  <transition appear name="v--mask">
    <footer v-once class="blog__footer">
       <a class="signature"  target="_blank">
        <p>
          <router-link to = "/dashboard">Github</router-link>
        </p>
      </a>
    </footer>
  </transition>
</template>

<script>
export default { name: 'blog-footer' }
</script>
