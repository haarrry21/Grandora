import { useEffect, useMemo, useState } from 'react';
import blogCss from './Blog.module.css';

const STORAGE_KEY = 'grandora-blogs';

const initialBlogs = [
  {
    id: 1,
    title: 'A Weekend Escape in Our Signature Suites',
    category: 'Hotel Experience',
    image:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
    excerpt:
      'Discover how our elevated suites blend privacy, comfort, and thoughtful details for a memorable boutique stay.',
    content:
      'From sunrise coffee on the balcony to evening room service, every element of our signature suites is designed to help guests slow down and enjoy the moment. Explore a refined hospitality experience shaped around craftsmanship, personalized service, and restful luxury.',
  },
  {
    id: 2,
    title: 'Luxury Dining, Curated For Slow Afternoons',
    category: 'Restaurant',
    image:
      'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=80',
    excerpt:
      'Our chefs bring warmth, seasonal ingredients, and rich flavours into a dining experience that feels both intimate and indulgent.',
    content:
      'Whether it is a long lunch with friends or a romantic candlelit dinner, our restaurant menu celebrates fresh local ingredients, elegant plating, and a comfortable setting that turns meals into lasting memories.',
  },
  {
    id: 3,
    title: 'The Rooms That Feel Like a Private Retreat',
    category: 'Rooms',
    image:
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80',
    excerpt:
      'Each room at Grandora is styled for comfort, quiet luxury, and a deeper sense of rest from the moment you arrive.',
    content:
      'Thoughtful textures, subtle lighting, and spacious layouts create a calming atmosphere that lets guests truly unwind. It is comfort designed around the rhythm of each stay, whether it is a work trip or a long-awaited getaway.',
  },
];

const getStoredBlogs = () => {
  try {
    const storedBlogs = localStorage.getItem(STORAGE_KEY);
    return storedBlogs ? JSON.parse(storedBlogs) : initialBlogs;
  } catch (error) {
    return initialBlogs;
  }
};

function Blog({ onBackHome }) {
  const [blogs, setBlogs] = useState(() => getStoredBlogs());
  const [form, setForm] = useState({
    title: '',
    category: 'Hotel Experience',
    image: '',
    excerpt: '',
    content: '',
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(blogs));
  }, [blogs]);

  const featuredPost = useMemo(() => blogs[0] || null, [blogs]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      setForm((prev) => ({ ...prev, image: reader.result }));
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!form.title || !form.content || !form.image) {
      return;
    }

    const newBlog = {
      id: Date.now(),
      title: form.title,
      category: form.category,
      image: form.image,
      excerpt: form.excerpt || form.content.slice(0, 120),
      content: form.content,
    };

    setBlogs((prev) => [newBlog, ...prev]);
    setForm({
      title: '',
      category: 'Hotel Experience',
      image: '',
      excerpt: '',
      content: '',
    });
  };

  return (
    <section className={blogCss.page}>
      <div className={blogCss.topBar}>
        <a type="button" className={blogCss.backButton} onClick={onBackHome}>Back to Home</a>
      </div>

      <div className={blogCss.hero}>
        <div className={blogCss.heroContent}>
          <p className={blogCss.eyebrow}>Grandora_Journal</p>
          <h1>Stories from our hotel, rooms and dining experience</h1>
          <p>
            Explore curated moments from Grandora, from boutique stays and room inspiration to culinary experiences and unique getaway ideas.
          </p>
        </div>
      </div>

      <div className={blogCss.container}>
        <div className={blogCss.formCard}>
          <h2>Add a New Blog</h2>
          <form className={blogCss.form} onSubmit={handleSubmit}>
            <div className={blogCss.fieldRow}>
              <div className={blogCss.field}>
                <label htmlFor="blog-title">Blog Title</label>
                <input id="blog-title" name="title" value={form.title} onChange={handleChange} placeholder="Luxury stay in the city" />
              </div>

              <div className={blogCss.field}>
                <label htmlFor="blog-category">Category</label>
                <select id="blog-category" name="category" value={form.category} onChange={handleChange}>
                  <option value="Hotel Experience">Hotel Experience</option>
                  <option value="Rooms">Rooms</option>
                  <option value="Restaurant">Restaurant</option>
                  <option value="Travel">Travel</option>
                </select>
              </div>
            </div>

            <div className={blogCss.field}>
              <label htmlFor="blog-image">Blog Image</label>
              <input id="blog-image" type="file" accept="image/*" onChange={handleImageUpload} />
            </div>

            {form.image && <img className={blogCss.previewImage} src={form.image} alt="Preview" />}

            <div className={blogCss.field}>
              <label htmlFor="blog-excerpt">Short Excerpt</label>
              <input id="blog-excerpt" name="excerpt" value={form.excerpt} onChange={handleChange} placeholder="A short description of the blog" />
            </div>

            <div className={blogCss.field}>
              <label htmlFor="blog-content">Content</label>
              <textarea id="blog-content" name="content" rows="6" value={form.content} onChange={handleChange} placeholder="Write the blog story here..." />
            </div>

            <button type="submit" className={blogCss.submitButton}>Publish Blog</button>
          </form>
        </div>

        {featuredPost && (
          <article className={blogCss.featuredCard}>
            <img src={featuredPost.image} alt={featuredPost.title} />
            <div className={blogCss.featuredContent}>
              <span>{featuredPost.category}</span>
              <h2>{featuredPost.title}</h2>
              <p>{featuredPost.excerpt}</p>
            </div>
          </article>
        )}

        <div className={blogCss.blogList}>
          {blogs.map((blog) => (
            <article key={blog.id} className={blogCss.blogCard}>
              <img src={blog.image} alt={blog.title} />
              <div className={blogCss.blogBody}>
                <span className={blogCss.tag}>{blog.category}</span>
                <h3>{blog.title}</h3>
                <p>{blog.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog;
