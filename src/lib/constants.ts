import type { ResumeData, SectionFields } from "./resume-types";

export const sampleData: ResumeData = {
  name: "John Doe",
  phone: "+91-8989898989",
  email: "Johndoe@gmail.com",
  linkedin: "https://www.linkedin.com/in/johndoe",
  summary:
    "<p>Innovative Programmer and Internet Entrepreneur striving to make the world a more unified and connected place. A creative thinker, adept in software development and working with various data structures.</p>",
  sections: [
    // ---------------- Education ----------------
    {
      id: "education",
      title: "Education",
      displayOrder: 1,
      items: [
        {
          title: "Bachelor of Technology in Computer Science",
          subtitle: "Indian Institute of Technology (IIT) Bombay",
          meta: "Aug 2018 – May 2022 | Mumbai, India",
          gpa: "8.26 GPA",
          editorHTML:
            "<ul><li>Graduated with distinction, majoring in Computer Science.</li><li>Led a student team in building a cloud-hosted IoT data analysis platform.</li></ul>",
        },
      ],
    },

    // ---------------- Experience ----------------
    {
      id: "experience",
      title: "Experience",
      displayOrder: 2,
      items: [
        {
          title: "Software Development Engineer - I",
          subtitle: "Amazon India",
          meta: "July 2022 – Present | Bangalore, India",
          editorHTML:
            "<ul><li>Developed a microservices-based order tracking system, improving latency by 30%.</li><li>Implemented DynamoDB and Redis caching to reduce database queries by 40%.</li></ul>",
        },
        {
          title: "Software Engineer Intern",
          subtitle: "Amazon India",
          meta: "Jan 2022 – June 2022 | Hyderabad, India",
          editorHTML:
            "<ul><li>Built an automated anomaly detection tool using Python and AWS, reducing manual checks by 60%.</li><li>Developed an internal debugging dashboard for the supply chain team, reducing incident resolution time.</li></ul>",
        },
      ],
    },
    //-----------------------Skills--------------------
    {
      id: "skills",
      title: "Skills",
      displayOrder: 5,
      items: [
        {
          editorHTML: `<div>
  <p>Languages: Java, Python, C++, JavaScript, SQL</p>
  <p>Frameworks: Spring Boot, Node.js, React.js, Flask</p>
  <p>Databases: PostgreSQL, DynamoDB, MongoDB</p>
  <p>Cloud: AWS (Lambda, S3, EC2, API Gateway)</p>
  <p>Tools: Git, Docker, Kubernetes, Jenkins</p>
</div>`,
        },
      ],
    },

    // ---------------- Projects ----------------
    {
      id: "projects",
      title: "Projects",
      displayOrder: 3,
      items: [
        {
          title: "Scalable URL Shortener",
          meta: "Oct 2021 – Jan 2022",
          website: "www.xyz.com",
          fields: [
            {
              label: "Tech Stack",
              value: "Spring Boot, AWS Lambda, DynamoDB, React",
            },
          ],
          editorHTML:
            "<ul><li>Built a distributed URL shortening service handling 5M+ requests/day.</li><li>Implemented consistent hashing for even load balancing.</li></ul>",
        },
        {
          title: "AI-Powered Resume Parser",
          meta: "July 2021 – Sep 2021",
          website: "www.xyz.com",
          fields: [
            {
              label: "Tech Stack",
              value: "Python, NLP, FastAPI, PostgreSQL",
            },
          ],
          editorHTML:
            "<ul><li>Developed a machine-learning-powered resume parser achieving 92% accuracy.</li><li>Used spaCy and Named Entity Recognition (NER) for key detail extraction.</li></ul>",
        },
      ],
    },

    // ---------------- Achievements ----------------
    {
      id: "achievements",
      title: "Achievements",
      displayOrder: 4,
      items: [
        {
          editorHTML:
            "<ul><li>Secured Rank 200 in Google Kick Start coding competition among 10,000+ participants.</li><li>Won 1st place in Amazon SDE Hackathon 2021 for building a real-time fraud detection system.</li><li>Published 3 research papers on distributed computing and ML in IEEE conferences.</li></ul>",
        },
      ],
    },
  ],
};

export const sampleData2: ResumeData = {
  name: "Firstname Lastname",
  phone: "+1 (123) 456-7890",
  location: "San Francisco, CA",
  email: "contact@faangpath.com",
  linkedin: "linkedin.com/company/faangpath",
  website: "www.faangpath.com",
  summary:
    "Software Engineer with 2+ years of experience in XXX, seeking full-time XXX roles.",
  sections: [
    {
      id: "education",
      title: "Education",
      items: [
        {
          title: "Master of Computer Science, Stanford University",
          meta: "Expected 2020",
          editorHTML: "<ul><li>Relevant Coursework: A, B, C, and D.</li></ul>",
        },
        {
          title: "Bachelor of Computer Science, Stanford University",
          meta: "2014 - 2017",
        },
      ],
    },
    {
      id: "skills",
      title: "Skills",
      items: [
        {
          title: "Technical Skills",
          editorHTML: "<ul><li>A, B, C, D</li></ul>",
        },
        {
          title: "Soft Skills",
          editorHTML: "<ul><li>A, B, C, D</li></ul>",
        },
        {
          title: "XYZ",
          editorHTML: "<ul><li>A, B, C, D</li></ul>",
        },
      ],
    },
    {
      id: "experience",
      title: "Experience",
      items: [
        {
          title: "Role Name",
          subtitle: "Company Name",
          meta: "Jan 2017 – Jan 2019 | San Francisco, CA",
          editorHTML:
            "<ul><li>Achieved X% growth for XYZ using A, B, and C skills.</li><li>Led XYZ which led to X% of improvement in ABC.</li><li>Developed XYZ that did A, B, and C using X, Y, and Z.</li></ul>",
        },
        {
          title: "Role Name",
          subtitle: "Company Name",
          meta: "Jan 2017 – Jan 2019 | San Francisco, CA",
          editorHTML:
            "<ul><li>Achieved X% growth for XYZ using A, B, and C skills.</li><li>Led XYZ which led to X% of improvement in ABC.</li><li>Developed XYZ that did A, B, and C using X, Y, and Z.</li></ul>",
        },
      ],
    },
    {
      id: "projects",
      title: "Projects",
      items: [
        {
          title: "Hiring Search Tool",
          editorHTML:
            "<ul><li>Built a tool to search for Hiring Managers and Recruiters using ReactJS, NodeJS, Firebase, and boolean queries.</li><li>Over 25000 people have used it with 5000+ queries saved and shared, delivering better results than LinkedIn! (Try it here)</li></ul>",
        },
        {
          title: "Short Project Title",
          editorHTML:
            "<ul><li>Built a project that does something and had quantified success using A, B, and C.</li><li>This project’s description spans two lines and also won an award.</li></ul>",
        },
      ],
    },
    {
      id: "extra",
      title: "Extra-Curricular Activities",
      items: [
        {
          editorHTML:
            "<ul><li>Actively write blog posts and social media posts (TikTok, Instagram) viewed by 20K+ job seekers weekly.</li><li>Help people with best practices to land their dream jobs.</li><li>Sample bullet point.</li></ul>",
        },
      ],
    },
    {
      id: "leadership",
      title: "Leadership",
      items: [
        {
          editorHTML:
            "<ul><li>Admin for the FAANGPath Discord community (6000+ job seekers).</li><li>Facilitated online events, career conversations, and managed volunteer moderators.</li></ul>",
        },
      ],
    },
  ],
};

export const mockBerlinData: ResumeData = {
  name: "TAYLOR COOK",
  title: "Programmer",
  location: "1600 Amphitheatre Road\nPalo Alto, CA 94304\nUnited States",
  phone: "(315) 802-8179",
  email: "taylor.cook@gmail.com",
  nationality: "American",
  summary:
    "<p>Innovative Programmer and Internet Entrepreneur striving to make the world a more unified and connected place. A creative thinker, adept in software development and working with various data structures.</p>",
  skillsBerlin: [
    "Performance Optimization",
    "Troubleshooting and Solutions Deployment",
    "Analytical Thinking Skills",
    "Software Design and Development",
    "Coding and Scripting",
  ],
  languages: ["English", "French"],
  sections: [
    {
      id: "experience",
      title: "EMPLOYMENT HISTORY",
      items: [
        {
          title: "Programmer",
          subtitle: "Johannes Initiative",
          location: "Palo Alto",
          meta: "Dec 2015 --- Present",
          editorHTML: `<ul><li>Worked to enhance software systems to help educators, scientists, and policy experts already working on some of humanity's greatest challenges.</li><li>Developed and enhances programs to increase accuracy and lower costs.</li><li>Developed strategies to ensure compliance with new standards.</li></ul>`,
        },
        {
          title: "Programmer",
          subtitle: "Kindlinks, Inc.",
          location: "Menlo Park, CA",
          meta: "Feb 2004 - Sep 2015",
          editorHTML: `<ul><li>Since founding Kindlinks, Inc. in 2004 I continue to work to build and improve it's infrastructure, offerings, product strategy, and design.</li><li>Work to continuously lead developments helping people to create, share, and discover in new ways.</li></ul>`,
        },
      ],
    },
    {
      id: "education",
      title: "EDUCATION",
      items: [
        {
          title: "Master of Computer Science",
          subtitle: "Boston College",
          location: "Boston",
          meta: "Aug 2001 --- Jun 2004",
        },
      ],
    },
  ],
};

export const sectionData: Record<string, SectionFields> = {
  experience: {
    title1: "Position",
    placeholder1: "Senior Developer",
    title2: "Company",
    placeholder2: "Company name",
    title3: "More Information",
    placeholder3: "Jan 2021 – Dec 2023 | Mountain View",
    title4: "Website",
    placeholder4: "www.xyz.com",
  },

  education: {
    title1: "Degree",
    placeholder1: "Bachelor of Computer Science",
    title2: "Institution",
    placeholder2: "Stanford University",
    title3: "More Information",
    placeholder3: "2019 – 2023 | California, USA",
    title4: "Grade / CGPA",
    placeholder4: "3.9 / 4.0",
  },

  certification: {
    title1: "Certificate Name",
    placeholder1: "Google Cloud Professional Developer",
    title2: "Issuer",
    placeholder2: "Google",
    title3: "More Information",
    placeholder3: "Issued Jan 2024 | Credential ID 12345",
    title4: "Verification Link",
    placeholder4: "www.credential-link.com",
  },

  projects: {
    title1: "Project Name",
    placeholder1: "PeakFlow – Productivity App",
    title2: "Role",
    placeholder2: "Lead Developer",
    title3: "More Information",
    placeholder3: "Jan 2024 – Present | React, Firebase, TypeScript",
    title4: "Project Link",
    placeholder4: "www.github.com/peakflow",
  },

  awards: {
    title1: "Award Title",
    placeholder1: "Winner – Hackathon 2024",
    title2: "Organization",
    placeholder2: "Google Developer Group",
    title3: "More Information",
    placeholder3: "Awarded for building an AI productivity app",
    title4: "Date",
    placeholder4: "March 2024",
  },

  extracurricular: {
    title1: "Activity Name",
    placeholder1: "Public Speaking Club",
    title2: "Role",
    placeholder2: "President",
    title3: "More Information",
    placeholder3: "Organized weekly speaking sessions and debates",
    title4: "Duration",
    placeholder4: "2022 – 2023",
  },
};
