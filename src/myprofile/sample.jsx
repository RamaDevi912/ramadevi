import React from "react";
import cs from "./sample.module.css";
import im from "C:/Users/RAMADEVI/OneDrive/Documents/Backend/frontend/src/assets/clghub.jpg";

const certifications = [
  { id: 1, name: "Python", provider: "IT specialist-Pearson", file: "https://media.licdn.com/dms/image/v2/D5622AQHDc84mYqke2A/feedshare-shrink_800/feedshare-shrink_800/0/1720111996273?e=1743033600&v=beta&t=XquiYqe-ySGzhnJ_-XeG4JFxxMFZM--x7VkDhsRdydM" },
  { id: 2, name: "HTML and CSS", provider: "IT specialist Pearson", file: "https://media.licdn.com/dms/image/v2/D5622AQEgMrSBELkjiA/feedshare-shrink_800/feedshare-shrink_800/0/1688552797835?e=1743033600&v=beta&t=eE0JfwbkOijdcIdHRFA4AWMsBeXC5WFJUTSwoRsV6vA" },
  { id: 3, name: "JavaScript Essentials 1", provider: "Cisco Networking Academy", file: "/assets/js1.pdf" },
  { id: 4, name: "JavaScript Essentials 2", provider: "Cisco Networking Academy", file: "/assets/js2.pdf" },
  { id: 5, name: "HTML Attributes and Tags", provider: "Great Learning Academy", file: "https://media.licdn.com/dms/image/v2/D5622AQFl3Sxzw3WNqA/feedshare-shrink_800/feedshare-shrink_800/0/1680800613415?e=1743033600&v=beta&t=Byeu6IgDHQ8YmNJP6h8ZTa3YpAWcUUL_ZjLj6Bx7ztA" },
  { id: 6, name: "Java", provider: "IT specialist-Pearson", file: "https://media.licdn.com/dms/image/v2/D5622AQHKPuTjG8jGeQ/feedshare-shrink_800/feedshare-shrink_800/0/1688706431927?e=1743033600&v=beta&t=rU0iZFkBDlL29_u8ZLC1JCvmA8gSJ8gV0Iy_KYAuOD8" },
  { id: 7, name: "Java", provider: "Oracle", file: "https://media.licdn.com/dms/image/v2/D5622AQGUKW1z-KY4eA/feedshare-shrink_800/feedshare-shrink_800/0/1684246102741?e=1743033600&v=beta&t=Bo3s7HUy4SJsVUMIALZL2QMGgTpqKNC3heL27iKQWcU" },
];

const projects = [
  { 
    id: 1, 
    title: "• Financial Tracker", 
    description: "A web-based financial tracking application that helps users monitor and manage their finances efficiently.", 
    technologies: "HTML, CSS, JavaScript", 
    github: "https://github.com/user/alumni-platform",
    image: "https://www.davidmvenegas.com/static/media/TheFinancialTrackerLogo.21b6a89589834e4097c0.png" 
  },
  { 
    id: 2, 
    title: "• College Hub", 
    description: "An informational website providing comprehensive details about a college and its events.", 
    technologies: "JavaScript, HTML, CSS, React.js", 
    github: "https://github.com/user/grid-game",
    image: im 
  },
  { 
    id: 3, 
    title: "• Train Collision Avoiding System", 
    description: "A safety mechanism designed to prevent train collisions by monitoring and controlling train movements.", 
    components: "Wi-Fi Connectivity Modules, Arduino, C Programming, Sensors, GPS Module, Microcontroller",
    github: "", // No GitHub link
    image: "https://www.expo21xx.com/news/wp-content/uploads/HARTING-RFID-700x495.jpg" 
  },
];

const handleDownload = (file, name) => {
  if (file.startsWith("http")) {
    // For online certificates (direct download)
    const link = document.createElement("a");
    link.href = file;
    link.target = "_blank";
    link.download = name || "certificate.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } else {
    // For local files
    fetch(file)
      .then(response => response.blob())
      .then(blob => {
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = name || "certificate.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      })
      .catch(error => console.error("Download failed:", error));
  }
};

const Resume = () => {
  return (
    <div>
      <div className={cs.container}>
        <h2 className={cs.title}>Certifications</h2>
        <ul className={cs.certList}>
          {certifications.map(cert => (
            <li key={cert.id} className={cs.certItem}>
              <span className={cs.certName}>{cert.name}</span> - <span className={cs.certProvider}>{cert.provider}</span> 
              <button className={cs.btn} onClick={() => handleDownload(cert.file, `${cert.name}.pdf`)}>Download</button>
            </li>
          ))}
        </ul>
      </div>

      <div className={cs.container}>
        <h2 className={cs.title}>Projects</h2>
        <div className={cs.projectList}>
          {projects.map(project => (
            <div key={project.id} className={cs.projectCard}>
              <img src={project.image} alt={project.title} className={cs.projectImage} />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              {project.technologies ? (
                <p><strong>Technologies:</strong> {project.technologies}</p>
              ) : (
                <p><strong>Components Used:</strong> {project.components}</p>
              )}
              {project.github && (
                <button className={cs.btn} onClick={() => window.open(project.github, "_blank")}>View on GitHub</button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resume;
