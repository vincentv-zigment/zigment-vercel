/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from '@/components/ui/button';
import React from 'react';
import ReactMarkdown from 'react-markdown';

type Props = {
  content: string; // Ensure the content is a string
};

const MarkdownToHTML3 = ({ content }: Props) => {
  const components = {
    // Customize the paragraph rendering to handle text with square brackets
    p: ({ children, }: React.HTMLAttributes<HTMLParagraphElement>) => {
      // Transform children to handle square-bracketed text
      return (
        <>
          {React.Children.map(children, (child) => {
            if (typeof child === 'string' && child.startsWith('[') && child.endsWith(']')) {
              return (
                <div className='flex items-start justify-center p-4'>
                  <Button variant={'primary'} className='text-center mx-auto'>{child.slice(1, -1)}</Button>
                </div>
              );
            }
            return (<p>{child}</p>);
          })}
        </>
      );
    },
  };

  return (
    <div className="markdown-content">
      <ReactMarkdown components={components}>{content}</ReactMarkdown>
    </div>
  );
};

export default MarkdownToHTML3;
