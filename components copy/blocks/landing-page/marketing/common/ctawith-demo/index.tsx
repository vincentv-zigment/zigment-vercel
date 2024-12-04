import ChatBotRightAway from '@/components/common/chatbot/ChatRightAway'
import Link from 'next/link'


const CTAWithDemo = () => {
    return (
        <div>
            <div className=" border-y  border-gray-300 my-4 text-center">
                <div className="w-full max-w-6xl mx-auto py-6 px-2 md:px-10">
                    <div>
                        <h1 className="text-2xl   font-medium text-gray-900 lg:text-2xl   leading-tight">
                            <div className="relative leading-tight">
                                <p className="block xl:inline ">
                                    Want to leverage AI for your business?
                                </p>{" "}
                            </div>
                        </h1>
                        <div className=" mt-6     text-center  ">
                            <div className="rounded-md w-3/4 mx-auto flex flex-col md:flex-row items-center relative gap-4 md:px-10 justify-center lg:justify-center">
                                {/* <CHatRigh  */}

                                <ChatBotRightAway
                                    widget_id={`zP9jqorUG3-${process.env.NEXT_PUBLIC_APP_ENV}`}
                                    skip_cookie={false}
                                    absolute
                                />
                            </div>
                            <div className='my-8 text-gray-500'>OR</div>
                            <div className="mx-auto max-w-7xl  ">
                                <p className="lg:text-center md:text-lg font-semibold text-center leading-8 text-gray-900">

                                    Drop us an email at
                                    <Link href="mailto:10xsales@zigment.ai" className='ml-2 text-indigo-500'>

                                        10xsales@zigment.ai
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

        </div>
    )
}

export default CTAWithDemo