/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from 'next/image';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import CTASection from '../marketing/landing-page/cta-section';


type Props = {
  content: any
}

const MarkdownToHTML2 = ({ content }: Props) => {

  const renderers = {
    a: ({  children, href,  }: any) => {
      return <Link href={href}> {children} </Link>

    },
    img: ({ src, alt }: any) => (
      <Image src={src} alt={alt} width={100} height={100} className="w-full h-full" />
    ),
    customComponent: () => <CTASection />,
    strong:(props:any)=>{
      if(props.children[0] === 'CTA Section'){
        return <CTASection/> 
      }else{
        return <strong>{props.children[0]}</strong>
      }
    }

  };

  return (
    <div className='   
          
          [&_p]:my-4!important
          [&_ul]:list-disc!important	
          [&_ol]:list-decimal!important		
          [&_ol]:mx-6!important		
          [&_ol]:list-outside!important			
          [&_h1]:font-medium!important
          [&_h1]:text-4xl!important
          [&_h1]:mb-8!important
          [&_h2]:font-semibold!important
          [&_h2]:md:text-2xl!important
          [&_h2]:text-xl!important
          [&_h2]:mt-5!important
          [&_h3]:text-xl!important
          [&_h3]:mt-8!important
          [&_ul]:pl-10!important
          [&_li]:p-1!important
          [&_table]:border!important
          [&_table]:border-black!important
          [&_table]:p-2!important
          [&_table]:py-4!important
          [&_table]:my-5!important
          [&_table]:mx-auto!important
          [&_tr]:border!important
          [&_tr]:border-black!important
          [&_tr]:p-2!important
          [&_td]:border!important
          [&_td]:border-black!important
          [&_td]:p-2!important
          [&_td]:text-center!important
          [&_th]:border!important
          [&_th]:border-black!important
          [&_th]:p-2!important
          [&_a]:text-blue-400!important
          [&_a]:underline!important
          font-mont 
        '>

      <ReactMarkdown
        
        components={renderers}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}

export default MarkdownToHTML2