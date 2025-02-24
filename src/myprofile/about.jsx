
import React from "react";
import cs from "./about.module.css";
import profilePic from "../assets/myimg.jpg"; 
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGeeksforgeeks, SiCodechef, SiLeetcode } from "react-icons/si";
import { SlCalender } from "react-icons/sl";
import { motion } from "framer-motion";

const AboutMe = () => {
	const InternshipData = [
		{ Month: "10th June - 27th June", role: "Web Developer", company: "TechnicalHub" },
		{ Month: "5th June - 6th July", role: "Web Developer", company: "Codesoft" },
		{ Month: "15th May - 25th June", role: "Trainee", company: "Edunet" },
	];
	
	const educationData = [
		{ Month: "2022 - 2026", degree: "Engineering Degree", institution: "Aditya College of Engineering and Technology" },
		{ Month: "2020 - 2022", degree: "Intermediate", institution: "GBR Junior College" },
		{ Month: "2019 - 2020", degree: "Secondary School", institution: "Prasanth English Medium School" },
	];

	const skills = [
		{ name: "HTML", percent: 80 },
		{ name: "JavaScript", percent: 60 },
		{ name: "CSS", percent: 75 },
		{ name: "Python", percent: 85 },
		{ name: "ReactJs", percent: 60 },
		{ name: "Cpp", percent: 50 },
		{ name: "React-Native", percent: 60 },
		{ name: "Java", percent: 50 },
		{ name: "NodeJs", percent: 50 },
	];
	const certifications = [
		{ id: 1,file: "/tech.jpeg" },
		{ id: 2, file: "/code.jpeg" },
		{ id: 3,file: "/edu.jpeg" },
	]
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
			<div className={cs.aboutContainer}>
				<h2 className={cs.title}>
					ABOUT <span className={cs.highlight}>ME</span>
				</h2>
				<p className={cs.subtitle}>
					I DESIGN AND CODE BEAUTIFUL THINGS, AND I LOVE WHAT I DO.
				</p>
				<div className={cs.content}>
					<div className={cs.imageContainer}>
						<img src={profilePic} alt="Profile" className={cs.profilePic} />
					</div>
					<div className={cs.details}>
						<div className={cs.info}>
							<ul className={cs.list1}>
								<li>
									<h6 className={cs.names}>
										<span className="font-weight-600">Name</span>
										<h2>Naga Rama Devi Pithani</h2>
									</h6>
								</li>
								<li>
									<h6 className={cs.names}>
										<span className="font-weight-600">Phone</span>
										<h2>
											<a href="tel:+919963183222" style={{ textDecoration: "none", color: "inherit" }}>
												+91 9963183222
											</a>
										</h2>
									</h6>
								</li>
								<li>
									<h6 className={cs.names}>
										<span className="font-weight-600">Email</span>
										<h2>
											<a href="mailto:22P31A0438@acet.ac.in" style={{ textDecoration: "none", color: "inherit" }}>
												22P31A0438@acet.ac.in
											</a>
										</h2>
									</h6>
								</li>
							</ul>
						</div>
						<div className={cs.info}>
							<ul className={cs.list2}>
								<li>
									<h6 className={cs.names}>
										<span className="font-weight-600">Github</span>
										<a href="https://github.com/22P31A0438" className="social-icon" target="_blank" rel="noopener noreferrer">
											<FaGithub className={cs.i1} />
										</a>
									</h6>
								</li>
								<li>
									<h6 className={cs.names}>
										<span className="font-weight-600">LinkedIn</span>
										<a href="https://www.linkedin.com/in/naga-rama-devi-pithani-a9ba71263/" className="social-icon" target="_blank" rel="noopener noreferrer">
											<FaLinkedin className={cs.i1} />
										</a>
									</h6>
								</li>
								<li>
									<h6 className={cs.names}>
										<span className="font-weight-600">Codechef</span>
										<a href="https://www.codechef.com/users/ramadevi9" className="social-icon" target="_blank" rel="noopener noreferrer">
											<SiCodechef className={cs.i1} />
										</a>
									</h6>
								</li>
								<li>
 								<h6 className={cs.names}><span className="font-weight-600">GeekforGeeks</span> <a href="https://www.geeksforgeeks.org/user/22p31a0438/" className="social-icon" target="_blank" rel="noopener noreferrer">
 								<SiGeeksforgeeks className={cs.i1} />
 								</a></h6>
 							</li>
 							<li>
 								<h6 className={cs.names}><span className="font-weight-600">LeetCode</span><a href="https://leetcode.com/u/RamaDevi09/" className="social-icon" target="_blank" rel="noopener noreferrer">
 								<SiLeetcode  className={cs.i1}/> 
 								</a></h6>
 							</li>
							</ul>
						</div>
					</div>
				</div>
<br></br><br></br>
				<button className={cs.cvButton}>
					<a href="/myresume22P31A0438.pdf" download="Naga_Rama_Devi_Resume.pdf" style={{ textDecoration: "none", color: "inherit" }}>
						DOWNLOAD MY RESUME
					</a>
				</button>
				<br></br><br></br>

				<div className={cs.container}>
					<div className={cs.cont1}>
						<div className={cs.section}>
							<h2 className={cs.heading}>Internships</h2>
							<div className={cs.timeline}>
								{InternshipData.map((item, index) => (
									<div key={index} className={cs.timelineItem}>
										<p className={cs.Month}><SlCalender /> {item.Month}</p>
										<h3 className={cs.role}>
											{item.role} <span className={cs.company}>— {item.company}</span>
										</h3>
										<p className={cs.description}>
										{certifications[index] && (
                        <button className={cs.btn} onClick={() => handleDownload(certifications[index].file)}>
                            Download Certificate
                        </button>
                    )} 
									
										</p>
									</div>
								))}
							</div>
						</div>

						<div className={cs.section}>
							<h2 className={cs.heading}>Education</h2>
							<div className={cs.timeline}>
								{educationData.map((item, index) => (
									<div key={index} className={cs.timelineItem}>
										<p className={cs.Month}><SlCalender /> {item.Month}</p>
										<h3 className={cs.degree}>
											{item.degree} <span className={cs.institution}>— {item.institution}</span>
										</h3>
										<br></br>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>

				<div className={cs.skillsContainer}>
					<h2 className={cs.skillsTitle}>Skills</h2>
					{skills.map((skill, index) => (
						<div key={index} className={cs.skillItem}>
							<span className={cs.skillText}>{skill.name}</span>
							<div className={cs.chartBar}>
								<span className={cs.itemProgress} style={{ width: `${skill.percent}%` }}></span>
								<span className={cs.percent} style={{ left: `calc(${skill.percent}% - 23px)` }}>
									{skill.percent}%
									<div className={cs.arrow}></div>
								</span>
							</div>
						</div>
					))}
				</div>
			</div>
		</motion.div>
	);
};

export default AboutMe;

