import React from "react";

const sectionStyle = {
  maxWidth: "900px",
  margin: "0 auto",
  padding: "40px 20px",
  lineHeight: "1.6",
};

const cardStyle = {
  background: "#f9f9f9",
  padding: "20px",
  borderRadius: "10px",
  marginBottom: "20px",
  boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
};

function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", color: "#333" }}>
      {/* Header */}
      <header
        style={{
          background: "#6200ea",
          color: "white",
          padding: "40px 20px",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "2.5rem" }}>Ujjwal Madawat</h1>
        <p style={{ fontSize: "1.2rem" }}>
          Machine Learning Engineer | Data Scientist | Full Stack Developer
        </p>
        <p>
          📧 ujjwalm9895@gmail.com | 📞 +91-9521456489 <br />
          🔗{" "}
          <a
            href="https://linkedin.com/in/ujjwal-madawat"
            style={{ color: "white" }}
          >
            LinkedIn
          </a>{" "}
          |{" "}
          <a
            href="https://github.com/ujjwalm9895"
            style={{ color: "white" }}
          >
            GitHub
          </a>
        </p>
      </header>

      {/* About */}
      <section style={sectionStyle}>
        <h2>About Me</h2>
        <p>
          I am a Machine Learning Engineer with 3+ years of experience in AI,
          ML, and Full-Stack Development. Skilled in building scalable ML
          solutions, deploying production-ready APIs, and working with LLMs,
          NLP, and MLOps pipelines. Passionate about solving real-world problems
          using AI.
        </p>
      </section>

      {/* Experience */}
      <section style={sectionStyle}>
        <h2>Experience</h2>
        <div style={cardStyle}>
          <h3>Indeses Pvt Ltd | Machine Learning Engineer</h3>
          <p>Nov 2022 – May 2025 | Jaipur, India</p>
          <ul>
            <li>
              Built AI solutions (OCR, Chatbots, Sentiment Analysis) using
              PyTorch, Transformers, XGBoost.
            </li>
            <li>
              Developed scalable APIs with FastAPI/Flask, Dockerized and
              deployed on AWS.
            </li>
            <li>
              Set up CI/CD pipelines (GitHub Actions, MLflow) for model
              deployment.
            </li>
            <li>
              Optimized inference latency by 30%, ensuring smooth scalability.
            </li>
          </ul>
        </div>

        <div style={cardStyle}>
          <h3>
            Go Insta Solutions Pvt Ltd | Full Stack Developer & QA Engineer
          </h3>
          <p>Dec 2021 – Oct 2022 | Kota, India</p>
          <ul>
            <li>
              Developed Django REST APIs and front-end components (HTML/CSS/JS).
            </li>
            <li>
              Automated testing with Selenium + PyTest integrated into CI.
            </li>
          </ul>
        </div>
      </section>

      {/* Projects */}
      <section style={sectionStyle}>
        <h2>Projects</h2>
        <div style={cardStyle}>
          <h3>Kalaam Chatbot for Telecom Support</h3>
          <p>
            LLMs, Hugging Face, LangChain, FAISS, FastAPI | Jun 2023 – Sep 2024
          </p>
          <p>
            Built a task-oriented telecom chatbot with RAG pipeline, prompt
            tuning, reranking, and evaluation metrics.
          </p>
        </div>
        <div style={cardStyle}>
          <h3>Sensor Fault Detection System</h3>
          <p>XGBoost, FastAPI, AWS, MongoDB | Mar 2024</p>
          <p>
            Fault classification pipeline with real-time anomaly logging,
            Dockerized deployment, and CI/CD on AWS.
          </p>
        </div>
        <div style={cardStyle}>
          <h3>Resume Analysis Tool</h3>
          <p>NLP, Transformers, Flask, Streamlit | Sep 2023</p>
          <p>
            Extracted entities from resumes with BERT + SpaCy; Flask API +
            Streamlit frontend; auto shortlisting engine.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section style={sectionStyle}>
        <h2>Skills</h2>
        <p>
          <strong>Languages:</strong> Python, SQL, Bash <br />
          <strong>Libraries:</strong> NumPy, Pandas, Matplotlib, Seaborn <br />
          <strong>Frameworks:</strong> PyTorch, TensorFlow, Scikit-learn,
          Transformers, LangChain, XGBoost <br />
          <strong>MLOps:</strong> MLflow, DVC, GitHub Actions, W&B <br />
          <strong>Deployment:</strong> FastAPI, Flask, Docker, AWS, GCP
        </p>
      </section>

      {/* Awards */}
      <section style={sectionStyle}>
        <h2>Honors & Awards</h2>
        <ul>
          <li>IBM Data Science with Honours</li>
          <li>Appreciation Award at Indeses</li>
          <li>Runner-up at Bell the Cat for CAT</li>
        </ul>
      </section>

      {/* Publications */}
      <section style={sectionStyle}>
        <h2>Publications</h2>
        <ul>
          <li>NLP: How AI Understands Human Language (Indeses Blog, 2024)</li>
          <li>AI in Autonomous Vehicles (Indeses Blog, 2024)</li>
          <li>AI in Healthcare (Indeses Blog, 2024)</li>
        </ul>
      </section>

      {/* Contact */}
      <footer
        style={{
          background: "#eee",
          padding: "20px",
          textAlign: "center",
          marginTop: "40px",
        }}
      >
        <p>📩 ujjwalm9895@gmail.com | 📞 +91-9521456489</p>
        <p>
          <a href="https://linkedin.com/in/ujjwal-madawat">LinkedIn</a> |{" "}
          <a href="https://github.com/ujjwalm9895">GitHub</a>
        </p>
        <p>© {new Date().getFullYear()} Ujjwal Madawat</p>
      </footer>
    </div>
  );
}

export default App;
