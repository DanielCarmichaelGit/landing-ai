import styles from "../assets/css/Dashboard.module.css";
import { useState, useEffect, useRef } from "react";
import fetchWrapper from "../../utils/fetchWrapper";

export default function Dashboard() {
  const [threads, setThreads] = useState(null);
  const [pages, setPages] = useState(null);
  const pageRefs = useRef([]);
  const threadRefs = useRef([]);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("user"))?.token || "";
    fetchWrapper("/threads", token, "GET", {}).then((res) => {
      setThreads(res.threads);
    });
    fetchWrapper("/pages", token, "GET", {}).then((res) => {
      setPages(res.pages);
    });
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.FadeIn);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    pageRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    threadRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [pages, threads]);

  return (
    <div className={styles.Dashboard}>
      <div className={styles.PagesContainer}>
        <h4 style={{ textAlign: "left" }}>Pages</h4>
        <div className={styles.Pages}>
          {pages ? (
            pages.map((page, index) => (
              <div
                key={`page_${page.page_id}`}
                dangerouslySetInnerHTML={{ __html: page.content }}
                className={`${styles.Page} ${styles.FadeOut}`}
                ref={(el) => (pageRefs.current[index] = el)}
              />
            ))
          ) : (
            <h6>No Pages Found</h6>
          )}
        </div>
      </div>
      <div className={styles.ThreadsContainer}>
        <h6>Threads</h6>
        <div className={styles.Threads}>
          {threads ? (
            threads.map((thread, index) => (
              <div
                key={`thread_${index}`}
                className={`${styles.Thread} ${styles.FadeOut}`}
                ref={(el) => (threadRefs.current[index] = el)}
              >
                <h6>{thread.messages.length}</h6>
              </div>
            ))
          ) : (
            <h6>No Threads Found</h6>
          )}
        </div>
      </div>
    </div>
  );
}