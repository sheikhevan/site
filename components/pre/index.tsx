import { CodeBlock } from "@/components/ui/code-block";
import React, { type ComponentPropsWithoutRef } from "react";

function isReactElementWithProps(
  node: React.ReactNode,
): node is React.ReactElement<{ [key: string]: unknown }> {
  return (
    React.isValidElement(node) &&
    typeof node.props === "object" &&
    node.props !== null
  );
}

export function Pre({
  children,
  className: preClassName,
  ...props
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

    // More robust type checking for childCodeContent
    if (typeof childCodeContent === "string") {
      code = childCodeContent.trimEnd();
    } else if (Array.isArray(childCodeContent)) {
      // Add type assertion to resolve the 'never' type issue
      code = (childCodeContent as React.ReactNode[])
        .map((child) => {
          if (typeof child === "string") return child;
          if (isReactElementWithProps(child)) {
            return typeof child.props.children === "string"
              ? child.props.children
              : "";
          }
          return "";
        })
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
