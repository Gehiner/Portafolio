// Portafolio de Gehiner Sierra: lógica y contenido (React 18, sin build).
// Requiere que react y react-dom estén cargados antes (ver index.html).

// ----- 1. Atajos de React -----
const { useState, useEffect, useRef, useMemo } = React;

// "h" crea elementos de React sin necesidad de JSX ni de un paso de compilación.
const h = React.createElement;

// ----- 2. Datos de contacto -----
const EMAIL = "gehinerferley@gmail.com";

const GITHUB = "https://github.com/Gehiner";

const LINKEDIN =
  "https://www.linkedin.com/in/gehiner-ferley-sierra-rinc%C3%B3n-77106011b/";

// ----- 3. Contenido: edita aquí tus textos -----

const projects = [
  {
    id: "ext",

    name: "Extensión de Chrome para tutores de Kodland",

    tag: "En uso por todos los tutores de Kodland",

    problem:
      "Los tutores repetían a diario tareas operativas en el Backoffice y en la comunicación con sus grupos: consultar información, preparar mensajes, gestionar credenciales, revisar tareas y realizar seguimientos.",

    solution:
      "Participé en el desarrollo de una extensión de Chrome para el entorno de tutores de Kodland. Mi trabajo incluye funcionalidades en JavaScript para el Backoffice, extracción y organización de tareas de los grupos, integración con herramientas Python mediante Native Messaging, automatizaciones de WhatsApp, captura y envío de credenciales, generación de listas de tareas y módulos de seguimiento y retención.",

    result:
      "La herramienta está siendo utilizada por todos los tutores de Kodland y cuenta con una versión publicada (v1.1.0). Además del desarrollo de nuevas funcionalidades, participo en su mantenimiento y corrección de errores.",

    contribution:
      "Mi contribución principal ha estado en el desarrollo de la extensión de Chrome, automatizaciones JavaScript, integración con Python, funcionalidades de WhatsApp, gestión de información de grupos, credenciales, seguimiento de tareas, retención y mantenimiento.",

    stack: [
      "JavaScript",
      "Manifest V3",
      "Python",
      "Native Messaging",
      "WhatsApp",
      "Git",
    ],

    links: [
      ["Código en GitHub", "https://github.com/Gehiner/KodlandFaster"],
      [
        "Instalación en el portal de Kodland",
        "https://kodland-prm.tilda.ws/",
      ],
    ],
  },

    {
    id: "saas",

    name: "SaaS para crear invitaciones",

    tag: "En desarrollo",

    problem:
      "Quería poder diseñar y compartir invitaciones digitales sin depender de plantillas cerradas.",

    solution:
      "Una aplicación web con Next.js y React para crear y compartir invitaciones. El proyecto está planteado para evolucionar hacia una aplicación con gestión de invitados y administración.",

    result:
      "Ya la usé en un caso real con las invitaciones de mi matrimonio y continúo desarrollando nuevas funcionalidades.",

    contribution:
      "Proyecto individual en el que estoy trabajando el frontend, la arquitectura de componentes y la evolución progresiva hacia una aplicación full stack.",

    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
    ],

    links: [
      [
        "Código privado · Solicitar acceso",
        "mailto:gehinerferley@gmail.com?subject=Solicitud%20de%20acceso%20al%20c%C3%B3digo%20-%20SaaS%20Invitaciones&body=Hola%20Gehiner,%0A%0AMe%20gustar%C3%ADa%20solicitar%20acceso%20al%20c%C3%B3digo%20del%20proyecto%20SaaS%20de%20invitaciones.%0A%0AGracias.",
      ],
    ],
  },

  {
    id: "shop",

    name: "Tienda web con Flask",

    tag: "Backend en Python",

    problem:
      "Kodland pedía una aplicación completa como parte del proceso para ser tutor de Python Pro.",

    solution:
      "Una tienda web con Python y Flask que cubre la lógica del servidor y las vistas.",

    result:
      "Superé el proceso y posteriormente fui seleccionado para enseñar Python Pro.",

    contribution:
      "Desarrollo de la aplicación y trabajo con Python y Flask para resolver la lógica del backend.",

    stack: [
      "Python",
      "Flask",
    ],

    links: [
      [
        "Código en GitHub",
        "https://github.com/Gehiner/cursoFlask",
      ],
    ],
  },
];

// ----- 4. Más proyectos -----

const gallery = [
  [
    "Uke Mochi",
    "Plataforma para comprar productos y servicios, hecha en la UIS con React",
    "https://u3405-ukemochi-frontend-app.vercel.app/",
  ],
  [
    "Vuela Fácil",
    "Plataforma de productos y servicios, en GitLab",
    "https://gitlab.com/05401/vuelafacil",
  ],
  [
    "Mi blog en GitHub Pages",
    "Blog personal",
    "https://gehiner.github.io/",
  ],
  [
    "Yard Sale",
    "Curso práctico de Platzi",
    "https://gehiner.github.io/Yard-Sale-Curso-Practico-Platzi/",
  ],
  [
    "BataBit",
    "Proyecto del curso de Platzi",
    "https://github.com/Gehiner/BataBit-Platzi",
  ],
  [
    "Viking",
    "Proyecto en GitHub",
    "https://github.com/Gehiner/Viking",
  ],
  [
    "Grid práctica",
    "Reto de maquetación de Platzi",
    "https://github.com/Gehiner/GridPractica",
  ],
];

// ----- 5. Trayectoria profesional -----

const jobs = [
  [
    "ene 2025 a hoy",
    "Kodland Latinoamérica, profesor y desarrollador de soluciones internas",
    "Enseño desarrollo web, Python Pro y modelado 3D a estudiantes de 8 a 16 años. El 95 % completó satisfactoriamente sus proyectos finales.",
  ],
  [
    "2024",
    "Colegio Divino Salvador, profesor de tecnología y técnico de sistemas",
    "Programación y robótica con Scratch, Tinkercad y Arduino. Reduje 40 % el tiempo de resolución de incidencias y capacité a más de 100 personas.",
  ],
  [
    "dic 2022 a sep 2023",
    "ROYHER SAS, consultor de TI",
    "Seguridad informática y Microsoft 365. Un sistema de gestión de conocimiento redujo 25 % el tiempo de resolución.",
  ],
  [
    "abr a nov 2022",
    "Universidad Industrial de Santander, desarrollador front-end",
    "Interfaces con Figma y React, y un CRUD conectado a una API en Node.js con MongoDB Atlas.",
  ],
  [
    "abr 2022 a jun 2024",
    "Desarrollador front-end freelance",
    "Cinco sitios web con React y prototipos en Figma, planificados con Scrum.",
  ],
];

// ----- 6. Tecnologías -----

const stack = [
  [
    "Front-end",
    "JavaScript, React, Next.js, HTML5, CSS3, Figma",
  ],
  [
    "Back-end y datos",
    "Node.js, APIs REST, Python, Flask, MongoDB Atlas",
  ],
  [
    "Herramientas",
    "Git y GitHub, Scrum, Claude y Copilot como asistentes de programación",
  ],
];

// ----- 7. Componentes -----

// Case: un proyecto desplegable.
function Case({ p, open, onToggle }) {
  return h(
    "article",
    {
      className: "case",
      "data-open": open,
    },

    h(
      "button",
      {
        "aria-expanded": open,
        "aria-controls": "c-" + p.id,
        onClick: onToggle,
      },

      h(
        "div",
        null,

        h(
          "h3",
          null,
          p.name
        ),

        h(
          "small",
          null,
          p.tag
        )
      ),

      h(
        "span",
        {
          className: "plus",
          "aria-hidden": true,
        },
        "+"
      )
    ),

    h(
      "div",
      {
        className: "body",
        id: "c-" + p.id,
        role: "region",
      },

      h(
        "div",
        null,

        h(
          "div",
          {
            className: "cols",
          },

          h(
            "div",
            null,

            h(
              "h4",
              null,
              "El problema"
            ),

            h(
              "p",
              null,
              p.problem
            )
          ),

          h(
            "div",
            null,

            h(
              "h4",
              null,
              "Lo que construí"
            ),

            h(
              "p",
              null,
              p.solution
            )
          ),

          h(
            "div",
            null,

            h(
              "h4",
              null,
              "El resultado"
            ),

            h(
              "p",
              null,
              p.result
            )
          )
        ),

        p.contribution
          ? h(
              "div",
              {
                className: "contribution",
              },

              h(
                "h4",
                null,
                "Mi contribución"
              ),

              h(
                "p",
                null,
                p.contribution
              )
            )
          : null,

        h(
          "div",
          {
            className: "chips",
          },

          p.stack.map((s) =>
            h(
              "span",
              {
                key: s,
              },
              s
            )
          ),

          p.links.map(([t, u]) =>
            h(
              "a",
              {
                key: u,
                href: u,
                className: "btn main",
                target: "_blank",
                rel: "noopener noreferrer",
              },
              t
            )
          )
        )
      )
    )
  );
}

// Palette: menú de comandos que se abre con Ctrl + K.
function Palette({ items, onClose }) {
  const [q, setQ] = useState("");
  const [i, setI] = useState(0);

  const list = useMemo(
    () =>
      items.filter((x) =>
        x.label.toLowerCase().includes(q.toLowerCase())
      ),
    [q, items]
  );

  const run = (x) => {
    onClose();

    if (x) {
      x.run();
    }
  };

  const key = (e) => {
    if (e.key === "Escape") {
      onClose();
    } else if (e.key === "ArrowDown") {
      e.preventDefault();

      setI((v) =>
        Math.min(
          v + 1,
          Math.max(list.length - 1, 0)
        )
      );
    } else if (e.key === "ArrowUp") {
      e.preventDefault();

      setI((v) =>
        Math.max(v - 1, 0)
      );
    } else if (e.key === "Enter") {
      run(list[i]);
    }
  };

  return h(
    "div",
    {
      className: "ov",
      onMouseDown: (e) =>
        e.target === e.currentTarget && onClose(),
    },

    h(
      "div",
      {
        className: "pal",
        role: "dialog",
        "aria-modal": true,
        "aria-label": "Menú de comandos",
        onKeyDown: key,
      },

      h(
        "input",
        {
          autoFocus: true,
          placeholder:
            "Escribe para buscar, por ejemplo: proyectos",
          value: q,

          onChange: (e) => {
            setQ(e.target.value);
            setI(0);
          },

          "aria-label": "Buscar comando",
        }
      ),

      h(
        "ul",
        {
          role: "listbox",
        },

        list.length
          ? list.map((x, n) =>
              h(
                "li",
                {
                  key: x.label,
                  role: "option",
                  "aria-selected": n === i,
                },

                h(
                  "button",
                  {
                    onClick: () => run(x),
                    onMouseEnter: () => setI(n),
                  },
                  x.label
                )
              )
            )
          : h(
              "li",
              {
                style: {
                  padding: ".9rem",
                },
              },
              "Sin resultados"
            )
      )
    )
  );
}

// ----- 8. Aplicación principal -----

function App() {
  const [theme, setTheme] = useState(
    document.documentElement.dataset.theme
  );

  const [open, setOpen] = useState("ext");

  const [pal, setPal] = useState(false);

  const [copied, setCopied] = useState(false);

  const toggleTheme = () =>
    setTheme((t) =>
      t === "dark" ? "light" : "dark"
    );

  // Aplica el tema al <html> y lo guarda en el navegador.
  useEffect(() => {
    document.documentElement.dataset.theme = theme;

    try {
      localStorage.setItem(
        "theme",
        theme
      );
    } catch (e) {}
  }, [theme]);

  useEffect(() => {
    const bar =
      document.getElementById("bar");

    const sc = () => {
      const m =
        document.documentElement.scrollHeight -
        innerHeight;

      bar.style.width =
        (m > 0
          ? (scrollY / m) * 100
          : 0) + "%";
    };

    const k = (e) => {
      if (
        (e.ctrlKey || e.metaKey) &&
        e.key.toLowerCase() === "k"
      ) {
        e.preventDefault();

        setPal((v) => !v);
      }
    };

    addEventListener(
      "scroll",
      sc,
      {
        passive: true,
      }
    );

    addEventListener(
      "keydown",
      k
    );

    return () => {
      removeEventListener(
        "scroll",
        sc
      );

      removeEventListener(
        "keydown",
        k
      );
    };
  }, []);

  // Acciones del menú de comandos.
  const go = (id) => () => {
    const element =
      document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const copy = () => {
    try {
      navigator.clipboard.writeText(
        EMAIL
      );

      setCopied(true);

      setTimeout(
        () => setCopied(false),
        2000
      );
    } catch (e) {
      location.href =
        "mailto:" + EMAIL;
    }
  };

  const cmds = [
    {
      label: "Ir a proyectos",
      run: go("proyectos"),
    },

    {
      label: "Ir a trayectoria",
      run: go("trayectoria"),
    },

    {
      label: "Ir a tecnologías",
      run: go("tecnologias"),
    },

    {
      label: "Ir a contacto",
      run: go("contacto"),
    },

    {
      label:
        theme === "dark"
          ? "Cambiar a tema claro"
          : "Cambiar a tema oscuro",

      run: toggleTheme,
    },

    {
      label: "Copiar mi correo",
      run: copy,
    },

    {
      label: "Abrir GitHub",
      run: () =>
        window.open(
          GITHUB,
          "_blank",
          "noopener"
        ),
    },

    {
      label: "Abrir LinkedIn",
      run: () =>
        window.open(
          LINKEDIN,
          "_blank",
          "noopener"
        ),
    },
  ];

  return h(
    React.Fragment,
    null,

    // ----- NAV -----

    h(
      "nav",
      {
        "aria-label": "Principal",
      },

      h(
        "div",
        {
          className: "wrap",
        },

        h(
          "a",
          {
            href: "#",
            className: "logo",
          },
          "Gehiner Sierra"
        ),

        h(
          "div",
          {
            className: "links",
          },

          h(
            "a",
            {
              href: "#proyectos",
            },
            "Proyectos"
          ),

          h(
            "a",
            {
              href: "#trayectoria",
            },
            "Trayectoria"
          ),

          h(
            "a",
            {
              href: "#tecnologias",
            },
            "Tecnologías"
          ),

          h(
            "a",
            {
              href: "#contacto",
            },
            "Contacto"
          )
        ),

        h(
          "div",
          {
            className: "tools",
          },

          h(
            "button",
            {
              className: "btn",
              onClick: () => setPal(true),
            },

            "Menú",

            h(
              "kbd",
              null,
              "Ctrl K"
            )
          ),

          h(
            "button",
            {
              className: "btn",
              onClick: toggleTheme,
              "aria-label":
                "Cambiar tema",
            },

            theme === "dark"
              ? "Claro"
              : "Oscuro"
          )
        )
      )
    ),

    // ----- MAIN -----

    h(
      "main",
      null,

      // ----- HERO -----

      h(
        "header",
        {
          className: "hero",

          onMouseMove: (e) => {
            const r =
              e.currentTarget.getBoundingClientRect();

            e.currentTarget.style.setProperty(
              "--mx",
              e.clientX -
                r.left +
                "px"
            );

            e.currentTarget.style.setProperty(
              "--my",
              e.clientY -
                r.top +
                "px"
            );
          },
        },

        h(
          "div",
          {
            className: "wrap",
          },

          h(
            "span",
            {
              className: "status",
            },

            h("i"),

            "Abierto a oportunidades remotas"
          ),

          h(
            "h1",
            null,

            h(
              "span",
              {
                className: "l",
              },

              h(
                "span",
                null,
                "Gehiner"
              )
            ),

            h(
              "span",
              {
                className: "l",
              },

              h(
                "span",
                null,
                "Sierra"
              )
            )
          ),

          h(
            "p",
            {
              className: "lead",
            },

            "Desarrollador full stack junior. Construyo herramientas web con React, Next.js, Node.js y Python, y estoy enfocado en seguir creciendo como desarrollador de software."
          ),

          h(
            "div",
            {
              className: "cta",
            },

            h(
              "a",
              {
                className:
                  "btn main",
                href: "#proyectos",
              },

              "Ver proyectos"
            ),

            h(
              "button",
              {
                className: "btn",
                onClick: copy,
              },

              copied
                ? "Correo copiado"
                : "Copiar mi correo"
            )
          ),

          h(
            "div",
            {
              className: "facts",
            },

            h(
              "div",
              null,

              h(
                "b",
                null,
                "4 años"
              ),

              h(
                "span",
                null,
                "desarrollando software desde 2022"
              )
            ),

            h(
              "div",
              null,

              h(
                "b",
                null,
                "95 %"
              ),

              h(
                "span",
                null,
                "de mis estudiantes termina su proyecto final"
              )
            ),

            h(
              "div",
              null,

              h(
                "b",
                null,
                "KodlandFaster"
              ),

              h(
                "span",
                null,
                "usada por todos los tutores de Kodland"
              )
            )
          )
        )
      ),

      // ----- PROYECTOS -----

      h(
        "section",
        {
          className: "s",
          id: "proyectos",
        },

        h(
          "div",
          {
            className: "wrap",
          },

          h(
            "h2",
            null,
            "Proyectos"
          ),

          projects.map((p) =>
            h(
              Case,
              {
                key: p.id,

                p,

                open:
                  open === p.id,

                onToggle: () =>
                  setOpen(
                    open === p.id
                      ? null
                      : p.id
                  ),
              }
            )
          ),

          h(
            "h3",
            {
              className: "sub",
            },
            "Más proyectos"
          ),

          h(
            "ul",
            {
              className: "list",
            },

            gallery.map(
              ([n, d, u]) =>
                h(
                  "li",
                  {
                    key: n,
                  },

                  h(
                    "a",
                    {
                      href: u,
                      target: "_blank",
                      rel: "noopener noreferrer",
                    },

                    h(
                      "span",
                      {
                        className: "n",
                      },
                      n
                    ),

                    h(
                      "span",
                      {
                        className: "d",
                      },
                      d
                    ),

                    h(
                      "span",
                      {
                        className: "go",
                      },
                      "Ver proyecto"
                    )
                  )
                )
            )
          )
        )
      ),

      // ----- TRAYECTORIA -----

      h(
        "section",
        {
          className: "s",
          id: "trayectoria",
        },

        h(
          "div",
          {
            className: "wrap",
          },

          h(
            "h2",
            null,
            "Trayectoria"
          ),

          jobs.map(
            ([d, t, x]) =>
              h(
                "div",
                {
                  className: "job",
                  key: t,
                },

                h(
                  "time",
                  null,
                  d
                ),

                h(
                  "div",
                  null,

                  h(
                    "h3",
                    null,
                    t
                  ),

                  h(
                    "p",
                    null,
                    x
                  )
                )
              )
          )
        )
      ),

      // ----- TECNOLOGÍAS -----

      h(
        "section",
        {
          className: "s",
          id: "tecnologias",
        },

        h(
          "div",
          {
            className: "wrap",
          },

          h(
            "h2",
            null,
            "Tecnologías"
          ),

          h(
            "div",
            {
              className: "grid",
            },

            stack.map(
              ([t, x]) =>
                h(
                  "div",
                  {
                    className: "card",
                    key: t,
                  },

                  h(
                    "h3",
                    null,
                    t
                  ),

                  h(
                    "p",
                    null,
                    x
                  )
                )
            )
          )
        )
      )
    ),

    // ----- CONTACTO -----

    h(
      "footer",
      {
        className: "contact",
        id: "contacto",
      },

      h(
        "div",
        {
          className: "wrap",
        },

        h(
          "h2",
          null,
          "Hablemos"
        ),

        h(
          "p",
          null,

          "Busco mi siguiente paso como desarrollador de software. Si tienes un proyecto o una vacante, escríbeme."
        ),

        h(
          "a",
          {
            className: "mail",
            href:
              "mailto:" +
              EMAIL,
          },
          EMAIL
        ),

        h(
          "div",
          {
            className: "alt",
          },

          h(
            "a",
            {
              href: GITHUB,
              target: "_blank",
              rel: "noopener noreferrer",
            },
            "GitHub"
          ),

          h(
            "a",
            {
              href: LINKEDIN,
              target: "_blank",
              rel: "noopener noreferrer",
            },
            "LinkedIn"
          )
        ),

        h(
          "small",
          null,
          "Gehiner Sierra, Bogotá, Colombia"
        )
      )
    ),

    pal &&
      h(
        Palette,
        {
          items: cmds,
          onClose: () =>
            setPal(false),
        }
      )
  );
}

// ----- 5. Arranque -----

ReactDOM.createRoot(
  document.getElementById("root")
).render(
  h(App)
);