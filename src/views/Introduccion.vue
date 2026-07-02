<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .bg-full-width.bg-fondo-1
      .px-4.px-lg-5
        .row.justify-content-center.align-items-center.mb-3
          .col-lg-3.mb-3.order-lg-2
            figure
              img(src="@/assets/curso/intro/2.png", data-aos="zoom-in")
          .col-lg-9.order-lg-1
            .row.justify-content-center.align-items-center.mb-3
              .col-lg-5.mb-3
                figure
                  img(src="@/assets/curso/intro/1.png", data-aos="zoom-in")
              .col-lg-7
                .bg-color-2.p-4
                  p.mb-0 El componente Dinamización de comunidades digitales aborda los fundamentos estratégicos y operativos para gestionar, analizar y potenciar la interacción de audiencias en entornos digitales. A través del estudio del desempeño en redes sociales, los indicadores clave de rendimiento (KPI), la segmentación del mercado y el comportamiento del consumidor, el aprendiz comprenderá cómo convertir datos e interacciones en decisiones de <em>marketing</em> efectivas.
            .bg-color-18.mb-5.p-4
              .row.align-items-center
                .col-lg-auto.mb-lg-0
                  img.d-none.d-lg-flex(src="@/assets/curso/intro/3.svg").mx-auto
                .col-lg
                  p.mb-0 Este componente es clave para formar profesionales capaces de optimizar la presencia digital de marcas, especialmente en el sistema moda, donde la relación con la comunidad impacta directamente la visibilidad y la conversión. El contenido se desarrollará mediante enfoques analíticos y aplicados, apoyados en ejemplos reales, interpretación de métricas y ejercicios prácticos orientados a la toma de decisiones basada en datos.

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
