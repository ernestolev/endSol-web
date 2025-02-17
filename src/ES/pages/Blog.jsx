import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Blog.module.css';

export default function Blog() {
  const [categoriaActiva, setCategoriaActiva] = useState('Todos');

  const categorias = ['Todos', 'Código Abierto', 'Desarrollo Web', 'Móvil', 'UI/UX'];

  const publicaciones = [
    {
      titulo: "API Base: Simplificando la integración de APIs web y móviles",
      categoria: "Código Abierto",
      descripcion: "Una guía completa sobre nuestra herramienta de integración de API de código abierto que optimiza el flujo de trabajo del desarrollo.",
      imagen: "/ruta-a-imagen.jpg",
      enlace: "/blog/api-base",
      fecha: "15 de febrero de 2024"
    },
    {
      titulo: "Django API Helper: Generación automática de código API desde models.py",
      categoria: "Código Abierto",
      descripcion: "Descubre cómo nuestra herramienta para Django puede automatizar tu proceso de desarrollo de APIs.",
      imagen: "/ruta-a-imagen.jpg",
      enlace: "/blog/django-api-helper",
      fecha: "10 de febrero de 2024"
    },
    // Agrega más publicaciones aquí
  ];

  const publicacionesFiltradas = categoriaActiva === 'Todos' 
    ? publicaciones 
    : publicaciones.filter(post => post.categoria === categoriaActiva);

  return (
    <div className={styles.blogContainer}>
      <section className={styles.hero}>
        <h1>Blogs</h1>
        <p>Últimas noticias, tendencias e ideas.</p>
      </section>

      <section className={styles.blogContent}>
        <div className={styles.filters}>
          <div className={styles.categories}>
            {categorias.map((categoria) => (
              <button
                key={categoria}
                className={`${styles.categoryBtn} ${categoriaActiva === categoria ? styles.active : ''}`}
                onClick={() => setCategoriaActiva(categoria)}
              >
                {categoria}
              </button>
            ))}
          </div>
          <div className={styles.search}>
            <input type="text" placeholder="Buscar artículos..." />
          </div>
        </div>

        <div className={styles.postsGrid}>
          {publicacionesFiltradas.map((post, index) => (
            <article key={index} className={styles.blogCard}>
              <div className={styles.blogImage}>
                <img src={post.imagen} alt={post.titulo} />
              </div>
              <div className={styles.blogInfo}>
                <span className={styles.category}>{post.categoria}</span>
                <span className={styles.date}>{post.fecha}</span>
              </div>
              <h2>{post.titulo}</h2>
              <p>{post.descripcion}</p>
              <Link to={post.enlace} className={styles.readMore}>
                Leer más
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.cta}>
        <h2>Hagamos algo increíble juntos.</h2>
        <p>Cuéntanos qué desafíos estás tratando de resolver para que podamos ayudarte.</p>
        <Link to="/contacto" className={styles.ctaButton}>
          Comenzar
        </Link>
      </section>
    </div>
  );
}
