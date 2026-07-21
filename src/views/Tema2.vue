<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Indicador clave de rendimiento
    
    .bg-full-width.bg-fondo-1
      .px-4.px-lg-5
        .row.mb-3.justify-content-center.align-items-center
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema2/1.png", data-aos="zoom-in")
          .col-lg-8
            p(data-aos="fade-right") En el sistema moda, la toma de decisiones basada en datos exige indicadores que permitan evaluar de manera objetiva el desempeño de las estrategias digitales. Los indicadores clave de rendimiento (KPI) constituyen herramientas fundamentales para medir avances, detectar desviaciones y optimizar la gestión comercial. Su correcta definición transforma la analítica en dirección estratégica, sin KPI claros, las métricas se convierten en información dispersa y poco accionable.
            p.mb-0 Las marcas de moda que estructuran adecuadamente sus KPI logran alinear objetivos comerciales con resultados medibles, optimizar la inversión publicitaria y mejorar la eficiencia operativa. 
        
        .bg-color-9.tarjeta.p-4.mb-5
          p.mb-0 En contraste, la ausencia de indicadores relevantes conduce a decisiones intuitivas y a pérdida de competitividad. Este capítulo desarrolla el concepto, la estructura y la aplicabilidad de los KPI en el contexto del <em>marketing</em> digital para el sistema moda.
    
        separador
        
        #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 2.1 Concepto
    
    img(src="@/assets/curso/tema2/2.png", alt="Imagen decorativa")
    
    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-10(data-aos="fade-up")
        p.banner-text Un indicador clave de rendimiento (KPI) es una métrica estratégica utilizada para medir el grado de cumplimiento de los objetivos establecidos por una organización, en el sistema moda, los KPI permiten evaluar si las acciones de <em>marketing</em> digital están generando resultados alineados con las metas comerciales, a diferencia de las métricas generales, un KPI se caracteriza por su relevancia estratégica y su vínculo directo con los objetivos del negocio, por ello, no todo dato constituye un KPI.
    
    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-8
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 6.
          span Diferencia entre métrica y KPI 
        img.mb-2.d-none.d-sm-block(data-aos="fade-up", src="@/assets/curso/tema2/3.png", alt="Imagen que compara los conceptos de métrica y KPI en marketing digital. Explica que las métricas miden datos operativos, mientras que los KPI evalúan el cumplimiento de objetivos estratégicos del negocio mediante indicadores de desempeño.")
        img.mb-2.d-sm-none(data-aos="fade-up", src="@/assets/curso/tema2/3-1.png", alt="Imagen que compara los conceptos de métrica y KPI en marketing digital. Explica que las métricas miden datos operativos, mientras que los KPI evalúan el cumplimiento de objetivos estratégicos del negocio mediante indicadores de desempeño.")
        figcaption Nota. SENA, (2026).
    
    .bg-color-1.tarjeta.px-4.mb-5
      .row.align-items-center
        .col-lg-auto.mb-lg-0
          img.d-none.d-lg-flex(src="@/assets/curso/tema2/4.svg").mx-auto
        .col-lg
          p.mb-0 <b><em>Insight</em></b>. la marca <b>Distrito Moda Analytics</b> redefinió sus KPI priorizando ROAS y tasa de conversión en lugar de solo seguidores, esta decisión permitió enfocar la inversión en resultados reales y aumentar la rentabilidad digital en 27 %.
    
    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-8(data-aos="fade-up") 
        .bg-color-1.px-5.py-4.tarjeta
          .row.align-items-center
            .col-lg-auto.mb-lg-0
              img.d-none.d-lg-flex(src="@/assets/curso/tema2/5.png").mx-auto
            .col-lg
              p.mb-0 <b>Clave estratégica</b>. No todo lo que se mide importa; el KPI mide lo que realmente dirige el negocio.
    
    separador
    
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.2 Estructura
  
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/6.png", data-aos="zoom-in")
      .col-lg-8
        p La estructura de un KPI corresponde al conjunto de elementos que permiten definirlo, medirlo e interpretarlo correctamente dentro de la estrategia digital, un KPI mal estructurado puede generar lecturas erróneas y decisiones equivocadas, por ello, la construcción técnica del indicador es tan importante como su selección.
        .bg-color-1.p-4
          .row.align-items-center
            .col-lg-auto.mb-lg-0
              img.d-none.d-lg-flex(src="@/assets/curso/tema2/7.svg").mx-auto
            .col-lg
              p.mb-0 Un KPI bien estructurado incluye objetivo asociado, fórmula de cálculo, fuente de datos, frecuencia de medición y meta esperada. 
    
    .row.justify-content-center.mb-5
      .col-lg-10
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg-color-5")
          .row(titulo="Objetivo")
            .col-lg-auto.mb-lg-0
              img.d-none.d-lg-flex(src="@/assets/curso/tema2/7.png").mx-auto
            .col-lg
              p Define el propósito del indicador y establece qué aspecto del desempeño se desea evaluar. Permite alinear la medición con los objetivos estratégicos del negocio y orientar las decisiones de <em>marketing</em>.
              p <b>Ejemplo en moda</b>: una marca de moda busca incrementar las ventas <em>online</em> de su tienda digital, especialmente durante el lanzamiento de una nueva colección de temporada.
          .row(titulo="Formula")
            .col-lg-auto.mb-lg-0
              img.d-none.d-lg-flex(src="@/assets/curso/tema2/8.png").mx-auto
            .col-lg
              p Determina el método matemático utilizado para calcular el indicador. Establece la relación entre las variables necesarias para medir el desempeño de manera cuantificable y comparable.
              p <b>Ejemplo en moda</b>:  para medir la conversión en el <em>e-commerce</em> de moda se utiliza la fórmula: ventas / número de visitas al sitio web, lo que permite conocer qué porcentaje de visitantes realiza una compra.
          .row(titulo="Fuente de datos")
            .col-lg-auto.mb-lg-0
              img.d-none.d-lg-flex(src="@/assets/curso/tema2/9.png").mx-auto
            .col-lg
              p Indica la plataforma, sistema o herramienta desde donde se obtienen los datos necesarios para calcular el KPI. Garantiza la confiabilidad y trazabilidad de la información utilizada en el análisis.
              p <b>Ejemplo en moda</b>: los datos de visitas, comportamiento de usuarios y transacciones del <em>e-commerce</em> se obtienen desde <em>Google Analytics</em> y la plataforma de la tienda <em>online</em>.
          .row(titulo="Frecuencia")
            .col-lg-auto.mb-lg-0
              img.d-none.d-lg-flex(src="@/assets/curso/tema2/10.png").mx-auto
            .col-lg
              p Establece el periodo de tiempo en el que el indicador será medido y evaluado. Permite monitorear el desempeño de forma periódica y detectar tendencias o desviaciones.
              p <b>Ejemplo en moda</b>: el equipo de <em>marketing</em> revisa mensualmente la tasa de conversión de la tienda <em>online</em> para evaluar el rendimiento de las campañas digitales.
          .row(titulo="Meta")
            .col-lg-auto.mb-lg-0
              img.d-none.d-lg-flex(src="@/assets/curso/tema2/11.png").mx-auto
            .col-lg
              p Representa el valor objetivo que se espera alcanzar con el KPI. Sirve como referencia para evaluar el éxito o la necesidad de ajustar la estrategia.
              p <b>Ejemplo en moda</b>: la marca establece como meta alcanzar una tasa de conversión del 3 % en su <em>e-commerce</em>, lo que indicaría una mejora en la efectividad de sus campañas digitales.
    
    .bg-color-1.tarjeta.px-4.mb-5
      .row.align-items-center
        .col-lg-auto.mb-lg-0
          img.d-none.d-lg-flex(src="@/assets/curso/tema2/12.png").mx-auto
        .col-lg
          p.mb-0 <b>Ejemplo aplicado</b>. La marca Ébano Performance Wear estructuró su KPI de conversión definiendo fórmula, meta mensual y fuente en Google Analytics. Esto permitió detectar rápidamente caídas en ventas y ajustar campañas en tiempo real.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/13.png", data-aos="zoom-in")
      .col-lg-6
        .row.align-items-center.bg-color-1.px-4.tarjeta
          .col-lg-auto.mb-lg-0
            img.d-lg-flex.d-none(src="@/assets/curso/tema2/14.png").mx-auto
          .col-lg
            h5 Pregunta de aplicación
            p.mb-0 ¿Qué componente de la estructura del KPI garantiza que el indicador sea confiable?
      
    separador
    
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.3 Interpretación
    
    .bloque-texto-g.color-secundario.bg-color-5.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/15.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La interpretación de los KPI corresponde al proceso analítico mediante el cual los datos medidos se convierten en conclusiones estratégicas para la toma de decisiones, en el sistema moda, interpretar correctamente los indicadores permite identificar oportunidades de crecimiento, detectar desviaciones y ajustar las acciones de <em>marketing</em> digital, sin una interpretación adecuada, los KPI se reducen a cifras descriptivas sin valor estratégico, de allí que, la analítica debe ir acompañada de criterio gerencial.

    .row.justify-content-center.align-items-center
      .col-lg-10(data-aos="fade-up")
        .tarjeta.color-primario.bg-color-16.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-auto
              img(src="@/assets/curso/tema2/16.png")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Interpretación de indicadores de gestión (KPI).
                  p.mb-0 Lo invitamos a revisar el siguiente recurso educativo por medio del cual podrá profundizar en temática abordada, el cual corresponde a un video del Ecosistema de Recursos Educativos Digitales SENA, el cual explica qué son los KPI (<em>Key Performance Indicators</em>) y su importancia en la gestión y evaluación de procesos, muestra cómo interpretar los indicadores para analizar resultados y tomar decisiones. 
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=YfJvHDuEKoQ  " target="_blank")
                    span Ir al video
                    i.fas.fa-link

    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-8(data-aos="fade-up") 
        .bg-color-1.px-5.py-4.tarjeta
          .row.align-items-center
            .col-lg-auto.mb-lg-0
              img.d-none.d-lg-flex(src="@/assets/curso/tema2/5.png").mx-auto
            .col-lg
              p.mb-0 <b>Clave estratégica</b>. El dato informa; la interpretación decide.
    
    separador
    
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.4 Aplicabilidad

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/17.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-right") La aplicabilidad de los KPI se refiere al uso práctico de los indicadores para orientar decisiones tácticas y estratégicas dentro del <em>marketing</em> digital, en el sistema moda, la utilidad real de un KPI se evidencia cuando influye directamente en la optimización de campañas, la asignación de presupuesto y la planificación comercial; un indicador que no genera acciones concretas pierde valor operativo, es por ello, que la aplicabilidad es el criterio que valida la pertinencia del KPI.
    
        .cajon.color-acento-contenido.p-4
          p.mb-0 En términos funcionales, los KPI pueden aplicarse en control de campañas, optimización de contenido, gestión de inversión publicitaria y evaluación de desempeño comercial.
    
    p.mb-5 El siguiente caso presenta la aplicación de KPI en una estrategia de <em>marketing</em> digital desarrollada para una marca de moda.
    
    .row.justify-content-center.align-items-center
      .col-lg-10(data-aos="fade-up")
        .tarjeta.color-primario.bg-color-10.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-auto
              img(src="@/assets/curso/tema2/18.png")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Caso aplicado: uso de KPI en una marca de moda digital
                  p.mb-0 El siguiente caso presenta la aplicación de KPI en una estrategia de <em>marketing</em> digital desarrollada para una marca de moda.
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/Caso_aplicado_uso_KPI_marca_moda_digital.pdf')" target="_blank")
                    span Ir al enlace
                    i.fas.fa-link

    .bg-color-1.tarjeta.px-4.mb-5
      .row.align-items-center
        .col-lg-auto.mb-lg-0
          img.d-none.d-lg-flex(src="@/assets/curso/tema2/12.png").mx-auto
        .col-lg
          p.mb-0  <b><em>Insigh</em></b>. La empresa <b>Élite Moda Performance</b> utilizó su KPI de conversión para redistribuir presupuesto hacia las campañas con mejor rendimiento. Esta decisión incrementó sus ventas <em>online</em> en 33 % sin aumentar la inversión total.
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/19.png", data-aos="zoom-in")
      .col-lg-6
        .row.align-items-center.bg-color-1.px-4.tarjeta
          .col-lg-auto.mb-lg-0
            img.d-lg-flex.d-none(src="@/assets/curso/tema2/14.png").mx-auto
          .col-lg
            h5 Pregunta de aplicación
            p.mb-0 ¿Qué indicador priorizarías para decidir la redistribución del presupuesto publicitario?
    
    separador
    
    #t_2_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.5 Cálculo
    
    img(src="@/assets/curso/tema2/20.png", alt="Imagen decorativa")
    
    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-10(data-aos="fade-up")
        p.banner-text El cálculo de los KPI permite cuantificar el desempeño de las acciones digitales mediante fórmulas aplicadas a diferentes métricas de <em>marketing</em>.

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/21.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-right") La forma de cálculo de los KPI corresponde a la fórmula matemática que permite cuantificar el desempeño de una acción digital, la precisión en el cálculo garantiza que las decisiones se basen en datos confiables, un error en la fórmula puede distorsionar la lectura del negocio, por ello, la estandarización de los cálculos es una práctica esencial en la analítica digital.
    
        .cajon.color-acento-contenido.p-4
          p.mb-0 La siguiente tabla reúne algunas fórmulas utilizadas para calcular KPI en entornos digitales aplicados al sistema moda.
    
    .row.justify-content-center
      .col-lg-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 6.
          span Fórmulas básicas de KPI en moda
        .tabla-a.color-secundario.mb-5.tbl
          table
            caption Nota. SENA, (2026).
            thead
              tr
                th.bg-color-7 KPI
                th.bg-color-7 Fórmula
                th.bg-color-7 Interpretación
                th.bg-color-7 Ejemplo aplicado al sistema moda
            tbody
              tr.bg-color-white
                td <b>Tasa de conversión</b>
                td Conversiones / Visitas x 100
                td Indica qué porcentaje de usuarios que visitan el sitio web realizan una acción deseada, como una compra o registro. Permite evaluar la eficacia del embudo de ventas y la capacidad del sitio para transformar tráfico en clientes.
                td Una tienda <em>online</em> de sneakers recibe 5.000 visitas y genera 200 compras, logrando una conversión del 4 %.
              tr.bg-color-8
                td <b><em>Engagement rate</em></b>
                td Interacciones / Alcance x 100
                td Mide el nivel de interacción de la audiencia con el contenido publicado. Permite evaluar la relevancia y el interés que generan las publicaciones en redes sociales.
                td Un <em>reel</em> de <em>outfits</em> urbanos alcanza 10.000 personas y recibe 800 interacciones, generando un <em>engagement</em> del 8 %.
              tr.bg-color-white
                td <b>ROAS</b>
                td Ingresos / inversión publicitaria
                td Evalúa el retorno económico generado por cada unidad monetaria invertida en publicidad digital. Permite determinar si una campaña es rentable o requiere optimización.
                td Una marca invierte $2.000 en anuncios para promocionar su colección y genera $8.000 en ventas, obteniendo un ROAS de 4.
              tr.bg-color-8
                td <b>CTR</b>
                td Clics / Impresiones x 100
                td Mide el porcentaje de personas que hacen clic en un anuncio después de verlo. Permite analizar el nivel de atractivo del contenido creativo y la efectividad del mensaje publicitario.
                td Un anuncio de la nueva colección obtiene 1.200 clics sobre 40.000 impresiones, logrando un CTR del 3 %.
              tr.bg-color-white
                td <b>CPA (Costo por adquisición)</b>
                td Inversión publicitaria / número de conversiones
                td Determina cuánto cuesta adquirir un cliente o lograr una venta. Permite evaluar la eficiencia de la inversión publicitaria.
                td Una marca invierte $1.500 en anuncios y genera 75 ventas, obteniendo un CPA de $20 por cliente.
              tr.bg-color-8
                td <b>Tasa de abandono del carrito</b>
                td Carritos abandonados / carritos creados × 100
                td Indica el porcentaje de usuarios que agregan productos al carrito, pero no finalizan la compra. Permite identificar problemas en el proceso de compra o en la experiencia del usuario.
                td De 500 carritos creados en una tienda de ropa, 300 no finalizan la compra, generando un 60 % de abandono.
              tr.bg-color-white
                td <b>CPC (Costo por clic)</b>
                td Inversión publicitaria / número de clics
                td Indica cuánto cuesta generar tráfico hacia el sitio web a través de anuncios. Permite evaluar la eficiencia de las campañas de pauta digital.
                td Una campaña en <em>Instagram Ads</em> invierte $600 y genera 3.000 clics al <em>e-commerce</em>, logrando un CPC de $0.20.
    
    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-8(data-aos="fade-up") 
        .bg-color-1.px-5.py-4.tarjeta
          .row.align-items-center
            .col-lg-auto.mb-lg-0
              img.d-none.d-lg-flex(src="@/assets/curso/tema2/22.svg").mx-auto
            .col-lg
              h5.mb-0 Cita de reflexión.  
              p.mb-0 “La disciplina para medir con honestidad es la base de cualquier crecimiento sostenible.” 
    
    .bg-color-9.tarjeta.p-4.mb-5
      p.mb-0 Además de medir resultados mediante KPI, las estrategias digitales requieren comprender las características y necesidades de los diferentes públicos del mercado. En el siguiente capítulo se aborda la segmentación del mercado en el sistema moda.

</template>

<script>
export default {
  name: 'Tema2',
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
