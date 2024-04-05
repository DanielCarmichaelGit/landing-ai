// import React from "react";

// const LandingPage = () => {
//   return (
//     <div style={{ fontFamily: "Arial, sans-serif" }}>
//       <div
//         style={{
//           backgroundColor: "#000",
//           color: "#fff",
//           padding: "20px",
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center",
//         }}
//       >
//         <img src="logo.png" alt="CodeSandbox Logo" style={{ height: "30px" }} />
//         <div>
//           <a href="#" style={{ color: "#fff", marginLeft: "20px" }}>
//             Sign In
//           </a>
//           <a href="#" style={{ color: "#0f0", marginLeft: "20px" }}>
//             Try for free
//           </a>
//         </div>
//       </div>

//       <div
//         style={{
//           backgroundColor: "#000",
//           color: "#0f0",
//           textAlign: "center",
//           padding: "100px 20px",
//         }}
//       >
//         <h1 style={{ fontSize: "48px", marginBottom: "10px" }}>
//           Instant cloud development
//         </h1>
//         <p style={{ fontSize: "24px" }}>
//           CodeSandbox gives you 24/7 collaborative cloud development
//           environments (CDEs) that resume in 2 seconds.
//         </p>
//         <a
//           href="#"
//           style={{
//             display: "inline-block",
//             backgroundColor: "#0f0",
//             color: "#000",
//             padding: "15px 30px",
//             fontSize: "20px",
//             marginTop: "40px",
//             textDecoration: "none",
//           }}
//         >
//           Start for free
//         </a>
//         <a
//           href="#"
//           style={{ color: "#fff", display: "block", marginTop: "20px" }}
//         >
//           Schedule a demo &gt;
//         </a>
//       </div>

//       <div
//         style={{
//           backgroundColor: "#0f0",
//           color: "#000",
//           textAlign: "center",
//           padding: "80px 20px",
//         }}
//       >
//         <h2 style={{ fontSize: "36px", marginBottom: "60px" }}>
//           Meet a CDE that makes an impact
//         </h2>
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "space-around",
//             fontSize: "20px",
//           }}
//         >
//           <div>
//             <p style={{ fontSize: "36px", fontWeight: "bold" }}>5+</p>
//             <p>
//               hours saved
//               <br />
//               per developer, per week
//             </p>
//           </div>
//           <div>
//             <p style={{ fontSize: "36px", fontWeight: "bold" }}>90%</p>
//             <p>
//               reduction
//               <br />
//               in dev onboarding time
//             </p>
//           </div>
//           <div>
//             <p style={{ fontSize: "36px", fontWeight: "bold" }}>60%</p>
//             <p>
//               of cloud workloads will be built and
//               <br />
//               deployed using CDEs by 2026,
//               <br />
//               according to Gartner
//             </p>
//           </div>
//         </div>
//         <a
//           href="#"
//           style={{
//             color: "#000",
//             display: "block",
//             marginTop: "60px",
//             fontSize: "20px",
//           }}
//         >
//           Learn more about CDEs &gt;
//         </a>
//       </div>

//       <div
//         style={{
//           backgroundColor: "#000",
//           color: "#0f0",
//           textAlign: "center",
//           padding: "100px 20px",
//         }}
//       >
//         <h2 style={{ fontSize: "36px", marginBottom: "20px" }}>
//           One environment for the whole team.
//         </h2>
//         <p style={{ fontSize: "24px", marginBottom: "60px" }}>
//           Get always consistent development environments that boost productivity
//           and empower collaboration.
//         </p>
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "space-around",
//             color: "#fff",
//             textAlign: "left",
//             fontSize: "18px",
//           }}
//         >
//           <div>
//             <p>Faster than local</p>
//             <p>
//               Get rid of slow build times and time lost in context-switching.
//               Our powerful VMs run your code up to 200x faster than local and
//               resume any project in 2 seconds.
//             </p>
//           </div>
//           <div>
//             <p>Works on everyone's machine</p>
//             <p>
//               Instead of putting each developer's machine in the cloud, we run
//               each branch on a centralized CDE that gives everyone the same
//               experience.
//             </p>
//           </div>
//           <div>
//             <p>Collaborative 24/7</p>
//             <p>
//               CodeSandbox is the only fully collaborative CDE. Your entire team
//               can connect to the same environment and code live, together,
//               anytime.
//             </p>
//           </div>
//           <div>
//             <p>Reliable and secure</p>
//             <p>
//               We keep your code always private and secure. You get flexible
//               permissions, access control, security monitoring, private npm, and
//               more.
//             </p>
//           </div>
//         </div>
//         <a
//           href="#"
//           style={{
//             display: "inline-block",
//             backgroundColor: "#0f0",
//             color: "#000",
//             padding: "15px 30px",
//             fontSize: "20px",
//             marginTop: "60px",
//             textDecoration: "none",
//           }}
//         >
//           Start for free &gt;
//         </a>
//       </div>

//       <div
//         style={{
//           backgroundColor: "#0f0",
//           color: "#000",
//           textAlign: "center",
//           padding: "80px 20px",
//         }}
//       >
//         <h2 style={{ fontSize: "36px", marginBottom: "20px" }}>
//           Accelerate your git workflow.
//         </h2>
//         <p style={{ fontSize: "24px", marginBottom: "40px" }}>
//           Shorten the review cycle with an all-in-one platform for efficient
//           code reviews.
//         </p>
//         <div
//           style={{
//             backgroundColor: "#000",
//             color: "#0f0",
//             padding: "20px",
//             width: "80%",
//             margin: "0 auto",
//           }}
//         >
//           <p>Test: add quick close button to sidekick items #2251</p>
//           <p>
//             @aMoorJasper wants to merge 1 commit into main from
//             draft/recurring-satoshi
//           </p>
//         </div>
//         <p style={{ marginTop: "20px" }}>
//           Every PR and branch is a URL.
//           <br />
//           Get a cloud dev environment for every PR that starts in 2 seconds and
//           integrates all code review tooling into a single platform.
//         </p>
//         <p style={{ marginTop: "40px" }}>
//           Sorry if this might come across a bit pushy, but it took me 15 minutes
//           to implement and probably feedback on this idea.
//         </p>
//       </div>

//       <div
//         style={{
//           backgroundColor: "#000",
//           color: "#0f0",
//           textAlign: "center",
//           padding: "100px 20px",
//         }}
//       >
//         <h2 style={{ fontSize: "36px", marginBottom: "20px" }}>
//           Integrate seamlessly with your dev setup.
//         </h2>
//         <p style={{ fontSize: "24px", marginBottom: "60px" }}>
//           Get all the benefits of cloud development working flawlessly alongside
//           your current setup.
//         </p>
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "space-around",
//             color: "#fff",
//             textAlign: "left",
//             fontSize: "18px",
//           }}
//         >
//           <div>
//             <p>Use the editor of your choice</p>
//             <p>
//               Switch between VS Code and our web editor to keep coding and
//               collaborating without skipping a beat.
//             </p>
//             <a
//               href="#"
//               style={{ color: "#0f0", display: "block", marginTop: "10px" }}
//             >
//               VS Code Extension &gt;
//             </a>
//           </div>
//           <div>
//             <p>GitHub integration</p>
//             <p>
//               Review PRs in record time and get automatic deployment previews.
//             </p>
//             <a
//               href="#"
//               style={{ color: "#0f0", display: "block", marginTop: "10px" }}
//             >
//               Install our GitHub App &gt;
//             </a>
//           </div>
//           <div>
//             <p>Pre-configured environments</p>
//             <p>
//               We use Dev Containers to pre-configure your environments with all
//               the required tools, libraries and dependencies, so you can skip
//               the setup and start coding.
//             </p>
//             <a
//               href="#"
//               style={{ color: "#0f0", display: "block", marginTop: "10px" }}
//             >
//               Learn more &gt;
//             </a>
//           </div>
//         </div>
//       </div>

//       <div
//         style={{
//           backgroundColor: "#0f0",
//           color: "#000",
//           textAlign: "center",
//           padding: "150px 20px 100px",
//         }}
//       >
//         <h2 style={{ fontSize: "48px", marginBottom: "40px" }}>
//           Join the future
//           <br />
//           of building
//         </h2>
//         <a
//           href="#"
//           style={{
//             display: "inline-block",
//             backgroundColor: "#000",
//             color: "#0f0",
//             padding: "15px 30px",
//             fontSize: "20px",
//             marginRight: "40px",
//             textDecoration: "none",
//           }}
//         >
//           Start for free
//         </a>
//         <a href="#" style={{ color: "#000", fontSize: "20px" }}>
//           Request demo &gt;
//         </a>
//         <img
//           src="editor-screenshot.png"
//           alt="Editor Screenshot"
//           style={{ width: "80%", marginTop: "60px" }}
//         />
//       </div>

//       <div
//         style={{
//           backgroundColor: "#000",
//           color: "#fff",
//           fontSize: "14px",
//           padding: "40px 20px",
//           display: "flex",
//           flexWrap: "wrap",
//           justifyContent: "space-between",
//         }}
//       >
//         <div style={{ display: "flex", flexDirection: "column" }}>
//           <a href="#" style={{ color: "#fff", marginBottom: "10px" }}>
//             Use Cases
//           </a>
//           <a href="#" style={{ color: "#fff", marginBottom: "10px" }}>
//             Cloud Dev Environments
//           </a>
//           <a href="#" style={{ color: "#fff", marginBottom: "10px" }}>
//             Code Reviews
//           </a>
//           <a href="#" style={{ color: "#fff", marginBottom: "10px" }}>
//             Code in Sandboxes
//           </a>
//           <a href="#" style={{ color: "#fff", marginBottom: "10px" }}>
//             Learn & Experiment
//           </a>
//           <a href="#" style={{ color: "#fff", marginBottom: "10px" }}>
//             Coding Exercises
//           </a>
//           <a href="#" style={{ color: "#fff", marginBottom: "10px" }}>
//             Instant Feedback
//           </a>
//         </div>
//         <div style={{ display: "flex", flexDirection: "column" }}>
//           <a href="#" style={{ color: "#fff", marginBottom: "10px" }}>
//             Ecosystem
//           </a>
//           <a href="#" style={{ color: "#fff", marginBottom: "10px" }}>
//             Features
//           </a>
//           <a href="#" style={{ color: "#fff", marginBottom: "10px" }}>
//             VS Code Extension
//           </a>
//           <a href="#" style={{ color: "#fff", marginBottom: "10px" }}>
//             Sandpack
//           </a>
//           <a href="#" style={{ color: "#fff", marginBottom: "10px" }}>
//             Status
//           </a>
//           <a href="#" style={{ color: "#fff", marginBottom: "10px" }}>
//             Enterprise
//           </a>
//           <a href="#" style={{ color: "#fff", marginBottom: "10px" }}>
//             Pricing
//           </a>
//         </div>
//         <div style={{ display: "flex", flexDirection: "column" }}>
//           <a href="#" style={{ color: "#fff", marginBottom: "10px" }}>
//             Explore
//           </a>
//           <a href="#" style={{ color: "#fff", marginBottom: "10px" }}>
//             Discover
//           </a>
//           <a href="#" style={{ color: "#fff", marginBottom: "10px" }}>
//             Changelog
//           </a>
//           <a href="#" style={{ color: "#fff", marginBottom: "10px" }}>
//             Documentation
//           </a>
//           <a href="#" style={{ color: "#fff", marginBottom: "10px" }}>
//             Blog
//           </a>
//         </div>
//         <div style={{ display: "flex", flexDirection: "column" }}>
//           <a href="#" style={{ color: "#fff", marginBottom: "10px" }}>
//             Company
//           </a>
//           <a href="#" style={{ color: "#fff", marginBottom: "10px" }}>
//             About
//           </a>
//           <a href="#" style={{ color: "#fff", marginBottom: "10px" }}>
//             Support
//           </a>
//           <a href="#" style={{ color: "#fff", marginBottom: "10px" }}>
//             Careers
//           </a>
//           <a href="#" style={{ color: "#fff", marginBottom: "10px" }}>
//             Brand Kit
//           </a>
//         </div>
//       </div>

//       <div
//         style={{
//           backgroundColor: "#000",
//           color: "#fff",
//           fontSize: "12px",
//           padding: "20px",
//           textAlign: "center",
//         }}
//       >
//         <p>&copy; 2023 CodeSandbox B.V. All rights reserved.</p>
//         <a href="#" style={{ color: "#fff" }}>
//           Terms of Use
//         </a>
//         <span style={{ margin: "0 5px" }}>|</span>
//         <a href="#" style={{ color: "#fff" }}>
//           Privacy & Cookie Policy
//         </a>
//       </div>
//     </div>
//   );
// };

// export default LandingPage;

// -------------------

// const LandingPage = () => {
//   return (
//     <div style={{ fontFamily: "Arial, sans-serif" }}>
//       <nav
//         style={{
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center",
//           padding: "20px",
//           backgroundColor: "black",
//           color: "white",
//         }}
//       >
//         <img src="logo.png" alt="CodeSandbox Logo" style={{ height: "30px" }} />
//         <div style={{ display: "flex", gap: "20px" }}>
//           <a href="#" style={{ color: "white", textDecoration: "none" }}>
//             Features
//           </a>
//           <a href="#" style={{ color: "white", textDecoration: "none" }}>
//             Use Cases
//           </a>
//           <a href="#" style={{ color: "white", textDecoration: "none" }}>
//             Resources
//           </a>
//           <a href="#" style={{ color: "white", textDecoration: "none" }}>
//             Docs
//           </a>
//           <a href="#" style={{ color: "white", textDecoration: "none" }}>
//             Support
//           </a>
//           <a href="#" style={{ color: "white", textDecoration: "none" }}>
//             Enterprise
//           </a>
//           <a href="#" style={{ color: "white", textDecoration: "none" }}>
//             Pricing
//           </a>
//         </div>
//         <div>
//           <button
//             style={{
//               backgroundColor: "transparent",
//               color: "white",
//               border: "1px solid white",
//               padding: "10px 20px",
//               marginRight: "10px",
//             }}
//           >
//             Sign In
//           </button>
//           <button
//             style={{
//               backgroundColor: "white",
//               color: "black",
//               border: "none",
//               padding: "10px 20px",
//             }}
//           >
//             Try for free
//           </button>
//         </div>
//       </nav>

//       <section
//         style={{
//           backgroundColor: "black",
//           color: "white",
//           textAlign: "center",
//           padding: "100px 20px",
//         }}
//       >
//         <p style={{ color: "#1EAB5B" }}>New</p>
//         <h1 style={{ fontSize: "48px", margin: "20px 0" }}>
//           Instant cloud development
//         </h1>
//         <p style={{ fontSize: "24px", margin: "20px 0" }}>
//           CodeSandbox gives you 24/7 collaborative cloud development
//           environments (CDEs) that resume in 2 seconds.
//         </p>
//         <button
//           style={{
//             backgroundColor: "#1EAB5B",
//             color: "white",
//             border: "none",
//             padding: "15px 30px",
//             fontSize: "18px",
//             marginRight: "20px",
//           }}
//         >
//           Start for free
//         </button>
//         <button
//           style={{
//             backgroundColor: "transparent",
//             color: "white",
//             border: "1px solid white",
//             padding: "15px 30px",
//             fontSize: "18px",
//           }}
//         >
//           Schedule a demo
//         </button>
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "center",
//             marginTop: "40px",
//           }}
//         >
//           <img
//             src="company-logo-1.png"
//             alt="Company Logo"
//             style={{ height: "30px", margin: "0 20px" }}
//           />
//           <img
//             src="company-logo-2.png"
//             alt="Company Logo"
//             style={{ height: "30px", margin: "0 20px" }}
//           />
//           <img
//             src="company-logo-3.png"
//             alt="Company Logo"
//             style={{ height: "30px", margin: "0 20px" }}
//           />
//           <img
//             src="company-logo-4.png"
//             alt="Company Logo"
//             style={{ height: "30px", margin: "0 20px" }}
//           />
//           <img
//             src="company-logo-5.png"
//             alt="Company Logo"
//             style={{ height: "30px", margin: "0 20px" }}
//           />
//           <img
//             src="company-logo-6.png"
//             alt="Company Logo"
//             style={{ height: "30px", margin: "0 20px" }}
//           />
//           <img
//             src="company-logo-7.png"
//             alt="Company Logo"
//             style={{ height: "30px", margin: "0 20px" }}
//           />
//         </div>
//       </section>

//       <section
//         style={{
//           backgroundColor: "#F3F4F6",
//           textAlign: "center",
//           padding: "100px 20px",
//         }}
//       >
//         <h2 style={{ fontSize: "36px", margin: "0 0 20px" }}>
//           Meet a CDE that makes an impact
//         </h2>
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "center",
//             gap: "40px",
//             marginTop: "60px",
//           }}
//         >
//           <div>
//             <h3 style={{ fontSize: "48px", margin: "0", color: "#1EAB5B" }}>
//               5+
//             </h3>
//             <p style={{ fontSize: "18px" }}>
//               hours saved per developer, per week
//             </p>
//           </div>
//           <div>
//             <h3 style={{ fontSize: "48px", margin: "0", color: "#1EAB5B" }}>
//               90%
//             </h3>
//             <p style={{ fontSize: "18px" }}>reduction in dev onboarding time</p>
//           </div>
//           <div>
//             <h3 style={{ fontSize: "48px", margin: "0", color: "#1EAB5B" }}>
//               60%
//             </h3>
//             <p style={{ fontSize: "18px" }}>
//               of cloud workloads will be built and deployed using CDEs by 2026,
//               according to Gartner
//             </p>
//           </div>
//         </div>
//         <button
//           style={{
//             backgroundColor: "black",
//             color: "white",
//             border: "none",
//             padding: "15px 30px",
//             fontSize: "18px",
//             marginTop: "40px",
//           }}
//         >
//           Learn more about CDEs
//         </button>
//       </section>

//       <section
//         style={{
//           backgroundColor: "black",
//           color: "white",
//           textAlign: "center",
//           padding: "100px 20px",
//         }}
//       >
//         <h2 style={{ fontSize: "36px", margin: "0 0 20px" }}>
//           One environment for the whole team.
//         </h2>
//         <p style={{ fontSize: "24px", margin: "20px 0" }}>
//           Get always consistent development environments that boost productivity
//           and empower collaboration.
//         </p>
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "center",
//             gap: "40px",
//             marginTop: "60px",
//           }}
//         >
//           <div style={{ textAlign: "center" }}>
//             <div
//               style={{
//                 backgroundColor: "#1EAB5B",
//                 borderRadius: "50%",
//                 width: "60px",
//                 height: "60px",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 margin: "0 auto 20px",
//               }}
//             >
//               <img src="icon-1.png" alt="Icon" style={{ width: "30px" }} />
//             </div>
//             <h3 style={{ fontSize: "24px", margin: "0 0 10px" }}>
//               Faster than local
//             </h3>
//             <p style={{ fontSize: "18px" }}>
//               Get rid of slow build times and time lost in context-switching.
//               Our powerful VMs run your code up to 200x faster than local and
//               resume any project in 2 seconds.
//             </p>
//           </div>
//           <div style={{ textAlign: "center" }}>
//             <div
//               style={{
//                 backgroundColor: "#1EAB5B",
//                 borderRadius: "50%",
//                 width: "60px",
//                 height: "60px",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 margin: "0 auto 20px",
//               }}
//             >
//               <img src="icon-2.png" alt="Icon" style={{ width: "30px" }} />
//             </div>
//             <h3 style={{ fontSize: "24px", margin: "0 0 10px" }}>
//               Works on everyone's machine
//             </h3>
//             <p style={{ fontSize: "18px" }}>
//               Instead of putting each developer's machine in the cloud, we run
//               each branch on a centralized CDE that gives everyone the same
//               experience.
//             </p>
//           </div>
//           <div style={{ textAlign: "center" }}>
//             <div
//               style={{
//                 backgroundColor: "#1EAB5B",
//                 borderRadius: "50%",
//                 width: "60px",
//                 height: "60px",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 margin: "0 auto 20px",
//               }}
//             >
//               <img src="icon-3.png" alt="Icon" style={{ width: "30px" }} />
//             </div>
//             <h3 style={{ fontSize: "24px", margin: "0 0 10px" }}>
//               Collaborative 24/7
//             </h3>
//             <p style={{ fontSize: "18px" }}>
//               CodeSandbox is the only fully collaborative CDE. Your entire team
//               can connect to the same environment and code live, together,
//               anytime.
//             </p>
//           </div>
//           <div style={{ textAlign: "center" }}>
//             <div
//               style={{
//                 backgroundColor: "#1EAB5B",
//                 borderRadius: "50%",
//                 width: "60px",
//                 height: "60px",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 margin: "0 auto 20px",
//               }}
//             >
//               <img src="icon-4.png" alt="Icon" style={{ width: "30px" }} />
//             </div>
//             <h3 style={{ fontSize: "24px", margin: "0 0 10px" }}>
//               Reliable and secure
//             </h3>
//             <p style={{ fontSize: "18px" }}>
//               We keep your code always private and secure. You get flexible
//               permissions, access control, security monitoring, private npm, and
//               more.
//             </p>
//           </div>
//         </div>
//         <button
//           style={{
//             backgroundColor: "#1EAB5B",
//             color: "white",
//             border: "none",
//             padding: "15px 30px",
//             fontSize: "18px",
//             marginTop: "40px",
//           }}
//         >
//           Start for free
//         </button>
//       </section>

//       <section
//         style={{
//           backgroundColor: "#F3F4F6",
//           textAlign: "center",
//           padding: "100px 20px",
//         }}
//       >
//         <h2 style={{ fontSize: "36px", margin: "0 0 20px" }}>
//           Accelerate your git workflow.
//         </h2>
//         <p style={{ fontSize: "24px", margin: "20px 0" }}>
//           Shorten the review cycle with an all-in-one platform for efficient
//           code reviews.
//         </p>
//         <div
//           style={{
//             backgroundColor: "white",
//             padding: "20px",
//             borderRadius: "10px",
//             maxWidth: "600px",
//             margin: "40px auto",
//             textAlign: "left",
//           }}
//         >
//           <div
//             style={{
//               display: "flex",
//               alignItems: "center",
//               gap: "10px",
//               marginBottom: "10px",
//             }}
//           >
//             <img
//               src="icon-terminal.png"
//               alt="Terminal Icon"
//               style={{ width: "20px" }}
//             />
//             <span>Open</span>
//           </div>
//           <img
//             src="code-snippet.png"
//             alt="Code Snippet"
//             style={{ width: "100%", borderRadius: "5px" }}
//           />
//           <p style={{ color: "gray", fontSize: "14px", marginTop: "10px" }}>
//             Sorry if this might come across a bit pushy, but it took me 15
//             minutes to implement and probably feedback on this idea.
//           </p>
//         </div>
//         <p style={{ fontSize: "18px", margin: "20px 0" }}>
//           Every PR and branch is a URL. Get a cloud dev environment for every PR
//           that starts in 2 seconds and integrates all code review tooling into a
//           single platform.
//         </p>
//         <button
//           style={{
//             backgroundColor: "black",
//             color: "white",
//             border: "none",
//             padding: "15px 30px",
//             fontSize: "18px",
//             marginTop: "20px",
//           }}
//         >
//           Learn more
//         </button>
//       </section>

//       <section
//         style={{
//           backgroundColor: "black",
//           color: "white",
//           textAlign: "center",
//           padding: "100px 20px",
//         }}
//       >
//         <h2 style={{ fontSize: "36px", margin: "0 0 20px" }}>Plug and Play</h2>
//         <p style={{ fontSize: "24px", margin: "20px 0" }}>
//           Integrate seamlessly with your dev setup.
//         </p>
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "center",
//             gap: "40px",
//             marginTop: "60px",
//           }}
//         >
//           <div style={{ textAlign: "center" }}>
//             <div
//               style={{
//                 backgroundColor: "#1EAB5B",
//                 borderRadius: "50%",
//                 width: "60px",
//                 height: "60px",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 margin: "0 auto 20px",
//               }}
//             >
//               <img
//                 src="icon-code.png"
//                 alt="Code Icon"
//                 style={{ width: "30px" }}
//               />
//             </div>
//             <h3 style={{ fontSize: "24px", margin: "0 0 10px" }}>
//               Use the editor of your choice
//             </h3>
//             <p style={{ fontSize: "18px" }}>
//               Switch between VS Code and our web editor to keep coding and
//               collaborating without skipping a beat.
//             </p>
//             <a href="#" style={{ color: "#1EAB5B" }}>
//               VS Code Extension
//             </a>
//           </div>
//           <div style={{ textAlign: "center" }}>
//             <div
//               style={{
//                 backgroundColor: "#1EAB5B",
//                 borderRadius: "50%",
//                 width: "60px",
//                 height: "60px",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 margin: "0 auto 20px",
//               }}
//             >
//               <img
//                 src="icon-github.png"
//                 alt="GitHub Icon"
//                 style={{ width: "30px" }}
//               />
//             </div>
//             <h3 style={{ fontSize: "24px", margin: "0 0 10px" }}>
//               GitHub integration
//             </h3>
//             <p style={{ fontSize: "18px" }}>
//               Review PRs in record time and get automatic deployment previews.
//             </p>
//             <a href="#" style={{ color: "#1EAB5B" }}>
//               Install our GitHub App
//             </a>
//           </div>
//           <div style={{ textAlign: "center" }}>
//             <div
//               style={{
//                 backgroundColor: "#1EAB5B",
//                 borderRadius: "50%",
//                 width: "60px",
//                 height: "60px",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 margin: "0 auto 20px",
//               }}
//             >
//               <img
//                 src="icon-container.png"
//                 alt="Container Icon"
//                 style={{ width: "30px" }}
//               />
//             </div>
//             <h3 style={{ fontSize: "24px", margin: "0 0 10px" }}>
//               Pre-configured environments
//             </h3>
//             <p style={{ fontSize: "18px" }}>
//               We use Dev Containers to pre-configure your environments with all
//               the required tools, libraries and dependencies, so you can skip
//               the setup and start coding.
//             </p>
//             <a href="#" style={{ color: "#1EAB5B" }}>
//               Learn more
//             </a>
//           </div>
//         </div>
//       </section>

//       <section
//         style={{
//           backgroundColor: "#1EAB5B",
//           color: "white",
//           textAlign: "center",
//           padding: "100px 20px",
//         }}
//       >
//         <h2 style={{ fontSize: "48px", margin: "0 0 20px" }}>
//           Join the future of building
//         </h2>
//         <button
//           style={{
//             backgroundColor: "#1EAB5B",
//             color: "white",
//             border: "2px solid white",
//             padding: "15px 30px",
//             fontSize: "18px",
//             marginRight: "20px",
//           }}
//         >
//           Start for free
//         </button>
//         <button
//           style={{
//             backgroundColor: "white",
//             color: "black",
//             border: "none",
//             padding: "15px 30px",
//             fontSize: "18px",
//           }}
//         >
//           Request demo
//         </button>
//       </section>

//       <footer
//         style={{
//           backgroundColor: "black",
//           color: "white",
//           padding: "60px 20px",
//           fontSize: "14px",
//         }}
//       >
//         <div
//           style={{
//             display: "flex",
//             flexWrap: "wrap",
//             gap: "40px",
//             justifyContent: "center",
//             marginBottom: "40px",
//           }}
//         >
//           <div>
//             <h3 style={{ fontSize: "18px", margin: "0 0 20px" }}>Use Cases</h3>
//             <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
//               <li style={{ margin: "10px 0" }}>
//                 <a href="#" style={{ color: "white" }}>
//                   Cloud Dev Environments
//                 </a>
//               </li>
//               <li style={{ margin: "10px 0" }}>
//                 <a href="#" style={{ color: "white" }}></a>
//               </li>
//               <li style={{ margin: "10px 0" }}>
//                 <a href="#" style={{ color: "white" }}>
//                   Code in Sandboxes
//                 </a>
//               </li>
//               <li style={{ margin: "10px 0" }}>
//                 <a href="#" style={{ color: "white" }}>
//                   Learn & Experiment
//                 </a>
//               </li>
//               <li style={{ margin: "10px 0" }}>
//                 <a href="#" style={{ color: "white" }}>
//                   Coding Exercises
//                 </a>
//               </li>
//               <li style={{ margin: "10px 0" }}>
//                 <a href="#" style={{ color: "white" }}>
//                   Instant Feedback
//                 </a>
//               </li>
//             </ul>
//           </div>
//           <div>
//             <h3 style={{ fontSize: "18px", margin: "0 0 20px" }}>Ecosystem</h3>
//             <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
//               <li style={{ margin: "10px 0" }}>
//                 <a href="#" style={{ color: "white" }}>
//                   Features
//                 </a>
//               </li>
//               <li style={{ margin: "10px 0" }}>
//                 <a href="#" style={{ color: "white" }}>
//                   VS Code Extension
//                 </a>
//               </li>
//               <li style={{ margin: "10px 0" }}>
//                 <a href="#" style={{ color: "white" }}>
//                   Sandpack
//                 </a>
//               </li>
//               <li style={{ margin: "10px 0" }}>
//                 <a href="#" style={{ color: "white" }}>
//                   Status
//                 </a>
//               </li>
//               <li style={{ margin: "10px 0" }}>
//                 <a href="#" style={{ color: "white" }}>
//                   Enterprise
//                 </a>
//               </li>
//               <li style={{ margin: "10px 0" }}>
//                 <a href="#" style={{ color: "white" }}>
//                   Pricing
//                 </a>
//               </li>
//             </ul>
//           </div>
//           <div>
//             <h3 style={{ fontSize: "18px", margin: "0 0 20px" }}>Explore</h3>
//             <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
//               <li style={{ margin: "10px 0" }}>
//                 <a href="#" style={{ color: "white" }}>
//                   Discover
//                 </a>
//               </li>
//               <li style={{ margin: "10px 0" }}>
//                 <a href="#" style={{ color: "white" }}>
//                   Changelog
//                 </a>
//               </li>
//               <li style={{ margin: "10px 0" }}>
//                 <a href="#" style={{ color: "white" }}>
//                   Documentation
//                 </a>
//               </li>
//               <li style={{ margin: "10px 0" }}>
//                 <a href="#" style={{ color: "white" }}>
//                   Blog
//                 </a>
//               </li>
//             </ul>
//           </div>
//           <div>
//             <h3 style={{ fontSize: "18px", margin: "0 0 20px" }}>Company</h3>
//             <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
//               <li style={{ margin: "10px 0" }}>
//                 <a href="#" style={{ color: "white" }}>
//                   About
//                 </a>
//               </li>
//               <li style={{ margin: "10px 0" }}>
//                 <a href="#" style={{ color: "white" }}>
//                   Support
//                 </a>
//               </li>
//               <li style={{ margin: "10px 0" }}>
//                 <a href="#" style={{ color: "white" }}>
//                   Careers
//                 </a>
//               </li>
//               <li style={{ margin: "10px 0" }}>
//                 <a href="#" style={{ color: "white" }}>
//                   Brand Kit
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//         <div style={{ textAlign: "center" }}>
//           <p>Copyright © 2023 CodeSandbox B.V. All rights reserved.</p>
//           <a href="#" style={{ color: "white", margin: "0 10px" }}>
//             Terms of Use
//           </a>
//           <a href="#" style={{ color: "white", margin: "0 10px" }}>
//             Privacy & Cookie Policy
//           </a>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default LandingPage;

// -------------------

// const LandingPage = () => {
//   return (
//     <div style={{ fontFamily: "Arial, sans-serif" }}>
//       <nav
//         style={{
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center",
//           padding: "20px",
//           backgroundColor: "black",
//           color: "white",
//         }}
//       >
//         <img src="logo.png" alt="CodeSandbox Logo" style={{ height: "30px" }} />
//         <div style={{ display: "flex", gap: "20px" }}>
//           <a href="#" style={{ color: "white", textDecoration: "none" }}>
//             Features
//           </a>
//           <a href="#" style={{ color: "white", textDecoration: "none" }}>
//             Use Cases
//           </a>
//           <a href="#" style={{ color: "white", textDecoration: "none" }}>
//             Resources
//           </a>
//           <a href="#" style={{ color: "white", textDecoration: "none" }}>
//             Docs
//           </a>
//           <a href="#" style={{ color: "white", textDecoration: "none" }}>
//             Support
//           </a>
//           <a href="#" style={{ color: "white", textDecoration: "none" }}>
//             Enterprise
//           </a>
//           <a href="#" style={{ color: "white", textDecoration: "none" }}>
//             Pricing
//           </a>
//         </div>
//         <div>
//           <button
//             style={{
//               backgroundColor: "transparent",
//               color: "white",
//               border: "1px solid white",
//               padding: "10px 20px",
//               marginRight: "10px",
//             }}
//           >
//             Sign In
//           </button>
//           <button
//             style={{
//               backgroundColor: "white",
//               color: "black",
//               border: "none",
//               padding: "10px 20px",
//             }}
//           >
//             Try for free
//           </button>
//         </div>
//       </nav>

//       <section
//         style={{
//           backgroundColor: "black",
//           color: "white",
//           textAlign: "center",
//           padding: "100px 20px",
//         }}
//       >
//         <p style={{ color: "#1EAB5B" }}>New</p>
//         <h1 style={{ fontSize: "48px", margin: "20px 0" }}>
//           Instant cloud development
//         </h1>
//         <p style={{ fontSize: "24px", margin: "20px 0" }}>
//           CodeSandbox gives you 24/7 collaborative cloud development
//           environments (CDEs) that resume in 2 seconds.
//         </p>
//         <button
//           style={{
//             backgroundColor: "#1EAB5B",
//             color: "white",
//             border: "none",
//             padding: "15px 30px",
//             fontSize: "18px",
//             marginRight: "20px",
//           }}
//         >
//           Start for free
//         </button>
//         <button
//           style={{
//             backgroundColor: "transparent",
//             color: "white",
//             border: "1px solid white",
//             padding: "15px 30px",
//             fontSize: "18px",
//           }}
//         >
//           Schedule a demo
//         </button>
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "center",
//             marginTop: "40px",
//           }}
//         >
//           <img
//             src="company-logo-1.png"
//             alt="Company Logo"
//             style={{ height: "30px", margin: "0 20px" }}
//           />
//           <img
//             src="company-logo-2.png"
//             alt="Company Logo"
//             style={{ height: "30px", margin: "0 20px" }}
//           />
//           <img
//             src="company-logo-3.png"
//             alt="Company Logo"
//             style={{ height: "30px", margin: "0 20px" }}
//           />
//           <img
//             src="company-logo-4.png"
//             alt="Company Logo"
//             style={{ height: "30px", margin: "0 20px" }}
//           />
//           <img
//             src="company-logo-5.png"
//             alt="Company Logo"
//             style={{ height: "30px", margin: "0 20px" }}
//           />
//           <img
//             src="company-logo-6.png"
//             alt="Company Logo"
//             style={{ height: "30px", margin: "0 20px" }}
//           />
//           <img
//             src="company-logo-7.png"
//             alt="Company Logo"
//             style={{ height: "30px", margin: "0 20px" }}
//           />
//         </div>
//       </section>

//       <section
//         style={{
//           backgroundColor: "#F3F4F6",
//           textAlign: "center",
//           padding: "100px 20px",
//         }}
//       >
//         <h2 style={{ fontSize: "36px", margin: "0 0 20px" }}>
//           Meet a CDE that makes an impact
//         </h2>
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "center",
//             gap: "40px",
//             marginTop: "60px",
//           }}
//         >
//           <div>
//             <h3 style={{ fontSize: "48px", margin: "0", color: "#1EAB5B" }}>
//               5+
//             </h3>
//             <p style={{ fontSize: "18px" }}>
//               hours saved per developer, per week
//             </p>
//           </div>
//           <div>
//             <h3 style={{ fontSize: "48px", margin: "0", color: "#1EAB5B" }}>
//               90%
//             </h3>
//             <p style={{ fontSize: "18px" }}>reduction in dev onboarding time</p>
//           </div>
//           <div>
//             <h3 style={{ fontSize: "48px", margin: "0", color: "#1EAB5B" }}>
//               60%
//             </h3>
//             <p style={{ fontSize: "18px" }}>
//               of cloud workloads will be built and deployed using CDEs by 2026,
//               according to Gartner
//             </p>
//           </div>
//         </div>
//         <button
//           style={{
//             backgroundColor: "black",
//             color: "white",
//             border: "none",
//             padding: "15px 30px",
//             fontSize: "18px",
//             marginTop: "40px",
//           }}
//         >
//           Learn more about CDEs
//         </button>
//       </section>

//       <section
//         style={{
//           backgroundColor: "black",
//           color: "white",
//           textAlign: "center",
//           padding: "100px 20px",
//         }}
//       >
//         <h2 style={{ fontSize: "36px", margin: "0 0 20px" }}>
//           One environment for the whole team.
//         </h2>
//         <p style={{ fontSize: "24px", margin: "20px 0" }}>
//           Get always consistent development environments that boost productivity
//           and empower collaboration.
//         </p>
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "center",
//             gap: "40px",
//             marginTop: "60px",
//           }}
//         >
//           <div style={{ textAlign: "center" }}>
//             <div
//               style={{
//                 backgroundColor: "#1EAB5B",
//                 borderRadius: "50%",
//                 width: "60px",
//                 height: "60px",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 margin: "0 auto 20px",
//               }}
//             >
//               <img src="icon-1.png" alt="Icon" style={{ width: "30px" }} />
//             </div>
//             <h3 style={{ fontSize: "24px", margin: "0 0 10px" }}>
//               Faster than local
//             </h3>
//             <p style={{ fontSize: "18px" }}>
//               Get rid of slow build times and time lost in context-switching.
//               Our powerful VMs run your code up to 200x faster than local and
//               resume any project in 2 seconds.
//             </p>
//           </div>
//           <div style={{ textAlign: "center" }}>
//             <div
//               style={{
//                 backgroundColor: "#1EAB5B",
//                 borderRadius: "50%",
//                 width: "60px",
//                 height: "60px",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 margin: "0 auto 20px",
//               }}
//             >
//               <img src="icon-2.png" alt="Icon" style={{ width: "30px" }} />
//             </div>
//             <h3 style={{ fontSize: "24px", margin: "0 0 10px" }}>
//               Works on everyone's machine
//             </h3>
//             <p style={{ fontSize: "18px" }}>
//               Instead of putting each developer's machine in the cloud, we run
//               each branch on a centralized CDE that gives everyone the same
//               experience.
//             </p>
//           </div>
//           <div style={{ textAlign: "center" }}>
//             <div
//               style={{
//                 backgroundColor: "#1EAB5B",
//                 borderRadius: "50%",
//                 width: "60px",
//                 height: "60px",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 margin: "0 auto 20px",
//               }}
//             >
//               <img src="icon-3.png" alt="Icon" style={{ width: "30px" }} />
//             </div>
//             <h3 style={{ fontSize: "24px", margin: "0 0 10px" }}>
//               Collaborative 24/7
//             </h3>
//             <p style={{ fontSize: "18px" }}>
//               CodeSandbox is the only fully collaborative CDE. Your entire team
//               can connect to the same environment and code live, together,
//               anytime.
//             </p>
//           </div>
//           <div style={{ textAlign: "center" }}>
//             <div
//               style={{
//                 backgroundColor: "#1EAB5B",
//                 borderRadius: "50%",
//                 width: "60px",
//                 height: "60px",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 margin: "0 auto 20px",
//               }}
//             >
//               <img src="icon-4.png" alt="Icon" style={{ width: "30px" }} />
//             </div>
//             <h3 style={{ fontSize: "24px", margin: "0 0 10px" }}>
//               Reliable and secure
//             </h3>
//             <p style={{ fontSize: "18px" }}>
//               We keep your code always private and secure. You get flexible
//               permissions, access control, security monitoring, private npm, and
//               more.
//             </p>
//           </div>
//         </div>
//         <button
//           style={{
//             backgroundColor: "#1EAB5B",
//             color: "white",
//             border: "none",
//             padding: "15px 30px",
//             fontSize: "18px",
//             marginTop: "40px",
//           }}
//         >
//           Start for free
//         </button>
//       </section>

//       <section
//         style={{
//           backgroundColor: "#F3F4F6",
//           textAlign: "center",
//           padding: "100px 20px",
//         }}
//       >
//         <h2 style={{ fontSize: "36px", margin: "0 0 20px" }}>
//           Accelerate your git workflow.
//         </h2>
//         <p style={{ fontSize: "24px", margin: "20px 0" }}>
//           Shorten the review cycle with an all-in-one platform for efficient
//           code reviews.
//         </p>
//         <div
//           style={{
//             backgroundColor: "white",
//             padding: "20px",
//             borderRadius: "10px",
//             maxWidth: "600px",
//             margin: "40px auto",
//             textAlign: "left",
//           }}
//         >
//           <div
//             style={{
//               display: "flex",
//               alignItems: "center",
//               gap: "10px",
//               marginBottom: "10px",
//             }}
//           >
//             <img
//               src="icon-terminal.png"
//               alt="Terminal Icon"
//               style={{ width: "20px" }}
//             />
//             <span>Open</span>
//           </div>
//           <img
//             src="code-snippet.png"
//             alt="Code Snippet"
//             style={{ width: "100%", borderRadius: "5px" }}
//           />
//           <p style={{ color: "gray", fontSize: "14px", marginTop: "10px" }}>
//             Sorry if this might come across a bit pushy, but it took me 15
//             minutes to implement and probably feedback on this idea.
//           </p>
//         </div>
//         <p style={{ fontSize: "18px", margin: "20px 0" }}>
//           Every PR and branch is a URL. Get a cloud dev environment for every PR
//           that starts in 2 seconds and integrates all code review tooling into a
//           single platform.
//         </p>
//         <button
//           style={{
//             backgroundColor: "black",
//             color: "white",
//             border: "none",
//             padding: "15px 30px",
//             fontSize: "18px",
//             marginTop: "20px",
//           }}
//         >
//           Learn more
//         </button>
//       </section>

//       <section
//         style={{
//           backgroundColor: "black",
//           color: "white",
//           textAlign: "center",
//           padding: "100px 20px",
//         }}
//       >
//         <h2 style={{ fontSize: "36px", margin: "0 0 20px" }}>Plug and Play</h2>
//         <p style={{ fontSize: "24px", margin: "20px 0" }}>
//           Integrate seamlessly with your dev setup.
//         </p>
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "center",
//             gap: "40px",
//             marginTop: "60px",
//           }}
//         >
//           <div style={{ textAlign: "center" }}>
//             <div
//               style={{
//                 backgroundColor: "#1EAB5B",
//                 borderRadius: "50%",
//                 width: "60px",
//                 height: "60px",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 margin: "0 auto 20px",
//               }}
//             >
//               <img
//                 src="icon-code.png"
//                 alt="Code Icon"
//                 style={{ width: "30px" }}
//               />
//             </div>
//             <h3 style={{ fontSize: "24px", margin: "0 0 10px" }}>
//               Use the editor of your choice
//             </h3>
//             <p style={{ fontSize: "18px" }}>
//               Switch between VS Code and our web editor to keep coding and
//               collaborating without skipping a beat.
//             </p>
//             <a href="#" style={{ color: "#1EAB5B" }}>
//               VS Code Extension
//             </a>
//           </div>
//           <div style={{ textAlign: "center" }}>
//             <div
//               style={{
//                 backgroundColor: "#1EAB5B",
//                 borderRadius: "50%",
//                 width: "60px",
//                 height: "60px",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 margin: "0 auto 20px",
//               }}
//             >
//               <img
//                 src="icon-github.png"
//                 alt="GitHub Icon"
//                 style={{ width: "30px" }}
//               />
//             </div>
//             <h3 style={{ fontSize: "24px", margin: "0 0 10px" }}>
//               GitHub integration
//             </h3>
//             <p style={{ fontSize: "18px" }}>
//               Review PRs in record time and get automatic deployment previews.
//             </p>
//             <a href="#" style={{ color: "#1EAB5B" }}>
//               Install our GitHub App
//             </a>
//           </div>
//           <div style={{ textAlign: "center" }}>
//             <div
//               style={{
//                 backgroundColor: "#1EAB5B",
//                 borderRadius: "50%",
//                 width: "60px",
//                 height: "60px",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 margin: "0 auto 20px",
//               }}
//             >
//               <img
//                 src="icon-container.png"
//                 alt="Container Icon"
//                 style={{ width: "30px" }}
//               />
//             </div>
//             <h3 style={{ fontSize: "24px", margin: "0 0 10px" }}>
//               Pre-configured environments
//             </h3>
//             <p style={{ fontSize: "18px" }}>
//               We use Dev Containers to pre-configure your environments with all
//               the required tools, libraries and dependencies, so you can skip
//               the setup and start coding.
//             </p>
//             <a href="#" style={{ color: "#1EAB5B" }}>
//               Learn more
//             </a>
//           </div>
//         </div>
//       </section>

//       <section
//         style={{
//           backgroundColor: "#1EAB5B",
//           color: "white",
//           textAlign: "center",
//           padding: "100px 20px",
//         }}
//       >
//         <h2 style={{ fontSize: "48px", margin: "0 0 20px" }}>
//           Join the future of building
//         </h2>
//         <button
//           style={{
//             backgroundColor: "#1EAB5B",
//             color: "white",
//             border: "2px solid white",
//             padding: "15px 30px",
//             fontSize: "18px",
//             marginRight: "20px",
//           }}
//         >
//           Start for free
//         </button>
//         <button
//           style={{
//             backgroundColor: "white",
//             color: "black",
//             border: "none",
//             padding: "15px 30px",
//             fontSize: "18px",
//           }}
//         >
//           Request demo
//         </button>
//       </section>

//       <footer
//         style={{
//           backgroundColor: "black",
//           color: "white",
//           padding: "60px 20px",
//           fontSize: "14px",
//         }}
//       >
//         <div
//           style={{
//             display: "flex",
//             flexWrap: "wrap",
//             gap: "40px",
//             justifyContent: "center",
//             marginBottom: "40px",
//           }}
//         >
//           <div>
//             <h3 style={{ fontSize: "18px", margin: "0 0 20px" }}>Use Cases</h3>
//             <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
//               <li style={{ margin: "10px 0" }}>
//                 <a href="#" style={{ color: "white" }}>
//                   Cloud Dev Environments
//                 </a>
//               </li>
//               <li style={{ margin: "10px 0" }}>
//                 <a href="#" style={{ color: "white" }}>
//                   Code Reviews
//                 </a>
//               </li>
//               <li style={{ margin: "10px 0" }}>
//                 <a href="#" style={{ color: "white" }}>
//                   Code in Sandboxes
//                 </a>
//               </li>
//               <li style={{ margin: "10px 0" }}>
//                 <a href="#" style={{ color: "white" }}>
//                   Learn & Experiment
//                 </a>
//               </li>
//               <li style={{ margin: "10px 0" }}>
//                 <a href="#" style={{ color: "white" }}>
//                   Coding Exercises
//                 </a>
//               </li>
//               <li style={{ margin: "10px 0" }}>
//                 <a href="#" style={{ color: "white" }}>
//                   Instant Feedback
//                 </a>
//               </li>
//             </ul>
//           </div>
//           <div>
//             <h3 style={{ fontSize: "18px", margin: "0 0 20px" }}>Ecosystem</h3>
//             <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
//               <li style={{ margin: "10px 0" }}>
//                 <a href="#" style={{ color: "white" }}>
//                   Features
//                 </a>
//               </li>
//               <li style={{ margin: "10px 0" }}>
//                 <a href="#" style={{ color: "white" }}>
//                   VS Code Extension
//                 </a>
//               </li>
//               <li style={{ margin: "10px 0" }}>
//                 <a href="#" style={{ color: "white" }}>
//                   Sandpack
//                 </a>
//               </li>
//               <li style={{ margin: "10px 0" }}>
//                 <a href="#" style={{ color: "white" }}>
//                   Status
//                 </a>
//               </li>
//               <li style={{ margin: "10px 0" }}>
//                 <a href="#" style={{ color: "white" }}>
//                   Enterprise
//                 </a>
//               </li>
//               <li style={{ margin: "10px 0" }}>
//                 <a href="#" style={{ color: "white" }}>
//                   Pricing
//                 </a>
//               </li>
//             </ul>
//           </div>
//           <div>
//             <h3 style={{ fontSize: "18px", margin: "0 0 20px" }}>Explore</h3>
//             <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
//               <li style={{ margin: "10px 0" }}>
//                 <a href="#" style={{ color: "white" }}>
//                   Discover
//                 </a>
//               </li>
//               <li style={{ margin: "10px 0" }}>
//                 <a href="#" style={{ color: "white" }}>
//                   Changelog
//                 </a>
//               </li>
//               <li style={{ margin: "10px 0" }}>
//                 <a href="#" style={{ color: "white" }}>
//                   Documentation
//                 </a>
//               </li>
//               <li style={{ margin: "10px 0" }}>
//                 <a href="#" style={{ color: "white" }}>
//                   Blog
//                 </a>
//               </li>
//             </ul>
//           </div>
//           <div>
//             <h3 style={{ fontSize: "18px", margin: "0 0 20px" }}>Company</h3>
//             <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
//               <li style={{ margin: "10px 0" }}>
//                 <a href="#" style={{ color: "white" }}>
//                   About
//                 </a>
//               </li>
//               <li style={{ margin: "10px 0" }}>
//                 <a href="#" style={{ color: "white" }}>
//                   Support
//                 </a>
//               </li>
//               <li style={{ margin: "10px 0" }}>
//                 <a href="#" style={{ color: "white" }}>
//                   Careers
//                 </a>
//               </li>
//               <li style={{ margin: "10px 0" }}>
//                 <a href="#" style={{ color: "white" }}>
//                   Brand Kit
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
//             flexWrap: "wrap",
//           }}
//         >
//           <p>Copyright © 2023 CodeSandbox B.V. All rights reserved.</p>
//           <div style={{ display: "flex", gap: "20px" }}>
//             <a href="#" style={{ color: "white" }}>
//               Terms of Use
//             </a>
//             <a href="#" style={{ color: "white" }}>
//               Privacy & Cookie Policy
//             </a>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default LandingPage;

// ----------

// import React from "react";

// const LandingPage = () => {
//   return (
//     <div
//       style={{
//         fontFamily: "Arial, sans-serif",
//         color: "#333",
//         lineHeight: 1.6,
//       }}
//     >
//       <header
//         style={{
//           background: "linear-gradient(135deg, #9013FE, #BD10E0)",
//           padding: "20px",
//           textAlign: "left",
//           position: "fixed",
//           top: 0,
//           left: 0,
//           right: 0,
//           zIndex: 1,
//         }}
//       >
//         <h1
//           style={{
//             color: "#fff",
//             margin: 0,
//             fontSize: "24px",
//             display: "inline",
//           }}
//         >
//           Kamari
//         </h1>
//         <nav style={{ float: "right" }}>
//           <a
//             href="/signup"
//             style={{
//               color: "#fff",
//               marginLeft: "20px",
//               textDecoration: "none",
//             }}
//           >
//             Sign Up
//           </a>
//           <a
//             href="/pricing"
//             style={{
//               color: "#fff",
//               marginLeft: "20px",
//               textDecoration: "none",
//             }}
//           >
//             Pricing
//           </a>
//           <div style={{ display: "inline", position: "relative" }}>
//             <a
//               href="#"
//               style={{
//                 color: "#fff",
//                 marginLeft: "20px",
//                 textDecoration: "none",
//               }}
//             >
//               Features
//             </a>
//             <div
//               style={{
//                 position: "absolute",
//                 background: "#fff",
//                 padding: "10px",
//                 borderRadius: "5px",
//                 boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
//                 display: "none",
//               }}
//             >
//               <a
//                 href="#invoicing"
//                 style={{
//                   display: "block",
//                   color: "#333",
//                   textDecoration: "none",
//                   padding: "5px 0",
//                 }}
//               >
//                 Invoicing
//               </a>
//               <a
//                 href="#client-management"
//                 style={{
//                   display: "block",
//                   color: "#333",
//                   textDecoration: "none",
//                   padding: "5px 0",
//                 }}
//               >
//                 Client Management
//               </a>
//               <a
//                 href="#time-tracking"
//                 style={{
//                   display: "block",
//                   color: "#333",
//                   textDecoration: "none",
//                   padding: "5px 0",
//                 }}
//               >
//                 Time Tracking
//               </a>
//             </div>
//           </div>
//         </nav>
//       </header>

//       <section
//         style={{
//           background: "linear-gradient(135deg, #FF5555, #BD10E0)",
//           padding: "100px 20px",
//           textAlign: "left",
//           marginTop: "70px",
//         }}
//       >
//         <div style={{ maxWidth: "800px", margin: "0 auto" }}>
//           <h2 style={{ color: "#fff", fontSize: "36px", marginBottom: "20px" }}>
//             Kamari Teams: The Ultimate Freelancer Toolkit
//           </h2>
//           <p style={{ color: "#fff", fontSize: "20px" }}>
//             Client management, task tracking, and invoicing made easy for
//             freelancers. Try it free today!
//           </p>
//           <a
//             href="/signup"
//             style={{
//               display: "inline-block",
//               background: "#fff",
//               color: "#9013FE",
//               padding: "15px 30px",
//               borderRadius: "5px",
//               textDecoration: "none",
//               marginTop: "20px",
//               fontWeight: "bold",
//             }}
//           >
//             Get Started
//           </a>
//         </div>
//       </section>

//       <section style={{ padding: "50px 20px", textAlign: "left" }}>
//         <div style={{ maxWidth: "800px", margin: "0 auto" }}>
//           <h2 style={{ color: "#333", fontSize: "30px", marginBottom: "20px" }}>
//             Say Goodbye to Freelance Chaos
//           </h2>
//           <p style={{ fontSize: "18px" }}>
//             Kamari Teams eliminates the stress of juggling multiple tools for
//             client management, task tracking, and invoicing. Our all-in-one
//             platform streamlines your freelance operation, so you can focus on
//             what matters most - delivering great work.
//           </p>

//           <div
//             style={{ display: "flex", alignItems: "center", marginTop: "40px" }}
//           >
//             <div style={{ flex: 1, marginRight: "40px" }}>
//               <img
//                 src="https://iradesign.io/gallery/illustrations/work-chat.png"
//                 alt="Collaboration"
//                 style={{ width: "100%", height: "auto" }}
//               />
//             </div>
//             <div style={{ flex: 1 }}>
//               <h3
//                 style={{
//                   color: "#9013FE",
//                   fontSize: "24px",
//                   marginBottom: "10px",
//                 }}
//               >
//                 Seamless Client Collaboration
//               </h3>
//               <p style={{ fontSize: "18px" }}>
//                 Invite clients to view project progress, leave feedback, and
//                 stay in the loop - all without leaving Kamari Teams.
//               </p>
//             </div>
//           </div>

//           <div
//             style={{ display: "flex", alignItems: "center", marginTop: "40px" }}
//           >
//             <div style={{ flex: 1 }}>
//               <h3
//                 style={{
//                   color: "#BD10E0",
//                   fontSize: "24px",
//                   marginBottom: "10px",
//                 }}
//               >
//                 Effortless Time Tracking
//               </h3>
//               <p style={{ fontSize: "18px" }}>
//                 Track time spent on tasks with just a click, and easily convert
//                 tracked time into invoices. No more guesstimating or lost hours.
//               </p>
//             </div>
//             <div style={{ flex: 1, marginLeft: "40px" }}>
//               <img
//                 src="https://iradesign.io/gallery/illustrations/time-management.png"
//                 alt="Time Tracking"
//                 style={{ width: "100%", height: "auto" }}
//               />
//             </div>
//           </div>

//           <div
//             style={{ display: "flex", alignItems: "center", marginTop: "40px" }}
//           >
//             <div style={{ flex: 1, marginRight: "40px" }}>
//               <img
//                 src="https://iradesign.io/gallery/illustrations/pay-online.png"
//                 alt="Invoicing"
//                 style={{ width: "100%", height: "auto" }}
//               />
//             </div>
//             <div style={{ flex: 1 }}>
//               <h3
//                 style={{
//                   color: "#FF5555",
//                   fontSize: "24px",
//                   marginBottom: "10px",
//                 }}
//               >
//                 Hassle-Free Invoicing
//               </h3>
//               <p style={{ fontSize: "18px" }}>
//                 Create and send professional invoices in minutes, and get paid
//                 faster with integrated Stripe payments. No fees, no fuss.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section
//         style={{
//           background: "#f7f7f7",
//           padding: "50px 20px",
//           textAlign: "center",
//         }}
//       >
//         <h2 style={{ color: "#333", fontSize: "30px", marginBottom: "40px" }}>
//           Trusted by Freelancers Worldwide
//         </h2>
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "center",
//             flexWrap: "wrap",
//           }}
//         >
//           <img
//             src="https://logoipsum.com/logo/logo-1.svg"
//             alt="Client Logo"
//             style={{ height: "30px", margin: "0 20px" }}
//           />
//           <img
//             src="https://logoipsum.com/logo/logo-2.svg"
//             alt="Client Logo"
//             style={{ height: "30px", margin: "0 20px" }}
//           />
//           <img
//             src="https://logoipsum.com/logo/logo-3.svg"
//             alt="Client Logo"
//             style={{ height: "30px", margin: "0 20px" }}
//           />
//           <img
//             src="https://logoipsum.com/logo/logo-4.svg"
//             alt="Client Logo"
//             style={{ height: "30px", margin: "0 20px" }}
//           />
//           <img
//             src="https://logoipsum.com/logo/logo-5.svg"
//             alt="Client Logo"
//             style={{ height: "30px", margin: "0 20px" }}
//           />
//         </div>
//       </section>

//       <section
//         style={{
//           background: "linear-gradient(135deg, #9013FE, #BD10E0)",
//           padding: "50px 20px",
//           textAlign: "center",
//         }}
//       >
//         <div style={{ maxWidth: "600px", margin: "0 auto" }}>
//           <h2 style={{ color: "#fff", fontSize: "36px", marginBottom: "20px" }}>
//             Get Started with Kamari Teams Today
//           </h2>
//           <p style={{ color: "#fff", fontSize: "20px", marginBottom: "40px" }}>
//             Sign up now and start streamlining your freelance operation - no
//             credit card required!
//           </p>
//           <a
//             href="/signup"
//             style={{
//               display: "inline-block",
//               background: "#fff",
//               color: "#9013FE",
//               padding: "15px 30px",
//               borderRadius: "5px",
//               textDecoration: "none",
//               fontWeight: "bold",
//             }}
//           >
//             Try it Free
//           </a>
//         </div>
//       </section>

//       <footer
//         style={{
//           background: "#333",
//           color: "#fff",
//           padding: "20px",
//           textAlign: "center",
//           fontSize: "14px",
//         }}
//       >
//         &copy; 2023 Kamari. All rights reserved.
//       </footer>
//     </div>
//   );
// };

// export default LandingPage;

// ----------

import React from "react";

const LandingPage = () => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <header
        style={{
          background: "linear-gradient(to right, #9013FE, #BD10E0)",
          color: "white",
          padding: "20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1 style={{ margin: 0, fontSize: "24px" }}>Kamari</h1>
        <nav>
          <ul
            style={{
              listStyle: "none",
              margin: 0,
              padding: 0,
              display: "flex",
            }}
          >
            <li style={{ marginRight: "20px" }}>
              <a
                href="/signup"
                style={{ color: "white", textDecoration: "none" }}
              >
                Sign Up
              </a>
            </li>
            <li style={{ marginRight: "20px" }}>
              <a
                href="/pricing"
                style={{ color: "white", textDecoration: "none" }}
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#features"
                style={{ color: "white", textDecoration: "none" }}
              >
                Features
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <section style={{ padding: "60px 20px", textAlign: "left" }}>
        <h2 style={{ fontSize: "36px", marginBottom: "20px" }}>
          The Ultimate Freelancer Toolkit
        </h2>
        <p style={{ fontSize: "18px", lineHeight: 1.6 }}>
          Kamari Teams simplifies client management, task tracking, and
          invoicing for freelancers. Invite clients to collaborate, track time,
          and send invoices seamlessly. No credit card required to get started!
        </p>
        <a
          href="/signup"
          style={{
            display: "inline-block",
            background: "#FF5555",
            color: "white",
            padding: "12px 30px",
            borderRadius: "4px",
            textDecoration: "none",
            marginTop: "20px",
          }}
        >
          Try It Free
        </a>
      </section>

      <section
        id="features"
        style={{
          background: "#f5f5f5",
          padding: "60px 20px",
          textAlign: "left",
        }}
      >
        <h2 style={{ fontSize: "30px", marginBottom: "40px" }}>Key Features</h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "40px" }}>
          <div style={{ flex: "1 1 300px" }}>
            <img
              src="https://iradesign.io/gallery/illustrations/business/business-3d-businessman-with-laptop-and-coffee.png"
              alt="Invoicing"
              style={{ width: "100%", marginBottom: "20px" }}
            />
            <h3 style={{ fontSize: "24px", marginBottom: "10px" }}>
              Effortless Invoicing
            </h3>
            <p style={{ fontSize: "16px", lineHeight: 1.6 }}>
              Create and send professional invoices in just a few clicks. Kamari
              Teams integrates with Stripe for secure, no-fee payments.
            </p>
          </div>
          <div style={{ flex: "1 1 300px" }}>
            <img
              src="https://iradesign.io/gallery/illustrations/business/business-3d-businessman-with-laptop-and-coffee.png"
              alt="Client Management"
              style={{ width: "100%", marginBottom: "20px" }}
            />
            <h3 style={{ fontSize: "24px", marginBottom: "10px" }}>
              Streamlined Client Management
            </h3>
            <p style={{ fontSize: "16px", lineHeight: 1.6 }}>
              Invite clients to collaborate on projects and keep communication
              centralized. Increase transparency and efficiency.
            </p>
          </div>
          <div style={{ flex: "1 1 300px" }}>
            <img
              src="https://iradesign.io/gallery/illustrations/business/business-3d-businessman-with-laptop-and-coffee.png"
              alt="Time Tracking"
              style={{ width: "100%", marginBottom: "20px" }}
            />
            <h3 style={{ fontSize: "24px", marginBottom: "10px" }}>
              Intuitive Time Tracking
            </h3>
            <p style={{ fontSize: "16px", lineHeight: 1.6 }}>
              Track time spent on tasks effortlessly. Generate reports to
              analyze your productivity and profitability.
            </p>
          </div>
        </div>
      </section>

      <section style={{ padding: "60px 20px", textAlign: "left" }}>
        <h2 style={{ fontSize: "30px", marginBottom: "20px" }}>
          Trusted by Freelancers Worldwide
        </h2>
        <p style={{ fontSize: "18px", lineHeight: 1.6, marginBottom: "40px" }}>
          Join the growing community of freelancers who rely on Kamari Teams to
          simplify their business operations.
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "40px",
            flexWrap: "wrap",
          }}
        >
          <img
            src="https://iradesign.io/gallery/illustrations/business/business-3d-businessman-with-laptop-and-coffee.png"
            alt="Freelancer Testimonial"
            style={{ width: "200px", borderRadius: "50%" }}
          />
          <blockquote
            style={{ flex: "1 1 500px", fontSize: "20px", fontStyle: "italic" }}
          >
            "Kamari Teams has been a game-changer for my freelance business. I
            can now manage clients, track time, and send invoices all in one
            place. It's saved me so much time and hassle!"
          </blockquote>
        </div>
      </section>

      <section
        style={{
          background: "linear-gradient(to right, #9013FE, #BD10E0)",
          color: "white",
          padding: "60px 20px",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "36px", marginBottom: "20px" }}>
          Get Started with Kamari Teams Today
        </h2>
        <p style={{ fontSize: "18px", lineHeight: 1.6, marginBottom: "40px" }}>
          Sign up now and experience the difference Kamari Teams can make for
          your freelance business. No credit card required!
        </p>
        <a
          href="/signup"
          style={{
            display: "inline-block",
            background: "white",
            color: "#9013FE",
            padding: "12px 30px",
            borderRadius: "4px",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Start Free Trial
        </a>
      </section>

      <footer
        style={{
          background: "#333",
          color: "white",
          padding: "40px 20px",
          textAlign: "center",
          fontSize: "14px",
        }}
      >
        &copy; 2023 Kamari. All rights reserved.
      </footer>
    </div>
  );
};

export default LandingPage;
