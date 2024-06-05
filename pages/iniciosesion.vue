<template>
    <header class="absolute top-0 left-0 w-full z-10">
        <nav class="menu flex justify-between mx-16 my-4">
            <div>
                <ul>
                    <li>
                        <NuxtLink to="/"> <img src="/Logotipo_Filmin_2023.png" alt=""></NuxtLink>
                    </li>
                </ul>
            </div>
            <div class="menu_dcha">
                <div class="imagenSesion flex">


                    <Button :typeB="'transparent'">
                        <NuxtLink to="/iniciosesion">Crear Cuenta</NuxtLink>
                    </Button>
                </div>
            </div>
        </nav>
    </header>


    <div class="relative z-0">
        <div class="absolute top-0 right-0 w-[60%] h-full bg-black flex items-center justify-center z-0">
            <div class="flex flex-col items-left space-y-4">
                <h2 class="text-white text-5xl">Iniciar sesión</h2>
                <p class="text-white"><strong>Tu email</strong></p>
                <input type="text" class="p-2 w-3/2 border border-white rounded bg-gray-800 text-white"
                    placeholder="Tu email">
                <p class="text-white"><strong>Tu contraseña</strong></p>
                <input type="password" class="p-2 w-3/2 border border-white rounded bg-gray-800 text-white"
                    placeholder="Tu contraseña">
                <NuxtLink to="/">
                    <Button :typeB="'primary'" @click="logUser()">
                        Inicio de sesión
                    </Button>
                </NuxtLink>
            </div>
        </div>
        <img src="/public/mosaico-img_girado.png" alt="" class="w-[75%] ">
    </div>

    <!-- <div class="flex">
        <img src="/public/mosaico-img_girado.png" alt="" class="h-full w-[50%]">
        
    </div> -->

    <!-- <div class="rectangulo_negro"></div>
    <div class=" mosaico_fondo">
        <Carousel class="size" :horizontal="false"></Carousel>
        <Carousel class="size" :horizontal="false"></Carousel>
        <Carousel class="size" :horizontal="false"></Carousel>
        <Carousel class="size" :horizontal="false"></Carousel>
        <Carousel class="size" :horizontal="false"></Carousel>
        <Carousel class="size" :horizontal="false"></Carousel>
        <Carousel class="size" :horizontal="false"></Carousel>
        <Carousel class="size" :horizontal="false"></Carousel>

    </div> -->

    
</template>


<script setup>
import { inject } from 'vue';
const navBarLogged = inject('navBarLogged');

const logUser = () => {
    navBarLogged.value = false
}
</script>

<style lang="postcss" scoped>
/* .size{
    width: 30%;
    height: 30%;
}

.mosaico_fondo {
    width: 500px;
    height: 800px;
    position: relative;
    transform-origin: center center 0px;
    transform: rotate(10deg);
}

.rectangulo_negro {
    position: absolute;
    background-color: black;
    width: 60%;
    height: 100%;
} */
</style>
