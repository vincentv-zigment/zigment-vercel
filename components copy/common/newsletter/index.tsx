"use client";

import { useRef, useState } from "react";
import Image from "next/image";

// form
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

// gsap
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";

// shadcn components
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Title1 from "../title/title1";
import Spinner from "../loaders/spinner";
import { Marketing_Lead_Source } from "@/lib/types/ui";
import { useToast } from "@/hooks/useToast";

// components

const formSchema = z.object({
  email: z
    .string()
    .min(1, { message: "This field has to be filled." })
    .email("This is not a valid email."),
});

const Newsletter3 = () => {
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false); // Add this line
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const toast = useToast()

  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values, 'values');
    setLoading(true);
    try {
        await fetch(`${process.env.NEXT_PUBLIC_API_URL}/cms/new-lead`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: values.email,
          is_email_subscription: true,
          source: Marketing_Lead_Source.EMAIL_SUBSCRIPTION,
          source_detail: 'FOOTER',
        }),
      });
      setIsSubmitted(true); // Add this line
      // Handle response here
      toast.addToast("success", "Thank you for subscribing to our newsletter");
      
    } catch (error) {
      console.log(error, "error");
    } finally {
      setLoading(false);
    }
  }
  return (
    <section className="bg-theme  sec_space1 relative">
      <Image
        src={`/assets/imgs/shape/shape-r-5.png`}
        className="absolute top-0 right-0 w-full h-full object-cover"
        alt="shape"
        width={1920}
        height={1080}
        loading="lazy"
      />
      <div className="container" ref={containerRef}>
        <div className="max-w-[618px] mx-auto text-center mb-[55px]">
          <Title1
            text="It’s time for a shapeshifting sales approach."
            className="pb-[15px] md:pb-[24px] has_fade_anim"
          />
          <p className="text-primary has_fade_anim">
          Join our mailing list to receive some occasional updates, hacks, advice
          and generally useful stuff from us.
          </p>
        </div>
        <div className="max-w-[910px] mx-auto has_fade_anim">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="relative flex items-center gap-[10px] ps-[30px] pe-[10px] bg-white rounded-full"
            >
              <Image
                width={18}
                height={13}
                src="/assets/imgs/icon/email.png"
                alt="icon"
                loading="lazy"
              />
              <div className="grow">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Enter Your Email"
                          {...field}
                          className="h-[70px] border-0 ps-0 focus:bg-white"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              <Button variant="primary2" size="sm" type="submit" disabled={loading || isSubmitted}>
                {loading ? <Spinner color=""/> : "Submit"}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter3;

//# sourceMappingURL=index.js.map
