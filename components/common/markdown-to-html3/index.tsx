import Image from 'next/image';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import CTASection from '../marketing/landing-page/cta-section';

type Props = {
  content: any
}

const MarkdownToHTML3 = ({ content }: Props) => {

  const renderers = {
     
  };

  return (
    <div className='markdown-content' style={{fontFamily:`'Roboto', sans-serif`}}>
      <ReactMarkdown components={renderers}>
        {content}
      </ReactMarkdown>
    </div>
  )
}

export default MarkdownToHTML3