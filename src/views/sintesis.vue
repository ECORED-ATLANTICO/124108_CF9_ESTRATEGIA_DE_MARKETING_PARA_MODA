<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .row.mb-5.justify-content-center.align-items-center
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/1.png", data-aos="zoom-in")
      .col-lg-8(data-aos="fade-right")
        p El componente formativo Dinamización de comunidades digitales ofrece al aprendiz herramientas avanzadas para medir, interpretar y optimizar el desempeño digital en el sistema moda mediante indicadores clave, analítica de datos y evaluación del comportamiento del consumidor. El componente fortalece la capacidad de transformar métricas en decisiones estratégicas que impacten la visibilidad, la conversión y la rentabilidad de las marcas de moda.
        .bg-color-20.tarjeta.p-4
          p.mb-0 Adicionalmente, se profundiza en la segmentación del mercado y en los factores que influyen en la decisión de compra, permitiendo al aprendiz comprender integralmente al consumidor digital. La integración entre medición, análisis e interpretación favorece la construcción de estrategias basadas en evidencia. Con ello, el aprendiz desarrolla competencias para gestionar ecosistemas digitales orientados a resultados sostenibles.
    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="La figura muestra la estructura jerárquica que sintetiza el contenido del componente formativo “Dinamización de comunidades digitales”, el cual se organiza en cuatro unidades. Inicia con Desempeño de la red social, en donde se abordan las temáticas de Impresiones, me gusta, comentarios, historias, suscriptores, seguidores, alcances, indicadores , analítica de datos, pauta, y culmina con publicaciones. Continúa con el capítulo de Indicador clave de rendimiento, allí se verá su concepto, estructura, interpretación, aplicabilidad y cálculo. Continúa con el tercer capítulo y el tema de Segmentación del mercado, allí ser abordará su concepto, técnicas, variables, matrices, clientes, vida del producto, beneficios, y proceso. Culmina el componente con el capítulo de Comportamiento del consumidor, donde se aborda su concepto y las temáticas de variables, aplicabilidad, influencias y características.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
