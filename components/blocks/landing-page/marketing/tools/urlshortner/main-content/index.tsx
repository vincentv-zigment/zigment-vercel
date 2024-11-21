import React, { useState } from 'react'
import  { LinkHref } from '../link-item';
import Link from 'next/link';
import axiosWithoutAuth from '@/lib/axiosAPIwithoutAuth';
import dynamic from 'next/dynamic';
import { Button } from '@/components/ui/button';
import { Loader } from 'lucide-react';

// Dynamically import components
const LinkItem = dynamic(() => import('../link-item'));


const MainContent = () => {

    const [url, setUrl] = useState("");
    const [links, setLinks] = useState<LinkHref[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false)
  
    const isValidUrl = (url: string) => {
      const pattern = new RegExp(
        "^(https?:\\/\\/)?" + // protocol
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
        "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
        "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
        "(\\#[-a-z\\d_]*)?$",
        "i"
      ); // fragment locator
      return !!pattern.test(url);
    };
  
    const handleSubmit = async () => {
      setLoading(true)
      if (!url.trim()) {
        setError("URL is required.");
        return;
      }
  
      if (links.some((link) => link.longUrl === url)) {
        setError("This URL has already been shortened.");
        return;
      }
  
      if (!isValidUrl(url)) {
        setError("Please enter a valid URL.");
        return;
      }
  
      try {
        const { data } = await axiosWithoutAuth.post("/common-services/shorten-url", {
          url,
          perma_link: true
        });
  
        const newLink: LinkHref = {
          id: Date.now().toString(),
          title: "Default Title", // Use a default title if none provided
          shortUrl: `https://zig.is/${data.unique_key}`,
          longUrl: url,
          createdAt: new Date(data.created_timestamp).toISOString(),
          totalClicks: 0,
          password: data.password
  
        };
        setLinks([...links, newLink]);
        setUrl("");
  
  
      } catch (err) {
        console.error(err);
        setError("Failed to generate a short link");
      } finally {
        setLoading(false)
      }
    };
  
    const removeLinkById = (id: string | number) => {
      setLinks(links.filter((link) => link.id !== id));
    };
  

  return (
    <div className="w-full max-w-2xl">
            <h1 className="text-brand-grey pt-4 text-center text-3xl sm:text-4xl md:text-5xl font-medium leading-tight my-4">
              Free URL Shortener
            </h1>
            <div className="container mx-auto text-center mb-10">
              <h2 className="text-gray-600 p-4 sm:p-6">
                A Free Tool to{" "}
                <a
                  href="https://zigment.ai/tools/url-shortner"
                  title="URLs shortener | Rebrandly"
                  rel="noopener noreferrer"
                  className="text-blue-400"
                >
                  shorten URLs
                </a>{" "}
                powered by <Link href={'/'} className="text-blue-400">Zigment</Link> . Create short & memorable links in seconds.
              </h2>
              <div
                className="w-full flex flex-col sm:flex-row items-center gap-4 justify-center"
              >
                <input
                  type="text"
                  className="border-2 focus:border-brand-orange-main outline-none focus:ring-0  px-4 rounded-2xl h-12 w-full max-w-lg"
                  maxLength={256}
                  name="url"
                  placeholder="Enter link here"
                  id="url"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  autoComplete="off"

                />
                <Button variant={'primary'} size={'sm'}   onClick={handleSubmit}>
                  {loading ? <Loader/> : "Shorten URL"}
                </Button>

              </div>
              {error && (
                <div className="text-red-500 mt-4 font-outfit">{error}</div>
              )}
              <div className="flex flex-col items-center justify-center w-full mt-4">
                {links.length > 0 && links.map((link) => (
                  <LinkItem key={link.id} link={link} onRemove={removeLinkById} />
                ))}
              </div>
              <div className="text-gray-600 mt-4">
                By clicking Shorten URL, you agree to Zigment{" "}
                <Link
                  href="/terms-of-service"
                  className="text-blue-400"
                >
                  Terms of Use
                </Link>
                {" "}and{" "}
                <Link
                  href="/privacy-policy"
                  className="text-blue-400"
                >
                  Privacy Policy
                </Link>{" "}


                .
              </div>
            </div>
          </div>
  )
}

export default MainContent