// -------------------------------------------------
// 1. DATA TYPES (As provided by you)
// -------------------------------------------------

export type ResumeField = {
  label: string;
  value?: string;
};

export type ResumeEntry = {
  title?: string;
  subtitle?: string;
  meta?: string;
  website?: string;
  location?: string;
  gpa?: string;
  editorHTML?: string;
  fields?: ResumeField[];
};

export type ResumeSection = {
  id: string; // Identifying
  title: string;
  items: ResumeEntry[];
  displayOrder?: number;
};

export type ResumeData = {
  name: string;
  title?: string;
  summary?: string;
  phone?: string;
  email?: string;
  linkedin?: string;
  github?: string;
  website?: string;
  location?: string;
  nationality?: string;
  languages?: string[];
  skillsBerlin?: string[];
  sections?: ResumeSection[];
};

// -------------------------------------------------
// 2. ICONS
// -------------------------------------------------

// -------------------------------------------------
// 3. HELPER COMPONENTS
// -------------------------------------------------

const SidebarHeader = ({ title }: { title: string }) => (
  <div>
    <h3 className="text-sm font-bold uppercase text-gray-800 tracking-wider">
      {title}
    </h3>
    <hr className="border-t-2 border-gray-300 my-2" />
  </div>
);

const DetailItem = ({ label, value }: { label: string; value?: string }) => (
  <div className="mb-2">
    <h4 className="text-xs font-bold uppercase text-gray-600 tracking-wider">
      {label}
    </h4>
    <div className="text-gray-700 text-xs">{value}</div>
  </div>
);

const SkillEntry = ({ item }: { item: ResumeEntry }) => {
  const level = parseInt(item.meta || "0", 10);
  return (
    <div className="mb-2">
      <p className="text-sm text-gray-800">{item.title}</p>
      <div className="flex mt-1">
        {[...Array(5)].map((_, i) => (
          <span
            key={i}
            className={`w-2.5 h-2.5 rounded-full mr-1 ${
              i < level ? "bg-black" : "bg-gray-300"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

const MainSectionTitle = ({ title }: { title: string }) => (
  <div className="mt-4 mb-2">
    <h2 className="text-sm font-bold uppercase text-gray-700 tracking-wider">
      {title}
    </h2>
    <hr className="border-t-2 border-gray-300 my-2" />
  </div>
);

const EmploymentEntry = ({ item }: { item: ResumeEntry }) => (
  <div className="mb-3">
    <div className="flex justify-between items-baseline">
      <h3 className="text-sm font-bold text-gray-900">
        {item.title}
        {item.subtitle && (
          <span className="font-normal text-gray-800">, {item.subtitle}</span>
        )}
      </h3>
      {item.location && (
        <span className="text-xs text-gray-600 font-medium">
          {item.location}
        </span>
      )}
    </div>
    {item.meta && (
      <p className="text-xs italic text-gray-600 mb-1">{item.meta}</p>
    )}
    {item.editorHTML && (
      <div
        className="text-xs text-gray-800"
        dangerouslySetInnerHTML={{ __html: item.editorHTML }}
      />
    )}
  </div>
);

const EducationEntry = ({ item }: { item: ResumeEntry }) => (
  <div className="mb-2">
    <div className="flex justify-between items-baseline">
      <h3 className="text-sm font-bold text-gray-900">
        {item.title}
        {item.subtitle && (
          <span className="font-normal text-gray-800">, {item.subtitle}</span>
        )}
      </h3>
      {item.location && (
        <span className="text-xs text-gray-600 font-medium">
          {item.location}
        </span>
      )}
    </div>
    {item.meta && <p className="text-xs italic text-gray-600">{item.meta}</p>}
  </div>
);

// -------------------------------------------------
// 4. MAIN RESUME COMPONENT (Absolute Header Layout)
// -------------------------------------------------

export const ResumeAmsterdam = ({ data }: { data: ResumeData }) => {
  const { name, title, summary, phone, email, location, sections } = data;

  const skillsSection = sections?.find((s) => s.id === "skills");
  const employmentSection = sections?.find((s) => s.id === "employment");
  const educationSection = sections?.find((s) => s.id === "education");

  return (
    // 1. Main wrapper must be 'relative' to contain the absolute header
    <div className="relative max-w-4xl mx-auto bg-white shadow-lg font-sans">
      {/* 2. Header is 'absolute', centered, and 'z-10' to sit on top */}
      <header className="absolute top-0 left-0 right-0 z-10 flex justify-center pt-6">
        {/* This box has a white background to match the image */}
        <div className="border-4 border-black p-5 text-center bg-white w-full max-w-lg">
          {name && (
            <h1 className="text-2xl text-black font-bold tracking-widest uppercase">
              {name}
            </h1>
          )}
          {title && (
            <h2 className="text-sm tracking-wider uppercase text-gray-700 mt-1">
              {title}
            </h2>
          )}
        </div>
      </header>

      {/* 3. Main two-column layout (sits *under* the header) */}
      <div className="flex">
        {/* --- LEFT SIDEBAR --- */}
        {/* 4. 'bg-gray-50' now extends to the top */}
        {/* 5. 'pt-36' pushes the *content* down to clear the header */}
        <aside className="w-1/3 bg-gray-100 px-5 py-6 pt-40">
          {/* Details Section */}
          <SidebarHeader title="Details" />
          <div className="mt-3">
            {location && <DetailItem label="Address" value={location} />}
            {phone && <DetailItem label="Phone" value={phone} />}
            {email && <DetailItem label="Email" value={email} />}
          </div>

          {/* Skills Section */}
          {skillsSection && (
            <div className="mt-4">
              <SidebarHeader title={skillsSection.title} />
              <div className="mt-3">
                {skillsSection.items.map((item, index) => (
                  <SkillEntry key={index} item={item} />
                ))}
              </div>
            </div>
          )}
        </aside>

        {/* --- RIGHT MAIN CONTENT --- */}
        {/* 6. 'bg-white' also extends to the top */}
        {/* 7. 'pt-36' pushes this content down as well */}
        <main className="w-2/3 bg-white px-6 py-6 pt-36">
          {/* Profile Section (from data.summary) */}
          {summary && (
            <section>
              <MainSectionTitle title="Profile" />
              <p className="text-xs text-gray-800 leading-snug">{summary}</p>
            </section>
          )}

          {/* Employment Section */}
          {employmentSection && (
            <section>
              <MainSectionTitle title={employmentSection.title} />
              {employmentSection.items.map((item, index) => (
                <EmploymentEntry key={index} item={item} />
              ))}
            </section>
          )}

          {/* Education Section */}
          {educationSection && (
            <section>
              <MainSectionTitle title={educationSection.title} />
              {educationSection.items.map((item, index) => (
                <EducationEntry key={index} item={item} />
              ))}
            </section>
          )}
        </main>
      </div>
    </div>
  );
};

// -------------------------------------------------
// 5. MOCK DATA (Sample data from the image)
// -------------------------------------------------

export const mockData: ResumeData = {
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
      id: "employment",
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
