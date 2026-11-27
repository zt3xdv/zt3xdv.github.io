import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { Image } from './Image';

interface ReadmeContentProps {
  content: string;
}

export function ReadmeContent({ content }: ReadmeContentProps) {
  return (
    <div className="readme-viewer">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={{ img: Image }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
