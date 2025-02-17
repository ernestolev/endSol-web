import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Blog.module.css';

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Open Source', 'Web Development', 'Mobile', 'UI/UX'];

  const blogPosts = [
    {
      title: "API Base: Simplifying Web & Mobile API integration with ease",
      category: "Open Source",
      description: "A comprehensive guide to our open-source API integration tool that streamlines development workflow.",
      image: "/path-to-image.jpg",
      link: "/blog/api-base",
      date: "Feb 15, 2024"
    },
    {
      title: "Django API helper: Automatic API code generation from models.py",
      category: "Open Source",
      description: "Discover how our Django API helper can automate your API development process.",
      image: "/path-to-image.jpg",
      link: "/blog/django-api-helper",
      date: "Feb 10, 2024"
    },
    // Add more blog posts here
  ];

  const filteredPosts = activeCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <div className={styles.blogContainer}>
      <section className={styles.hero}>
        <h1>Blogs</h1>
        <p>Latest news, trends & insights.</p>
      </section>

      <section className={styles.blogContent}>
        <div className={styles.filters}>
          <div className={styles.categories}>
            {categories.map((category) => (
              <button
                key={category}
                className={`${styles.categoryBtn} ${activeCategory === category ? styles.active : ''}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
          <div className={styles.search}>
            <input type="text" placeholder="Search articles..." />
          </div>
        </div>

        <div className={styles.postsGrid}>
          {filteredPosts.map((post, index) => (
            <article key={index} className={styles.blogCard}>
              <div className={styles.blogImage}>
                <img src={post.image} alt={post.title} />
              </div>
              <div className={styles.blogInfo}>
                <span className={styles.category}>{post.category}</span>
                <span className={styles.date}>{post.date}</span>
              </div>
              <h2>{post.title}</h2>
              <p>{post.description}</p>
              <Link to={post.link} className={styles.readMore}>
                Read more
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.cta}>
        <h2>Let's make something great together.</h2>
        <p>Let us know what challenges you are trying to solve so we can help.</p>
        <Link to="/contact" className={styles.ctaButton}>
          Get Started
        </Link>
      </section>
    </div>
  );
}