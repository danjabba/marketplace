<template>
    <div>
      <h2>Crear Producto</h2>
      <form @submit.prevent="createProduct">
        <input v-model="name" type="text" placeholder="Nombre del producto" required />
        <input v-model="price" type="number" placeholder="Precio" required />
        <button type="submit">Crear Producto</button>
      </form>
    </div>
  </template>

<script setup>
import { ref } from "vue";
import { useAuthStore } from "@/stores/auth";

const authStore = useAuthStore();

const name = ref("");
const description = ref("");
const price = ref("");

const createProduct = async () => {
  const token = authStore.token;
  console.log("Token en el store:", token);

  if (!token) {
    console.error("No hay token disponible. Inicia sesión primero.");
    return;
  }

  try {
    const response = await fetch("http://localhost:3000/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name: name.value,
        description: description.value,
        price: price.value,
      }),
    });

    if (!response.ok) {
      throw new Error("Error al crear el producto");
    }

    const data = await response.json();
    console.log("Producto creado:", data);
  } catch (error) {
    console.error("Error en la creación del producto:", error);
  }
};
</script>

  