import React, { useState, useEffect, useRef } from "react";
import "./App.css";

const sectionsData = [
  {
    id: "home",
    backgroundImage:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1470&q=80", // blue lake mountain
    title: "Create interactive To-Do apps effortlessly",
    description: [
      "Build feature-rich to-do list applications to manage tasks efficiently.",
      "Integrate real-time updates and local storage for seamless user experience.",
      "Learn key React concepts by developing practical to-do applications.",
    ],
  },
  {
    id: "explore",
    backgroundColor: "#f5f7fa",
    title: "Design professional Portfolio websites",
    description: [
      "Showcase your skills, projects, and experience with a clean portfolio site.",
      "Use modern CSS and frameworks to create visually stunning layouts.",
      "Make your portfolio responsive and mobile-friendly to impress clients.",
    ],
    imgSrc:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=60", // blue sky forest
  },
  {
    id: "create",
    backgroundColor: "#e3f0ff",
    title: "Build engaging Blog platforms",
    description: [
      "Create dynamic blog pages with posts, comments, and social sharing.",
      "Learn content management techniques using Markdown or CMS integrations.",
      "Add search and category filters to help readers find your best content.",
    ],
    leftTextTitle: "Bring your stories to life",
    leftTextDesc: [
      "Write posts in an intuitive editor with live previews and media embeds.",
      "Engage your audience with thoughtful layouts and interactive features.",
      "Deploy your blog with smooth navigation and SEO-friendly structure.",
    ],
    rightImgSrc:
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=60", // workspace
  },
  {
    id: "share",
    backgroundColor: "#f8f9fa",
    title: "Launch your E-commerce store easily",
    description: [
      "Build secure and scalable shopping platforms with product catalogs.",
      "Integrate payment gateways and manage inventory effectively.",
      "Offer personalized user experience with ratings, reviews, and recommendations.",
    ],
    imgSrc:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=60", // laptop desk
  },
];

const Section = React.forwardRef(
  (
    {
      data,
      formData,
      setFormData,
      onFormSubmit,
      leftContent,
    },
    ref
  ) => {
    if (data.id === "home") {
      return (
        <section
          ref={ref}
          id={data.id}
          className="section hero-section"
          style={{ backgroundImage: `url(${data.backgroundImage})` }}
        >
          <div className="hero-content">
            <h1 className="hero-title">
              {leftContent.title
                ? leftContent.title
                : (
                    <>
                      Build <b>social profiles</b> and gain revenue <b>profits</b>
                    </>
                  )}
            </h1>
            {(leftContent.paragraphs.length > 0 ? leftContent.paragraphs : data.description).map((para, i) => (
              <p key={i} className="hero-desc">
                {para}
              </p>
            ))}
          </div>
          <div className="signup-glass">
            <h3>Sign Up Today</h3>
            <p className="signup-subtext">
              Please fill out this form to register
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                onFormSubmit();
              }}
              className="signup-form"
            >
              <input
                type="text"
                placeholder="Username"
                value={formData.username}
                onChange={(e) =>
                  setFormData((f) => ({ ...f, username: e.target.value }))
                }
                required
                className="input"
              />
              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData((f) => ({ ...f, email: e.target.value }))
                }
                required
                className="input"
              />
              <input
                type="password"
                placeholder="Password"
                value={formData.password}
                onChange={(e) =>
                  setFormData((f) => ({ ...f, password: e.target.value }))
                }
                required
                className="input"
              />
              <input
                type="password"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={(e) =>
                  setFormData((f) => ({ ...f, confirmPassword: e.target.value }))
                }
                required
                className="input"
              />
              <button type="submit" className="signup-btn">
                Submit
              </button>
            </form>
          </div>
        </section>
      );
    }

    if (data.id === "explore" || data.id === "share") {
      return (
        <section
          ref={ref}
          id={data.id}
          className="section card-section"
          style={{ backgroundColor: data.backgroundColor }}
        >
          <div className="card-content">
            <img
              src={data.imgSrc}
              alt={data.title}
              className="card-img"
            />
            <div className="card-text">
              <h2>{data.title}</h2>
              {data.description.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
              <button
                className="card-btn"
                onClick={() => alert(`Clicked findout on ${data.id}`)}
              >
                Find Out
              </button>
            </div>
          </div>
        </section>
      );
    }

    if (data.id === "create") {
      return (
        <section
          ref={ref}
          id={data.id}
          className="section card-section"
          style={{ backgroundColor: data.backgroundColor }}
        >
          <div className="card-content reverse">
            <div className="card-text">
              <h2>{data.title}</h2>
              <p>{data.description[0]}</p>
              <button
                className="card-btn"
                onClick={() => alert("Clicked findout on create")}
              >
                Find Out
              </button>
              <div>
                <h4>{data.leftTextTitle}</h4>
                {data.leftTextDesc.map((para, i) => (
                  <p key={i} className="card-desc">
                    {para}
                  </p>
                ))}
              </div>
            </div>
            <img
              src={data.rightImgSrc}
              alt="Create"
              className="card-img"
            />
          </div>
        </section>
      );
    }

    return null;
  }
);

export default function App() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [leftContent, setLeftContent] = useState({
    title: "",
    paragraphs: [],
  });

  const sectionRefs = useRef([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const onFormSubmit = () => {
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    setLeftContent({
      title: `Hello, ${formData.username}!`,
      paragraphs: [
        `Your email: ${formData.email}`,
        "Your password is securely stored.",
        "Thanks for signing up!",
      ],
    });

    alert("Form submitted! Left content updated.");
  };

  return (
    <div className="app-container">
      <nav className="navbar-simple">
        <span className="brand">ModernApp</span>
        <div className="nav-links">
          {sectionsData.map((section, i) => (
            <button
              key={section.id}
              onClick={() =>
                window.scrollTo({ top: i * window.innerHeight, behavior: "smooth" })
              }
              className="nav-btn-simple"
            >
              {section.id.charAt(0).toUpperCase() + section.id.slice(1)}
            </button>
          ))}
        </div>
      </nav>

      {sectionsData.map((section, i) => (
        <Section
          key={section.id}
          data={section}
          ref={(el) => (sectionRefs.current[i] = el)}
          formData={formData}
          setFormData={setFormData}
          onFormSubmit={onFormSubmit}
          leftContent={leftContent}
        />
      ))}
    </div>
  );
}
