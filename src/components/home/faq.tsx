import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Download,
  FileText,
  HelpCircle,
  Palette,
  ShieldCheck,
  Type,
} from "lucide-react";

const faq = [
  {
    icon: FileText,
    question: "What is this resume builder all about?",
    answer:
      "It’s a live, reactive resume builder designed to make a professional resume effortless. As you edit your details, your resume updates instantly — no need to refresh or reformat.",
  },

  {
    icon: Palette,
    question: "Can I customize the resume design?",
    answer:
      "Absolutely! You can choose from multiple color themes, adjust layouts, and apply unique styles to match your personal or professional branding.",
  },
  {
    icon: Type,
    question: "Are different font styles available?",
    answer:
      "Yes, you can switch between various elegant and professional font faces to give your resume a distinctive look while maintaining readability.",
  },
  {
    icon: Download,
    question: "Can I download my resume as a PDF?",
    answer:
      "Yes, with just one click you can download a high-quality, print-ready PDF version of your resume — perfectly formatted and ready to share anywhere.",
  },
  {
    icon: ShieldCheck,
    question: "Is my personal data secure?",
    answer:
      "Your data stays private and secure. We don’t share or sell user information — everything you create remains accessible only to you.",
  },
  {
    icon: HelpCircle,
    question: "Do I need any design or coding experience?",
    answer:
      "Not at all! The interface is built for everyone. Whether you’re a student or a working professional, you can create a stunning resume in minutes — no design skills required.",
  },
];

const FAQ = () => {
  return (
    <div
      id="faq"
      className="min-h-screen flex items-center justify-center px-6 py-12"
    >
      <div className="flex flex-col md:flex-row items-start gap-x-12 gap-y-6">
        <h2 className="text-4xl lg:text-5xl leading-[1.15]! font-semibold tracking-tighter">
          Frequently Asked <br /> Questions
        </h2>

        <Accordion type="single" defaultValue="question-0" className="max-w-xl">
          {faq.map(({ question, answer }, index) => (
            <AccordionItem key={question} value={`question-${index}`}>
              <AccordionTrigger className="text-left text-lg">
                {question}
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                {answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;
