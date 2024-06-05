<template >
    <header v-if="active">
        <nav class="menu">
            <div class="menu_izq items-center">
                <ul>
                    <li>
                        <NuxtLink to="/"> <img src="/Logotipo_Filmin_2023.png" alt=""></NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/">Inicio</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/peliculas">Películas</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/series">Series</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/colecciones">Colecciones</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/festivales">Festivales</NuxtLink>
                    </li>
                </ul>
            </div>
            <div class="menu_dcha">
                <div v-if="logged" class="imagenSesion flex">

                    <NuxtLink to="/">
                        <Button :typeB="'primary'">SUSCRÍBETE</Button>
                    </NuxtLink>

                    <div class="line-white">
                        <NuxtLink to="/iniciosesion">INICIAR SESIÓN</NuxtLink>
                    </div>
                </div>
                <div v-else class="sesionIniciada">
                    <img src="/image1.jpg" alt="" class="rounded-full w-12 h-12">
                </div>
                <div>
                    <NuxtLink to="/"><span class="lupa"><svg width="30" height="30" viewBox="0 0 66 66" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M64.0205 58.9795L49.9219 44.875C54.1491 39.3664 56.1227 32.4561 55.4423 25.5459C54.7618 18.6357 51.4784 12.243 46.258 7.66466C41.0376 3.08631 34.2711 0.66513 27.3312 0.892258C20.3913 1.11938 13.7976 3.97782 8.8877 8.8877C3.97781 13.7976 1.11938 20.3913 0.892252 27.3312C0.665125 34.2711 3.08631 41.0376 7.66465 46.258C12.243 51.4784 18.6357 54.7618 25.5459 55.4423C32.4561 56.1227 39.3664 54.1491 44.875 49.9219L58.9855 64.0353C59.3168 64.3667 59.7103 64.6296 60.1432 64.8089C60.5762 64.9883 61.0403 65.0806 61.5089 65.0806C61.9776 65.0806 62.4416 64.9883 62.8746 64.8089C63.3076 64.6296 63.701 64.3667 64.0323 64.0353C64.3637 63.7039 64.6266 63.3105 64.8059 62.8776C64.9853 62.4446 65.0776 61.9805 65.0776 61.5119C65.0776 61.0432 64.9853 60.5792 64.8059 60.1462C64.6266 59.7132 64.3637 59.3198 64.0323 58.9884L64.0205 58.9795ZM8.0625 28.25C8.0625 24.2573 9.24648 20.3542 11.4647 17.0344C13.6829 13.7146 16.8358 11.1271 20.5246 9.59919C24.2134 8.07124 28.2724 7.67146 32.1884 8.4504C36.1044 9.22934 39.7014 11.152 42.5247 13.9753C45.348 16.7986 47.2707 20.3956 48.0496 24.3116C48.8285 28.2276 48.4288 32.2866 46.9008 35.9754C45.3729 39.6642 42.7854 42.8171 39.4656 45.0353C36.1458 47.2535 32.2427 48.4375 28.25 48.4375C22.8976 48.432 17.7661 46.3033 13.9814 42.5186C10.1967 38.7339 8.068 33.6024 8.0625 28.25Z" />
                            </svg>

                        </span></NuxtLink>
                </div>
            </div>
        </nav>

    </header>
</template>


<script setup>

defineProps({
    logged: Boolean,
    active: Boolean
})
</script>


<style lang="postcss" scoped>
.menu {
    display: flex;
    justify-content: space-between;
}

.menu_izq {
    display: flex;
    align-items: center;
}

.menu_dcha {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    color: white;
    list-style: none;
    padding: 2rem;
}

.menu_dcha div {
    margin-right: 1rem;
}

.green-box {
    background-color: #02FFA2;
    color: black;
    font-size: 0.85rem;
    padding: 0.5rem;
    border-radius: 0.25rem;
    font-weight: bolder;

}

.green-box:hover {
    background-color: #3cd89f;

}

.line-white {
    font-size: 0.85rem;
    padding: 0.35rem;
    border-radius: 0.25rem;
    border-color: white;
    border: solid 0.15rem;
}

.lupa svg {
    fill: white;
}

.lupa:hover svg {
    fill: #02FFA2;
}

li:hover {
    color: #00ffa1;
    cursor: pointer;
}


ul {
    color: white;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 1rem;
    @apply flex p-4;

    li {
        @apply p-4;
    }
}
</style>