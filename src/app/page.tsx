"use client";

import React, { useState } from "react";
import { Link } from "react-scroll";

const Home: React.FC = () => {
  const services = [
    {
      title: "Design",
      description: "UI/UX design, wireframing, and prototyping to create intuitive and engaging user experiences.",
      features: ["User Interface Design", "User Experience Design", "Prototype Development", "Brand Identity"],
      icon: "🎨"
    },
    {
      title: "Development",
      description: "Full-stack development services using cutting-edge technologies to bring your vision to life.",
      features: ["Web Development", "Mobile Apps", "Custom Software", "API Integration"],
      icon: "💻"
    },
    {
      title: "Quality Assurance",
      description: "Rigorous testing and debugging to ensure your product meets the highest quality standards.",
      features: ["Automated Testing", "Performance Testing", "Bug Fixing", "Security Testing"],
      icon: "✅"
    },
    {
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies to increase your online presence and reach.",
      features: ["SEO Optimization", "Content Marketing", "Social Media", "Analytics"],
      icon: "📈"
    }
  ];

   // Reviews data
   const reviews = [
    {
      name: "John Smith",
      company: "Tech Innovators Ltd",
      review: "MySofty delivered exceptional results for our web application. Their attention to detail and commitment to quality is outstanding.",
      rating: 5,
      position: "CTO"
    },
    {
      name: "Sarah Johnson",
      company: "Digital Solutions Inc",
      review: "The team's expertise in both design and development helped us launch our product ahead of schedule. Highly recommended!",
      rating: 5,
      position: "Product Manager"
    },
    {
      name: "Michael Chen",
      company: "StartUp Hub",
      review: "Their SEO services have significantly improved our online presence. We've seen a 200% increase in organic traffic.",
      rating: 5,
      position: "Marketing Director"
    },
    {
      name: "Emma Davis",
      company: "Creative Works",
      review: "Outstanding service from start to finish. MySofty understood our vision and transformed it into reality.",
      rating: 5,
      position: "CEO"
    }
  ];

  // State for carousel
  const [currentReview, setCurrentReview] = useState(0);

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  // Carousel navigation
  const nextReview = () => {
    setCurrentReview((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  // Form handling
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };


  return (
    <div>
      {/* Navbar */}
      <nav style={styles.navbar}>
        <Link to="home" smooth duration={500} style={styles.link}>
          Home
        </Link>
        <Link to="products" smooth duration={500} style={styles.link}>
          Services
        </Link>
        <Link to="reviews" smooth duration={500} style={styles.link}>
          Reviews
        </Link>
        <Link to="contact" smooth duration={500} style={styles.link}>
          Contact
        </Link>
        <Link to="about" smooth duration={500} style={styles.link}>
          About
        </Link>
      </nav>

      {/* Home Section */}
      <div id="home" style={{ ...styles.section, ...styles.gradientBlueSilver }}>
        <div style={styles.heroContent}>
          <h1 style={styles.heroText}>MySofty</h1>
          <p style={styles.heroSubtext}>Crafting Digital Excellence</p>
          <div style={styles.heroCTA}>
            <button style={styles.primaryButton}>Get Started</button>
            <button style={styles.secondaryButton}>Learn More</button>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div id="products" style={styles.section}>
        <div style={styles.servicesContainer}>
          <h1 style={styles.sectionTitle}>Our Services</h1>
          <p style={styles.sectionSubtext}>End-to-End Software Solutions</p>
          <div style={styles.servicesGrid}>
            {services.map((service, index) => (
              <div key={index} style={styles.serviceCard}>
                <div style={styles.serviceIcon}>{service.icon}</div>
                <h3 style={styles.serviceTitle}>{service.title}</h3>
                <p style={styles.serviceDescription}>{service.description}</p>
                <ul style={styles.featureList}>
                  {service.features.map((feature, i) => (
                    <li key={i} style={styles.featureItem}>{feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div id="reviews" style={{ ...styles.section, ...styles.gradientBlueSilver }}>
        <div style={styles.reviewsContainer}>
          <h1 style={styles.sectionTitle}>Client Testimonials</h1>
          <div style={styles.carouselContainer}>
            <button onClick={prevReview} style={styles.carouselButton}>&lt;</button>
            <div style={styles.reviewCard}>
              <div style={styles.reviewStars}>
                {"⭐".repeat(reviews[currentReview].rating)}
              </div>
              <p style={styles.reviewText}>{reviews[currentReview].review}</p>
              <div style={styles.reviewAuthor}>
                <h3 style={styles.reviewName}>{reviews[currentReview].name}</h3>
                <p style={styles.reviewPosition}>{reviews[currentReview].position}</p>
                <p style={styles.reviewCompany}>{reviews[currentReview].company}</p>
              </div>
            </div>
            <button onClick={nextReview} style={styles.carouselButton}>&gt;</button>
          </div>
          <div style={styles.carouselDots}>
            {reviews.map((_, index) => (
              <span
                key={index}
                style={{
                  ...styles.dot,
                  background: currentReview === index ? "#fff" : "rgba(255, 255, 255, 0.5)"
                }}
                onClick={() => setCurrentReview(index)}
              />
            ))}
          </div>
        </div>
      </div>

       {/* Contact Section */}
      <div id="contact" style={styles.section}>
        <div style={styles.contactContainer}>
          <h1 style={styles.sectionTitle}>Get In Touch</h1>
          <p style={styles.sectionSubtext}>Let&apos;s discuss your next project</p>
          
          <form onSubmit={handleSubmit} style={styles.contactForm}>
            <div style={styles.formGroup}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                style={styles.input}
                required
              />
            </div>
            <div style={styles.formGroup}>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleInputChange}
                style={styles.input}
                required
              />
            </div>
            <div style={styles.formGroup}>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleInputChange}
                style={styles.input}
                required
              />
            </div>
            <div style={styles.formGroup}>
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleInputChange}
                style={styles.textarea}
                required
              />
            </div>
            <button type="submit" style={styles.submitButton}>
              Send Message
            </button>
          </form>
        </div>
      </div>

      <div
        id="about"
        style={{ ...styles.section, ...styles.gradientBlueSilver }}
      >
        <h1>About Section</h1>
        <p>Learn more about our journey!</p>
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  // Previous styles remain...
 navbar: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    background: "rgba(255, 255, 255, 0.95)",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.05)",
    color: "#333",
    display: "flex",
    justifyContent: "space-around",
    padding: "15px 0",
    zIndex: 1000,
  },
  link: {
    color: "#007BFF",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "16px",
    cursor: "pointer",
    transition: "color 0.3s ease",
  },
  section: {
    minHeight: "100vh",
    padding: "80px 20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderBottom: "1px solid #ccc",
  },
  gradientBlueSilver: {
    background: "linear-gradient(135deg, #1e3c72, #2a5298)",
    color: "#fff",
  },
  heroContent: {
    textAlign: "center",
    maxWidth: "800px",
    padding: "20px",
  },
  heroText: {
    fontSize: "6rem",
    fontWeight: "bold",
    marginBottom: "20px",
    background: "linear-gradient(135deg, #00ff87 0%, #60efff 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    textShadow: "0 2px 10px rgba(0,0,0,0.1)",
  },
  heroSubtext: {
    fontSize: "1.5rem",
    marginBottom: "40px",
    color: "#ffffff",
    opacity: 0.9,
  },
  heroCTA: {
    display: "flex",
    gap: "20px",
    justifyContent: "center",
  },
  primaryButton: {
    padding: "12px 32px",
    fontSize: "1.1rem",
    fontWeight: "bold",
    background: "linear-gradient(135deg, #00ff87 0%, #60efff 100%)",
    border: "none",
    borderRadius: "30px",
    color: "#1e3c72",
    cursor: "pointer",
    transition: "transform 0.3s ease",
  },
  secondaryButton: {
    padding: "12px 32px",
    fontSize: "1.1rem",
    fontWeight: "bold",
    background: "transparent",
    border: "2px solid #ffffff",
    borderRadius: "30px",
    color: "#ffffff",
    cursor: "pointer",
    transition: "transform 0.3s ease",
  },
  // New styles for services section
  servicesContainer: {
    width: "100%",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  sectionTitle: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    marginBottom: "10px",
    textAlign: "center",
    color: "#1e3c72",
  },
  sectionSubtext: {
    fontSize: "1.2rem",
    color: "#666",
    marginBottom: "50px",
    textAlign: "center",
  },
  servicesGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "30px",
    padding: "20px",
  },
  serviceCard: {
    background: "white",
    borderRadius: "15px",
    padding: "30px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },
  serviceIcon: {
    fontSize: "3rem",
    marginBottom: "20px",
  },
  serviceTitle: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    marginBottom: "15px",
    color: "#1e3c72",
  },
  serviceDescription: {
    color: "#666",
    marginBottom: "20px",
    lineHeight: "1.6",
  },
  featureList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    width: "100%",
  },
  featureItem: {
    padding: "8px 0",
    color: "#555",
    borderBottom: "1px solid #eee",
  },
  // New styles for Reviews section
  reviewsContainer: {
    width: "100%",
    maxWidth: "1000px",
    margin: "0 auto",
    color: "#fff",
  },
  carouselContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "20px",
    margin: "40px 0",
  },
  reviewCard: {
    background: "rgba(255, 255, 255, 0.1)",
    borderRadius: "15px",
    padding: "40px",
    width: "600px",
    textAlign: "center",
    backdropFilter: "blur(10px)",
  },
  carouselButton: {
    background: "transparent",
    border: "2px solid white",
    color: "white",
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    cursor: "pointer",
    fontSize: "1.2rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.3s ease",
  },
  reviewStars: {
    marginBottom: "20px",
    fontSize: "1.5rem",
  },
  reviewText: {
    fontSize: "1.1rem",
    lineHeight: "1.6",
    marginBottom: "30px",
  },
  reviewAuthor: {
    borderTop: "1px solid rgba(255, 255, 255, 0.2)",
    paddingTop: "20px",
  },
  reviewName: {
    fontSize: "1.2rem",
    marginBottom: "5px",
  },
  reviewPosition: {
    fontSize: "1rem",
    opacity: 0.8,
    marginBottom: "5px",
  },
  reviewCompany: {
    fontSize: "0.9rem",
    opacity: 0.7,
  },
  carouselDots: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
  },
  dot: {
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    cursor: "pointer",
    transition: "background 0.3s ease",
  },

  // New styles for Contact section
  contactContainer: {
    width: "100%",
    maxWidth: "800px",
    margin: "0 auto",
  },
  contactForm: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    width: "100%",
    maxWidth: "600px",
    margin: "0 auto",
  },
  formGroup: {
    display: "flex",
    flexDirection: "column",
  },
  input: {
    padding: "15px",
    borderRadius: "8px",
    border: "1px solid #ddd",
    fontSize: "1rem",
    transition: "border-color 0.3s ease",
  },
  textarea: {
    padding: "15px",
    borderRadius: "8px",
    border: "1px solid #ddd",
    fontSize: "1rem",
    minHeight: "150px",
    resize: "vertical",
    transition: "border-color 0.3s ease",
  },
  submitButton: {
    padding: "15px 30px",
    fontSize: "1.1rem",
    fontWeight: "bold",
    background: "linear-gradient(135deg, #1e3c72, #2a5298)",
    border: "none",
    borderRadius: "8px",
    color: "#fff",
    cursor: "pointer",
    transition: "transform 0.3s ease",
    alignSelf: "center",
  },
};

export default Home;