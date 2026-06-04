<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Desempeño de la red social
    
    .bloque-texto-g.color-secundario.bg-color-5.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Se abordará el concepto de desempeño de la red social en el Sistema Moda, comprendiendo cómo las métricas digitales permiten analizar el impacto de las acciones de marketing y fortalecen la toma de decisiones estratégicas en entornos digitales.
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema1/2.png", data-aos="zoom-in")
      .col-lg-9.order-lg-1
        .row.justify-content-center.align-items-center.mb-3
          .col-lg-4.mb-3
            figure
              img(src="@/assets/curso/tema1/3.png", data-aos="zoom-in")
          .col-lg-8
            .bg-color-2.p-4
              p.mb-0 Las marcas de moda que monitorean de forma constante sus métricas digitales logran identificar oportunidades de crecimiento, detectar debilidades comunicativas y fortalecer la relación con sus audiencias. En contraste, aquellas que publican sin evaluar resultados tienden a desperdiciar recursos y perder competitividad. 
        .row.align-items-center.bg-color-3.p-4
          .col-lg-auto.mb-lg-0
            img.d-lg-flex.d-none(src="@/assets/curso/tema1/4.svg").mx-auto
          .col-lg
            p.mb-0 A continuación, se exploran las métricas más utilizadas en el análisis estratégico de comunidades digitales.
    
    separador
    
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.1 Impresiones
    
    img(src="@/assets/curso/tema1/5.png", alt="Imagen decorativa")
    
    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-10(data-aos="fade-up")
        p.banner-text En la siguiente interacción se presentan diferentes escenarios de interpretación estratégica de las impresiones y las acciones recomendadas según el comportamiento del <em>engagement</em>:
    
    .row.mb-5.align-items-center.justify-content-center
      .col-md-8.col-lg-5.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/6.png", data-aos="zoom-in")
      .col-lg-7
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg-color-5")
          div(titulo="Definición de impresiones")
            p.ms-5 Las impresiones corresponden al número total de veces que un contenido es mostrado en la pantalla de los usuarios, independientemente de que exista interacción. Este indicador permite estimar el nivel de exposición de las publicaciones y evaluar la visibilidad inicial de las campañas.
          div(titulo="Interpretación de las impresiones")
            p.ms-5 Las impresiones por sí solas no garantizan impacto comercial, ya que reflejan presencia, pero no necesariamente interés, por ello, deben interpretarse junto con métricas de interacción.
          div(titulo="Características analíticas")
            p.ms-5 Las impresiones son acumulativas, pueden repetirse sobre el mismo usuario y dependen del alcance del algoritmo. Estas particularidades permiten identificar la frecuencia de exposición del mensaje.
          div(titulo="Lectura estratégica")
            p.ms-5 Un volumen alto de impresiones indica buena distribución del contenido, pero si no se acompaña de <em>engagement</em>, puede evidenciar debilidad creativa. La correcta lectura de este indicador evita conclusiones superficiales.
          div(titulo="Aplicación en el Sistema Moda")
            p.ms-5 En el Sistema Moda, las impresiones son especialmente útiles en fases de reconocimiento de marca y lanzamiento de colecciones. Permiten validar si la pauta o el contenido están logrando visibilidad suficiente.
    
    .row.justify-content-center
      .col-lg-8
        .titulo-sexto.color-acento-contenido
          h5 Tabla 1.
          span Interpretación estratégica de impresiones
        .tabla-a.color-secundario.mb-5.tbl
          table
            caption Nota. SENA, (2026).
            thead
              tr
                th.bg-color-7 Nivel de impresiones
                th.bg-color-7 Lectura estratégica
                th.bg-color-7 Acción recomendada
            tbody
              tr.bg-color-white
                td <b>Alto + alto <em>engagement</em></b>
                td Contenido efectivo
                td Escalar campaña
              tr.bg-color-8
                td <b>Alto + bajo <em>engagement</em></b>
                td Problema creativo
                td Optimizar contenido
              tr.bg-color-white
                td <b>Bajo + alto <em>engagement</em></b>
                td Buen contenido poco distribuido
                td Aumentar pauta
              tr.bg-color-8
                td <b>Bajo + bajo <em>engagement</em></b>
                td Estrategia débil
                td Replantear campaña
    
    separador
    
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.2 Me gusta
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/7.png", data-aos="zoom-in")
      .col-lg-8
        p A continuación, se aborda el indicador “me gusta” como una de las primeras señales de interacción y aceptación del contenido en redes sociales. Este indicador permite reconocer el nivel de afinidad estética y emocional que genera una publicación dentro del Sistema Moda.
        .bg-color-1.p-4
          .row.align-items-center
            .col-lg-auto.mb-lg-0
              img.d-none.d-lg-flex(src="@/assets/curso/tema1/4.svg").mx-auto
            .col-lg
              p.mb-0 Los “me gusta - likes” representan una de las formas más básicas de interacción del usuario con el contenido publicado en redes sociales.
    
    .bg-full-width.bg-fondo-slider.tarjeta.mb-5
      .p-4.p-lg-5
        SlyderA(tipo="b").bg-color-white.p-4.tarjeta
          .row.justify-content-center.align-items-center.p-3.p-lg-4
            .col-lg-4.mb-3.mb-lg-0.order-2
              figure
                img(src='@/assets/curso/tema1/8.png', alt='Imagen de acompañamiento')
            .col-lg-8.mb-4.mb-md-0.order-1
              h4 Función en el Sistema Moda
              p.mb-0 En el Sistema Moda este indicador funciona como señal inicial de aceptación estética y emocional del contenido, aunque no implica una intención de compra directa, sí refleja afinidad con la propuesta visual de la marca, por ello, constituye un termómetro temprano del atractivo del contenido.
          .row.justify-content-center.align-items-center.p-3.p-lg-4
            .col-lg-4.mb-3.mb-lg-0.order-2
              figure
                img(src='@/assets/curso/tema1/9.png', alt='Imagen de acompañamiento')
            .col-lg-8.mb-4.mb-md-0.order-1
              h4 Características analíticas
              p.mb-0 Analíticamente, los “me gusta” poseen características particulares: son rápidos de ejecutar, requieren bajo esfuerzo del usuario y suelen correlacionarse con la calidad visual de la publicación, sin embargo, su valor estratégico es limitado si se analizan de forma aislada.
          .row.justify-content-center.align-items-center.p-3.p-lg-4
            .col-lg-4.mb-3.mb-lg-0.order-2
              figure
                img(src='@/assets/curso/tema1/10.png', alt='Imagen de acompañamiento')
            .col-lg-8.mb-4.mb-md-0.order-1
              h4 Interpretación estratégica
              p.mb-0 Un alto volumen de likes sin conversiones puede indicar consumo superficial, la interpretación adecuada exige cruzar esta métrica con indicadores más profundos.
          .row.justify-content-center.align-items-center.p-3.p-lg-4
            .col-lg-4.mb-3.mb-lg-0.order-2
              figure
                img(src='@/assets/curso/tema1/11.png', alt='Imagen de acompañamiento')
            .col-lg-8.mb-4.mb-md-0.order-1
              h4 Aplicación en el Sistema Moda
              p.mb-0 En el Sistema Moda, donde la estética tiene alto peso, los “me gusta” permiten evaluar tendencias visuales, estilos de fotografía y aceptación de colecciones. Las marcas que monitorean esta métrica pueden ajustar rápidamente su línea creativa, no obstante, la gestión madura debe trascender la vanidad métrica y enfocarse en indicadores de negocio.
      
    .bg-color-1.tarjeta.px-4.mb-5
      .row.align-items-center
        .col-lg-auto.mb-lg-0
          img.d-none.d-lg-flex(src="@/assets/curso/tema1/12.svg").mx-auto
        .col-lg
          p.mb-0 <b><em>Insight</em></b>. La marca <b>Aura Visual Studio</b> observó que las fotos con modelos en contexto urbano obtenían 45 % más likes que las fotos de producto en fondo blanco. Ajustó su línea visual y mejoró su <em>engagement</em> general.
    
    p.mb-5 Reflexione sobre el valor estratégico de esta métrica dentro del análisis de redes sociales y responda la siguiente pregunta:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/13.png", data-aos="zoom-in")
      .col-lg-6
        .row.align-items-center.bg-color-1.px-4.tarjeta
          .col-lg-auto.mb-lg-0
            img.d-lg-flex.d-none(src="@/assets/curso/tema1/14.png").mx-auto
          .col-lg
            h5 Pregunta de aplicación
            p.mb-0 ¿Por qué no es recomendable evaluar el éxito de una marca solo por la cantidad de “me gusta”?
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema1/15.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        .bg-color-1.p-4
          .row.align-items-center
            .col-lg-auto.mb-lg-0
              img.d-none.d-lg-flex(src="@/assets/curso/tema1/4.svg").mx-auto
            .col-lg
              p.mb-0 Además de las interacciones rápidas como los “me gusta”, existen mecanismos de participación que reflejan un nivel mayor de involucramiento por parte de la audiencia. A continuación, se aborda el análisis de los comentarios como indicador de conversación e interacción cualitativa en redes sociales.
    
    separador
    
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.3 Comentarios

    .bloque-texto-g.color-secundario.bg-color-5.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/16.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Los comentarios representan una de las formas de interacción más valiosas dentro de las comunidades digitales, ya que permiten reconocer opiniones, percepciones y niveles de involucramiento de la audiencia frente al contenido publicado. En el Sistema Moda, esta métrica aporta información relevante para comprender la relación entre la marca y su comunidad digital.

    .cajon.color-acento-contenido.p-4.mb-5
      p.mb-0 A continuación, se presentan algunos elementos clave relacionados con la interpretación estratégica de los comentarios en redes sociales.
    
    .row.mb-5.justify-content-center.align-items-center
      .col-md-8.col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/17.png", data-aos="zoom-in")
      .col-lg-8
        TabsA.color-acento-botones
          .row.tarjeta.color-acento-botones--borde.p-4(titulo="Interacción profunda")
            .col-lg-auto.mb-lg-3
              img.d-none.d-lg-flex(src="@/assets/curso/tema1/18.png").mx-auto
            .col-lg
              h4 Interacción profunda
              p.mb-0 Los comentarios representan una forma de interacción profunda mediante la cual los usuarios expresan opiniones, preguntas o reacciones frente al contenido publicado.
          .row.tarjeta.color-acento-botones--borde.p-4(titulo="Valor estratégico en el Sistema Moda")
            .col-lg-auto.mb-lg-3
              img.d-none.d-lg-flex(src="@/assets/curso/tema1/19.png").mx-auto
            .col-lg
              h4 Valor estratégico en el Sistema Moda
              p.mb-0 En el sistema moda, esta métrica es especialmente valiosa porque revela el nivel de involucramiento cognitivo y emocional del público, a diferencia del “me gusta”, comentar exige mayor esfuerzo del usuario, por lo que su presencia indica interés significativo, de allí, que los comentarios son considerados un indicador cualitativo de engagement.
          .row.tarjeta.color-acento-botones--borde.p-4(titulo="Análisis estratégico")
            .col-lg-auto.mb-lg-3
              img.d-none.d-lg-flex(src="@/assets/curso/tema1/20.png").mx-auto
            .col-lg
              h4 Análisis estratégico
              p.mb-0 Desde el análisis estratégico, los comentarios permiten identificar percepciones del mercado, detectar objeciones de compra y recoger ideas para innovación.
          .row.tarjeta.color-acento-botones--borde.p-4(titulo="Características de los comentarios")
            .col-lg-auto.mb-lg-3
              img.d-none.d-lg-flex(src="@/assets/curso/tema1/21.png").mx-auto
            .col-lg
              h4 Características de los comentarios
              p.mb-0 Sus características principales incluyen bidireccionalidad, contenido textual y posibilidad de conversación extendida, no obstante, también implican riesgo reputacional si no se gestionan adecuadamente.
          .row.tarjeta.color-acento-botones--borde.p-4(titulo="Gestión estratégica")
            .col-lg-auto.mb-lg-3
              img.d-none.d-lg-flex(src="@/assets/curso/tema1/22.png").mx-auto
            .col-lg
              h4 Gestión estratégica
              p.mb-0 La moderación oportuna y la respuesta estratégica son fundamentales para capitalizar su valor.
          .row.tarjeta.color-acento-botones--borde.p-4(titulo="Aplicación en el Sistema Moda")
            .col-lg-auto.mb-lg-3
              img.d-none.d-lg-flex(src="@/assets/curso/tema1/23.png").mx-auto
            .col-lg
              h4 Aplicación en el Sistema Moda
              p.mb-0 En el sistema moda, la gestión de comentarios debe ser ágil y coherente con el tono de marca, responder preguntas sobre tallas, disponibilidad o materiales puede acelerar la decisión de compra, ignorar comentarios, en cambio, debilita la percepción de cercanía, las marcas que convierten los comentarios en conversación construyen comunidades más sólidas.

    .bg-color-1.tarjeta.px-4.mb-5
      .row.align-items-center
        .col-lg-auto.mb-lg-0
          img.d-none.d-lg-flex(src="@/assets/curso/tema1/12.svg").mx-auto
        .col-lg
          p.mb-0 <b><em>Insight</em></b>. La marca <b>Distrito Denim Co</b>. implementó un protocolo de respuesta en menos de dos horas para comentarios en Instagram, esta práctica incrementó la confianza del público y elevó la tasa de conversión en 18 %.

    p.mb-5 La siguiente figura presenta diferentes escenarios relacionados con el comportamiento de los comentarios en redes sociales y las acciones estratégicas que pueden implementarse según el tipo de interacción generada.

    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 1.
          span Lectura estratégica de comentarios
        img.mb-2.d-none.d-sm-block(data-aos="fade-up", src="@/assets/curso/tema1/24.svg", alt="la figura muestra la lectura estratégica de los comentarios.")
        img.mb-2.d-sm-none(data-aos="fade-up", src="@/assets/curso/tema1/24-1.svg", alt="la figura muestra la lectura estratégica de los comentarios.")
        figcaption Fuente: SENA, 2026

    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-10(data-aos="fade-up") 
        .bg-color-1.px-5.py-4.tarjeta
          .row.align-items-center
            .col-lg-auto.mb-lg-0
              img.d-none.d-lg-flex(src="@/assets/curso/tema1/25.png").mx-auto
            .col-lg
              p.mb-0 <b>Clave estratégica</b>.  Los comentarios no se cuentan; se gestionan estratégicamente.
    
    .bg-color-9.tarjeta.p-4.mb-5
      p.mb-0 Además de las publicaciones permanentes y las conversaciones generadas mediante comentarios, las redes sociales cuentan con formatos de contenido efímero que permiten fortalecer la cercanía y la interacción inmediata con la audiencia. A continuación, se explora el uso estratégico de las historias dentro del Sistema Moda.
  
    separador
    
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.4 Historias
    
    img(src="@/assets/curso/tema1/26.png", alt="Imagen decorativa")
    
    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-10(data-aos="fade-up")
        p.banner-text Las historias o <em>stories</em> permiten compartir contenido efímero y dinámico que fortalece la cercanía con la audiencia. En el Sistema Moda, este formato favorece la interacción inmediata y la comunicación espontánea con la comunidad digital.
    
    .row.mb-5.justify-content-center.align-items-center
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/27.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-right") Las historias (stories) son formatos de contenido efímero que permanecen visibles por tiempo limitado y permiten una comunicación más espontánea y cercana. En el Sistema Moda, las historias se han convertido en una herramienta clave para mostrar el detrás de cámaras, lanzamientos rápidos y promociones flash, su naturaleza temporal genera sensación de urgencia y exclusividad, por ello, constituyen un formato de alto valor táctico.
    
        .cajon.color-acento-contenido.p-4
          p.mb-0 A continuación, se presentan algunos elementos relacionados con el análisis estratégico de las historias en redes sociales.
    
    .row.justify-content-center.mb-5
      .col-xl-4.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema1/28.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-3 Métricas específicas
            p.mb-0 Analíticamente, las historias se caracterizan por métricas específicas como visualizaciones, tasa de finalización, respuestas y clics en enlaces, estas variables permiten evaluar el nivel de atención del usuario en tiempo real.
      .col-xl-4.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema1/29.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-3 Consumo rápido e interacción
            p.mb-0 A diferencia del <em>feed</em> tradicional, las <em>stories</em> favorecen el consumo rápido y la interacción directa, sin embargo, requieren frecuencia y creatividad constante para mantener relevancia.
      .col-xl-4.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema1/30.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-3 Aplicación en el Sistema Moda
            p.mb-0 En el Sistema Moda, las historias funcionan especialmente bien para humanizar la marca y mostrar procesos creativos, contenidos como pruebas de vestuario, empaques o encuestas rápidas suelen generar alta interacción. La gestión estratégica de <em>stories</em> permite complementar el contenido del feed y fortalecer la relación con la audiencia.
    
    .bg-color-1.tarjeta.px-4.mb-5
      .row.align-items-center
        .col-lg-auto.mb-lg-0
          img.d-none.d-lg-flex(src="@/assets/curso/tema1/12.svg").mx-auto
        .col-lg
          p.mb-0 <b><em>Insight</em></b>. La marca <b>Terracota Studio</b> implementó historias diarias mostrando el proceso de confección. En tres meses aumentó la tasa de visualización completa en 47 % y fortaleció la confianza del público.

    .bloque-texto-g.color-secundario.bg-color-5.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/31.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Explore los siguientes indicadores utilizados para evaluar el desempeño de las historias en redes sociales y su aplicación estratégica dentro del Sistema Moda.
    

    .row.justify-content-center.mb-5
      .col-lg-10
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg-color-5")
          div(titulo="Visualizaciones")
            p.ms-5 Número total de veces que la historia fue vista por usuarios. Permite identificar el alcance inmediato y la capacidad de la marca para captar atención en el primer impacto. También ayuda a detectar los mejores horarios de publicación.
            p.ms-5.mb-0 <b>Interés inicial</b>: se utiliza para evaluar la capacidad de atracción del contenido, optimizar horarios de publicación y comparar el rendimiento entre diferentes tipos de historias (producto, lifestyle, promoción). En moda, ayuda a validar qué formatos generan mayor visibilidad.
          div(titulo="Tasa de finalización")
            p.ms-5 Porcentaje de usuarios que ven la secuencia completa de historias respecto a quienes la iniciaron. Refleja el nivel de retención y la coherencia narrativa del contenido secuencial.
            p.ms-5.mb-0 <b>Calidad narrativa</b>: permite identificar si la historia mantiene la atención del público. Sirve para ajustar duración, ritmo visual y orden del storytelling. En el Sistema Moda, ayuda a optimizar secuencias de lanzamiento, backstage o storytelling de colección.
          div(titulo="Respuestas")
            p.ms-5 Cantidad de mensajes directos generados a partir de la historia (reacciones, respuestas a stickers, preguntas). Mide la interacción conversacional y el nivel de cercanía con la audiencia.
            p.ms-5.p.mb-0 <b>Conversación</b>: se utiliza para activar comunidad, validar intereses y generar relaciones más cercanas. En moda, es clave para recibir feedback sobre productos, tallas o preferencias de estilo. También nutre leads cualificados.
          div(titulo="Clics")
            p.ms-5 Número de veces que los usuarios hacen clic en enlaces, stickers de producto o llamados a la acción dentro de la historia. Indica intención activa del usuario.
            p.mb-0.ms-5 <b>Conversión</b>: permite evaluar la efectividad comercial de la historia, optimizar CTAs y medir el tránsito hacia e-commerce o landing pages. En el Sistema Moda, es fundamental para medir impacto de drops, promociones y lanzamientos.
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/32.png", data-aos="zoom-in")
      .col-lg-6
        .row.align-items-center.bg-color-1.px-4.tarjeta
          .col-lg-auto.mb-lg-0
            img.d-lg-flex.d-none(src="@/assets/curso/tema1/14.png").mx-auto
          .col-lg
            h5 Pregunta de aplicación
            p.mb-0 ¿Qué tipo de contenido funcionaría mejor en historias para una marca de moda emergente?
    
    .bg-color-9.tarjeta.p-4.mb-5
      p.mb-0 Además de las interacciones inmediatas que generan las historias, existen indicadores que permiten identificar niveles de fidelización y permanencia de la audiencia en los canales digitales. A continuación, se aborda el papel estratégico de los suscriptores dentro de las comunidades digitales.
  
    separador
    
    #t_1_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.5 Suscriptores
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/33.png", data-aos="zoom-in")
      .col-lg-8
        p Los suscriptores representan una audiencia que ha decidido mantener una relación continua con la marca mediante canales digitales especializados. En el Sistema Moda, este indicador permite reconocer niveles de fidelización y compromiso sostenido con el contenido publicado.
        .bg-color-1.p-4
          .row.align-items-center
            .col-lg-auto.mb-lg-0
              img.d-none.d-lg-flex(src="@/assets/curso/tema1/4.svg").mx-auto
            .col-lg
              p.mb-0 A continuación, se presentan algunos aspectos relacionados con el crecimiento y la gestión estratégica de suscriptores.
    
    TabsC.color-acento-contenido(data-aos="zoom-in").mb-5
      .p-3.p-md-4(titulo="Concepto")
        .row.justify-content-center.align-items-center
          .col-lg-7.mb-4.mb-md-0
            h4 Concepto
            p Los suscriptores representan el número de usuarios que han decidido seguir voluntariamente el contenido de una marca en plataformas como YouTube, <em>newsletters</em> o canales especializados.
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src='@/assets/curso/tema1/34.png', alt='Imagen de acompañamiento')
      .p-3.p-md-4(titulo="Valor estratégico")
        .row.justify-content-center.align-items-center
          .col-lg-7.mb-4.mb-md-0
            h4 Valor estratégico
            p En el Sistema Moda, este indicador refleja el interés sostenido del público por recibir comunicaciones recurrentes, a diferencia de métricas de interacción puntual, los suscriptores evidencian compromiso de mediano y largo plazo, por ello, constituyen un activo estratégico de audiencia propia.
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src='@/assets/curso/tema1/35.png', alt='Imagen de acompañamiento')
      .p-3.p-md-4(titulo="Características técnicas")
        .row.justify-content-center.align-items-center
          .col-lg-7.mb-4.mb-md-0
            h4 Características técnicas
            p Desde el análisis técnico, el crecimiento de suscriptores depende de la propuesta de valor, la frecuencia de publicación y la consistencia de la marca.
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src='@/assets/curso/tema1/36.png', alt='Imagen de acompañamiento')
      .p-3.p-md-4(titulo="Lectura analítica")
        .row.justify-content-center.align-items-center
          .col-lg-7.mb-4.mb-md-0
            h4 Lectura analítica
            p Sus características incluyen acumulación progresiva, dependencia de la relevancia del contenido y relación directa con la fidelización, no obstante, un número alto de suscriptores sin interacción puede indicar audiencia pasiva, de allí que la calidad del suscriptor es tan importante como la cantidad.
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src='@/assets/curso/tema1/37.png', alt='Imagen de acompañamiento')
      .p-3.p-md-4(titulo="Aplicación en el Sistema Moda")
        .row.justify-content-center.align-items-center
          .col-lg-7.mb-4.mb-md-0
            h4 Aplicación en el Sistema Moda
            p En el Sistema Moda, la gestión de suscriptores permite construir canales propios menos dependientes del algoritmo, estrategias como contenido exclusivo, <em>newsletters</em> de tendencias o lanzamientos anticipados suelen impulsar este indicador, las marcas que nutren su base de suscriptores fortalecen su autonomía digital.
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src='@/assets/curso/tema1/38.png', alt='Imagen de acompañamiento')

    .bg-color-1.tarjeta.px-4.mb-5
      .row.align-items-center
        .col-lg-auto.mb-lg-0
          img.d-none.d-lg-flex(src="@/assets/curso/tema1/12.svg").mx-auto
        .col-lg
          p.mb-0 <b><em>Insight</em></b>. La marca <b>Nova Moda Channel</b> lanzó un boletín semanal de tendencias y logró aumentar sus suscriptores en 52 % en seis meses, generando además un incremento en ventas recurrentes.
    
    p.mb-5 Conozca escenarios relacionados con el crecimiento de suscriptores y su interpretación estratégica dentro de las comunidades digitales.

    .row.justify-content-center
      .col-lg-5.mb-3.mb-lg-0
        div.position-relative
          h5.bg-color-30.text-white.py-2.px-3.d-inline.position-absolute.pst-pestana Crecimiento sostenido
          .bg-color-15.mb-5.p-4.tarjeta.h-100.d-flex
            .row.align-items-center
              .col-lg-auto.mb-3.mb-lg-0
                img.d-none.d-lg-flex(src="@/assets/curso/tema1/39.png").mx-auto
              .col-lg
                p.mb-0 Significa que tiene un contenido relevante, por lo que hay que mantener estrategia.

        div.position-relative
          h5.bg-color-30.text-white.py-2.px-3.d-inline.position-absolute.pst-pestana Alto volumen sin interacción
          .bg-color-15.mb-5.p-4.tarjeta.h-100.d-flex
            .row.align-items-center
              .col-lg-auto.mb-3.mb-lg-0
                img.d-none.d-lg-flex(src="@/assets/curso/tema1/40.png").mx-auto
              .col-lg
                p.mb-0 Significa que se tiene una audiencia pasiva, para lo cual se debe activar <em>engagement.</em>

      .col-lg-5
        div.position-relative
          h5.bg-color-31.text-white.py-2.px-3.d-inline.position-absolute.pst-pestana Estancamiento
          .bg-color-2.mb-5.p-4.tarjeta.h-100.d-flex
            .row.align-items-center
              .col-lg-auto.mb-3.mb-lg-0
                img.d-none.d-lg-flex(src="@/assets/curso/tema1/41.png").mx-auto
              .col-lg
                p.mb-0 Significa que hay pérdida de interés, por lo que hay que innovar contenido.
        div.position-relative
          h5.bg-color-31.text-white.py-2.px-3.d-inline.position-absolute.pst-pestana Caída de suscriptores
          .bg-color-2.mb-5.p-4.tarjeta.h-100.d-flex
            .row.align-items-center
              .col-lg-auto.mb-3.mb-lg-0
                img.d-none.d-lg-flex(src="@/assets/curso/tema1/42.png").mx-auto
              .col-lg
                p.mb-0 Significa que hay un desajuste entre lo que la comunidad espera y lo que la marca está entregando.

    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-10(data-aos="fade-up") 
        .bg-color-1.px-5.py-4.tarjeta
          .row.align-items-center
            .col-lg-auto.mb-lg-0
              img.d-none.d-lg-flex(src="@/assets/curso/tema1/25.png").mx-auto
            .col-lg
              p.mb-0 <b>Clave estratégica</b>.  La comunidad prestada (algoritmo) cambia; la base de suscriptores propia permanece.
    
    .bg-color-9.tarjeta.p-4.mb-5
      p.mb-0 Además de los suscriptores, las redes sociales cuentan con indicadores relacionados con el tamaño y crecimiento de la audiencia visible de una marca. En el siguiente apartado se aborda el papel de los seguidores dentro de las comunidades digitales.
  
    separador
    
    #t_1_6.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.6 Seguidores
    
    .bloque-texto-g.color-secundario.bg-color-5.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/46.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Los seguidores representan uno de los indicadores más visibles dentro de las redes sociales y permiten reconocer el tamaño potencial de la audiencia de una marca. En el Sistema Moda, esta métrica aporta información relacionada con el crecimiento de comunidad y el nivel de atracción que genera el contenido digital.
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema1/47.png", data-aos="zoom-in")
      .col-lg-9.order-lg-1
        .row.justify-content-center.align-items-center.mb-3
          .col-lg-4.mb-3
            figure
              img(src="@/assets/curso/tema1/48.png", data-aos="zoom-in")
          .col-lg-8
            .bg-color-2.p-4
              p.mb-0 Los seguidores representan el número de usuarios que han decidido vincularse a la cuenta de una marca en redes sociales para recibir sus publicaciones. En el Sistema Moda, este indicador refleja el tamaño potencial de la audiencia propia y la capacidad de atracción de la marca, no obstante, un alto número de seguidores no garantiza impacto comercial si no existe interacción real, por los cual, la lectura estratégica de esta métrica debe ir más allá del volumen.
        .row.align-items-center.bg-color-3.p-4
          .col-lg-auto.mb-lg-0
            img.d-lg-flex.d-none(src="@/assets/curso/tema1/4.svg").mx-auto
          .col-lg
            p.mb-0 Desde el análisis técnico, los seguidores presentan características acumulativas, dependencia del algoritmo y variabilidad según la calidad del contenido, su crecimiento puede originarse en campañas orgánicas, pauta digital o recomendaciones de la comunidad; la compra artificial de seguidores genera distorsión analítica y debilita la credibilidad de la marca, en conclusión, la calidad del seguidor —activo y alineado— es más valiosa que la cantidad.
    
    .bg-color-9.tarjeta.p-4.mb-5
      p.mb-0 En el Sistema Moda, el crecimiento saludable de seguidores se asocia con propuestas visuales coherentes, <em>storytelling</em> consistente y valor percibido por la audiencia, las marcas que priorizan la conexión auténtica construyen comunidades más sostenibles, el objetivo estratégico no es solo crecer, sino crecer con el público correcto.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/49.png", data-aos="zoom-in")
      .col-lg-8
        p El siguiente insight presenta un ejemplo relacionado con el crecimiento estratégico de seguidores y la importancia de construir comunidades alineadas con el propósito de marca.
        .bg-color-1.tarjeta.px-4
          .row.align-items-center
            .col-lg-auto.mb-lg-0
              img.d-none.d-lg-flex(src="@/assets/curso/tema1/12.svg").mx-auto
            .col-lg
              p.mb-0 <b><em>Insight</em></b>. La marca <b>Nova Moda Channel</b> lanzó un boletín semanal de tendencias y logró aumentar sus suscriptores en 52 % en seis meses, generando además un incremento en ventas recurrentes.
    
    .row.justify-content-center
      .col-lg-10
        .bg-color-32.tarjeta.p-3.mb-5
          p.mb-0.text-white La siguiente figura reúne diferentes interpretaciones relacionadas con el crecimiento y comportamiento de seguidores en redes sociales. 

    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-12
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 2.
          span Lectura estratégica de seguidores
        img.mb-2.d-none.d-sm-block(data-aos="fade-up", src="@/assets/curso/tema1/50.png", alt="la figura muestra la Lectura estratégica de seguidores.")
        img.mb-2.d-sm-none(data-aos="fade-up", src="@/assets/curso/tema1/50-1.png", alt="la figura muestra la Lectura estratégica de seguidores.")
        figcaption Fuente: SENA, 2026   

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/51.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-right") La siguiente clave estratégica resalta la importancia de fortalecer audiencias propias en entornos digitales.
        .row.justify-content-center.align-items-center.z-2.mb-3
          .col-lg-12(data-aos="fade-up") 
            .bg-color-1.px-5.py-4.tarjeta
              .row.align-items-center
                .col-lg-auto.mb-lg-0
                  img.d-none.d-lg-flex(src="@/assets/curso/tema1/25.png").mx-auto
                .col-lg
                  p.mb-0 <b>Clave estratégica</b>.  No se trata de tener más seguidores, sino de tener los correctos.
        .cajon.color-acento-contenido.p-4
          p.mb-0 Además del tamaño de la audiencia, las redes sociales permiten analizar cuántas personas únicas logran ser impactadas por el contenido publicado. En el siguiente apartado se desarrolla el alcance como indicador de visibilidad efectiva en entornos digitales.

    separador
    
    #t_1_7.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.7 Alcances
    
    img(src="@/assets/curso/tema1/52.png", alt="Imagen decorativa")
    
    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-10(data-aos="fade-up")
        p.banner-text El alcance permite identificar la cantidad de usuarios únicos que han visualizado el contenido de una marca en un periodo determinado. En el Sistema Moda, esta métrica facilita comprender la capacidad de difusión y cobertura real de las publicaciones digitales.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/53.png", data-aos="zoom-in")
      .col-lg-8
        p El alcance corresponde al número de usuarios únicos que han visto el contenido de una marca durante un periodo determinado. En el sistema moda, este indicador permite evaluar la amplitud real de la exposición del mensaje, a diferencia de las impresiones, el alcance evita la duplicación de usuarios y ofrece una lectura más precisa de la cobertura, por ello, constituye una métrica clave para evaluar visibilidad efectiva.
        p Analíticamente, el alcance puede clasificarse en alcance orgánico, alcance pagado y alcance viral. 
        .bg-color-1.p-4
          .row.align-items-center
            .col-lg-auto.mb-lg-0
              img.d-none.d-lg-flex(src="@/assets/curso/tema1/4.svg").mx-auto
            .col-lg
              p.mb-0 La siguiente tabla presenta los principales tipos de alcance utilizados en redes sociales y su aplicación estratégica dentro del Sistema Moda.
    
    .row.justify-content-center
      .col-lg-8
        .titulo-sexto.color-acento-contenido
          h5 Tabla 2.
          span Tipos de alcance en redes sociales
        .tabla-a.color-secundario.mb-5.tbl
          table
            caption Nota. SENA, (2026).
            thead
              tr
                th.bg-color-7 Tipo de alcance
                th.bg-color-7 Origen
                th.bg-color-7 Uso estratégico
            tbody
              tr.bg-color-white
                td <b>Orgánico</b>
                td Se genera de manera natural a partir de la distribución algorítmica y la interacción genuina de la audiencia sin inversión publicitaria. Depende de la relevancia del contenido, la afinidad con la comunidad y la consistencia editorial de la marca
                td Validación de contenido: permite comprobar qué formatos, mensajes y propuestas visuales conectan realmente con la audiencia. En el Sistema Moda, se usa para testear colecciones, estilos creativos y narrativa de marca antes de invertir en pauta
              tr.bg-color-8
                td <b>Pagado</b>
                td Proviene de la inversión en publicidad digital dentro de plataformas como Meta Ads o TikTok Ads. La visibilidad se amplifica mediante segmentación definida, presupuesto y optimización de campañas
                td Escalamiento: se utiliza para ampliar el alcance de contenidos que ya demostraron tracción orgánica, acelerar lanzamientos y captar nuevas audiencias. En moda, es clave para impulsar drops, temporadas y campañas comerciales
              tr.bg-color-white
                td <b>Viral</b>
                td Surge cuando los propios usuarios comparten el contenido de forma masiva, generando una propagación exponencial no controlada directamente por la marca. Se apoya en alto <em>engagement</em>, valor emocional y efecto red
                td Amplificación: permite multiplicar la visibilidad y el posicionamiento de la marca con bajo costo marginal. En el Sistema Moda, se aprovecha para potenciar tendencias, retos de estilo y contenidos altamente compartibles

    .bloque-texto-g.color-secundario.bg-color-5.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/54.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La interpretación del alcance debe realizarse de manera articulada con otras métricas de interacción y conversión, ya que la visibilidad por sí sola no garantiza resultados estratégicos.
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema1/55.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p En el sistema moda, el alcance es especialmente relevante en fases de posicionamiento y lanzamiento de colecciones, sin embargo, un alcance alto sin interacción puede indicar baja relevancia del contenido, la gestión estratégica exige analizar el alcance junto con métricas de <em>engagement</em> y conversión para obtener una visión completa.
        .bg-color-1.tarjeta.px-4
          .row.align-items-center
            .col-lg-auto.mb-lg-0
              img.d-none.d-lg-flex(src="@/assets/curso/tema1/12.svg").mx-auto
            .col-lg
              p.mb-0 <b><em>Insight</em></b>. La marca <b>Distrito Moda Lab</b> detectó que su alcance orgánico era bajo, pero el <em>engagement</em> alto, decidió invertir en pauta para amplificar contenido ya validado, logrando aumentar ventas en 29 %.
    
    .bg-color-9.tarjeta.p-4.mb-5
      p.mb-0 Además de analizar indicadores específicos como alcance, seguidores o <em>engagement</em>, las marcas requieren integrar distintas métricas para evaluar de manera estructurada el desempeño de sus redes sociales. En el siguiente apartado se presentan algunos indicadores y estadísticas utilizados en analítica digital.

    separador
    
    #t_1_8.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.8 Indicadores
    
    p Los indicadores permiten interpretar el desempeño de las redes sociales a partir de diferentes métricas y estadísticas utilizadas en analítica digital.

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/56.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-right") Los indicadores y estadísticas integran el conjunto de métricas que permiten evaluar de forma sistemática el desempeño de una red social. En el Sistema Moda, este análisis transforma los datos en información útil para la toma de decisiones, sin un sistema de indicadores, la gestión digital se vuelve intuitiva y reactiva, por ello, la analítica estructurada constituye la base del marketing basado en datos.
    
        .cajon.color-acento-contenido.p-4
          p.mb-0 La siguiente figura presenta algunos tipos de métricas digitales utilizadas en redes sociales.
    
    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-12
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 3.
          span Tipos de métricas digitales.
        img.mb-2.d-none.d-sm-block(data-aos="fade-up", src="@/assets/curso/tema1/43.svg", alt="la figura nos presenta los tipos de métricas digitales.")
        img.mb-2.d-sm-none(data-aos="fade-up", src="@/assets/curso/tema1/44.svg", alt="la figura nos presenta los tipos de métricas digitales.")
        figcaption Fuente: SENA, 2026

    .bloque-texto-g.color-secundario.bg-color-5.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/57.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La interpretación conjunta de indicadores facilita la toma de decisiones estratégicas en entornos digitales.
    
    .row.mb-5.justify-content-center.align-items-center
      .col-lg-4.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema1/58.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        .cajon.color-acento-contenido.p-4(data-aos="fade-right")
          p.mb-0 En el sistema moda, la interpretación cruzada de indicadores permite optimizar creatividades, segmentaciones y presupuestos, las marcas que desarrollan cultura analítica reaccionan con mayor rapidez a los cambios del mercado digital, la estadística no reemplaza la creatividad, pero la orienta estratégicamente.
    
    p La siguiente tabla reúne algunas métricas utilizadas para evaluar interacción, conversión y comportamiento de audiencia en redes sociales.

    .row.justify-content-center
      .col-lg-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 3.
          span Indicadores - métricas en redes sociales
        .tabla-a.color-secundario.mb-5.tbl
          table
            caption Nota. SENA, (2026).
            thead
              tr
                th.bg-color-7 Nombre de la métrica
                th.bg-color-7 Descripción
                th.bg-color-7 Ejemplo aplicado al sistema moda
                th.bg-color-7 Tipo
            tbody
              tr.bg-color-white
                td <b>CTR (<em>Click Through Rate</em>)</b>
                td Porcentaje de personas que hicieron click en un enlace o anuncio respecto al número de personas que lo vieron. Permite evaluar la efectividad del contenido o del llamado a la acción
                td Un anuncio de la nueva colección tuvo 10.000 visualizaciones y 300 clics al e-commerce, logrando un CTR del 3 %
                td Conversión
              tr.bg-color-8
                td <b>Engagement por publicación</b>
                td Promedio de interacciones que recibe cada publicación individual dentro de un periodo determinado. Permite identificar contenidos de alto rendimiento
                td Un reel de outfits urbanos genera 1.200 interacciones, superando el promedio de publicaciones de la marca
                td <em>Engagement</em>
              tr.bg-color-white
                td <b>Interacciones totales</b>
                td Suma de acciones realizadas por los usuarios sobre un contenido: likes, comentarios, guardados y compartidos. Refleja el nivel general de participación
                td Un carrusel de la nueva colección recibe 2.500 interacciones entre likes, comentarios y guardados
                td <em>Engagement</em>
              tr.bg-color-8
                td <b>Ratio de comentarios</b>
                td Relación entre la cantidad de comentarios y el número total de visualizaciones o seguidores. Permite medir la profundidad de conversación generada por el contenido
                td Un video de styling recibe 120 comentarios sobre 5.000 visualizaciones, indicando alta participación
                td <em>Engagement</em>
              tr.bg-color-white
                td <b>Ratio de guardados</b>
                td Proporción de usuarios que guardan una publicación para verla más tarde. Indica alto valor o utilidad del contenido
                td Un post con “10 ideas de outfits con blazer” es guardado por 350 usuarios
                td <em>Engagement</em>
              tr.bg-color-8
                td <b>Tasa de abandono</b>
                td Porcentaje de usuarios que dejan de seguir la cuenta en un periodo específico. Permite evaluar la pérdida de audiencia
                td Durante una semana, una marca pierde 120 seguidores tras publicar contenido excesivamente promocional
                td Audiencia
              tr.bg-color-white
                td <b>Tasa de click en perfil</b>
                td Porcentaje de usuarios que visitan el perfil de la marca después de ver una publicación o anuncio. Indica interés por conocer más sobre la marca
                td Un reel de lanzamiento lleva a que 800 usuarios visiten el perfil de la marca de moda
                td Consideración
              tr.bg-color-8
                td <b>Tasa de interacción en historias</b>
                td Proporción de usuarios que responden, reaccionan o interactúan con historias respecto al número de visualizaciones
                td Una secuencia de historias sobre un nuevo drop genera 150 respuestas de 1.500 visualizaciones
                td <em>Engagement</em>
              tr.bg-color-white
                td <b>Tráfico social al sitio web</b>
                td Cantidad de visitas al sitio web provenientes de redes sociales. Permite medir la capacidad de las plataformas para dirigir usuarios hacia el e-commerce
                td Instagram genera 1.200 visitas al e-commerce de una marca de sneakers en un día
                td Conversión
              tr.bg-color-8
                td <b>Usuarios recurrentes</b>
                td Número de personas que interactúan o visitan repetidamente los contenidos de la marca en un periodo determinado. Indica fidelización y comunidad activa
                td 300 usuarios interactúan semanalmente con los contenidos de una marca de moda sostenible
                td Audiencia
    
    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-10(data-aos="fade-up") 
        .bg-color-1.px-5.py-4.tarjeta
          .row.align-items-center
            .col-lg-auto.mb-lg-0
              img.d-none.d-lg-flex(src="@/assets/curso/tema1/25.png").mx-auto
            .col-lg
              p.mb-0 <b>Clave estratégica</b>. Los datos no son el fin; son la brújula de la estrategia.
    
    .bg-color-9.tarjeta.p-4.mb-5
      p.mb-0 Además de interpretar métricas e indicadores, las marcas requieren herramientas que permitan recopilar, organizar y analizar información de manera estratégica. En el siguiente apartado se aborda la analítica de datos aplicada a entornos digitales.

    separador
    
    #t_1_9.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.9 Analítica de datos
    
    img(src="@/assets/curso/tema1/59.png", alt="Imagen decorativa")
    
    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-10(data-aos="fade-up")
        p.banner-text La analítica de datos corresponde al proceso sistemático de recopilación, procesamiento e interpretación de la información generada por las interacciones digitales usando diferentes herramientas, en el sistema moda, esta práctica permite transformar métricas dispersas en conocimiento accionable para la toma de decisiones. Sin analítica estructurada, las marcas operan por intuición; con analítica, actúan con evidencia, por ello, la gestión basada en datos se ha convertido en un factor crítico de competitividad.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema1/60.png", data-aos="zoom-in")
      .col-lg-9.order-lg-1
        .row.justify-content-center.align-items-center.mb-3
          .col-lg-4.mb-3
            figure
              img(src="@/assets/curso/tema1/61.png", data-aos="zoom-in")
          .col-lg-8
            .bg-color-2.p-4
              p.mb-0 La elección de la herramienta adecuada para el análisis no solo depende de las funcionalidades que ofrece, sino también de la alineación con los objetivos específicos de la estrategia digital. Por ejemplo, si el enfoque está en mejorar la interacción con el público, será prioritario utilizar plataformas que midan el <em>engagement</em> en profundidad, mientras que, para maximizar conversiones, se optará por soluciones que analicen el flujo de ventas y la efectividad de los puntos de contacto. 
        .row.align-items-center.bg-color-3.p-4
          .col-lg-auto.mb-lg-0
            img.d-lg-flex.d-none(src="@/assets/curso/tema1/4.svg").mx-auto
          .col-lg
            p.mb-0 En este contexto, es fundamental comprender qué tipo de datos se desea analizar y cómo estos pueden traducirse en <em>insights</em> accionables que potencien el rendimiento y la competitividad en el entorno digital.
    
    .bg-color-9.tarjeta.p-4.mb-5
      p.mb-0 Las herramientas de analítica web cuentan con diferentes características que facilitan el análisis de información digital.

    .row.justify-content-center.mb-5
      .col-xl-3.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema1/62.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-3 Automatización
            p.mb-0 Recopilan datos en tiempo real sin intervención manual.
      .col-xl-3.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema1/63.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-3 Visualización de datos
            p.mb-0 Generan gráficos y reportes comprensibles.
      .col-xl-3.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema1/64.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-3 Segmentación de audiencia
            p.mb-0 Permiten identificar el comportamiento de distintos perfiles de usuarios.
      .col-xl-3.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema1/65.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-3 Integración
            p.mb-0 Se conectan con otras plataformas para un análisis más profundo.
    
    p.mb-5 Existen numerosas herramientas que ayudan a medir el impacto de estrategias digitales, algunas de las más utilizadas son:

    .row.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Tabla 4.
          span Ejemplo de plataformas para analítica WEB
        .tabla-a.color-secundario.mb-5.tbl
          table
            caption Nota. SENA, (2026).
            thead
              tr
                th.bg-color-7 Herramienta
                th.bg-color-7 Descripción
                th.bg-color-7 Página oficial
                th.bg-color-7 Gratuita
            tbody
              tr.bg-color-white
                td <b><em>Google Analytics</em></b>
                td Permite analizar tráfico web, comportamiento de usuarios y conversiones
                td Google Analytics | Google for Developers
                td Sí
              tr.bg-color-8
                td <b><em>Business Suite</em></b>
                td Facilita el monitoreo de métricas en Facebook e Instagram
                td Meta Business Suite: Administrar Facebook e Instagram en un solo lugar | Meta for Business
                td Sí
              tr.bg-color-white
                td <b><em>Hootsuite Analytics</em></b>
                td Ofrece datos sobre interacciones y rendimiento de publicaciones
                td Social Media Analytics Tools - Hootsuite Analytics
                td No, pero se cuenta con periodo de prueba
              tr.bg-color-8
                td <b><em>SEMrush</em></b>
                td Ideal para el análisis de posicionamiento SEO y marketing digital
                td Semrush, el marketing online puede ser fácil
                td No, pero se cuenta con periodo de prueba

    .bloque-texto-g.color-secundario.bg-color-5.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/66.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Saber cómo opera cada una de estas plataformas y lograr el conocimiento para su manipulación y uso, requiere de un tiempo prudencial, el cual invitamos a destinar para indagar a profundidad en cada una de ellas, por medio de los enlaces de la tabla anterior, podrá profundizar desde los sitios oficiales.

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-4.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema1/67.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p.mb-0(data-aos="fade-right") Desde el enfoque técnico, la analítica digital se caracteriza por el uso de <em>dashboards</em>, integración de fuentes de datos y monitoreo en tiempo real. Sus funciones principales incluyen detectar patrones de comportamiento, evaluar el rendimiento de campañas y anticipar tendencias del consumidor, no obstante, la interpretación incorrecta de los datos puede conducir a decisiones erróneas. La analítica exige criterio estratégico además de herramientas tecnológicas.
        .cajon.color-acento-contenido.p-4
          p.mb-0 En el sistema moda, la analítica permite identificar qué colecciones generan mayor interés, qué formatos visuales convierten mejor y qué segmentos responden con mayor rentabilidad. Las marcas que desarrollan cultura analítica optimizan su inversión publicitaria y fortalecen la experiencia del cliente, la analítica no sustituye la creatividad, pero la orienta con precisión.
    
    .bg-color-9.tarjeta.p-4.mb-5
      p.mb-0 La recopilación de datos es solo el primer paso en el proceso de obtener información valiosa, sin una interpretación adecuada, los datos siguen siendo cifras y registros sin un propósito claro. La generación de insights implica analizar patrones en la información obtenida para transformar los datos en conocimiento accionable (Muñoz & Elosegui, 2018). La clave está en analizarlos con profundidad, identificar tendencias y reconocer patrones que ayuden a comprender mejor el comportamiento de los usuarios, el mercado y las oportunidades de negocio. 
    
    .row.justify-content-center.align-items-center
      .col-lg-10(data-aos="fade-up")
        .tarjeta.color-primario.bg-color-16.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-auto
              img(src="@/assets/curso/tema1/68.png")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 ¿Qué es un <em>insight</em>? ¿Cómo encontrar <em>insights</em>?
                  p.mb-0 Lo invitamos a ver el siguiente recurso educativo por medio del cual podrá profundizar en temática abordada, el cual corresponde a un video del canal de Socialmood, especializado en temas de social media y comunicación digital, donde nos brinda una explicación del significado de <em>insight</em> y cómo encontrarlos. 
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://youtu.be/_FS9hxSIDwY?si=9LJC9GO04BnFbqeY " target="_blank")
                    span Ir al video
                    i.fas.fa-link
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema1/69.png", data-aos="zoom-in")
      .col-lg-6.order-lg-1
        .row.align-items-center.bg-color-1.px-4.tarjeta
          .col-lg-auto.mb-lg-0
            img.d-lg-flex.d-none(src="@/assets/curso/tema1/14.png").mx-auto
          .col-lg
            h5 Pregunta de aplicación
            p.mb-0 ¿Qué riesgo enfrenta una marca que recopila datos pero no los interpreta correctamente?
    
    separador
    
    #t_1_10.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.10 Pauta
    
    .row.mb-5.justify-content-center.align-items-center
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/70.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-right") La pauta digital en redes sociales corresponde a la inversión publicitaria destinada a amplificar el alcance y la conversión del contenido, en el sistema moda, la pauta permite acelerar el posicionamiento de colecciones y competir en entornos saturados de información. Sin embargo, su efectividad depende de la segmentación, la creatividad y la medición continua, la pauta mal gestionada genera gasto; la pauta estratégica genera retorno.
    
        .cajon.color-acento-contenido.p-4
          p.mb-0 Analíticamente, la pauta se evalúa mediante indicadores como CPM, CPC, CTR y ROAS. Cada métrica cumple una función específica: el CPM mide costo por mil impresiones; el CPC evalúa el costo por click; el CTR indica atractivo del anuncio; el ROAS determina rentabilidad, esta estructura métrica permite optimizar la inversión publicitaria de forma progresiva.
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema1/71.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p En el sistema moda, la pauta debe integrarse con contenido orgánico validado previamente, escalar contenido que ya demostró engagement reduce el riesgo financiero, además, la pauta debe ajustarse según temporada, comportamiento del consumidor y ciclo de vida de la colección.
        p La gestión inteligente del presupuesto publicitario fortalece la competitividad digital.
        .bg-color-1.tarjeta.px-4
          .row.align-items-center
            .col-lg-auto.mb-lg-0
              img.d-none.d-lg-flex(src="@/assets/curso/tema1/12.svg").mx-auto
            .col-lg
              p.mb-0 <b><em>Insight</em></b>. La marca <b>Distrito Fashion Hub</b> probó creatividades de forma orgánica antes de pautar, al invertir solo en los anuncios con mejor desempeño, logró mejorar su ROAS en 38 %.

    .row.justify-content-center
      .col-lg-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 5.
          span Indicadores clave de pauta digital
        .tabla-a.color-secundario.mb-5.tbl
          table
            caption Nota. SENA, (2026).
            thead
              tr
                th.bg-color-7 Indicador
                th.bg-color-7 Qué mide
                th.bg-color-7 Uso estratégico
                th.bg-color-7 Ejemplo aplicado al sistema moda
            tbody
              tr.bg-color-white
                td <b>CPM (Costo por mil impresiones)</b>
                td Mide el costo que paga el anunciante por cada mil veces que un anuncio es mostrado en la plataforma. Permite estimar el precio de visibilidad dentro de una campaña publicitaria
                td Eficiencia de alcance: se utiliza para evaluar qué tan económico resulta posicionar la marca frente a una audiencia amplia. Es útil en campañas de reconocimiento o lanzamiento de colecciones
                td Una marca de streetwear invierte $50 en anuncios para el lanzamiento de una nueva hoodie y obtiene 25.000 impresiones, logrando un CPM competitivo para aumentar visibilidad
              tr.bg-color-8
                td <b>CPC (Costo por clic)</b>
                td Calcula el costo promedio que se paga por cada clic que los usuarios realizan en un anuncio. Indica cuánto cuesta generar tráfico hacia una página o tienda online
                td Eficiencia de tráfico: permite analizar qué tan rentable es atraer usuarios hacia el e-commerce o landing page. Se utiliza para optimizar anuncios y segmentación
                td Una marca de sneakers lanza una campaña hacia su tienda online y paga $0.25 por cada clic en el anuncio que dirige al catálogo de productos
              tr.bg-color-white
                td <b>CTR (<em>Click Through Rate</em>)</b>
                td Representa el porcentaje de usuarios que hicieron clic en un anuncio respecto al número total de impresiones. Refleja el nivel de atractivo y relevancia del mensaje publicitario
                td Atractivo del anuncio: se usa para evaluar la capacidad del contenido creativo (imagen, video, <em>copy</em>) para generar interés y motivar acción
                td Un anuncio de una nueva colección de vestidos recibe 10.000 impresiones y 300 clics, logrando un CTR del 3 %, lo que indica que el contenido resulta atractivo para la audiencia
              tr.bg-color-8
                td <b>ROAS (<em>Return on Ad Spend</em>)</b>
                td Mide el retorno económico generado por cada unidad monetaria invertida en publicidad. Permite evaluar la rentabilidad directa de las campañas pagadas
                td Rentabilidad: ayuda a determinar si la inversión publicitaria está generando ventas suficientes y si la estrategia de pauta es sostenible
                td Una marca de moda invierte $500 en anuncios para promocionar una colección y genera $2.500 en ventas, obteniendo un ROAS de 5
    
    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-10(data-aos="fade-up") 
        .bg-color-1.px-5.py-4.tarjeta
          .row.align-items-center
            .col-lg-auto.mb-lg-0
              img.d-none.d-lg-flex(src="@/assets/curso/tema1/25.png").mx-auto
            .col-lg
              p.mb-0 <b>Clave estratégica</b>. La pauta amplifica resultados; no corrige estrategias débiles.
    
    separador
    
    #t_1_11.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.11 Publicaciones
    
    img(src="@/assets/curso/tema1/72.png", alt="Imagen decorativa")
    
    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-10(data-aos="fade-up")
        p.banner-text La cantidad de publicaciones se refiere a la frecuencia con la que una marca comparte contenido en sus redes sociales durante un periodo determinado, en el Sistema Moda, este factor influye directamente en la visibilidad algorítmica y en la percepción de actividad de la marca. Publicar muy poco reduce presencia; publicar en exceso puede generar saturación, por ello, la frecuencia debe gestionarse estratégicamente.
    
    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-8
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 4.
          span Equilibrio estratégico de publicación en redes sociales 
        img.mb-2.d-none.d-sm-block(data-aos="fade-up", src="@/assets/curso/tema1/73.png", alt="La figura muestra la importancia de gestionar estratégicamente la frecuencia de publicaciones en redes sociales en el sistema moda. ")
        img.mb-2.d-sm-none(data-aos="fade-up", src="@/assets/curso/tema1/73-1.png", alt="La figura muestra la importancia de gestionar estratégicamente la frecuencia de publicaciones en redes sociales en el sistema moda. ")
        figcaption Fuente: SENA, 2026
    
    .row.mb-5.justify-content-center.align-items-center
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/74.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-right") Desde el enfoque técnico, la frecuencia óptima depende de la capacidad de producción de contenido, el comportamiento de la audiencia y el tipo de plataforma. Sus características incluyen regularidad, coherencia temática y equilibrio entre calidad y volumen, no existe una frecuencia universal; la clave está en la consistencia sostenible, hay que tener en cuenta que la sobre publicación sin valor puede deteriorar el engagement.
    
        .cajon.color-acento-contenido.p-4
          p.mb-0 En el sistema moda, la planificación editorial mediante calendarios de contenido permite mantener ritmo sin sacrificar calidad, las marcas que publican con estrategia logran mayor recordación y estabilidad algorítmica. La frecuencia debe revisarse periódicamente según resultados analíticos, la constancia inteligente supera a la publicación impulsiva.
    
    .bg-color-1.tarjeta.px-4.mb-5
      .row.align-items-center
        .col-lg-auto.mb-lg-0
          img.d-none.d-lg-flex(src="@/assets/curso/tema1/12.svg").mx-auto
        .col-lg
          p.mb-0 <b><em>Insight</em></b>. La marca <b>Raíz Moda Studio</b> pasó de publicar de forma irregular a implementar un calendario de tres publicaciones semanales y stories diarias, en cuatro meses aumentó su alcance en 34 %.
    
    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-8
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 5.
          span Riesgos y recomendaciones en la frecuencia de publicación 
        img.mb-2.d-none.d-sm-block(data-aos="fade-up", src="@/assets/curso/tema1/75.png", alt="la figura muestra los riesgos y recomendaciones en la frecuencia de publicación.")
        img.mb-2.d-sm-none(data-aos="fade-up", src="@/assets/curso/tema1/75-1.png", alt="la figura muestra los riesgos y recomendaciones en la frecuencia de publicación.")
        figcaption Fuente: SENA, 2026
  
    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-8(data-aos="fade-up") 
        .bg-color-1.px-5.py-4.tarjeta
          .row.align-items-center
            .col-lg-auto.mb-lg-0
              img.d-none.d-lg-flex(src="@/assets/curso/tema1/76.png").mx-auto
            .col-lg
              h5.mb-0 Cita de reflexión.  
              p.mb-0 “La disciplina en el análisis revela la verdad que la intuición no alcanza a ver.”
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema1/78.png", data-aos="zoom-in")
      .col-lg-7.order-lg-1
        .row.bg-color-15.tarjeta.py-4.align-items-center.justify-content-center
          .col-md-6.col-lg-5.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema1/77.png", data-aos="zoom-in")
          .col-lg-7
            h2(data-aos="fade-left").mb-4 ¿Sabías qué?
            p Lo invitamos a escuchar el siguiente Pódcast:
            
            TarjetaAudio.color-secundario.bg-color-white.mb-3(
              texto="Pendiente por definir el titulo del podcast"
              tiempo
              :audio="require('../assets/curso/podcast/podcast1.mp3')"
            )
    

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
