import Spinner from '@/components/common/loaders/spinner';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { XMarkIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';
import { Dispatch, SetStateAction, useState } from 'react';

type Props = {
    setOpenModal: Dispatch<SetStateAction<boolean>>;
    loading: boolean;
    downloadQR:()=>void
}

const AdComponent = ({setOpenModal, loading, downloadQR}:Props) => {
    const [downloadCLicked, setDownloadClicked] = useState(false)
  return (
    <>
        <div className='fixed top-0 left-0 w-screen h-screen  z-[1000]' onClick={()=>setOpenModal(false)} style={{background:'black', opacity:'50%'}}/>
        <div className="max-w-2xl max-h-screen fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  w-full mx-auto  z-[2000] overflow-hidden space-y-8">
            <div className='  bg-primary text-white rounded-lg  shadow-lg p-2 text-center flex items-center justify-center gap-1'>
                {loading && <><Spinner color=''/>Your QR Code is being generated. Please do not refresh or close the window.</> }
                {!loading && downloadCLicked && 'Done generating. Downloading your QR Code.'}
                {!loading && !downloadCLicked && 'Click on Download'}
            </div>
            <div className='w-full bg-white rounded-lg  shadow-lg overflow-hidden p-2'>
                <div className=" h-76 w-full relative ">
                    <button onClick={()=>setOpenModal(false)} className='absolute top-1 right-1 text-black cursor-pointer z-20' >
                        <XMarkIcon className='w-10 h-10 '/>
                    </button>
                    <Link href="/demo" className='absolute top-2 left-3 hover:underline text-sm font-medium z-20'>See it in action</Link>
                    <video
                        autoPlay
                        muted
                        loop={true}
                        className="w-full border-2 border-gray-300 h-full object-contain rounded-md"
                    >
                    <source
                        src="https://cdn.zigment.ai/assets/1712047058-WhatsApp demo 6 short.mp4"
                        type="video/mp4"
                    />
                    </video>
                    </div>
                <div className="py-5 px-10 text-center">
                    <h5 className="text-xl font-bold text-gray-900 mb-4">Zigment AI Lead Generator</h5>
                    <p className="text-sm text-gray-700 mb-6 font-sans">
                    Zigment’s conversational AI sales platform engages,
pitches, qualifies and converts leads 24/7
                    </p>
                    <div className="flex justify-center gap-2">
                        <Button 
                        variant={'primary'}
                        size={'sm'}
                        className='flex-shrink-0'
                        onClick={()=>{
                            setDownloadClicked(true);downloadQR()
                        }}>
                            Download QR
                        </Button>
                        <Link href={'/demo'} className={cn(buttonVariants({variant:'secondary', size:'sm'}))} >
                            View Demo
                        </Link>
                
                    </div>
                
                </div>
            </div>

        </div>
    </>
  );
};

export default AdComponent;
