<template>
  <BForm @submit.prevent="register">  <!-- Asegúrate de este evento -->
    <BFormGroup label="Correo electrónico">
      <BFormInput type="email" v-model="email" required></BFormInput>
    </BFormGroup>

    <BFormGroup label="Contraseña">
      <BFormInput type="password" v-model="password" required></BFormInput>
    </BFormGroup>

    <BButton type="submit" variant="primary">Registrarse</BButton>  <!-- No uses @click aquí -->
  </BForm>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')
const password = ref('')

const register = async () => {
  console.log('Registrando usuario:', email.value, password.value)

  try {
    const response = await fetch('http://localhost:3000/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: email.value,
        password: password.value
      })
    })

    const data = await response.json()
    console.log('Respuesta del servidor:', data)
  } catch (error) {
    console.error('Error en el registro:', error)
  }
}
</script>
