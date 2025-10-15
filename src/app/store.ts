import type { ResumeData } from "@/lib/resume-types";
import { atom } from "jotai";

const sampleData: ResumeData = {
  name: "Sanika Jain",
  phone: "+91-8989898989",
  email: "sanikatest@gmail.com",
  linkedin: "https://www.linkedin.com/in/sanikatest",
  education: {
    institute: "Indian Institute of Technology (IIT) Bombay",
    degree: "Bachelor of Technology in Computer Science",
    location: "Mumbai, India",
    duration: "Aug 2018 – May 2022",
  },
  experience: [
    {
      title: "Software Development Engineer - I",
      company: "Amazon India",
      location: "Bangalore, India",
      duration: "July 2022 – Present",
      points: [
        "Developed a microservices-based order tracking system, improving latency by 30%.",
        "Implemented DynamoDB and Redis caching to reduce database queries by 40%.",
        "Optimized an existing payment fraud detection model using ML, reducing false positives by 20%.",
        "Collaborated with cross-functional teams to enhance the AWS Lambda-based notification service.",
      ],
    },
    {
      title: "Software Engineer Intern",
      company: "Amazon India",
      location: "Hyderabad, India",
      duration: "Jan 2022 – June 2022",
      points: [
        "Built an automated anomaly detection tool using Python and AWS, reducing manual checks by 60%.",
        "Developed an internal debugging dashboard for the supply chain team, reducing incident resolution time.",
      ],
    },
  ],
  projects: [
    {
      title: "Scalable URL Shortener",
      stack: "Spring Boot, AWS Lambda, DynamoDB, React",
      duration: "Oct 2021 – Jan 2022",
      points: [
        "Built a distributed URL shortening service handling 5M+ requests/day.",
        "Implemented consistent hashing for even load balancing.",
        "Used AWS Lambda and API Gateway, reducing infra costs by 25%.",
      ],
    },
    {
      title: "AI-Powered Resume Parser",
      stack: "Python, NLP, FastAPI, PostgreSQL",
      duration: "July 2021 – Sep 2021",
      points: [
        "Developed a machine-learning-powered resume parser achieving 92% accuracy.",
        "Used spaCy and Named Entity Recognition (NER) for key detail extraction.",
        "Designed REST API with FastAPI integrating with ATS for large-scale hiring.",
      ],
    },
  ],
  achievements: [
    "Secured Rank 200 in Google Kick Start coding competition among 10,000+ participants.",
    "Won 1st place in Amazon SDE Hackathon 2021 for building a real-time fraud detection system.",
    "Published 3 research papers on distributed computing and ML in IEEE conferences.",
    "Received Best Intern Award at Amazon for automation tool reducing manual work by 60%.",
  ],
  skills: {
    languages: ["Java", "Python", "C++", "JavaScript", "SQL"],
    frameworks: ["Spring Boot", "Node.js", "React.js", "Flask"],
    databases: ["PostgreSQL", "DynamoDB", "MongoDB"],
    cloud: ["AWS (Lambda, S3, EC2, API Gateway)"],
    tools: ["Git", "Docker", "Kubernetes", "Jenkins"],
  },
};

export const openSignUpDialogAtom = atom(false);
export const resumeAtom = atom<ResumeData>(sampleData);
