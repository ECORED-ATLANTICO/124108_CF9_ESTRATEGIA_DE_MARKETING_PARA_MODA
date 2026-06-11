export default {
  global: {
    Name: 'Dinamización de comunidades digitales',
    Description:
      'El componente formativo profundiza en la medición del desempeño en redes sociales, KPI, segmentación avanzada y comportamiento del consumidor en el sistema moda, fortaleciendo la capacidad analítica del aprendiz para optimizar decisiones basadas en datos y mejorar la rentabilidad digital.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Desempeño red social',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Impresiones',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Me gusta',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Comentarios',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Historias',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Suscriptores',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo: 'Seguidores',
            hash: 't_1_6',
          },
          {
            numero: '1.7',
            titulo: 'Alcances',
            hash: 't_1_7',
          },
          {
            numero: '1.8',
            titulo: 'Indicadores',
            hash: 't_1_8',
          },
          {
            numero: '1.9',
            titulo: 'Analítica de datos',
            hash: 't_1_9',
          },
          {
            numero: '1.10',
            titulo: 'Pauta',
            hash: 't_1_10',
          },
          {
            numero: '1.11',
            titulo: 'Publicaciones',
            hash: 't_1_11',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Indicador clave de rendimiento',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Concepto',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Estructura',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Interpretación',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Aplicabilidad',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Cálculo',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Segmentación del mercado',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Concepto',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Técnicas',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Variables',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Matrices',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Clientes',
            hash: 't_3_5',
          },
          {
            numero: '3.6',
            titulo: 'Vida del producto',
            hash: 't_3_6',
          },
          {
            numero: '3.7',
            titulo: 'Beneficios',
            hash: 't_3_7',
          },
          {
            numero: '3.8',
            titulo: 'Proceso',
            hash: 't_3_8',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Comportamiento del consumidor',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Concepto',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Variables',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Aplicabilidad',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Influencias',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo: 'Características',
            hash: 't_4_5',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      /*{
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },*/
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '',
      referencia: '',
      tipo: '',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Alcance',
      significado: 'Número de usuarios únicos expuestos al contenido.',
    },
    {
      termino: 'Analítica digital',
      significado: 'Proceso de análisis de datos de interacción.',
    },
    {
      termino: 'Conversión',
      significado: 'Acción objetivo realizada por el usuario.',
    },
    {
      termino: '<em>Engagement rate</em>',
      significado: 'Porcentaje de interacción del contenido.',
    },
    {
      termino: 'KPI',
      significado: 'Indicador que mide cumplimiento de objetivos.',
    },
    {
      termino: 'Microsegmentación',
      significado: 'Segmentación basada en datos de comportamiento.',
    },
    {
      termino: 'ROAS',
      significado: 'Retorno de la inversión publicitaria.',
    },
    {
      termino: 'Segmento',
      significado: 'Grupo homogéneo de consumidores.',
    },
    {
      termino: 'Tasa de conversión',
      significado: 'Porcentaje de visitantes que compran.',
    },
    {
      termino: 'Tráfico digital',
      significado: 'Volumen de visitas a plataformas <em>online</em>.',
    },
  ],
  referencias: [
    {
      referencia:
        'Álvarez Sigüenza, J. F. (2024). <em>Los segmentos del marketing: Análisis, definición y tipos</em>. RAE-IC, Revista de la Asociación Española de Investigación de la Comunicación, 11(21).',
      link: 'https://www.revistaeic.eu/index.php/raeic/article/view/548/1115',
    },
    {
      referencia:
        'Beltrán Mora, M. N., Parrales Carvajal, V. M., & Ledesma Álvarez, G. D. (2019). <em>El Buyer Persona como factor clave entre las tendencias en gestión empresarial</em>. Revista Científica Mundo de la Investigación y el Conocimiento, 3(3), 659–681.',
      link: 'https://recimundo.com/index.php/es/article/view/615/829',
    },
    {
      referencia:
        'Fernández Valiñas, R. (2009). <em>Segmentación de mercados</em>. McGraw-Hill Interamericana.',
      link:
        'https://www.uteg.edu.ec/biblioteca-libros/wp-content/uploads/2023/09/Segmentacion-de-mercados_compressed.pdf',
    },
    {
      referencia:
        'Universidad Nacional Autónoma de Nicaragua. (2022). <em>Segmentación de mercado</em>. Repositorio UNAN.',
      link: '',
    },
    {
      referencia:
        'Universidad San Marcos. (2020). <em>Segmentación de mercados</em>.',
      link:
        'https://repositorio.usam.ac.cr/xmlui/bitstream/handle/11506/1048/LEC%20MER%200006%202020.pdf?sequence=1&isAllowed=y',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Responsable del Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Centro Agroturistico - Regional Santander',
        },
        {
          nombre: 'Miguel de Jesús Paredes Maestre ',
          cargo: 'Responsable de la línea de producción ',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Sandra Isabel Suárez Delgado',
          cargo: ' Experto Temático ',
          centro: 'Centro de Gestión y Servicios',
        },
        {
          nombre: 'Harbey Castelblanco',
          cargo: ' Experto Temático ',
          centro: 'Centro Nacional Colombo Alemán',
        },
        {
          nombre: 'Nicolás Cruz Ríos ',
          cargo: ' Experto Temático ',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico ',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: ' Evaluador instruccional ',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico  ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Jesus Antonio Vecino Valero ',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Carlos Andrés Diaz Pinto ',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Nelson Iván Vera Briceño ',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luz Karime Amaya Cabra ',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Laura Daniela Burgos Rueda ',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jonathan Adié Villafañe ',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Karine Isabel Ospino Fritz ',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
