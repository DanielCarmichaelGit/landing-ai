import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/dashboard";
import store from './State-Management/store';
import { Provider } from 'react-redux';
import Header from './components/reusable/Header';
import Profile from "./pages/profile";
import Create from "./pages/create";
import Hosting from "./pages/hosting";
import LandingPage from "./components/features/Testing";

function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  useEffect(() => {
    console.log(user);
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.clear();
    }
  }, [user]);

  const routesAllowedWithoutUser = ["/signup", "/login", "/testing"]

  const isAuthRoute = routesAllowedWithoutUser.some((endpoint) => endpoint === window.location.pathname);

  useEffect(() => {
    if (!user || !user.token) {
      if (!isAuthRoute) {
        window.location.href = "/landing.html";
      }
    }
  }, [user, isAuthRoute]);

  return (
    <Provider store={store}>
      {user && user.token && !isAuthRoute && <Header setUser={setUser} />}
      <Routes>
        <Route path="/signup" element={<Signup setUser={setUser} />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/create" element={<Create />} />
        <Route path="/hosting" element={<Hosting />} />
        <Route path="/testing" element={<LandingPage />} />
      </Routes>
    </Provider>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;


{/* <okay_response>
<reason>
over 300 lines long and has decent styling. But, lacks generated copy
</reason>
import React from "react";
import { ArrowForward, Code, Devices, Mail } from "@mui/icons-material";

const LandingPage = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundColor: "#fff",
        color: "#333",
      }}
    >
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1rem 2rem",
          backgroundColor: "#fff",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <h1 style={{ margin: 0, fontSize: "1.5rem" }}>Mortecai</h1>
        </div>
        <div>
          <button
            style={{
              backgroundColor: "#9013fe",
              color: "#fff",
              border: "none",
              padding: "0.5rem 1rem",
              borderRadius: "4px",
              cursor: "pointer",
              marginLeft: "1rem",
            }}
          >
            Get Started
          </button>
        </div>
      </header>

      <main style={{ flex: 1 }}>
        <section
          style={{
            display: "flex",
            alignItems: "flex-start",
            minHeight: "100vh",
            padding: "2rem",
            backgroundColor: "#f5f5f5",
          }}
        >
          <div style={{ maxWidth: "600px" }}>
            <h2
              style={{
                fontSize: "3rem",
                fontWeight: "bold",
                marginBottom: "1rem",
                textAlign: "left",
              }}
            >
              Unleash the Power of Generative AI
            </h2>
            <p
              style={{
                fontSize: "1.2rem",
                lineHeight: "1.5",
                marginBottom: "2rem",
                textAlign: "left",
              }}
            >
              Mortecai is a generative AI solution that uses existing AI
              infrastructure, internal model training and alignment, and high
              quality source code to generate full stack web applications based
              on just a few prompts.
            </p>
            <button
              style={{
                backgroundColor: "#9013fe",
                color: "#fff",
                border: "none",
                padding: "0.8rem 1.5rem",
                borderRadius: "4px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
              }}
            >
              Get Started <ArrowForward style={{ marginLeft: "0.5rem" }} />
            </button>
          </div>
        </section>

        <section
          style={{
            padding: "4rem 2rem",
            backgroundColor: "#fff",
          }}
        >
          <h2
            style={{
              fontSize: "2rem",
              fontWeight: "bold",
              marginBottom: "2rem",
              textAlign: "left",
            }}
          >
            Features
          </h2>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "flex-start",
              marginBottom: "2rem",
            }}
          >
            <div style={{ maxWidth: "300px" }}>
              <Code style={{ fontSize: "3rem", color: "#9013fe" }} />
              <h3
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  marginBottom: "1rem",
                  textAlign: "left",
                }}
              >
                High-Quality Source Code
              </h3>
              <p
                style={{
                  fontSize: "1rem",
                  lineHeight: "1.5",
                  textAlign: "left",
                }}
              >
                Mortecai generates high-quality source code for your web
                applications, ensuring a solid foundation for your projects.
              </p>
            </div>
            <div style={{ maxWidth: "300px" }}>
              <Devices style={{ fontSize: "3rem", color: "#9013fe" }} />
              <h3
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  marginBottom: "1rem",
                  textAlign: "left",
                }}
              >
                Full Stack Web Applications
              </h3>
              <p
                style={{
                  fontSize: "1rem",
                  lineHeight: "1.5",
                  textAlign: "left",
                }}
              >
                Mortecai can generate complete full stack web applications,
                including the front-end, back-end, and database components.
              </p>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row-reverse",
              justifyContent: "space-between",
              alignItems: "flex-start",
              marginBottom: "2rem",
            }}
          >
            <div style={{ maxWidth: "300px" }}>
              <Mail style={{ fontSize: "3rem", color: "#9013fe" }} />
              <h3
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  marginBottom: "1rem",
                  textAlign: "left",
                }}
              >
                No Technical Skills Required
              </h3>
              <p
                style={{
                  fontSize: "1rem",
                  lineHeight: "1.5",
                  textAlign: "left",
                }}
              >
                Mortecai allows you to generate web applications without
                requiring any technical skills or coding knowledge.
              </p>
            </div>
            <div style={{ maxWidth: "300px" }}>
              <Code style={{ fontSize: "3rem", color: "#9013fe" }} />
              <h3
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  marginBottom: "1rem",
                  textAlign: "left",
                }}
              >
                Internal Model Training
              </h3>
              <p
                style={{
                  fontSize: "1rem",
                  lineHeight: "1.5",
                  textAlign: "left",
                }}
              >
                Mortecai uses internal model training and alignment to ensure
                that the generated code is tailored to your specific
                requirements.
              </p>
            </div>
          </div>
        </section>

        <section
          style={{
            padding: "4rem 2rem",
            backgroundColor: "#f5f5f5",
          }}
        >
          <h2
            style={{
              fontSize: "2rem",
              fontWeight: "bold",
              marginBottom: "2rem",
              textAlign: "left",
            }}
          >
            Why Choose Mortecai?
          </h2>
          <p
            style={{
              fontSize: "1.2rem",
              lineHeight: "1.5",
              marginBottom: "2rem",
              textAlign: "left",
            }}
          >
            The typical cost of building an MVP of a web app for a non-technical
            founder is between $10k and $50k. Using Mortecai, we can reduce that
            cost by a factor of 10, making it more accessible and affordable for
            everyone.
          </p>
          <p
            style={{
              fontSize: "1.2rem",
              lineHeight: "1.5",
              marginBottom: "2rem",
              textAlign: "left",
            }}
          >
            Our mission is to bring a software engineer into everyone's
            business, eliminating the need for technical skills altogether.
            Mortecai empowers you to turn your ideas into reality without
            writing a single line of code.
          </p>
        </section>
      </main>

      <footer
        style={{
          backgroundColor: "#333",
          color: "#fff",
          padding: "2rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <h3 style={{ margin: 0 }}>Stay Updated</h3>
          <p style={{ margin: "0.5rem 0" }}>
            Subscribe to our newsletter for the latest updates.
          </p>
          <input
            type="email"
            placeholder="Enter your email"
            style={{
              padding: "0.5rem",
              borderRadius: "4px",
              border: "none",
              marginRight: "0.5rem",
            }}
          />
          <button
            style={{
              backgroundColor: "#9013fe",
              color: "#fff",
              border: "none",
              padding: "0.5rem 1rem",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Subscribe
          </button>
        </div>
        <div>
          <p style={{ margin: 0 }}>
            &copy; {new Date().getFullYear()} Mortecai. All rights reserved.
          </p>
        </div>
        <div>
          <button
            style={{
              backgroundColor: "#9013fe",
              color: "#fff",
              border: "none",
              padding: "0.5rem 1rem",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Contact Us
          </button>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;


<rag_resource>
<bad_response>
<reason>
code is not 300 lines long
</reason>
import React from "react";
import { ArrowForward, Code, DesktopWindows, Rocket } from "@mui/icons-material";

const LandingPage = () => {
  const primaryColor = "#9013fe";
  const secondaryColor = "#bd10e0";
  const tertiaryColor = "#ff5367";
  const lightTheme = true;

  const headerStyles = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 2rem",
    backgroundColor: lightTheme ? "white" : "#333",
    color: lightTheme ? "#333" : "white",
  };

  const logoStyles = {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: primaryColor,
  };

  const buttonStyles = {
    backgroundColor: primaryColor,
    color: "white",
    padding: "0.5rem 1rem",
    border: "none",
    borderRadius: "0.25rem",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
  };

  const heroStyles = {
    alignItems: "flex-start",
    minHeight: "100vh",
    padding: "2rem",
    backgroundColor: lightTheme ? "white" : "#333",
    color: lightTheme ? "#333" : "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  };

  const heroTitleStyles = {
    fontSize: "3rem",
    fontWeight: "bold",
    marginBottom: "1rem",
  };

  const heroDescriptionStyles = {
    fontSize: "1.25rem",
    marginBottom: "2rem",
    maxWidth: "600px",
  };

  const featureSectionStyles = {
    padding: "2rem",
    backgroundColor: lightTheme ? "#f5f5f5" : "#444",
    color: lightTheme ? "#333" : "white",
  };

  const featureStyles = {
    display: "flex",
    alignItems: "center",
    marginBottom: "2rem",
  };

  const featureIconStyles = {
    fontSize: "2rem",
    marginRight: "1rem",
    color: primaryColor,
  };

  const featureTitleStyles = {
    fontSize: "1.5rem",
    fontWeight: "bold",
    marginBottom: "0.5rem",
  };

  const featureDescriptionStyles = {
    fontSize: "1rem",
    maxWidth: "500px",
  };

  const footerStyles = {
    padding: "2rem",
    backgroundColor: lightTheme ? "#333" : "#222",
    color: lightTheme ? "white" : "#f5f5f5",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const newsletterInputStyles = {
    padding: "0.5rem",
    border: "none",
    borderRadius: "0.25rem",
    marginRight: "0.5rem",
  };

  const newsletterButtonStyles = {
    ...buttonStyles,
    backgroundColor: tertiaryColor,
  };

  const copyrightStyles = {
    fontSize: "0.875rem",
  };

  const contactButtonStyles = {
    ...buttonStyles,
    backgroundColor: secondaryColor,
  };

  return (
    <div>
      <header style={headerStyles}>
        <div style={logoStyles}>Mortecai</div>
        <button style={buttonStyles}>
          Get Started <ArrowForward style={{ marginLeft: "0.5rem" }} />
        </button>
      </header>

      <main>
        <section style={heroStyles}>
          <h1 style={heroTitleStyles}>Unleash the Power of AI Web Development</h1>
          <p style={heroDescriptionStyles}>
            Mortecai is a generative AI solution that uses existing AI infrastructure, internal model training and alignment, and high-quality source code to generate full-stack web applications based on just a few prompts. Our mission is to bring a software engineer into everyone's business, no technical skills required.
          </p>
          <button style={buttonStyles}>
            Get Started <ArrowForward style={{ marginLeft: "0.5rem" }} />
          </button>
        </section>

        <section style={featureSectionStyles}>
          <div style={{ ...featureStyles, flexDirection: "row" }}>
            <Code style={featureIconStyles} />
            <div>
              <h3 style={featureTitleStyles}>Cutting-Edge AI Technology</h3>
              <p style={featureDescriptionStyles}>
                Mortecai leverages the latest advancements in generative AI and machine learning to create high-quality web applications tailored to your specific needs.
              </p>
            </div>
          </div>

          <div style={{ ...featureStyles, flexDirection: "row-reverse" }}>
            <DesktopWindows style={featureIconStyles} />
            <div>
              <h3 style={featureTitleStyles}>Full-Stack Web Development</h3>
              <p style={featureDescriptionStyles}>
                From the front-end user interface to the back-end server logic, Mortecai generates complete web applications ready for deployment.
              </p>
            </div>
          </div>

          <div style={{ ...featureStyles, flexDirection: "row" }}>
            <Rocket style={featureIconStyles} />
            <div>
              <h3 style={featureTitleStyles}>Accelerated Development Cycle</h3>
              <p style={featureDescriptionStyles}>
                By automating the development process, Mortecai significantly reduces the time and cost required to build web applications, allowing you to bring your ideas to life faster.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer style={footerStyles}>
        <div>
          <input
            type="email"
            placeholder="Enter your email"
            style={newsletterInputStyles}
          />
          <button style={newsletterButtonStyles}>Subscribe</button>
        </div>
        <div style={copyrightStyles}>
          &copy; {new Date().getFullYear()} Mortecai. All rights reserved.
        </div>
        <button style={contactButtonStyles}>Contact Us</button>
      </footer>
    </div>
  );
};

export default LandingPage;
</bad_response>
</rag_resource>
</okay_response> */}