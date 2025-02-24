import React from 'react'
import cs from './work.module.css'
import image from '../assets/clghub.jpg';
import pa from "./pageanimation.module.css"
import { motion } from "framer-motion";
export default function Work() {
  const certifications = [
    { id: 1, name: "Python", provider: "IT specialist-Pearson", file: "src/assets/Python.jpeg" },
    { id: 2, name: "HTML and CSS",provider:"IT specialist-Pearson",file: "src/assets/HtmlCss.jpeg" },
    { id: 3, name: "JavaScript Essentials 1", provider: "Cisco Networking Academy", file: "src/assets/js1.pdf" },
    { id: 4, name: "JavaScript Essentials 2", provider: "Cisco Networking Academy", file: "src/assets/js2.pdf" },
    { id: 5, name: "HTML Attributes and Tags", provider: "Great Learning Academy", file: "src/assets/HtmlAttri.jpeg" },
    { id: 6, name: "Java", provider: "IT specialist-Pearson", file: "src/assets/javait.jpeg" },
    { id: 7, name: "Java", provider: "Oracle", file: "src/assets/javaorac.jpeg" },
  ];
  
  const projects = [
    { 
      id: 1, 
      title: "• Financial Tracker", 
      description: "A web-based financial tracking application that helps users monitor and manage their finances efficiently.", 
      technologies: "HTML, CSS, JavaScript", 
      github: "https://github.com/RamaDevi912/Iship1",
      image: "https://www.davidmvenegas.com/static/media/TheFinancialTrackerLogo.21b6a89589834e4097c0.png" 
    },
    { 
      id: 2, 
      title: "• College Hub", 
      description: "An informational website providing comprehensive details about a college and its events.", 
      technologies: "JavaScript, HTML, CSS, React.js", 
      github: "https://github.com/RamaDevi912/Iship2",
      image: image
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
  
  const handleDownload = (file) => {
		if (file.startsWith("http")) {
			window.open(file, "_blank");
		} else {
			const link = document.createElement("a");
			link.href = file;
			link.download = file.split("/").pop();
			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);
		}
	};
  return (
    <motion.div 
          className="page"
          initial={{ x: "100vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "-100vw", opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
    <div className={cs.main}>
      
    <div className={cs.container1}>
    <h2 className={cs.contactHeading}>
            Accompl<span className={cs.highlight}>ishments</span>
                      </h2>
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
        </div>
        </motion.div>
  )
}
