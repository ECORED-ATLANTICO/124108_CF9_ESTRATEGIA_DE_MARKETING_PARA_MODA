<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Analítica del rendimiento digital.',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> verificar la comprensión sobre métricas, KPI, segmentación y comportamiento del consumidor en el Sistema Moda.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Qué indicador permite conocer cuántas veces fue mostrado un contenido digital?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Impresiones generadas por la publicación digital.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Número de productos almacenados en inventario físico.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Cantidad de empleados vinculados al área comercial.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Nivel de rotación de proveedores empresariales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Cuál es la principal función de los KPI dentro del <em>marketing</em> digital?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Diseñar prendas y colecciones para vitrinas comerciales físicas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Medir el cumplimiento de objetivos estratégicos empresariales digitales.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Sustituir completamente el análisis de datos en redes sociales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Eliminar la necesidad de segmentar audiencias digitales empresariales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Qué característica define principalmente a la microsegmentación digital avanzada?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Uso exclusivo de publicidad impresa para consumidores masivos tradicionales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Eliminación total de las variables de comportamiento de compra digital.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Utilización de datos específicos para segmentar audiencias con alta precisión.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Sustitución completa de las plataformas tecnológicas empresariales actuales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Cuál factor influye significativamente en el comportamiento del consumidor de moda?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Ausencia total de tendencias y referentes digitales contemporáneos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Eliminación de la interacción social en entornos digitales comerciales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Falta de acceso a contenidos y plataformas de comercio electrónico.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Influencia social ejercida por comunidades e influencers digitales especializados.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Qué indicador permite medir la interacción de los usuarios con el contenido digital?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                '<em>Engagement</em> generado por las publicaciones y acciones de la audiencia.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Nivel de almacenamiento físico de productos terminados empresariales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Cantidad de proveedores vinculados al proceso logístico comercial.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Número de documentos administrativos gestionados por la empresa.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Cuál componente debe incluir obligatoriamente la estructura de un KPI empresarial?',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Decoración visual orientada exclusivamente al diseño gráfico publicitario.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Fórmula de cálculo y meta estratégica claramente definida.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Sustitución completa de las métricas relacionadas con desempeño comercial.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Eliminación de herramientas analíticas utilizadas por la organización empresarial.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Cuál es el principal propósito de las matrices de segmentación del mercado?',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Incrementar la dificultad para identificar segmentos rentables de consumidores.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Sustituir completamente los procesos de análisis de audiencias empresariales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Organizar y priorizar segmentos según criterios estratégicos y comerciales.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Eliminar el uso de variables psicográficas dentro del <em>marketing</em> digital.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Qué característica define al consumidor digital actual dentro del Sistema Moda?',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Escasa interacción con plataformas digitales y redes sociales empresariales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Falta de interés en experiencias de compra personalizadas y dinámicas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Dependencia exclusiva de medios impresos para conocer tendencias comerciales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Comportamiento hiperconectado y orientado a experiencias digitales inmediatas.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Cuál es la utilidad principal de la analítica de datos en redes sociales?',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Interpretar información para optimizar decisiones estratégicas digitales empresariales.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Sustituir completamente las campañas de <em>marketing</em> desarrolladas por las marcas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Eliminar la necesidad de monitorear indicadores y estadísticas digitales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Reducir totalmente la importancia del comportamiento del consumidor actual.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Qué indicador permite medir la rentabilidad de la pauta digital implementada?',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Número total de seguidores acumulados en las redes sociales empresariales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'ROAS relacionado con el retorno de la inversión publicitaria digital.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Cantidad de comentarios publicados por usuarios en campañas promocionales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Volumen de fotografías utilizadas en publicaciones de productos comerciales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            '¿Qué elemento caracteriza a la segmentación psicográfica del mercado digital?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Análisis exclusivo del tamaño geográfico de las ciudades comerciales empresariales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Evaluación de estilos de vida, intereses y valores del consumidor.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Sustitución total de las variables relacionadas con comportamiento de compra.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Eliminación de estudios relacionados con preferencias y tendencias de consumo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            '¿Qué factor psicológico influye directamente en las decisiones de compra digitales?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Ausencia de motivaciones relacionadas con percepción y reconocimiento social.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Eliminación de emociones dentro de la experiencia de compra comercial.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Motivaciones y percepciones generadas frente a productos y marcas digitales.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Sustitución de tendencias digitales por procesos administrativos empresariales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            '¿Qué ventaja ofrece el <em>remarketing</em> en campañas digitales del Sistema Moda?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Recuperar usuarios que previamente interactuaron con productos o contenidos digitales.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Eliminar completamente el análisis del comportamiento de compra empresarial.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Sustituir el uso de audiencias personalizadas en plataformas digitales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Reducir totalmente la interacción entre consumidores y marcas comerciales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            '¿Cuál es la finalidad principal de interpretar correctamente un KPI empresarial?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Diseñar productos textiles sin necesidad de objetivos estratégicos definidos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Transformar datos medidos en decisiones estratégicas y acciones empresariales.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Eliminar completamente el uso de métricas en plataformas digitales actuales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Sustituir las estrategias de <em>marketing</em> implementadas en redes sociales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            '¿Cuál es el propósito principal del proceso de segmentación del mercado?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Incrementar la complejidad de las campañas publicitarias digitales empresariales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Dividir el mercado para dirigir estrategias más efectivas y personalizadas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Sustituir completamente las técnicas de investigación del consumidor moderno.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Eliminar la necesidad de construir propuestas de valor diferenciadas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto:
            '¿Qué característica posee un cliente considerado leal dentro del Sistema Moda?',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Escasa relación emocional y baja frecuencia de compra recurrente empresarial.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Ausencia de interés en recomendar productos o experiencias de marca digitales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Alta fidelización y disposición para recomendar la marca a otros consumidores.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Dependencia exclusiva de promociones agresivas para realizar nuevas compras.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto:
            '¿Qué objetivo cumple la frecuencia de publicaciones en redes sociales empresariales?',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Mantener visibilidad y presencia constante frente a las audiencias digitales.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Sustituir completamente las estrategias de contenido implementadas por la marca.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Eliminar la necesidad de analizar métricas relacionadas con <em>engagement</em> digital.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Reducir totalmente la interacción de los usuarios con las publicaciones comerciales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto:
            '¿Cuál es una ventaja estratégica de comprender el comportamiento del consumidor?',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Diseñar campañas digitales alineadas con intereses y motivaciones reales del mercado.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Eliminar completamente las investigaciones relacionadas con tendencias de consumo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Sustituir las estrategias de segmentación aplicadas por las marcas comerciales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Reducir la necesidad de desarrollar experiencias digitales personalizadas empresariales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto:
            '¿Qué característica distingue principalmente a las historias o <em>stories</em> digitales?',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Permanecen visibles indefinidamente en todas las plataformas sociales digitales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Son contenidos efímeros diseñados para interacción rápida y dinámica.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Eliminan completamente la necesidad de formatos audiovisuales empresariales modernos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Sustituyen todas las publicaciones permanentes realizadas en el feed principal.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto:
            '¿Qué finalidad tiene analizar el ciclo de vida del producto en <em>marketing</em> digital?',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Evitar completamente el desarrollo de campañas promocionales en plataformas digitales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Identificar la etapa comercial del producto para ajustar estrategias empresariales.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Sustituir el análisis del comportamiento del consumidor y las audiencias digitales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Eliminar la necesidad de segmentar mercados en el Sistema Moda empresarial.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
