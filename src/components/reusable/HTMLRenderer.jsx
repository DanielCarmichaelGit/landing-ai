import React, { useEffect, useRef, useState } from "react";
import fetchWrapper from "../../../utils/fetchWrapper";

const GeneratedCodeContainerHTML = ({
  htmlCode,
  setHTMLCode,
  setIsComplete,
  isComplete,
  variant,
  page,
}) => {
  const iframeRef = useRef(null);
  const [elements, setElements] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [selectedElement, setSelectedElement] = useState(null);
  const [openDropdown, setOpenDropdown] = useState("pageConfigs");

  useEffect(() => {
    console.log("page", page, "variant", variant, "complete", isComplete);
    if (htmlCode?.charAt(0) !== "<" && isComplete && variant !== "" && page !== "") {
      console.log("this runs", 1);
      const payload = {
        page_id: page,
        variant_id: variant,
        code: htmlCode,
      };
      console.log("this runs", 2);
      const token = JSON.parse(localStorage.getItem("user"))?.token || "";
      console.log("this runs", 3);
      fetchWrapper("/anthropic/clean-html", token, "POST", { ...payload }).then(
        (res) => {
          console.log("this also runs");
          setHTMLCode(res.content);
          setIsComplete(false);
        }
      );
    } else {
      const iframe = iframeRef.current;
      const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
      iframeDoc.open();
      iframeDoc.write(`${htmlCode}`);
      iframeDoc.close();

      const parseHTMLCode = () => {
        const extractedElements = [];

        // Extract header elements
        const headerElements = iframeDoc.getElementsByTagName("header");
        for (let i = 0; i < headerElements.length; i++) {
          const headerElement = headerElements[i];
          extractedElements.push({
            id: `header-${i}`,
            type: "header",
            position: i,
            content: headerElement.textContent,
            style: getComputedStyle(headerElement),
          });
          // Extract child elements within the header
          // ...
        }

        // Extract main elements
        const mainElements = iframeDoc.getElementsByTagName("main");
        for (let i = 0; i < mainElements.length; i++) {
          const mainElement = mainElements[i];
          extractedElements.push({
            id: `main-${i}`,
            type: "main",
            position: i,
            content: mainElement.textContent,
            style: getComputedStyle(mainElement),
          });
          // Extract child elements within the main section
          // ...
        }

        // Extract footer elements
        const footerElements = iframeDoc.getElementsByTagName("footer");
        for (let i = 0; i < footerElements.length; i++) {
          const footerElement = footerElements[i];
          extractedElements.push({
            id: `footer-${i}`,
            type: "footer",
            position: i,
            content: footerElement.textContent,
            style: getComputedStyle(footerElement),
          });
          // Extract child elements within the footer
          // ...
        }

        setElements(extractedElements);
      };

      parseHTMLCode();
    }
  }, [htmlCode, isComplete]);

  const handleElementChange = (property, value) => {
    if (selectedElement) {
      const updatedElements = elements.map((element) => {
        if (element.id === selectedElement.id) {
          return {
            ...element,
            [property]: value,
          };
        }
        return element;
      });
      setElements(updatedElements);

      // Update the HTML code in the iframe
      const iframe = iframeRef.current;
      const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
      const element = iframeDoc.querySelector(`[data-id="${selectedElement.id}"]`);
      if (element) {
        if (property === "content") {
          element.textContent = value;
        } else if (property.startsWith("style.")) {
          const styleProp = property.split(".")[1];
          element.style[styleProp] = value;
        }
      }
    }
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleElementClick = (element) => {
    setSelectedElement(element);
  };

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const groupedElements = elements.reduce((acc, element) => {
    const { type, position } = element;
    if (!acc[type]) {
      acc[type] = {};
    }
    if (!acc[type][position]) {
      acc[type][position] = [];
    }
    acc[type][position].push(element);
    return acc;
  }, {});

  return (
    <div style={{ display: "flex", height: "100%" }}>
      {/* <div
        style={{
          display: "flex",
          flexDirection: "column",
          rowGap: "15px",
          width: isSidebarOpen ? "300px" : "50px",
          height: "calc(100% - 80px)",
          backgroundColor: "#333",
          color: "#f0f0f0",
          transition: "width 0.3s ease-in-out",
          overflowX: "hidden",
          overflowY: "scroll !important",
          padding: isSidebarOpen ? "20px" : "10px",
          boxSizing: "border-box",
        }}
      >
        <button onClick={toggleSidebar} style={{ marginBottom: "10px" }}>
          {isSidebarOpen ? "Collapse" : "Expand"}
        </button>
        {isSidebarOpen && (
          <>
            <div>
              <h3 style={{backgroundColor: "#222", borderRadius: "5px", padding: "10px", margin: "0px"}} onClick={() => toggleDropdown("pageConfigs")}>Page Configs</h3>
              {openDropdown === "pageConfigs" && (
                <div>
                  <label>Base URL:</label>
                  <input type="text" />
                  <h4>Colors:</h4>
                  {/* Add color selectors */}
                  {/* Add other necessary fields */}
                {/* </div>
              )}
            </div>
            <div>
              <h3 style={{backgroundColor: "#222", borderRadius: "5px", padding: "10px", margin: "0px"}} onClick={() => toggleDropdown("header")}>Header</h3>
              {openDropdown === "header" && (
                <div> */}
                  {/* Add header styles */}
                  {/* <h4>Header Elements:</h4>
                  {groupedElements.header &&
                    Object.entries(groupedElements.header).map(([position, elements]) => (
                      <div key={position}>
                        <h5>{position}</h5>
                        {elements.map((element) => (
                          <div
                            key={element.id}
                            onClick={() => handleElementClick(element)}
                            style={{
                              backgroundColor:
                                selectedElement && selectedElement.id === element.id
                                  ? "#ddd"
                                  : "transparent",
                              cursor: "pointer",
                              padding: "5px",
                            }}
                          >
                            {element.content}
                          </div>
                        ))}
                      </div>
                    ))}
                </div>
              )}
            </div>
            <div>
              <h3 style={{backgroundColor: "#222", borderRadius: "5px", padding: "10px", margin: "0px"}} onClick={() => toggleDropdown("main")}>Main</h3>
              {openDropdown === "main" && (
                <div> */}
                  {/* Add main styles */}
                  {/* <h4>Main Elements:</h4>
                  {groupedElements.main &&
                    Object.entries(groupedElements.main).map(([position, elements]) => (
                      <div key={position}>
                        <h5>{position}</h5>
                        {elements.map((element) => (
                          <div
                            key={element.id}
                            onClick={() => handleElementClick(element)}
                            style={{
                              backgroundColor:
                                selectedElement && selectedElement.id === element.id
                                  ? "#ddd"
                                  : "transparent",
                              cursor: "pointer",
                              padding: "5px",
                            }}
                          >
                            {element.content}
                          </div>
                        ))}
                      </div>
                    ))}
                </div>
              )}
            </div>
            <div>
              <h3 style={{backgroundColor: "#222", borderRadius: "5px", padding: "10px", margin: "0px"}} onClick={() => toggleDropdown("footer")}>Footer</h3>
              {openDropdown === "footer" && (
                <div> */}
                  {/* Add footer styles */}
                  {/* <h4>Footer Elements:</h4>
                  {groupedElements.footer &&
                    Object.entries(groupedElements.footer).map(([position, elements]) => (
                      <div key={position}>
                        <h5>{position}</h5>
                        {elements.map((element) => (
                          <div
                            key={element.id}
                            onClick={() => handleElementClick(element)}
                            style={{
                              backgroundColor:
                                selectedElement && selectedElement.id === element.id
                                  ? "#ddd"
                                  : "transparent",
                              cursor: "pointer",
                              padding: "5px",
                            }}
                          >
                            {element.content}
                          </div>
                        ))}
                      </div>
                    ))}
                </div>
              )}
            </div>
            {selectedElement && (
              <div>
                <h4>Selected Element</h4>
                <input
                  type="text"
                  value={selectedElement.content}
                  onChange={(e) => handleElementChange("content", e.target.value)}
                />
                {Object.entries(selectedElement.style).map(([prop, value]) => (
                  <div key={prop}>
                    <label>{prop}</label>
                    <input
                      type="text"
                      value={value}
                      onChange={(e) => handleElementChange(`style.${prop}`, e.target.value)}
                    />
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div> */}
      <iframe
        ref={iframeRef}
        title="Generated Code Container"
        style={{ flex: 1, border: "none", minHeight: "600px" }}
      />
    </div>
  );
};

export default GeneratedCodeContainerHTML;