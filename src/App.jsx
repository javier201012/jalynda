import './App.css'
import nusukImage from '../nusuk.jpg'

function LogoMark({ className = 'logo-mark' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 180 210"
      role="img"
      aria-label="Logo de Jalynda"
    >
      <defs>
        <linearGradient id="jalynda-silver" x1="0%" x2="100%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#f7fbff" />
          <stop offset="55%" stopColor="#d9e6f7" />
          <stop offset="100%" stopColor="#94aac5" />
        </linearGradient>
      </defs>
      <g fill="none" stroke="url(#jalynda-silver)" strokeLinecap="round" strokeLinejoin="round">
        <path d="M81 10h18" strokeWidth="5" />
        <path d="M73 18h34" strokeWidth="6" />
        <path d="M84 24v10" strokeWidth="5" />
        <path d="M96 24v10" strokeWidth="5" />
        <path d="M71 33c6-7 13-10 20-10s14 3 20 10" strokeWidth="5" />
        <path d="M90 32c21 12 34 34 34 63 0 36-12 66-34 88-22-22-34-52-34-88 0-29 13-51 34-63Z" strokeWidth="6" />
        <path d="M90 46v104" strokeWidth="6" />
        <path d="M87 56c-15 10-24 23-24 39 0 12 6 23 18 31" strokeWidth="6" />
        <path d="M93 56c15 10 24 23 24 39 0 12-6 23-18 31" strokeWidth="6" />
        <path d="M48 74c24 7 39 24 43 49-24 0-42 15-42 40" strokeWidth="5.5" />
        <path d="M132 74c-24 7-39 24-43 49 24 0 42 15 42 40" strokeWidth="5.5" />
        <path d="M61 154c6 11 15 19 29 23" strokeWidth="5" />
        <path d="M119 154c-6 11-15 19-29 23" strokeWidth="5" />
        <path d="M69 87c10-3 17-10 21-20" strokeWidth="4.5" />
        <path d="M111 87c-10-3-17-10-21-20" strokeWidth="4.5" />
        <path d="M76 123c4 9 9 16 14 22" strokeWidth="4.5" />
        <path d="M104 123c-4 9-9 16-14 22" strokeWidth="4.5" />
      </g>
    </svg>
  )
}

const highlights = [
  'Perfumes arabes con personalidad intensa',
  'Atencion cercana desde Fuenlabrada',
  'Selecciones pensadas para regalo y uso diario',
]

const values = [
  {
    title: 'Esencias con presencia',
    text: 'Trabajamos fragancias arabes con salida potente, fondo duradero y perfiles que no se pierden a la primera hora.',
  },
  {
    title: 'Asesoria real',
    text: 'La tienda esta pensada para ayudarte a elegir segun gusto, ocasion y presupuesto, sin una experiencia generica.',
  },
  {
    title: 'Catalogo en construccion',
    text: 'Iremos incorporando cada perfume con su foto y precio para que la web refleje el stock real de Jalynda.',
  },
]

const escaparateRecorteFiles = [
  'WhatsApp Image 2026-03-23 at 22.44.19.jpeg',
  'WhatsApp Image 2026-03-23 at 22.45.12.jpeg',
  'WhatsApp Image 2026-03-23 at 22.45.44.jpeg',
  'WhatsApp Image 2026-03-23 at 22.46.07.jpeg',
  'WhatsApp Image 2026-03-23 at 22.46.36.jpeg',
  'WhatsApp Image 2026-03-23 at 22.47.02.jpeg',
  'WhatsApp Image 2026-03-23 at 22.47.24.jpeg',
  'WhatsApp Image 2026-03-23 at 22.47.46.jpeg',
  'WhatsApp Image 2026-03-23 at 22.48.45.jpeg',
  'WhatsApp Image 2026-03-23 at 22.49.10.jpeg',
  'WhatsApp Image 2026-03-23 at 22.49.37.jpeg',
  'WhatsApp Image 2026-03-23 at 22.49.57.jpeg',
  'WhatsApp Image 2026-03-23 at 22.50.35.jpeg',
  'WhatsApp Image 2026-03-23 at 22.51.10.jpeg',
  'WhatsApp Image 2026-03-23 at 22.51.32.jpeg',
  'WhatsApp Image 2026-03-23 at 22.52.19.jpeg',
]

const catalogPreview = [
  {
    name: 'Nusuk',
    status: 'Disponible',
    description: 'Primer perfume incorporado al escaparate de Jalynda. Frasco rojo con detalles dorados y una presencia visual muy marcada.',
    price: 'Consultar',
    imageSrc: nusukImage,
    imageAlt: 'Perfume Nusuk en frasco rojo con detalles dorados',
    imageLabel: 'Nusuk',
  },
  ...escaparateRecorteFiles.map((fileName, index) => ({
    name: `Producto escaparate ${String(index + 1).padStart(2, '0')}`,
    status: 'Pendiente de nombre',
    description: 'Recorte real del escaparate. Corrigeme nombre, precio o detalles cuando quieras.',
    price: 'Por definir',
    imageSrc: `/escaparate_recortes/${encodeURIComponent(fileName)}`,
    imageAlt: `Producto recortado del escaparate ${index + 1}`,
    imageLabel: `Producto escaparate ${String(index + 1).padStart(2, '0')}`,
  })),
]

function App() {
  return (
    <div className="page-shell">
      <header className="topbar">
        <a className="brand" href="#inicio">
          <span className="brand-mark" aria-hidden="true">
            <LogoMark className="logo-mark logo-mark-small" />
          </span>
          <span>
            <strong>Jalynda</strong>
            <small>Perfumes arabes</small>
          </span>
        </a>

        <nav className="topnav" aria-label="Navegacion principal">
          <a href="#coleccion">Coleccion</a>
          <a href="#tienda">Tienda</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </header>

      <main>
        <section className="hero-section" id="inicio">
          <div className="hero-copy">
            <p className="eyebrow">Perfumeria arabe en Fuenlabrada</p>
            <h1>Fragancias intensas, elegantes y con identidad propia.</h1>
            <p className="hero-text">
              Jalynda nace para reunir perfumes arabes con caracter, estela y una
              presencia distinta. La web ya esta lista para crecer con cada
              referencia que me vayas enviando.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#coleccion">
                Ver coleccion
              </a>
              <a className="button button-secondary" href="https://wa.me/34663724431" target="_blank" rel="noreferrer">
                Hablar por WhatsApp
              </a>
            </div>

            <ul className="highlight-list">
              {highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <aside className="hero-panel" aria-label="Identidad visual de Jalynda">
            <div className="hero-panel-top">
              <span className="panel-pill">Fachada y marca</span>
              <span className="panel-pill panel-pill-outline">Fuenlabrada</span>
            </div>

            <div className="hero-logo-wrap">
              <LogoMark />
              <div className="hero-brand-copy">
                <p className="hero-brand-name">JALYNDA</p>
                <p className="hero-brand-subtitle">Perfumes arabes</p>
              </div>
            </div>

            <p className="hero-panel-text">
              La estetica de la web toma como referencia la fachada real de la tienda:
              azul profundo, contraste limpio y una presencia visual mas seria.
            </p>

            <div className="hero-meta-grid">
              <article>
                <span>Direccion</span>
                <strong>Calle de la Picara Molinera 12</strong>
              </article>
              <article>
                <span>Contacto</span>
                <strong>+34 663724431</strong>
              </article>
            </div>
          </aside>
        </section>

        <section className="info-strip" aria-label="Resumen de tienda">
          <div>
            <span>Direccion</span>
            <p>Calle de la Picara Molinera 12, Madrid</p>
          </div>
          <div>
            <span>Telefono</span>
            <p>+34 663724431</p>
          </div>
          <div>
            <span>Email</span>
            <p>info@jalynda.com</p>
          </div>
        </section>

        <section className="section-block" id="coleccion">
          <div className="section-heading">
            <p className="eyebrow">Coleccion en marcha</p>
            <h2>Escaparate listo para tus perfumes</h2>
            <p>
              He dejado la estructura preparada para que cada perfume pueda entrar
              con su foto, nombre y precio sin rehacer la web.
            </p>
          </div>

          <div className="catalog-grid">
            {catalogPreview.map((item) => (
              <article className="catalog-card" key={item.name}>
                <div className="product-image-placeholder">
                  {item.imageSrc ? (
                    <img
                      className="product-image"
                      src={item.imageSrc}
                      alt={item.imageAlt}
                    />
                  ) : (
                    <span>{item.imageLabel}</span>
                  )}
                </div>
                <div className="catalog-copy">
                  <p className="status-pill">{item.status}</p>
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <div className="price-row">
                    <span>Precio</span>
                    <strong>{item.price}</strong>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-block values-section">
          <div className="section-heading narrow">
            <p className="eyebrow">Por que Jalynda</p>
            <h2>Una tienda con criterio, no un catalogo generico.</h2>
          </div>

          <div className="value-grid">
            {values.map((value) => (
              <article className="value-card" key={value.title}>
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-block contact-layout" id="tienda">
          <div className="contact-card primary-card">
            <p className="eyebrow">Visitanos</p>
            <h2>Tienda fisica en Madrid</h2>
            <p>
              Jalynda atiende desde Fuenlabrada y queda preparada para combinar
              presencia local con catalogo online.
            </p>
            <a
              className="text-link"
              href="https://www.google.com/maps/search/?api=1&query=Calle+de+la+Picara+Molinera+12+Madrid"
              target="_blank"
              rel="noreferrer"
            >
              Abrir ubicacion en mapas
            </a>
          </div>

          <div className="contact-card" id="contacto">
            <p className="eyebrow">Contacto directo</p>
            <ul className="contact-list">
              <li>
                <span>Telefono</span>
                <a href="tel:+34663724431">+34 663724431</a>
              </li>
              <li>
                <span>Email</span>
                <a href="mailto:info@jalynda.com">info@jalynda.com</a>
              </li>
              <li>
                <span>Direccion</span>
                <p>Calle de la Picara Molinera 12, Madrid</p>
              </li>
            </ul>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>Jalynda. Perfumes arabes con caracter desde Fuenlabrada.</p>
        <a href="mailto:info@jalynda.com">info@jalynda.com</a>
      </footer>
    </div>
  )
}

export default App
