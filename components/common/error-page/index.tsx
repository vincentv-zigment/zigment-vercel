import React from "react";

type Props = {
  heading?: string;
  description?: string
}

function ErrorPage({ heading = 'Page not found', description = `The page you are looking for doesn't exist. Here are some helpful links:` }: Props) {

  return <section className="bg-white">
    <div className="container flex items-center min-h-screen px-6 py-12 mx-auto">
      <div className="flex flex-col items-center max-w-sm mx-auto text-center">
        <p className="p-3 text-sm font-medium text-brand-orange-main rounded-full bg-brand-orange-mainbg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
            />
          </svg>
        </p>
        <h1 className="mt-3 text-2xl font-semibold text-gray-800">
          {heading}
        </h1>
        <p className="mt-4 text-gray-500">
          {description}
        </p>
        <div className="flex items-center w-full mt-6 gap-x-3 shrink-0 sm:w-auto">
          <button className="flex items-center justify-center 
          w-1/2 px-5 py-2 text-sm hover:bg-brand-orange-mainbg transition-colors 
          duration-200 bg-white border border-brand-orange-main rounded-lg gap-x-2 
          sm:w-auto text-brand-orange-main"
            onClick={() => {
              window.location.href = "/";
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5 rtl:rotate-180"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
              />
            </svg>
            <span>Go back</span>
          </button>

        </div>
      </div>
    </div>
  </section>
    ;
}

export default ErrorPage;
