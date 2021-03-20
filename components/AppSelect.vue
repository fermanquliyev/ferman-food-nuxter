<template>
  <div class="form-group">
    <label :for="select">What {{select}} do you want?</label>
    <select class="form-control" :name="select" :id="select" @change="$emit('change', $event.target.value)">
      <option value>Please select {{select}}</option>
      <option v-for="option in options" :value="option" :key="option">{{option}}</option>
    </select>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props:{
    select:{
      type:String,
      default:'cuisine'
    },
    options: {
      type: Array,
      default: ()=>['tacos', 'pizza', 'dim sum']
    }
  }
})
</script>
