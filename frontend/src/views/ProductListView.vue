<template>
    <div>
      <h1>Lista de Productos</h1>
      <button @click="$router.push('/products/create')">Crear Producto</button>
      <ul>
        <li v-for="product in products" :key="product.id">
          {{ product.name }} - ${{ product.price }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue'
  
  export default {
    setup() {
      const products = ref([])
  
      const fetchProducts = async () => {
        try {
          const response = await fetch('http://localhost:3000/products')
          products.value = await response.json()
        } catch (error) {
          console.error('Error al obtener productos:', error)
        }
      }
  
      onMounted(fetchProducts)
  
      return { products }
    }
  }
  </script>