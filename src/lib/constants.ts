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
          meta: "July 2022 – Present",
          location: "Bangalore, India",
          editorHTML:
            "<ul><li>Developed a microservices-based order tracking system, improving latency by 30%.</li><li>Implemented DynamoDB and Redis caching to reduce database queries by 40%.</li></ul>",
        },
        {
          title: "Software Engineer Intern",
          subtitle: "Amazon India",
          meta: "Jan 2022 – June 2022",
          location: "Hyderabad, India",
          editorHTML:
            "<ul><li>Built an automated anomaly detection tool using Python and AWS, reducing manual checks by 60%.</li><li>Developed an internal debugging dashboard for the supply chain team, reducing incident resolution time.</li></ul>",
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
          website: "https://urlshortener.com",
          subtitle: "Lead Developer",
          editorHTML:
            "<ul><li>Built a distributed URL shortening service handling 5M+ requests/day.</li><li>Implemented consistent hashing for even load balancing.</li></ul>",
        },
        {
          title: "AI-Powered Resume Parser",
          meta: "July 2021 – Sep 2021",
          website: "https://resumeparser.com",
          subtitle: "System Design Architect",
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
  // skillsBerlin: [
  //   "Performance Optimization",
  //   "Troubleshooting and Solutions Deployment",
  //   "Analytical Thinking Skills",
  //   "Software Design and Development",
  //   "Coding and Scripting",
  // ],
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
    {
      id: "skills",
      title: "SKILLS",
      items: [
        {
          fields: [
            {
              label: "Communication skill",
              value: "1",
            },
            {
              label: "Performance Optimization",
              value: "2",
            },
            {
              label: "Analytical Thinking Skills",
              value: "2",
            },
            {
              label: "Coding and Scripting",
              value: "1",
            },
          ],
        },
      ],
    },
  ],
};

export const sampleDataTimeLine: ResumeData = {
  name: "Johnatan Alexander Carillo",
  title: "Operations Manager",
  phone: "+1 204 555 5555",
  email: "help@enhancv.com",
  linkedin: "linkedin.com/in/johnatanc",
  location: "Austin, TX",
  summary:
    "<p>I am experience manager who enjoys tackling big challenges in fulfillment, manufacturing and customer service. I take pride in my ability to build high performing and engaged teams with a passion to win. Manufacturing & logistics are in my blood. For almost a decade I have been at the forefront of many manufacturing transformations as an ambitious operations leader, Lean Six Sigma strategist and functional operator.</p>",
  sections: [
    {
      id: "experience",
      title: "Experience",
      items: [
        {
          meta: "2017 - Present",
          location: "Austin, TX",
          title: "Operations Manager",
          subtitle: "Ledner Group",
          editorHTML: `
            <p>
              <p>Accountable for 3.5M monthly units at a $12M yearly revenue.</p>
              <p>Led teams of 50+ permanent and agency staff, both operations and administrations.</p>
              <p>Manage a portfolio of $5M+ of campaigns in booked revenue per Quarter across NSW and QLD clients.</p>
            </p>
          `,
        },
        {
          meta: "2013 - 2017",
          location: "Austin, TX",
          title: "Area Manager",
          subtitle: "Bernier",
          editorHTML: `
            <p>
              <p>Lead and developed a team of 80-100 Amazon Associates in the largest North American Fulfillment Centre to meet daily rates.</p>
              <p>Responsible for communicating policies to Associates and acting as the primary information source for 4 teams.</p>
              <p>Partnered with other leadership to ensure the business is operating a balanced lean shift while meeting objectives.</p>
              <p>Achieved the 2nd highest saving for 2016 at 35.1M units.</p>
              <p>Instilled and upheld compliance to all safety programs to ensure a safe work environment for all associates.</p>
            </p>
          `,
        },
        {
          meta: "2011 - 2013",
          location: "Austin, TX",
          title: "Logistics Administrator",
          subtitle: "Lessard",
          editorHTML: `
            <p>
              <p>Collaborated with beneficiary centers to project demand and prepare outgoing food pallets across 9 teams at $1.5M operational cost.</p>
              <p>Responsible for logging incoming and outgoing food donations into inventory database within the Logistics department.</p>
              <p>Partnered with local businesses to initiate food donations as well as maintained relationships with current donors.</p>
            </p>
          `,
        },
      ],
    },
    {
      id: "achievements",
      title: "Key Achievements",
      items: [
        {
          title: "33% YoY improvement in department productivity",
          editorHTML: `<p>Drove team to achieve the best direct rates in the building's history. Second best in the Amazon Robotics network.</p>`,
        },
        {
          title: "Record high department quality benchmark",
          editorHTML: `<p>Maintained compliance and consistently to drive lowest DPMO in building history. Number one in Amazon Robotics network during peak Season.</p>`,
        },
      ],
    },
    {
      id: "projects",
      title: "Projects",
      items: [
        {
          title: "L/A Accessions Process Improvement",
          editorHTML: `<p>Acted as lead in agency-wide team to analyze work processes, develop standard operating procedures, build tracking database, and train more than 50 HR specialists and administrative officers on its use.</p>`,
        },
        {
          title: "Optimizing Value Added Consortium",
          editorHTML: `<p>Research Technician for the Global Supply Chain Laboratory of Texas A&M University as part of the Talent Incubator Program. Researched, designed, and developed operational solutions within the field of supply chain management across different industries and companies.</p>`,
        },
      ],
    },
  ],
};

export const sampleDataAmsterDam: ResumeData = {
  name: "Wes Turner",
  title: "Sales Manager",
  phone: "(719) 555-8237",
  email: "wes.turner@gmail.com",
  location: "8765 Arbean Lane\nBoulder, CO 80302\nUnited States",
  summary:
    "Experienced and self-motivated Sales Manager with five years of industry experience overseeing sales figures and new account development. Bringing forth a proven track record of working collaboratively with sales teams to achieve goals, increase revenue gains, and advance the sales cycle of the company. A strong leader with the ability to increase sales and develop strategies to retain customers.",
  sections: [
    {
      id: "skills",
      title: "Skills",
      items: [
        { title: "Project Management Skills", meta: "4" },
        { title: "Business Development Strategy", meta: "5" },
        { title: "Industry Knowledge", meta: "3" },
        { title: "Interpersonal Communication Skills", meta: "5" },
        { title: "Innovative Problem Solving", meta: "4" },
      ],
    },
    {
      id: "experience",
      title: "Employment History",
      items: [
        {
          title: "Sales Manager",
          subtitle: "Winthrop and Lee",
          location: "Boulder",
          meta: "Nov 2014 – Sep 2019",
          editorHTML: `
            <ul class="list-disc list-outside pl-5 space-y-0.5 mt-1">
              <li>Helped to achieve a 25% increase in sales revenue over the course of 1 year.</li>
              <li>Established sales goals by forecasting annual sales quotas and projecting expected sales volume for existing and new products.</li>
              <li>Effectively monitored competition and appropriately adjusted costs based on supply and demand.</li>
              <li>Managed sales employees and counseled employees based on their professional growth and productivity.</li>
            </ul>
          `,
        },
        {
          title: "Sales Manager",
          subtitle: "Lola & Co",
          location: "Denver",
          meta: "Sep 2010 – Oct 2014",
          editorHTML: `
            <ul class="list-disc list-outside pl-5 space-y-0.5 mt-1">
              <li>Successfully managed a sales team of 10+ people to meet and achieve sales goals.</li>
              <li>Developed and implemented sales plans to expand customer base and increase customer retention.</li>
              <li>Presented sales, revenues, and expenses reports to management teams.</li>
              <li>Researched competition and developed strategies to stand out as a company against competitors.</li>
              <li>Monitored the performance of sales team members and worked to increase team morale and motivation.</li>
            </ul>
          `,
        },
        {
          title: "Sales Associate",
          subtitle: "The Mighty East",
          location: "Denver",
          meta: "Aug 2008 – Aug 2010",
          editorHTML: `
            <ul class="list-disc list-outside pl-5 space-y-0.5 mt-1">
              <li>Provided excellent customer service at all times.</li>
              <li>Checked prices and promotional sales for customers.</li>
              <li>Addressed customer queries and concerns to the best of my ability.</li>
              <li>Helped to increase customer retention by striving to create wonderful customer experiences.</li>
              <li>Worked with the mission of the company in mind and served as a dedicated and enthusiastic part of the sales team.</li>
            </ul>
          `,
        },
      ],
    },
    {
      id: "education",
      title: "Education",
      items: [
        {
          title: "Bachelor of Marketing",
          subtitle: "Colorado College",
          location: "Colorado Springs",
          meta: "Aug 2006 – May 2009",
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
    title3: "Date or Date Range",
    placeholder3: "Jan 2021 – Dec 2023",
    title4: "Location",
    placeholder4: "Mountain View",
  },

  skills: {
    title1: "Skill",
    placeholder1: "Languages",
    title2: "Values",
    placeholder2: "React, Tailwind, ...",
    title3: "",
    placeholder3: "",
    title4: "",
    placeholder4: "",
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
    title3: "Date or Date Range",
    placeholder3: "Jan 2024 – Present",
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
