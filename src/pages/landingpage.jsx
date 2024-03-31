import React, { useState, useEffect } from "react";
const Landing = () => {
  const [showFeatures, setShowFeatures] = useState(false);
  const staggered = true;
  const alignment = "left";
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const handleScroll = () => {
    const scrollPosition = window.pageYOffset;
    const windowHeight = window.innerHeight;
    const triggerHeight = windowHeight * 0.8;
    if (scrollPosition > triggerHeight && !showFeatures) {
      setShowFeatures(true);
    }
  };
  return (
    <div
      style={{
        backgroundColor: "#000000",
        color: "#ffffff",
        height: "100vh",
        width: "100vw",
        overflow: "auto",
      }}
    >
      {" "}
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "60px",
          padding: "0 20px",
          background: "#000000",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
        }}
      >
        {" "}
        <div style={{ display: "flex", alignItems: "center" }}>
          {" "}
          <img
            src="/header_logo.png"
            alt="Kamari Logo"
            style={{ height: "40px" }}
          />{" "}
          <h1 style={{ marginLeft: "10px", fontSize: "24px" }}>Kamari</h1>{" "}
        </div>{" "}
        <nav style={{ display: "flex" }}>
          {" "}
          <a
            href="#"
            style={{
              marginRight: "20px",
              color: "#ffffff",
              textDecoration: "none",
              outline: "none",
            }}
          >
            Signup
          </a>{" "}
          <a
            href="#"
            style={{
              marginRight: "20px",
              color: "#ffffff",
              textDecoration: "none",
              outline: "none",
            }}
          >
            Pricing
          </a>{" "}
          <div style={{ position: "relative" }}>
            {" "}
            <a
              href="#"
              style={{
                color: "#ffffff",
                textDecoration: "none",
                outline: "none",
              }}
            >
              Features
            </a>{" "}
            <div
              style={{
                position: "absolute",
                top: "100%",
                left: 0,
                background: "#000000",
                padding: "10px",
                display: "none",
              }}
            >
              {" "}
              <a
                href="#client-management"
                style={{
                  display: "block",
                  color: "#ffffff",
                  textDecoration: "none",
                  outline: "none",
                }}
              >
                Client Management
              </a>{" "}
              <a
                href="#task-management"
                style={{
                  display: "block",
                  color: "#ffffff",
                  textDecoration: "none",
                  outline: "none",
                }}
              >
                Task Management
              </a>{" "}
              <a
                href="#invoicing"
                style={{
                  display: "block",
                  color: "#ffffff",
                  textDecoration: "none",
                  outline: "none",
                }}
              >
                Invoicing
              </a>{" "}
            </div>{" "}
          </div>{" "}
        </nav>{" "}
      </header>{" "}
      <main>
        {" "}
        <section
          style={{
            display: "flex",
            alignItems:
              alignment === "left"
                ? "flex-start"
                : alignment === "right"
                ? "flex-end"
                : "center",
            justifyContent: "center",
            height: "100vh",
            padding: "20px",
          }}
        >
          {" "}
          <div style={{ maxWidth: "600px", textAlign: alignment }}>
            {" "}
            <h2 style={{ fontSize: "36px" }}>
              Streamline Your Freelance Business
            </h2>{" "}
            <p style={{ fontSize: "18px" }}>
              Kamari Teams is a comprehensive time tracking, task management,
              and invoicing tool designed specifically for freelancers.
              Effortlessly invite clients, track time against tasks, send
              invoices for hours worked, and allow clients to manage their
              product pipeline via task management.
            </p>{" "}
            <button
              style={{
                background: "#ffffff",
                color: "#000000",
                padding: "10px 20px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                outline: "none",
              }}
            >
              Get Started
            </button>{" "}
          </div>{" "}
          <img
            src="/hero_image.png"
            alt="Hero Image"
            style={{ maxWidth: "500px" }}
          />{" "}
        </section>{" "}
        {showFeatures && (
          <section style={{ padding: "20px" }}>
            {" "}
            <h2 style={{ fontSize: "36px", textAlign: "center" }}>
              Features
            </h2>{" "}
            <div
              style={{
                display: "flex",
                flexDirection: staggered ? "column" : "row",
                justifyContent: "space-between",
              }}
            >
              {" "}
              <div
                style={{
                  maxWidth: "400px",
                  textAlign: staggered ? alignment : "center",
                  marginBottom: staggered ? "40px" : 0,
                }}
              >
                {" "}
                <h3 style={{ fontSize: "24px" }}>Client Management</h3>{" "}
                <p style={{ fontSize: "18px" }}>
                  Effortlessly manage your client relationships with Kamari
                  Teams' powerful client management tools. Invite clients,
                  assign tasks, and streamline communication, ensuring seamless
                  collaboration and project success.
                </p>{" "}
                <img
                  src="/client_management_image.png"
                  alt="Client Management"
                  style={{ maxWidth: "100%" }}
                />{" "}
              </div>{" "}
              <div
                style={{
                  maxWidth: "400px",
                  textAlign: staggered
                    ? alignment === "left"
                      ? "right"
                      : "left"
                    : "center",
                  marginBottom: staggered ? "40px" : 0,
                }}
              >
                {" "}
                <h3 style={{ fontSize: "24px" }}>Task Management</h3>{" "}
                <p style={{ fontSize: "18px" }}>
                  Stay on top of your projects with Kamari Teams' intuitive task
                  management system. Create, assign, and track tasks, ensuring
                  nothing falls through the cracks and deadlines are met with
                  ease.
                </p>{" "}
                <img
                  src="/task_management_image.png"
                  alt="Task Management"
                  style={{ maxWidth: "100%" }}
                />{" "}
              </div>{" "}
              <div
                style={{
                  maxWidth: "400px",
                  textAlign: staggered ? alignment : "center",
                }}
              >
                {" "}
                <h3 style={{ fontSize: "24px" }}>Invoicing</h3>{" "}
                <p style={{ fontSize: "18px" }}>
                  Get paid seamlessly with Kamari Teams' integrated invoicing
                  system, powered by Stripe. Send professional invoices for
                  hours worked, and enjoy hassle-free payments without any
                  platform fees.
                </p>{" "}
                <img
                  src="/invoicing_image.png"
                  alt="Invoicing"
                  style={{ maxWidth: "100%" }}
                />{" "}
              </div>{" "}
            </div>{" "}
          </section>
        )}{" "}
      </main>{" "}
      <footer
        style={{
          background: "#000000",
          color: "#ffffff",
          padding: "20px",
          textAlign: "center",
        }}
      >
        {" "}
        <img
          src="/footer_logo.png"
          alt="Kamari Logo"
          style={{ height: "40px" }}
        />{" "}
        <p style={{ fontSize: "14px" }}>
          © {new Date().getFullYear()} Kamari Teams. All rights reserved.
        </p>{" "}
      </footer>{" "}
    </div>
  );
};
export default Landing;
