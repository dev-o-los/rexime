import { ResumeData, ResumeEntry } from "@/lib/resume-types";
import { BsFillDiamondFill } from "react-icons/bs";
import { FaEnvelope, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import TiptapHTML from "../editor/TiptapHTML";
import { email } from "zod";

/// -------------------------------------------------
// 2. ICON COMPONENTS (Inline SVGs, no libraries)
// -------------------------------------------------
// These are used to match the icons in the resume image.

// -------------------------------------------------
// 3. HELPER COMPONENTS (Internal)
// -------------------------------------------------

/**
 * Renders the section title (e.g., "SUMMARY") and the underline.
 */
const SectionTitle = ({ title }: { title: string }) => (
  <div className="mt-6 mb-3">
    <h2 className="text-sm font-bold text-gray-600 uppercase tracking-wider">
      {title}
    </h2>
    <div className="w-full h-[2px] bg-gray-800 mt-1"></div>
  </div>
);

/**
 * Renders a "PROJECTS" or other default section item.
 */
const DefaultItem = ({ item }: { item: ResumeEntry }) => (
  <div className="mb-4">
    {item.title && (
      <h3 className="text-sm font-semibold text-gray-900">{item.title}</h3>
    )}
    {item.subtitle && (
      <p className={`text-sm italic text-gray-700 ${item.title ? "mt-0" : ""}`}>
        {item.subtitle}
      </p>
    )}
    {item.editorHTML && (
      <TiptapHTML className="text-sm" html={item.editorHTML} />
    )}
  </div>
);

/**
 * Renders an "EXPERIENCE" section item with the timeline.
 */
const ExperienceItem = ({
  item,
  isLast,
}: {
  item: ResumeEntry;
  isLast: boolean;
}) => (
  // 1. Use flex for the whole item.
  <div className="flex">
    {/* 2. Left Column (Dates & Location) */}
    {/* Given a fixed width and padding on the right for spacing */}
    <div className="w-32 flex-shrink-0 text-sm pr-4">
      {item.meta && <p className="font-semibold text-gray-800">{item.meta}</p>}
      {item.location && <p className="text-gray-600 mt-1">{item.location}</p>}
    </div>

    {/* 3. Center Column (Timeline) */}
    {/* This column just holds the dot and line */}
    <div className="relative w-4 flex-shrink-0">
      {/* Timeline vertical line */}
      {!isLast && (
        <div className="absolute left-1/2 top-2 bottom-0 w-0.5 bg-gray-300 -translate-x-1/2"></div>
      )}
      {/* Timeline dot */}
      <div className="absolute left-1/2 top-2 w-2 h-2 rounded-full bg-gray-800 -translate-x-1/2"></div>
    </div>

    {/* 4. Right Column (Job Details) */}
    {/* Takes up the remaining space, with padding on the left */}
    <div className="pb-6 pl-4 flex-1">
      {item.title && (
        <h3 className="text-sm font-semibold text-gray-900">{item.title}</h3>
      )}
      {item.subtitle && (
        <p className="text-sm italic text-gray-700 mt-0">{item.subtitle}</p>
      )}
      {item.editorHTML && <TiptapHTML html={item.editorHTML} />}
    </div>
  </div>
);

/**
 * Renders a "KEY ACHIEVEMENTS" section item.
 */
const AchievementItem = ({ item }: { item: ResumeEntry }) => (
  <div className="flex gap-3">
    <div className="flex-shrink-0">
      <BsFillDiamondFill className="w-4 h-4 text-gray-800 mt-1" />
    </div>
    <div>
      {item.title && (
        <h3 className="font-semibold text-sm text-gray-900">{item.title}</h3>
      )}
      {item.editorHTML && <TiptapHTML html={item.editorHTML} />}
    </div>
  </div>
);

// -------------------------------------------------
// 4. MAIN RESUME COMPONENT
// -------------------------------------------------

export const ResumeTimeLine = ({ data }: { data: ResumeData }) => {
  const { name, title, summary, phone, email, linkedin, location, sections } =
    data;

  // Helper to find a specific section
  //   const getSection = (title: string) =>
  //     sections?.find((s) => s.title.toUpperCase() === title.toUpperCase());

  // Filter out sections that we will render manually (Summary)
  // We can add more here if other top-level fields map to sections
  const dynamicSections = sections?.filter(
    (s) => s.title.toUpperCase() !== "SUMMARY"
  );

  return (
    // We use A4-like proportions for printing,
    // (w-[210mm] h-[297mm]) but max-w-4xl is better for web.
    // Use `font-sans` as a good default.
    <div className="max-w-4xl mx-auto p-10 bg-white shadow-lg font-sans text-gray-900">
      {/* --- HEADER --- */}
      <header>
        {name && (
          <h1 className="text-3xl font-bold text-gray-800 uppercase">{name}</h1>
        )}
        {title && (
          <h2 className="text-sm font-medium text-gray-600 uppercase tracking-wide mt-1">
            {title}
          </h2>
        )}

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-1 mt-4 text-xs text-gray-700">
          {phone && (
            <div className="flex items-center gap-2">
              <FaPhoneAlt className="w-4 h-4 text-gray-600" />
              <span>{phone}</span>
            </div>
          )}
          {email && (
            <div className="flex items-center gap-2">
              <FaEnvelope className="w-4 h-4 text-gray-600" />
              <span>{email}</span>
            </div>
          )}
          {location && (
            <div className="flex items-center gap-2">
              <MdLocationOn className="w-4 h-4 text-gray-600" />
              <span>{location}</span>
            </div>
          )}
          {linkedin && (
            <div className="flex items-center gap-2">
              <FaLinkedin className="w-4 h-4 text-gray-600" />
              <span>{linkedin}</span>
            </div>
          )}
        </div>
      </header>

      {/* --- MAIN CONTENT --- */}
      <main className="mt-4">
        {/* --- SUMMARY --- */}
        {summary && (
          <section>
            <SectionTitle title="Summary" />
            <p
              className="text-xs text-gray-800"
              dangerouslySetInnerHTML={{ __html: summary }}
            />
          </section>
        )}

        {/* --- DYNAMIC SECTIONS (Experience, Projects, etc.) --- */}
        {dynamicSections?.map((section) => {
          // Normalize title for comparison
          //   const sectionTitle = section.title.toUpperCase();

          return (
            <section key={section.id}>
              <SectionTitle title={section.title} />

              {/* EXPERIENCE Section Layout */}
              {section.id === "experience" && (
                <div className="relative">
                  {section.items.map((item, index) => (
                    <ExperienceItem
                      key={index}
                      item={item}
                      isLast={index === section.items.length - 1}
                    />
                  ))}
                </div>
              )}

              {/* KEY ACHIEVEMENTS Section Layout */}
              {section.id === "achievements" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                  {section.items.map((item, index) => (
                    <AchievementItem key={index} item={item} />
                  ))}
                </div>
              )}

              {/* PROJECTS Section (and other defaults) */}
              {(section.id === "projects" ||
                (section.id !== "experience" &&
                  section.id !== "achievements")) && (
                <div>
                  {section.items.map((item, index) => (
                    <DefaultItem key={index} item={item} />
                  ))}
                </div>
              )}
            </section>
          );
        })}
      </main>
    </div>
  );
};
