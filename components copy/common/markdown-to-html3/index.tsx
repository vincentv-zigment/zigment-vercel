/* eslint-disable @typescript-eslint/no-explicit-any */
import ReactMarkdown from 'react-markdown';

type Props = {
  content: any
}

const MarkdownToHTML3 = ({ content }: Props) => {

  const renderers = {
     
  };

  return (
    <div className='markdown-content' >
      <ReactMarkdown components={renderers}>
        {content}
      </ReactMarkdown>
    </div>
  )
}

export default MarkdownToHTML3