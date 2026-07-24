import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, Document, MARKS } from "@contentful/rich-text-types";

const options = {
  renderMark: {
    [MARKS.BOLD]: (text: React.ReactNode) => (
      <strong className="font-semibold text-foreground">{text}</strong>
    ),
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (_node: unknown, children: React.ReactNode) => (
      <p className="mb-4 leading-relaxed text-muted-foreground">{children}</p>
    ),
    [BLOCKS.HEADING_2]: (_node: unknown, children: React.ReactNode) => (
      <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
        {children}
      </h2>
    ),
    [BLOCKS.HEADING_3]: (_node: unknown, children: React.ReactNode) => (
      <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">
        {children}
      </h3>
    ),
    [BLOCKS.UL_LIST]: (_node: unknown, children: React.ReactNode) => (
      <ul className="list-disc list-inside mb-4 space-y-1 text-muted-foreground">
        {children}
      </ul>
    ),
  },
};

export default function RichTextRenderer({ content }: { content: Document }) {
  return <div>{documentToReactComponents(content, options)}</div>;
}
