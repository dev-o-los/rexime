import { ResumeData, ResumeEntry } from "@/lib/resume-types";
import TiptapHTML from "../editor/TiptapHTML";

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
    {item.editorHTML && <TiptapHTML html={item.editorHTML} />}
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
    {item.gpa && <p className="text-xs italic text-gray-600">{item.gpa}</p>}
    {item.editorHTML && (
      <TiptapHTML className="italic" html={item.editorHTML} />
    )}
  </div>
);

// -------------------------------------------------
// 4. MAIN RESUME COMPONENT (Absolute Header Layout)
// -------------------------------------------------

export const ResumeAmsterdam = ({ data }: { data: ResumeData }) => {
  const { name, title, summary, phone, email, location, sections } = data;

  const skillsSection = sections?.find((s) => s.id === "skills");
  const employmentSection = sections?.find((s) => s.id === "experience");
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
              <p
                className="text-xs text-gray-800"
                dangerouslySetInnerHTML={{ __html: summary }}
              />
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
