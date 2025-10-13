import fs from "fs";
import { marked } from "marked";
import path from "path";

export default function TermsAndPrivacyPolicy() {
  const filePath = path.join(process.cwd(), "public", "terms.md");
  const markdown = fs.readFileSync(filePath, "utf8");
  const html = marked(markdown);

  return (
    <div className="flex h-full min-[800px]:mx-40">
      <div className="border-[1px]"></div>
      <div className="w-full">
        <div className="sticky top-0 w-full backdrop-blur-md">
          <h1
            id="logo"
            className="uppercase max-tab:text-3xl transition-all text-4xl ml-4 pt-4"
          >
            {"Terms and Conditions"}
          </h1>
          <div className="border-[1px] mt-5 text-justify"></div>
        </div>
        {/* <div className="whitespace-pre-wrap p-4">
            <Markdown>{markdown}</Markdown>
        </div> */}
       <div className="whitespace-break-spaces p-3"> <div dangerouslySetInnerHTML={{__html:html}}></div></div>
      </div>
      <div className="border-[1px]"></div>
    </div>
  );
}