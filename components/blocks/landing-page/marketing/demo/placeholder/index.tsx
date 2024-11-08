import React from 'react'
import Image from 'next/image';
import { MdOutlineArrowOutward } from 'react-icons/md';
import CustomSelect4 from '@/components/common/selects/custom-select4';


const bioData = {
    name: 'nxt lnk',
    username: 'zigment.ai',
    url: 'https://zigment.ai',
    titleImg: true,
    avatar: 'https://cdn.zigment.ai/assets/zigment.svg',
    avatarImg: 'https://cdn.zigment.ai/assets/zigment.svg',
    nftAvatar: true,
    description: 'Conversational AI Platform For Sales Optimization ',
    descShow: true,
    subdesc: 'A Futuristic Upgrade For Your Sales Funnel',
    subdescShow: true,
    newProductUrl: 'https://3dicons.co',
    newProduct: true,
    author: 'zigment',
    authorURL: 'https://twitter.com/realvjy',
    footerText: 'powered by'
};

const allLinks = [
    // All social profile
    {
        title: 'Whatsapp',
        url: 'https://twitter.com/realvjy',
        type: 'social',
        icon: 'https://cdn.zigment.ai/assets/WhatsApp.svg.webp',
        on: true
    },
    {
        title: 'Instagram',
        url: 'https://instagram.com/realvjy',
        type: 'social',
        icon: 'https://cdn.zigment.ai/assets/Instagram_logo_2016.svg',
        on: true
    },
    {
        title: 'Messenger',
        url: 'https://youtube.com/realvjy',
        type: 'social',
        icon: 'https://cdn.zigment.ai/assets/1708945988-Facebook_Messenger_logo_2020.svg',
        on: false
    }


];

type Props = {}

const Placeholder = (props: Props) => {
    const {
        name,
        titleImg,
        avatarImg,
        description,
        descShow,
        subdesc,
        subdescShow,
        footerText,
        author,
        authorURL,
    } = bioData;

    const descriptionText = descShow ? description : `Write your own fallback text if description not in BioData.js or remove me/leave blank`;
    const subdescText = subdescShow ? subdesc : `Write your own if you want or just remove me/leave blank`;
    const install = allLinks;
    return (
        <div><div className="min-h-screen flex bg-brand-orange-main/10   text-white flex-col justify-between items-center text-center p-6 blur-md">
            <div>
                <div className="flex flex-col items-center    ">
                    <div className="h-16 w-16   rounded-full bg-white   p-2">

                        <Image width={200} height={200} src={avatarImg} alt="Avatar" className={`w-full h-full rounded-full`} />
                    </div>
                    <div className="flex flex-col items-center">
                        {titleImg ? (
                            <Image width={200} height={200} src={'/2.png'} alt="Title" className="w-36  my-4" />
                        ) : (
                            <h1 className="text-4xl font-bold">{name}</h1>
                        )}
                    </div>
                </div>

                <div className="flex flex-col items-center">
                    {description && <h1 className="text-xl leading-9 font-medium">{descriptionText}</h1>}
                    {subdesc && <h4 className="text-lg mt-2.5">{subdescText}</h4>}
                </div>

                <div>
                    {/* Social Icons */}
                    <div className="flex justify-center items-center gap-2 mt-4">
                        <div className="w-48 text-black">
                            <CustomSelect4
                                val={''}
                                setVal={(val) => { }}
                                list={[
                                    { id: 0, label: 'Zigment Sales Agent', value: '' },
                                    { id: 1, label: 'Whatsapp', value: 'whatsapp' },
                                    { id: 2, label: 'Instagram', value: 'instagram' },
                                    { id: 4, label: 'Messenger', value: 'messenger' },
                                ]}
                            />
                        </div>
                    </div>

                    {/* Install Section */}
                    {install.length > 0 && (
                        <div className="mt-4 max-w-sm w-full mx-auto mb-4">
                            <div className="text-sm uppercase tracking-wider  bg-gradient-to-r from-amber-500 to-pink-500 font-medium text-white py-2 rounded-md">Try on</div>
                            <div className="space-y-4 mt-4">
                                {install.map((x) => {
                                    return (
                                        <div  key={`intall_key_${x.title}`} className="py-3 px-4 border border-white/20 cursor-pointer flex items-center rounded-lg justify-between   hover:bg-brand-orange-mainbg transition-all group">
                                            <div className="flex items-center gap-4 group-hover:text-black">
                                                <Image src={x.icon} alt={x.title} width={100} height={100} className="w-8 h-8" />
                                                <span className="font-medium">{x.title}</span>
                                            </div>
                                            <button className="group-hover:text-brand-orange-main transition-all  "><MdOutlineArrowOutward /></button>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <div className="mb-10">
                <div className="text-base font-medium">
                    <h4>{footerText} <a href={authorURL} className="opacity-70 hover:opacity-100 transition-opacity duration-300">{author}</a></h4>
                </div>
            </div>
        </div></div>
    )
}

export default Placeholder