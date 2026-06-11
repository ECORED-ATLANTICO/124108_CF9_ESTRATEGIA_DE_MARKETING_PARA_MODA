<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Comportamiento del consumidor
    
    .bg-full-width.bg-fondo-1
      .px-4.px-lg-5
        .bloque-texto-g.color-secundario.bg-color-5.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema4/1.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 En el sistema moda, comprender por qué y cómo compran los consumidores es un factor determinante para el éxito de las estrategias de <em>marketing</em> digital. 
        
        .row.justify-content-center.align-items-center.mb-5
          .col-md-8.col-lg-5.col-xl-4.mb-3.mb-xl-0
            figure
              img(src="@/assets/curso/tema4/2.png", data-aos="zoom-in")
          .col-lg-7.col-xl-5.mb-3.mb-lg-0
            .bg-color-2.p-3.p-lg-5 
              p.mb-0 El comportamiento del consumidor analiza los procesos mentales, emocionales y sociales que influyen en la decisión de compra, este conocimiento permite a las marcas diseñar propuestas de valor más relevantes y experiencias de compra más efectivas, in esta comprensión, las acciones comerciales tienden a basarse en supuestos y pierden precisión estratégica.
          .col-md-8.col-lg-5.col-xl-3.mb-3.mb-xl-0
            figure
              img(src="@/assets/curso/tema4/3.png", data-aos="zoom-in")
        
        .bg-color-9.tarjeta.p-4.mb-5
          p.mb-0 Este capítulo aborda los fundamentos conceptuales y las variables clave que explican el comportamiento del consumidor en entornos digitales aplicados al sistema moda.

        separador
        
        #t_4_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 4.1 Concepto

    img(src="@/assets/curso/tema4/4.png", alt="Imagen decorativa")
    
    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-10(data-aos="fade-up")
        p.banner-text El comportamiento del consumidor se define como el conjunto de procesos mediante los cuales los individuos seleccionan, adquieren, utilizan y evalúan productos o servicios para satisfacer sus necesidades y deseos, este concepto adquiere especial relevancia debido al componente simbólico, emocional y social que caracteriza la compra de prendas y accesorios. La moda no solo cubre una necesidad funcional, sino que comunica identidad y pertenencia. Por ello, entender al consumidor es entender el mercado.

    .row.justify-content-center.align-items-center
      .col-lg-10(data-aos="fade-up")
        .tarjeta.color-primario.bg-color-16.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-auto
              img(src="@/assets/curso/tema4/5.png")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Comportamiento del consumidor.
                  p.mb-0 Lo invitamos a ver el siguiente recurso educativo por medio del cual podrá profundizar en temática abordada, el cual corresponde a un video del Ecosistema de Recursos Educativos Digitales SENA,  explica el concepto de comportamiento del consumidor. 
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=dhSD-ndBs6g" target="_blank")
                    span Ir al video
                    i.fas.fa-link
    
    .row.mb-5.justify-content-center.align-items-center
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/6.png", data-aos="zoom-in")
      .col-lg-8
        p.mb-0(data-aos="fade-right") Desde la perspectiva analítica, el comportamiento del consumidor se caracteriza por ser dinámico, multifactorial y contextual. Es dinámico porque cambia con las tendencias; multifactorial porque intervienen variables psicológicas, sociales y culturales; y contextual porque depende del momento y del entorno de compra. Estas características obligan a las marcas a monitorear constantemente a su público objetivo, ya que las decisiones de compra en moda rara vez son puramente racionales.
    
    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-8(data-aos="fade-up") 
        .bg-color-1.px-5.py-4.tarjeta
          .row.align-items-center
            .col-lg-auto.mb-lg-0
              img.d-none.d-lg-flex(src="@/assets/curso/tema4/7.png").mx-auto
            .col-lg
              p.mb-0 <b>Clave estratégica</b>. En moda, quien entiende la emoción del cliente entiende la decisión de compra.
    
    separador
    
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.2 Variables

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/8.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-right") En términos conceptuales, las variables utilizadas para analizar el comportamiento del consumidor coinciden con aquellas empleadas en la segmentación del mercado. La diferencia radica en su función analítica: mientras que en la segmentación estas variables permiten clasificar el mercado en grupos homogéneos, en el estudio del comportamiento del consumidor se utilizan para interpretar los factores que influyen en la decisión de compra. De esta manera, las variables se convierten en herramientas que permiten comprender tanto la estructura del mercado como la lógica de consumo.
        .cajon.color-acento-contenido.p-4
          p.mb-0 Tradicionalmente, estas variables se agrupan en psicológicas, sociales, culturales y personales. 
    
    .row.justify-content-center
      .col-lg-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 7.
          span Variables que influyen en el comportamiento del consumidor
        .tabla-a.color-secundario.mb-5.tbl
          table
            caption Nota. SENA, (2026).
            thead
              tr
                th.bg-color-7 Tipo de variable
                th.bg-color-7 Qué incluye
                th.bg-color-7 Impacto en moda
                th.bg-color-7 Ejemplo aplicado al Sistema Moda
            tbody
              tr.bg-color-white
                td <b>Psicológicas</b>
                td Incluyen procesos internos del consumidor como motivación, percepción, aprendizaje, creencias y actitudes hacia productos o marcas. Estos factores determinan cómo las personas interpretan la información y qué valor simbólico asignan a la moda
                td Influyen en la preferencia de marca, la percepción de estilo y la conexión emocional con productos o colecciones. En moda, la compra muchas veces responde a aspiraciones personales y a la búsqueda de identidad
                td Un consumidor compra <em>sneakers</em> de edición limitada porque percibe la marca como innovadora y asociada a exclusividad
              tr.bg-color-8
                td <b>Sociales</b>
                td Comprenden la influencia de grupos de referencia, familia, comunidades digitales, líderes de opinión e <em>influencers</em> que orientan las decisiones de consumo. Estos grupos actúan como guías de comportamiento y validación social
                td Favorecen la difusión de tendencias y la adopción de estilos, especialmente en entornos digitales donde las recomendaciones y el contenido de creadores influyen en las preferencias del público
                td Una <em>influencer</em> de moda urbana promociona una chaqueta <em>oversize</em> y la prenda se vuelve tendencia entre jóvenes en redes sociales
              tr.bg-color-white
                td <b>Culturales</b>
                td Incluyen valores, normas sociales, tradiciones y estilos de vida compartidos por una comunidad o grupo social. Estos elementos influyen en la forma en que las personas perciben la moda y en el significado simbólico de la vestimenta
                td Contribuyen a la construcción de identidad a través del vestuario, determinando qué estilos son aceptados, valorados o asociados a determinados grupos sociales o movimientos culturales
                td Una marca lanza una colección inspirada en estética latinoamericana que conecta con consumidores que valoran la identidad cultural en la moda
              tr.bg-color-8
                td <b>Personales</b>
                td Comprenden características individuales del consumidor como edad, ocupación, ingresos, etapa del ciclo de vida, personalidad y estilo personal. Estas variables condicionan tanto la capacidad de compra como las preferencias estéticas
                td Determinan la capacidad de compra, frecuencia de adquisición y elección de categorías de producto, ya que diferentes perfiles de consumidores buscan estilos, precios y funcionalidades distintas
                td Un profesional joven con ingresos medios compra ropa de oficina moderna que combina formalidad con estilo contemporáneo

    .bg-color-1.tarjeta.px-4.mb-5
      .row.align-items-center
        .col-lg-auto.mb-lg-0
          img.d-none.d-lg-flex(src="@/assets/curso/tema4/9.svg").mx-auto
        .col-lg
          p.mb-0 <b><em>Insight</em></b>. La empresa <b>Distrito Trend</b> Lab analizó variables psicográficas y conductuales de su audiencia digital, identificando una fuerte afinidad hacia tendencias urbanas difundidas por creadores de contenido. Con base en este análisis, implementó estrategias de <em>marketing</em> de influencia y colaboraciones con microinfluencers, esta acción permitió fortalecer la identificación de la marca con su público objetivo y aumentar el tráfico hacia su <em>e-commerce</em> en 48 %.
    

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/10.png", data-aos="zoom-in")
      .col-lg-6
        .row.align-items-center.bg-color-1.px-4.tarjeta
          .col-lg-auto.mb-lg-0
            img.d-lg-flex.d-none(src="@/assets/curso/tema4/11.png").mx-auto
          .col-lg
            h5 Pregunta de aplicación
            p.mb-0 ¿Cuál variable priorizarías para una marca de moda dirigida a la Generación Z y por qué?
    
    separador
    
    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.3 Aplicabilidad

    .bloque-texto-g.color-secundario.bg-color-5.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema4/12.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La aplicabilidad del comportamiento del consumidor al <em>marketing</em> se refiere al uso estratégico de los <em>insights</em> del cliente para diseñar productos, mensajes y experiencias más relevantes, esta aplicación permite transformar la información del consumidor en decisiones comerciales concretas, sin esta traducción práctica, el conocimiento del cliente se queda en el plano teórico, por ello, la aplicabilidad conecta la investigación con la acción.

    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 1.
          span Aplicaciones del comportamiento del consumidor en <em>marketing</em>
        img.mb-2.d-none.d-sm-block(data-aos="fade-up", src="@/assets/curso/tema4/13.png", alt="La figura muestra  cómo el análisis del comportamiento del consumidor se aplica en diferentes áreas estratégicas del marketing.")
        img.mb-2.d-sm-none(data-aos="fade-up", src="@/assets/curso/tema4/13-1.png", alt="La figura muestra  cómo el análisis del comportamiento del consumidor se aplica en diferentes áreas estratégicas del marketing.")
        figcaption Fuente: SENA, 2026 
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Areas de aplicación
    
    .row.mb-5.align-items-center.justify-content-center
      .col-md-8.col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/14.png", data-aos="zoom-in")
      .col-lg-8
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg-color-5")
          div(titulo="Producto")
            p.ms-5 El comportamiento del consumidor se aplica en diferentes áreas del <em>marketing</em>, permitiendo que las decisiones empresariales se basen en las preferencias y hábitos del público. Una de las principales áreas es el producto, donde el análisis del consumidor permite diseñar propuestas basadas en <em>insights</em> del mercado, reduciendo el riesgo de lanzar productos poco relevantes. Por ejemplo, en el sistema moda, una marca puede detectar interés por prendas sostenibles y desarrollar una colección elaborada con materiales reciclados.	
          div(titulo="Comunicación")
            p.ms-5 Otra aplicación se encuentra en la comunicación, donde comprender los intereses y estilos de vida del público permite crear mensajes más personalizados y relevantes. Esto facilita una mayor conexión emocional con la audiencia. En moda, por ejemplo, una marca puede diseñar campañas en redes sociales alineadas con el estilo de vida de su segmento objetivo para aumentar el <em>engagement</em>. 	
          div(titulo="Experiencia del cliente")
            p.ms-5 El comportamiento del consumidor también se aplica en la experiencia del cliente, especialmente en la optimización del <em>customer journey</em>. Analizar cómo los usuarios interactúan con la marca permite mejorar procesos y reducir fricciones en la compra. En moda, esto puede implicar optimizar la navegación de una tienda online con filtros por talla, estilo o tendencia.
          div(titulo="Fidelización")
            p.ms-5 Finalmente, el análisis del consumidor se utiliza en estrategias de fidelización, orientadas a fortalecer la relación entre la marca y el cliente. Programas de beneficios o experiencias exclusivas pueden incentivar la recompra. Por ejemplo, una marca de moda puede ofrecer acceso anticipado a nuevas colecciones para clientes frecuentes.
    
    separador
    
    #t_4_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.4 Influencias
    
    .bloque-texto-g.color-secundario.bg-color-5.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema4/15.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La influencia de los creadores de contenido se ha convertido en uno de los factores más relevantes en la decisión de compra dentro del sistema moda. Los <em>influencers</em> actúan como intermediarios entre las marcas y las audiencias, generando confianza, validación social y aspiración estética, a través de redes sociales, estos actores interpretan tendencias, recomiendan productos y moldean la percepción del público sobre estilos, marcas y colecciones.
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema4/16.png", data-aos="zoom-in")
      .col-lg-9.order-lg-1
        .row.justify-content-center.align-items-center.mb-3
          .col-lg-4.mb-3
            figure
              img(src="@/assets/curso/tema4/17.png", data-aos="zoom-in")
          .col-lg-8
            .bg-color-2.p-4
              p.mb-0 En el entorno digital, la recomendación de un <em>influencer</em> funciona como un estímulo social que reduce la incertidumbre del consumidor, las audiencias suelen percibir a los creadores de contenido como referentes cercanos y auténticos, lo que incrementa la credibilidad del mensaje comercial. En el sistema moda, esta influencia se potencia porque la vestimenta se relaciona con identidad, pertenencia y construcción de imagen personal.
        .row.align-items-center.bg-color-3.p-4
          .col-lg-auto.mb-lg-0
            img.d-lg-flex.d-none(src="@/assets/curso/tema4/18.svg").mx-auto
          .col-lg
            p.mb-0 Las marcas que integran estrategias de <em>marketing</em> de influencia logran amplificar su alcance, acelerar la adopción de tendencias y fortalecer la conexión emocional con sus comunidades digitales. La selección adecuada de <em>influencers</em> permite dirigir mensajes a segmentos específicos y transformar la recomendación en intención de compra, por ello, la gestión estratégica de estas colaboraciones se ha convertido en una herramienta clave dentro del <em>marketing</em> digital de moda.
    
    .bg-color-1.tarjeta.px-4.mb-5
      .row.align-items-center
        .col-lg-auto.mb-lg-0
          img.d-none.d-lg-flex(src="@/assets/curso/tema4/9.svg").mx-auto
        .col-lg
          p.mb-0 <b><em>Insight</em></b>. La empresa <b>Distrito Trend Pulse</b> identificó que su audiencia joven respondía con mayor interacción a contenidos creados por <em>microinfluencers</em> especializados en moda urbana, a partir de este hallazgo, la marca estableció colaboraciones con creadores de contenido locales para presentar su nueva colección. La estrategia permitió aumentar el <em>engagement</em> en redes sociales en un 44 % y mejorar la visibilidad de la marca entre su público objetivo.
    
    .row.justify-content-center
      .col-lg-8
        .titulo-sexto.color-acento-contenido
          h5 Tabla 8.
          span Tipos de <em>influencers</em> y su impacto en el sistema moda
        .tabla-a.color-secundario.mb-5.tbl
          table
            caption Nota. SENA, (2026).
            thead
              tr
                th.bg-color-7 Tipo de <em>influencer</em>
                th.bg-color-7 Características
                th.bg-color-7 Impacto en moda
            tbody
              tr.bg-color-white
                td <b>Nano <em>influencers</em></b>
                td Comunidades pequeñas y alta cercanía con la audiencia
                td Credibilidad y recomendación auténtica
              tr.bg-color-8
                td <b><em>Microinfluencers</em></b>
                td Nichos específicos y fuerte conexión con seguidores
                td Generación de <em>engagement</em>
              tr.bg-color-white
                td <b><em>Macroinfluencers</em></b>
                td Amplia visibilidad y alcance masivo
                td Difusión de tendencias
              tr.bg-color-8
                td <b>Celebridades digitales</b>
                td Alta exposición mediática
                td Posicionamiento de marca
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/18.png", data-aos="zoom-in")
      .col-lg-6
        .row.align-items-center.bg-color-1.px-4.tarjeta
          .col-lg-auto.mb-lg-0
            img.d-lg-flex.d-none(src="@/assets/curso/tema4/11.png").mx-auto
          .col-lg
            h5 Pregunta de aplicación
            p.mb-0 ¿Por qué los <em>microinfluencers</em> suelen generar mayor <em>engagement</em> que los <em>macroinfluencers</em> en campañas de moda?
    
    separador
    
    #t_4_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.5 Características

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/19.png", data-aos="zoom-in")
      .col-lg-8
        p.mb-0(data-aos="fade-right") Las características del consumidor en el entorno digital describen los rasgos predominantes que definen su comportamiento, expectativas y formas de interacción con las marcas, en el sistema moda, el consumidor actual se distingue por ser hiperconectado, informado, exigente y orientado a la experiencia. Estas características obligan a las empresas a evolucionar constantemente sus estrategias digitales, ya que el consumidor ya no solo compra producto; compra significado.
    
    .bg-color-9.tarjeta.p-4.mb-5
      p.mb-0 Desde la perspectiva analítica, el consumidor de moda presenta comportamientos como investigación previa, sensibilidad a la reputación digital, valoración de la sostenibilidad y preferencia por experiencias omnicanal, estas características configuran un perfil más autónomo y crítico. Además, la influencia de redes sociales acelera la toma de decisiones y la difusión de tendencias, la velocidad del entorno redefine la relación marca-cliente.

    .row.justify-content-center
      .col-lg-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 9.
          span Rasgos del consumidor digital de moda
        .tabla-a.color-secundario.mb-5.tbl
          table
            caption Nota. SENA, (2026).
            thead
              tr
                th.bg-color-7 Característica
                th.bg-color-7 Descripción
                th.bg-color-7 Implicación estratégica
                th.bg-color-7 Ejemplo aplicado al sistema moda
            tbody
              tr.bg-color-white
                td <b>Hiperconectado</b>
                td El consumidor interactúa constantemente con múltiples plataformas digitales como redes sociales, tiendas <em>online</em>, <em>marketplaces</em> y aplicaciones móviles. Consulta información desde diferentes dispositivos y espera una experiencia fluida entre canales
                td Las marcas deben desarrollar estrategias omnicanal, integrando redes sociales, <em>e-commerce</em> y tiendas físicas para ofrecer una experiencia coherente en todos los puntos de contacto
                td Un cliente descubre una chaqueta en Instagram, revisa detalles en la tienda <em>online</em> y finalmente la compra desde su celular
              tr.bg-color-8
                td <b>Informado</b>
                td Antes de realizar una compra, el consumidor busca reseñas, comparaciones, opiniones de otros usuarios y contenido de creadores digitales. La disponibilidad de información influye en su percepción de confianza hacia la marca
                td Las empresas deben promover transparencia en información de producto, mostrar reseñas de clientes y ofrecer contenido claro sobre materiales, calidad o procesos de producción
                td Una marca de moda sostenible publica información sobre los materiales reciclados de sus prendas y testimonios de clientes en su sitio web
              tr.bg-color-white
                td <b>Exigente</b>
                td El consumidor evalúa no solo el producto, sino también la experiencia completa de compra, incluyendo tiempos de entrega, atención al cliente, facilidad de pago y servicio postventa
                td Las marcas deben garantizar altos estándares de calidad en la experiencia del cliente, optimizando logística, servicio y procesos digitales
                td Un comprador elige una tienda de moda <em>online</em> que ofrece envíos rápidos, devoluciones gratuitas y atención inmediata por <em>chat</em>
              tr.bg-color-8
                td <b>Experiencial</b>
                td Más allá del producto, el consumidor busca experiencias memorables que generen conexión emocional con la marca, ya sea a través de contenido interactivo, eventos o participación en comunidades digitales
                td Las empresas deben desarrollar estrategias de innovación y experiencias de marca, integrando <em>storytelling</em>, contenido creativo y activaciones digitales
                td Una marca lanza un filtro de realidad aumentada en Instagram para que los usuarios prueben virtualmente sus gafas de sol

    .cajon.color-acento-contenido.p-4.mb-5
      p.mb-0 Comprender estas características permite diseñar experiencias coherentes, personalizar la comunicación y fortalecer la fidelización, las marcas que ignoran la evolución del consumidor pierden relevancia rápidamente, la adaptación continua se convierte en requisito de supervivencia competitiva.
    
    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-8(data-aos="fade-up") 
        .bg-color-1.px-5.py-4.tarjeta
          .row.align-items-center
            .col-lg-auto.mb-lg-0
              img.d-none.d-lg-flex(src="@/assets/curso/tema4/20.png").mx-auto
            .col-lg
              h5.mb-0 Cita de reflexión.  
              p.mb-0 “Quien comprende verdaderamente a las personas actúa con responsabilidad sobre sus decisiones.” 
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema4/22.png", data-aos="zoom-in")
      .col-lg-7.order-lg-1
        .row.bg-color-15.tarjeta.py-4.align-items-center.justify-content-center
          .col-md-6.col-lg-5.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema4/21.png", data-aos="zoom-in")
          .col-lg-7
            h2(data-aos="fade-left").mb-4 ¿Sabías qué?
            p Lo invitamos a escuchar el siguiente Podcast:
            
            TarjetaAudio.color-secundario.bg-color-white.mb-3(
              texto="Pendiente por definir el titulo del podcast"
              tiempo
              :audio="require('../assets/curso/podcast/podcast1.mp3')"
            )

</template>

<script>
export default {
  name: 'Tema4',
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
