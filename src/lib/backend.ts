export const useBackend = (): Backend => {
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

  return new Backend(backendUrl || "http://localhost:8080");
};

export class Backend {
  url: URL;

  constructor(url: string) {
    this.url = new URL(url);
  }

  slitherReviewCode = async (contract: File): Promise<string> => {
    console.log("reviewing code");
    var form = new FormData();
    form.append("contract", contract);

    var url = new URL(this.url);
    url.pathname = "/hello";
    const res = await fetch(url, {
      method: "POST",
      headers: {
        ContentType: "multipart/form-data",
      },
      body: form,
    });

    if (!res.ok) {
      throw Error("Error getting Slither review");
    }

    var text = await res.text();
    text = text.replace(removeUntil(text, "##"), "");
    text = removeLinesWithDashes(text);
    text = text.replaceAll("[", "");
    text = text.replaceAll("]", "");
    text = text.replaceAll(contract.name, "");
    text = removeEmptyLines(text);
    text = removeLinkLines(text);
    text = text.replaceAll("Impact: High", "Impact: _High_");
    text = text.replaceAll("Confidence: High", "Confidence: _High_");
    text = text.replaceAll("Impact: Medium", "Impact: **_Medium_**");
    text = text.replaceAll("Confidence: Medium", "Confidence: **_Medium_**");
    text = text.replaceAll("Impact: Low", "Impact: **Low**");
    text = text.replaceAll("Confidence: Low", "Impact: **Low**");
    text = text.replaceAll(
      "Impact: Informational",
      "Impact: **Informational**"
    );
    text = text.replaceAll(
      "Confidence: Informational",
      "Impact: **Informational**"
    );
    text = text.replaceAll("Impact: Optimization", "Impact: **Optimization**");
    text = text.replaceAll(
      "Confidence: Optimization",
      "Impact: **Optimization**"
    );
    text = addCodeDecorators(text);

    console.log(text);

    console.log("L3-L237".replace(/L[0-9]+-L[0-9]+/, ""));

    return text;
  };
}

function removeUntil(str: string, delimiter: string) {
  var index = str.indexOf(delimiter);
  if (index !== -1) {
    return str.substring(0, index);
  } else {
    return "";
  }
}

function removeLinesWithDashes(text: string) {
  var lines = text.split("\n");
  var filteredLines = [];
  for (var i = 0; i < lines.length; i++) {
    if (!lines[i].includes("- [ ]")) {
      filteredLines.push(lines[i]);
    }
  }
  return filteredLines.join("\n");
}

function removeEmptyLines(text: string) {
  var lines = text.split("\n");
  var filteredLines = [];
  for (var i = 0; i < lines.length; i++) {
    if (lines[i].length != 0) {
      filteredLines.push(lines[i]);
    }
  }
  return filteredLines.join("\n");
}

function removeLinkLines(text: string) {
  var lines = text.split("\n");
  var filteredLines = [];
  for (var i = 0; i < lines.length; i++) {
    if (
      lines[i].replace(/L[0-9]+-L[0-9]+/, "").trim().length != 1 &&
      lines[i].replace(/L[0-9]+/, "").trim().length != 1
    ) {
      filteredLines.push(lines[i]);
    }
  }
  return filteredLines.join("\n");
}

function addCodeDecorators(text: string) {
  var lines = text.split("\n");
  var filteredLines = [];
  for (var i = 0; i < lines.length; i++) {
    if (lines[i].trim()[0] != "-") {
      filteredLines.push(lines[i]);
    } else {
      filteredLines.push("   " + "`" + lines[i].substring(3) + "`");
    }
  }
  return filteredLines.join("\n");
}
