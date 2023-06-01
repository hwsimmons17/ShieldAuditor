import { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-okaidia.css";
import "prismjs/components/prism-jsx.js";
import "prismjs/plugins/line-numbers/prism-line-numbers.js";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";

export default function ResultsView({
  reviewedCode,
}: {
  reviewedCode: string | null;
}) {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <>
      <div></div>
      <pre
        className="line-numbers"
        style={{
          backgroundColor: "white",
        }}
      >
        <code
          className="language-jsx __className_46b4a6"
          style={{
            color: "black",
            fontFamily: "VictorMono",
            textShadow: "none",
            fontWeight: "500",
            margin: "10px",
          }}
        >
          {reviewedCode}
        </code>
      </pre>
    </>
  );
}
