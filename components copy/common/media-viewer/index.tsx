import { MediaFileTypes } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { useState } from 'react';
import { MdOutlineFileDownload } from "react-icons/md";

function MediaViewer({ url, mime_type, is_safe, caption }: MediaFileTypes) {
    const [showAnyway, setShowAnyway] = useState<boolean>(false);

    if (mime_type) {
        if (mime_type.startsWith('image/')) {
            let nsfw = false;
            if (is_safe === false) {
                nsfw = true
            }
            if (nsfw && !showAnyway) {
                return (
                    <div className="relative">
                        <Image width={100} height={100} src={url} alt={`${caption && caption.length > 0 ? `${caption}` : `Media content`}`} className="filter blur-xl" />
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white">
                            <div className="text-center">
                                <p>This image may contain sensitive content.</p>
                                <button
                                    onClick={() => setShowAnyway(true)}
                                    className="mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                                >
                                    Show Anyway
                                </button>
                            </div>
                        </div>
                    </div>
                );
            }
            return <Image 
                width={100} 
                height={100} 
                src={url} 
                alt={`${caption && caption.length > 0 ? `${caption}` : `Media content`}`} onDoubleClick={() => {
                    window.open(url, '_blank');
                }} 
                />;
        }

        if (mime_type.startsWith('audio/')) {
            return <audio controls src={url}>Your browser does not support the audio element.</audio>;
        }

        if (mime_type.startsWith('video/')) {
            return <video controls src={url}>Your browser does not support the video element.</video>;
        }

        // Handle PDF files
        if (mime_type === 'application/pdf') {
            return (
                <div className="overflow-hidden">
                    <div className="border-4 border-slate-50 w-full h-[200px] rounded-md overflow-hidden flex flex-col">
                        <iframe src={url} style={{ width: '100%', height: '100%', }} className="rounded-md overflow-hidden" seamless scrolling="no">
                            This browser does not support PDFs. Please download the PDF to view it: <a href={url}>Download PDF</a>.
                        </iframe>
                        <div className="bg-slate-50 p-2 flex items-center justify-end ">
                            <a href={url} download={url} target="_blank" className="text-gray-500 hover:text-gray-700">
                                <MdOutlineFileDownload className="w-6 h-6" />
                            </a>
                        </div>
                    </div>
                </div>
            );
        }

        return (
            <span>
                File Type: {mime_type}. Click to <Link href={url} target="_blank" className="text-indigo-500 hover:underline">View/Download</Link>
            </span>
        );

    } else {
        return <div>Unsupported media type: {mime_type}</div>;
    }
}

export default MediaViewer;