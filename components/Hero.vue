<template>
    <div class="fondo">
        <div class="cabecera">
            <div>
                <h1>Hemos venido a servir cine</h1>
            </div>
        </div>
        <div class="subtitulo">
            <p class="sub">Con nuestra suscripción, descubre obras maestras, clásicos, cine <br> independiente, series
                exclusivas, documentales y mucho más. </p>
        </div>
        <div class="suscription">
            <p class="sus">Para iniciar tu suscripción, introduce tu email aquí </p>
        </div>

        <form class="formulario" action="">
            <input class="caja_form" type="email" name="email" placeholder="Tu email" />
            <Button :typeB="'primary'">COMENZAR</Button>
        </form>

        <div class="lema_final">
            <p class="sus">Más de 10.000 películas y series. Cancela cuando quieras.</p>
        </div>
        <div class="degradado"></div>
    </div>
</template>
<script setup></script>
<style lang="postcss" scoped>


h1{
    color: white;
    font-size: 3.5rem;
    font-weight: bold;
 
}
.cabecera{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 6.5rem;
}

.sub{
    color: white;
    font-size: 1.25rem;
    font-weight: bold;
    text-align: center;
}

.subtitulo{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
}
.suscription{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 3rem;
}
.sus{
    color: white;
    font-size: 1rem;
    font-weight: bold;
    text-align: center;
}
.caja_form{
    background-color: black;
    width: 30rem;
    height: 2.75rem;
    color: grey;
    border-radius: 0.25rem;
    border: 2px solid grey;
    padding: 1rem;
}
.boton_submit{
    background-color: #02FFA2;
    color:black;
    font-size: 0.85rem;
    padding: 0.75rem;
    border-radius: 0.25rem;
    font-weight: bolder;
    margin-left: 0.5rem;
}
.boton_submit:hover{
    background-color: #3cd89f;
   
}
.lema_final{
    padding-bottom: 1rem;
}
.fondo{
    margin-top: 0;
    background-image:url(public/anatomiadeunacaida.jpg);  
    background-repeat: no-repeat; 
    background-size: cover;
}

.formulario{
    display: flex;
    justify-content: center;
    align-items: baseline;
    margin-top: 1rem;
    padding: 1rem;
}

.degradado{
    width: 100%;
    height: 4rem;
    background: linear-gradient(rgba(0, 0, 0, 0), black);
}
</style> 