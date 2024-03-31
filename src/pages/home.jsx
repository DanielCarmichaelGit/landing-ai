import React, { useEffect, useState } from "react";
import styles from "../assets/css/Home.module.css";
import ColorPickerGroup from "../components/features/ColorPicker";
import LogoUploader from "../components/features/LogoUploader";
import Response from "../components/features/Response";
import PromptInput from "../components/reusable/Input";
import Anthropic from "@anthropic-ai/sdk";
import HeaderButtons from "../components/features/HeaderButtons";

import fetchWrapper from "../../utils/fetchWrapper";
import CodeRenderer from "../components/reusable/CodeRenderer";

export default function Home() {
  const [selectedMode, setSelectedMode] = useState("dark");
  const [industry, setIndustry] = useState(
    "Freelancer tech, Client Management, Task Management, Invoicing"
  );
  const [copy, setCopy] = useState(
    "Kamari teams is a time tracking, task management, and invoicing tool, designed for freelancers. Freelancers can invite clients, track time against tasks, send invoices for hours worked, and clients can closely manage their product pipeline via task management. Kamari teams partners with stripe to bring invoicing to every freelancer. Kamari teams takes no portion of the money earned... no platform fees ever! Get started for free with no credit card required. Don't like it? No commitment."
  );
  const [streamedInput, setStreamedInput] = useState("");
  const [response, setResponse] = useState("");
  const [primaryColor, setPrimaryColor] = useState("#000000");
  const [secondaryColor, setSecondaryColor] = useState("#000000");
  const [tertiaryColor, setTertiaryColor] = useState("#000000");
  const [isLoading, setIsLoading] = useState(false);
  const [companyName, setCompanyName] = useState("Kamari");
  const [additional, setAdditional] = useState("");
  const [initialPrompt, setInitialPrompt] = useState({});
  const [initialResponse, setInitialResponse] = useState("");
  const [errorOccured, setErrorOccured] = useState(false);
  const [headerButtons, setHeaderButtons] = useState([
    {
      type: "Select",
      text: "Signup",
      options: [],
    },
    {
      type: "Select",
      text: "Pricing",
      options: [],
    },
    {
      type: "dropdown",
      text: "Features",
      options: [
        {
          text: "Client Management",
          copy: "",
        },
        {
          text: "Task Management",
          copy: "",
        },
        {
          text: "Invoicing",
          copy: "",
        },
      ],
    },
  ]);

  useEffect(() => {
    console.log(headerButtons);
  }, [headerButtons]);

  const handlePrimaryColorChange = (newColor) => {
    setPrimaryColor(newColor.hex);
  };
  const handleSecondaryColorChange = (newColor) => {
    setSecondaryColor(newColor.hex);
  };
  const handleTertiaryColorChange = (newColor) => {
    setTertiaryColor(newColor.hex);
  };

  function selectMode(mode) {
    setSelectedMode(mode);
  }

  function createHeaderButton() {
    setHeaderButtons([
      ...headerButtons,
      {
        type: "Select",
        text: "Button Text",
        options: [],
      },
    ]);
  }

  const handleStreamedInput = async () => {
    try {
      // Send the streamed input to the server for processing
      const payload = {
        prompt: streamedInput,
        html: response,
        initialPrompt,
      };

      //setIsLoading(true);
      setStreamedInput(""); // Clear the streamed input field
      setResponse(" ");

      const { processStream } = await fetchWrapper(
        "/anthropic/modify-html/stream",
        "",
        "POST",
        { ...payload }
      );

      processStream((chunk) => {
        // Remove the "data: " tags and unnecessary whitespace from the chunk
        const cleanedChunk = removeDataTags(chunk);
        console.log(chunk);

        // Update the response state with the modified HTML
        setResponse((prevResponse) => prevResponse + chunk);
      });
    } catch (error) {
      console.error("Error:", error);
      setIsLoading(false);
    }
  };

  const updateHeaderButton = (index, updatedProps) => {
    const updatedButtons = [...headerButtons];
    updatedButtons[index] = {
      ...updatedButtons[index],
      ...updatedProps,
    };
    setHeaderButtons(updatedButtons);
  };

  function removeDataTags(text) {
    return text
      .replace(/data: /g, "")
      .replace(/\s*(\W)/g, "$1")
      .replace(/(\W)\s*/g, "$1")
      .replace(/\s+/g, " ")
      .trim();
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    console.log("yes");

    try {
      const payload = {
        prompt: {
          website_title: companyName,
          theme: selectedMode,
          colors: {
            primary: primaryColor,
            secondary: secondaryColor,
            tertiary: tertiaryColor,
          },
          header: { ...headerButtons },
          industry,
          staggered: true,
          alignment: "left",
          features: { ...headerButtons },
          // additionalSections: additional,
        },
      };

      setInitialPrompt(payload);

      setIsLoading(false);
      setInitialResponse(response); // store the initial response
      setResponse(""); // Clear the previous response

      const { processStream } = await fetchWrapper(
        "/anthropic/landing-page/stream",
        "",
        "POST",
        { ...payload }
      );

      processStream((chunk) => {
        // Remove the "data: " tags and unnecessary whitespace from the chunk
        const cleanedChunk = removeDataTags(chunk);
        console.log(chunk);

        // Update the response state by appending the cleaned chunk to the existing response
        setResponse((prevResponse) => prevResponse + chunk);
      });
    } catch (error) {
      console.error("Error:", error);
      setErrorOccured(true);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    if (errorOccured && initialResponse.length > 0) {
      setResponse(initialResponse)
    }
  }, [errorOccured, initialResponse])

  return (
    <div className={styles.Home}>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div className={styles.HomeRow}>
          {response === "" ? (
            <div className={styles.Form}>
              <PromptInput
                label={"Company Name"}
                type={"text"}
                textValue={companyName}
                handleTextChange={(e) => setCompanyName(e.target.value)}
              />
              <PromptInput
                label="What is your companies industry?"
                textValue={industry}
                handleTextChange={(e) => setIndustry(e.target.value)}
              />
              <PromptInput
                label="Any copy you want me to include?"
                type="text-area"
                textValue={copy}
                handleTextChange={(e) => setCopy(e.target.value)}
              />
              <PromptInput
                label="Any additional page sections you want me to include? Interactives?"
                type="text-area"
                textValue={additional}
                handleTextChange={(e) => setAdditional(e.target.value)}
              />
              <HeaderButtons
                headerButtons={headerButtons}
                createHeaderButton={createHeaderButton}
                updateHeaderButton={updateHeaderButton}
              />
              <LogoUploader />
              <ColorPickerGroup
                primary={primaryColor}
                secondary={secondaryColor}
                tertiary={tertiaryColor}
                setPrimary={handlePrimaryColorChange}
                setSecondary={handleSecondaryColorChange}
                setTertiary={handleTertiaryColorChange}
                mode={selectedMode}
                selectMode={selectMode}
              />
              <button onClick={handleSubmit}>Generate Landing Page</button>
            </div>
          ) : (
            <div className={styles.Form}>
              <textarea
                value={streamedInput}
                onChange={(e) => setStreamedInput(e.target.value)}
                placeholder="Enter your modifications here..."
              />
              <button onClick={handleStreamedInput}>Modify</button>
            </div>
          )}
          {response === "" ? (
            null
          ) : (
            <div className={styles.LandingPage}>
              <CodeRenderer code={response} />
            </div>
          )}
        </div>
      )}
      {/* {response === "" ? null : (
        <>
          <Response response={response} />
        </>
      )} */}
    </div>
  );
}

//<!DOCTYPE html> <html> <head> <title>Kristine</title> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <style> body { font-family: Arial, sans-serif; margin: 0; padding: 0; color: #fff; background-color: #333; } header { display: flex; justify-content: space-between; align-items: center; padding: 20px; background-color: #8b572a; max-height: 60px; } .logo { font-size: 24px; font-weight: bold; color: #fff; text-decoration: none; } nav ul { list-style-type: none; margin: 0; padding: 0; display: flex; } nav li { margin-right: 20px; } nav a { color: #fff; text-decoration: none; padding: 5px 10px; border-radius: 5px; transition: background-color 0.3s ease; } nav a:hover { background-color: #f5a623; } .dropdown { position: relative; display: inline-block; } .dropdown-content { display: none; position: absolute; background-color: #8b572a; min-width: 160px; box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2); z-index: 1; left: 0; max-width: 100vw; } .dropdown:hover .dropdown-content { display: block; } .dropdown-content a { color: #fff; padding: 12px 16px; text-decoration: none; display: block; } .dropdown-content a:hover { background-color: #f5a623; } .hero { background-image: url('https://via.placeholder.com/1500x500'); background-size: cover; background-position: center; height: 500px; display: flex; flex-direction: column; justify-content: center; align-items: flex-start; padding: 20px; } .hero h1 { font-size: 48px; margin-bottom: 20px; text-align: left; } .hero p { font-size: 18px; margin-bottom: 40px; max-width: 600px; text-align: left; } .btn { background-color: #f5a623; color: #fff; padding: 10px 20px; border-radius: 5px; text-decoration: none; transition: background-color 0.3s ease; } .btn:hover { background-color: #b8e986; } section { padding: 80px 20px; } section h2 { font-size: 36px; margin-bottom: 40px; text-align: left; } .feature { display: flex; flex-wrap: wrap; justify-content: space-between; margin-bottom: 40px; } .feature-content { flex: 1; max-width: 600px; text-align: left; } .feature-image { flex: 1; max-width: 500px; margin-left: 40px; } .feature-image img { max-width: 100%; height: auto; } .row-reverse { flex-direction: row-reverse; } .row-reverse .feature-image { margin-left: 0; margin-right: 40px; } footer { background-color: #8b572a; color: #fff; padding: 20px; text-align: center; } </style> </head> <body> <header> <a href="#" class="logo">Kristine</a> <nav> <ul> <li><a href="#">Get Cookies Now</a></li> <li><a href="#">Order Chocolate</a></li> <li class="dropdown"> <a href="#" class="dropbtn">Our Goods</a> <div class="dropdown-content"> <a href="#sweet-treats">Sweet Treats</a> <a href="#chocolates">Chocolates</a> <a href="#cakes">Cakes</a> </div> </li> </ul> </nav> </header> <div class="hero"> <h1>Kristine - Your Sweet Indulgence</h1> <p>Welcome to Kristine, where we create delectable treats that tantalize your taste buds and satisfy your sweet cravings. Explore our exquisite collection of handcrafted chocolates, decadent cakes, and irresistible sweet treats – all made with the finest ingredients and a passion for excellence.</p> <a href="#" class="btn">Order Now</a> </div> <section id="sweet-treats"> <h2>Sweet Treats</h2> <div class="feature"> <div class="feature-content"> <h3>Delightful Indulgences</h3> <p>Indulge in our irresistible sweet treats, carefully crafted to delight your senses. From melt-in-your-mouth cookies to heavenly pastries, our sweet treats are the perfect accompaniment to any occasion. Treat yourself or surprise someone special with a delightful taste of pure bliss.</p> </div> <div class="feature-image"> <img src="https://via.placeholder.com/500x300" alt="Sweet Treats"> </div> </div> </section> <section id="chocolates"> <h2>Chocolates</h2> <div class="feature row-reverse"> <div class="feature-content"> <h3>Chocolate Extravaganza</h3> <p>Indulge in our exquisite collection of handcrafted chocolates, where every bite is a journey of pure decadence. From rich dark chocolate truffles to creamy milk chocolate creations, our chocolates are crafted with the utmost care and attention to detail, ensuring an unforgettable taste experience.</p> </div> <div class="feature-image"> <img src="https://via.placeholder.com/500x300" alt="Chocolates"> </div> </div> </section> <section id="cakes"> <h2>Cakes</h2> <div class="feature"> <div class="feature-content"> <h3>Cake Masterpieces</h3> <p>Indulge in our stunning cake masterpieces, where every bite is a celebration of flavor and artistry. From classic flavors to innovative creations, our cakes are meticulously crafted to perfection, ensuring a truly memorable dessert experience for any occasion.</p> </div> <div class="feature-image"> <img src="https://via.placeholder.com/500x300" alt="Cakes"> </div> </div> </section> <footer> <p>&copy; 2023 Kristine. All rights reserved. Thank you for visiting Kristine.</p> </footer> <script> // Smooth scrolling for dropdown links const dropdownLinks = document.querySelectorAll('.dropdown-content a'); dropdownLinks.forEach(link => { link.addEventListener('click', (event) => { event.preventDefault(); const targetId = event.target.getAttribute('href'); const targetElement = document.querySelector(targetId); window.scrollTo({ top: targetElement.offsetTop, behavior: 'smooth' }); }); }); </script> </body> </html>

//<!DOCTYPE html> <html> <head> <title>Kristine</title> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <style> body { font-family: Arial, sans-serif; margin: 0; padding: 0; background-color: #1a1a1a; color: #f5f5f5; text-align: left; } header { background-color: #1a1a1a; color: #f5f5f5; padding: 20px; display: flex; justify-content: space-between; align-items: center; max-height: 60px; } .header-logo { font-size: 24px; font-weight: bold; max-height: 60px; } nav ul { list-style: none; margin: 0; padding: 0; display: flex; } nav li { margin-left: 20px; position: relative; } nav a { color: #f5f5f5; text-decoration: none; padding: 10px; transition: color 0.3s ease; } nav a:hover { color: #f5a623; } .dropdown-menu { display: none; position: absolute; background-color: #1a1a1a; min-width: 160px; box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2); z-index: 1; } .dropdown-menu a { color: #f5f5f5; padding: 12px 16px; text-decoration: none; display: block; } .dropdown:hover .dropdown-menu { display: block; } .hero { background-image: url('https://via.placeholder.com/1500x600'); background-size: cover; background-position: center; height: 600px; display: flex; flex-direction: column; justify-content: center; align-items: flex-start; padding: 50px; box-sizing: border-box; } .hero h1 { font-size: 48px; margin-bottom: 20px; } .hero p { font-size: 24px; margin-bottom: 40px; max-width: 600px; } .btn { background-color: #f5a623; color: #1a1a1a; padding: 10px 20px; border-radius: 5px; text-decoration: none; transition: background-color 0.3s ease; } .btn:hover { background-color: #b8e986; } section { padding: 50px; box-sizing: border-box; } section h2 { font-size: 36px; margin-bottom: 20px; } section p { font-size: 18px; line-height: 1.5; margin-bottom: 40px; max-width: 800px; } .feature { display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; margin-bottom: 60px; } .feature img { max-width: 40%; height: auto; } .feature-text { max-width: 55%; } .feature-text h3 { font-size: 24px; margin-bottom: 10px; } .feature-text p { font-size: 16px; line-height: 1.5; margin-bottom: 20px; } footer { background-color: #1a1a1a; color: #f5f5f5; padding: 20px; text-align: center; } @media screen and (max-width: 768px) { .feature { flex-direction: column; } .feature img { max-width: 100%; margin-bottom: 20px; } .feature-text { max-width: 100%; } } </style> </head> <body> <header> <div class="header-logo">Kristine</div> <nav> <ul> <li><a href="#">Get Cookies Now</a></li> <li><a href="#">Order Chocolate</a></li> <li class="dropdown"> <a href="#">Our Goods</a> <div class="dropdown-menu"> <a href="#">Sweet Treats</a> <a href="#">Chocolates</a> <a href="#">Cakes</a> </div> </li> </ul> </nav> </header> <div class="hero"> <h1>Welcome to Kristine</h1> <p>Indulge in the finest baked goods, chocolates, and sweet treats from Kristine, a family-owned bakery dedicated to crafting delectable delights with the highest quality ingredients.</p> <a href="#" class="btn">Order Now</a> </div> <section> <h2>Our Delicious Offerings</h2> <p>At Kristine, we take pride in our commitment to using only the freshest, locally-sourced ingredients to create our mouthwatering treats. From our signature chocolate chip cookies to our decadent cakes and artisanal chocolates, every bite is a true indulgence.</p> <div class="feature"> <img src="https://via.placeholder.com/500x300" alt="Sweet Treats"> <div class="feature-text"> <h3>Sweet Treats</h3> <p>Satisfy your sweet cravings with our irresistible selection of cookies, brownies, and pastries. Baked fresh daily with love and attention to detail, our sweet treats are sure to delight your taste buds.</p> </div> </div> <div class="feature"> <div class="feature-text"> <h3>Chocolates</h3> <p>Indulge in our exquisite range of artisanal chocolates, handcrafted by our skilled chocolatiers. From rich, velvety truffles to decadent chocolate bars, our chocolates are the perfect treat for any occasion.</p> </div> <img src="https://via.placeholder.com/500x300" alt="Chocolates"> </div> <div class="feature"> <img src="https://via.placeholder.com/500x300" alt="Cakes"> <div class="feature-text"> <h3>Cakes</h3> <p>Celebrate life's special moments with our stunning and delicious cakes. From classic flavors to innovative creations, our cakes are sure to impress and delight your guests.</p> </div> </div> </section> <footer> <p>&copy; 2023 Kristine. All rights reserved. Thank you for visiting Kristine.</p> </footer> <script> const dropdownMenus = document.querySelectorAll('.dropdown'); dropdownMenus.forEach(dropdown => { const dropdownMenu = dropdown.querySelector('.dropdown-menu'); // Check if the dropdown menu would fall off the right side of the screen const menuRight = dropdown.getBoundingClientRect().right + dropdownMenu.offsetWidth; const windowWidth = window.innerWidth; if (menuRight > windowWidth) { // If so, position the dropdown menu to the left dropdownMenu.style.left = 'auto'; dropdownMenu.style.right = '0'; } }); </script> </body> </html>

// <!DOCTYPE html> <html lang="en"> <head> <meta charset="UTF-8"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <title>Kamari</title> <style> body { font-family: Arial, sans-serif; margin: 0; padding: 0; color: #333; } header { background-color: #fff; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); display: flex; align-items: center; justify-content: space-between; padding: 10px 20px; position: sticky; top: 0; z-index: 100; max-height: 60px; } .logo { font-size: 24px; font-weight: bold; color: #9013fe; } nav ul { list-style-type: none; margin: 0; padding: 0; display: flex; } nav ul li { margin-left: 20px; } nav ul li a { color: #333; text-decoration: none; transition: color 0.3s ease; } nav ul li a:hover { color: #9013fe; } .dropdown { position: relative; } .dropdown-content { display: none; position: absolute; background-color: #fff; min-width: 160px; box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2); z-index: 1; } .dropdown-content a { color: #333; padding: 12px 16px; text-decoration: none; display: block; } .dropdown:hover .dropdown-content { display: block; } .hero { background-color: #f8f8f8; padding: 80px 20px; text-align: left; } .hero h1 { font-size: 36px; margin-bottom: 20px; color: #9013fe; } .hero p { font-size: 18px; line-height: 1.5; margin-bottom: 40px; } .btn { display: inline-block; background-color: #9013fe; color: #fff; padding: 10px 20px; text-decoration: none; border-radius: 4px; transition: background-color 0.3s ease; } .btn:hover { background-color: #bd10e0; } .feature { padding: 80px 20px; display: flex; flex-direction: row; align-items: center; justify-content: space-between; } .feature:nth-child(even) { flex-direction: row-reverse; } .feature-content { flex: 1; padding: 0 40px; } .feature-content h2 { font-size: 28px; margin-bottom: 20px; color: #9013fe; } .feature-content p { font-size: 16px; line-height: 1.5; margin-bottom: 20px; } .feature-image { flex: 1; display: flex; justify-content: center; align-items: center; } .feature-image img { max-width: 100%; height: auto; } footer { background-color: #333; color: #fff; padding: 20px; text-align: center; } </style> </head> <body> <header> <div class="logo">Kamari</div> <nav> <ul> <li><a href="#">Signup</a></li> <li><a href="#">Pricing</a></li> <li class="dropdown"> <a href="#">Features</a> <div class="dropdown-content"> <a href="#client-management">Client Management</a> <a href="#task-management">Task Management</a> <a href="#invoicing">Invoicing</a> </div> </li> </ul> </nav> </header> <div class="hero"> <h1>Streamline Your Freelance Business</h1> <p>Kamari is a comprehensive platform designed to help freelancers manage their clients, tasks, and invoicing seamlessly. Our intuitive interface allows you to effortlessly organize your workflow, track your time, and get paid promptly.</p> <a href="#" class="btn">Get Started</a> </div> <div class="feature"> <div class="feature-content"> <h2>Client Management</h2> <p>Keep all your client information organized in one place. Easily add new clients, update their details, and stay on top of communication. Our client management system ensures you never miss a beat.</p> </div> <div class="feature-image"> <img src="client-management.jpg" alt="Client Management"> </div> </div> <div class="feature"> <div class="feature-image"> <img src="task-management.jpg" alt="Task Management"> </div> <div class="feature-content"> <h2>Task Management</h2> <p>Efficiently manage your tasks and projects with our intuitive task management system. Create new tasks, assign due dates, and track progress. Stay on top of your workload and deliver projects on time.</p> </div> </div> <div class="feature"> <div class="feature-content"> <h2>Invoicing</h2> <p>Say goodbye to the hassle of manual invoicing. Kamari seamlessly integrates with Stripe to provide a streamlined invoicing experience. Generate professional invoices with just a few clicks and get paid promptly.</p> </div> <div class="feature-image"> <img src="invoicing.jpg" alt="Invoicing"> </div> </div> <footer> <p>&copy; 2023 Kamari. All rights reserved. Thank you for visiting Kamari.</p> </footer> <script> // Smooth scrolling for dropdown links const dropdownLinks = document.querySelectorAll('.dropdown-content a'); dropdownLinks.forEach(link => { link.addEventListener('click', (e) => { e.preventDefault(); const targetId = e.target.getAttribute('href'); const targetElement = document.querySelector(targetId); targetElement.scrollIntoView({ behavior: 'smooth' }); }); }); </script> </body> </html>

//<!DOCTYPE html> <html> <head> <title>Kristine</title> <meta name="viewport" content="width=device-width, initial-scale=1"> <style> body { font-family: Arial, sans-serif; margin: 0; padding: 0; color: #333; } header { background-color: #f5a623; padding: 20px; display: flex; justify-content: space-between; align-items: center; max-height: 60px; } .logo { font-size: 24px; font-weight: bold; color: #fff; text-decoration: none; } nav { display: flex; align-items: center; } nav a { color: #fff; text-decoration: none; margin-right: 20px; padding: 10px; border-radius: 5px; transition: background-color 0.3s ease; } nav a:hover { background-color: #8b572a; } .dropdown { position: relative; display: inline-block; } .dropdown-content { display: none; position: absolute; background-color: #f5a623; min-width: 160px; box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2); z-index: 1; left: 0; max-width: 200px; } .dropdown-content a { color: #fff; padding: 12px 16px; text-decoration: none; display: block; } .dropdown:hover .dropdown-content { display: block; } .hero { background-color: #b8e986; padding: 100px 20px; text-align: left; } .hero h1 { font-size: 48px; margin-bottom: 20px; } .hero p { font-size: 18px; line-height: 1.5; margin-bottom: 40px; } .btn { display: inline-block; background-color: #8b572a; color: #fff; padding: 10px 20px; text-decoration: none; border-radius: 5px; transition: background-color 0.3s ease; } .btn:hover { background-color: #f5a623; } .features { padding: 80px 20px; text-align: left; } .feature { display: flex; flex-wrap: wrap; justify-content: space-between; margin-bottom: 60px; } .feature-text, .feature-image { flex-basis: 45%; } .feature-image img { max-width: 100%; height: auto; } .feature h2 { font-size: 36px; margin-bottom: 20px; } .feature p { font-size: 18px; line-height: 1.5; } footer { background-color: #8b572a; color: #fff; padding: 20px; text-align: center; } @media (max-width: 768px) { .feature { flex-direction: column; } .feature-text, .feature-image { flex-basis: 100%; } .feature-image { margin-top: 20px; } } </style> </head> <body> <header> <a href="#" class="logo">Kristine</a> <nav> <a href="#">Get Cookies Now</a> <a href="#">Order Chocolate</a> <div class="dropdown"> <a href="#">Our Goods</a> <div class="dropdown-content"> <a href="#sweet-treats">Sweet Treats</a> <a href="#chocolates">Chocolates</a> <a href="#cakes">Cakes</a> </div> </div> </nav> </header> <section class="hero"> <h1>Welcome to Kristine's Bakery</h1> <p>Indulge in the delectable flavors of our homemade treats. At Kristine's Bakery, we pride ourselves on using only the finest ingredients to craft our mouthwatering creations. From decadent chocolates to heavenly cakes, and irresistible sweet treats, we have something to satisfy every sweet tooth.</p> <a href="#" class="btn">Order Now</a> </section> <section class="features"> <div class="feature"> <div class="feature-text"> <h2>Get Cookies Now</h2> <p>Craving a warm, gooey cookie straight from the oven? Look no further than our irresistible cookie selection. From classic chocolate chip to inventive flavors like salted caramel, our cookies are baked fresh daily using only the finest ingredients.</p> <a href="#" class="btn">Order Cookies</a> </div> <div class="feature-image"> <img src="cookies.jpg" alt="Delicious Cookies"> </div> </div> <div class="feature"> <div class="feature-image"> <img src="chocolates.jpg" alt="Decadent Chocolates"> </div> <div class="feature-text"> <h2>Order Chocolate</h2> <p>Indulge in the rich, velvety flavors of our handcrafted chocolates. From smooth truffles to creamy bars, our chocolatiers meticulously craft each piece using the finest cocoa beans and premium ingredients. Treat yourself or surprise a loved one with a decadent chocolate experience.</p> <a href="#" class="btn">Order Chocolates</a> </div> </div> <div class="feature"> <div class="feature-text"> <h2 id="sweet-treats">Sweet Treats</h2> <p>Our sweet treats are the perfect indulgence for any occasion. From buttery scones and flaky croissants to decadent pastries and tarts, our bakers pour their passion into every bite. Pair them with a hot cup of coffee or tea for the ultimate sweet escape.</p> </div> <div class="feature-image"> <img src="sweet-treats.jpg" alt="Sweet Treats"> </div> </div> <div class="feature"> <div class="feature-image"> <img src="chocolates.jpg" alt="Decadent Chocolates"> </div> <div class="feature-text"> <h2 id="chocolates">Chocolates</h2> <p>Satisfy your chocolate cravings with our exquisite selection of handcrafted chocolates. From smooth truffles to creamy bars, our chocolatiers meticulously craft each piece using the finest cocoa beans and premium ingredients. Indulge in a rich chocolate experience like no other.</p> </div> </div> <div class="feature"> <div class="feature-text"> <h2 id="cakes">Cakes</h2> <p>Celebrate life's sweetest moments with our heavenly cakes. From classic flavors like vanilla and chocolate to inventive combinations like lemon raspberry, our cakes are crafted with love and attention to detail. Whether you're planning a birthday, wedding, or just craving a slice of heaven, our cakes are sure to delight.</p> </div> <div class="feature-image"> <img src="cakes.jpg" alt="Beautiful Cakes"> </div> </div> </section> <footer> <p>&copy; Kristine's Bakery. All rights reserved. Thank you for visiting!</p> </footer> </body> </html>

//<!DOCTYPE html> <html lang="en"> <head> <meta charset="UTF-8"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <title>Kamari</title> <style> body { font-family: Arial, sans-serif; margin: 0; padding: 0; color: #333; } header { background-color: #fff; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); padding: 10px 20px; display: flex; justify-content: space-between; align-items: center; max-height: 60px; } .logo { font-size: 24px; font-weight: bold; color: #9013fe; } nav ul { list-style: none; margin: 0; padding: 0; display: flex; } nav li { margin-left: 20px; } nav a { text-decoration: none; color: #333; padding: 5px 10px; border-radius: 5px; transition: background-color 0.3s ease; } nav a:hover { background-color: #f5f5f5; } .dropdown { position: relative; } .dropdown-content { display: none; position: absolute; background-color: #fff; min-width: 160px; box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2); z-index: 1; left: 0; } .dropdown:hover .dropdown-content { display: block; } .dropdown-content a { color: #333; padding: 12px 16px; text-decoration: none; display: block; } .dropdown-content a:hover { background-color: #f5f5f5; } .hero { background-color: #f5f5f5; padding: 80px 20px; text-align: left; } .hero h1 { font-size: 36px; margin-bottom: 20px; color: #9013fe; } .hero p { font-size: 18px; line-height: 1.5; margin-bottom: 40px; color: #333; } .btn { display: inline-block; background-color: #9013fe; color: #fff; text-decoration: none; padding: 10px 20px; border-radius: 5px; transition: background-color 0.3s ease; } .btn:hover { background-color: #bd10e0; } .features { padding: 80px 20px; } .feature { display: flex; flex-wrap: wrap; align-items: center; margin-bottom: 40px; } .feature:nth-child(even) { flex-direction: row-reverse; } .feature-image { flex: 1; max-width: 50%; padding: 20px; } .feature-image img { max-width: 100%; height: auto; } .feature-text { flex: 1; max-width: 50%; padding: 20px; } .feature-text h2 { font-size: 24px; margin-bottom: 10px; color: #9013fe; } .feature-text p { font-size: 16px; line-height: 1.5; margin-bottom: 20px; color: #333; } footer { background-color: #f5f5f5; padding: 20px; text-align: center; color: #333; } </style> </head> <body> <header> <div class="logo">Kamari</div> <nav> <ul> <li><a href="#">Signup</a></li> <li><a href="#">Pricing</a></li> <li class="dropdown"> <a href="#">Features</a> <div class="dropdown-content"> <a href="#client-management">Client Management</a> <a href="#task-management">Task Management</a> <a href="#invoicing">Invoicing</a> </div> </li> </ul> </nav> </header> <section class="hero"> <h1>Streamline Your Freelance Business</h1> <p>Kamari teams is a comprehensive solution designed to help freelancers manage their clients, tasks, and invoicing efficiently. Our platform empowers you to stay organized, track your time, and get paid seamlessly.</p> <a href="#" class="btn">Get Started</a> </section> <section class="features"> <div class="feature"> <div class="feature-image"> <img src="https://via.placeholder.com/500x300" alt="Client Management"> </div> <div class="feature-text"> <h2>Client Management</h2> <p>Keep track of your clients' information, projects, and communication in one centralized location. Streamline your workflow and enhance collaboration with your clients.</p> </div> </div> <div class="feature"> <div class="feature-text"> <h2>Task Management</h2> <p>Stay organized and on top of your tasks with our intuitive task management system. Create, assign, and track tasks for yourself or your team members.</p> </div> <div class="feature-image"> <img src="https://via.placeholder.com/500x300" alt="Task Management"> </div> </div> <div class="feature"> <div class="feature-image"> <img src="https://via.placeholder.com/500x300" alt="Invoicing"> </div> <div class="feature-text"> <h2>Invoicing</h2> <p>Get paid for your hard work with our seamless invoicing system. Generate professional invoices, track payments, and integrate with popular payment gateways like Stripe.</p> </div> </div> </section> <footer> <p>&copy; 2023 Kamari. All rights reserved. Thank you for visiting Kamari!</p> </footer> <script> // Smooth scrolling for dropdown links const dropdownLinks = document.querySelectorAll('.dropdown-content a'); dropdownLinks.forEach(link => { link.addEventListener('click', (event) => { event.preventDefault(); const target = document.querySelector(event.target.getAttribute('href')); target.scrollIntoView({ behavior: 'smooth' }); }); }); </script> </body> </html>
