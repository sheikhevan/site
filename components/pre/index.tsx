import { CodeBlock } from "@/components/ui/code-block";
import React, { type ComponentPropsWithoutRef } from "react";

function isReactElementWithProps(
  node: React.ReactNode,
): node is React.ReactElement<{ [key: string]: any }> {
  return (
    React.isValidElement(node) &&
    typeof node.props === "object" &&
    node.props !== null
  );
}

export function Pre({
  children,
  // className from <pre> - we know this is likely empty based on debug
  className: preClassName,
  ...props // Other props potentially added to <pre> by plugins
}: ComponentPropsWithoutRef<"pre">) {
  let language = "plaintext"; // Default language
  let code = "";
  let childClassName = ""; // Store the child's className if found

  if (isReactElementWithProps(children)) {
    childClassName = (children.props.className as string) || ""; // Get className like "language-rust"
    const languageMatch = childClassName.match(/language-(\w+)/);
    if (languageMatch?.[1]) {
      language = languageMatch[1]; // Extracted language like "rust"
    }

    const childCodeContent = children.props.children;
    if (typeof childCodeContent === "string") {
      code = childCodeContent.trimEnd();
    } else if (Array.isArray(childCodeContent)) {
      code = childCodeContent
        .map((child) =>
          typeof child === "string" ? child : child?.props?.children || "",
        )
        .join("");
    }
  } else if (typeof children === "string") {
    code = children.trimEnd();
    const languageMatch = preClassName?.match(/language-(\w+)/);
    if (languageMatch?.[1]) {
      language = languageMatch[1];
    }
  }

  return (
    <CodeBlock language={language} code={code} filename={language} {...props} />
  );
}
