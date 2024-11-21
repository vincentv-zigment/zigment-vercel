import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge" 

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function classNames(...classes: (string | undefined | null)[]) {
  return classes.filter(Boolean).join(" ");
}

export const copyToClipboard = (text: string) => {
  const dummy = document.createElement('textarea');
  document.body.appendChild(dummy);
  dummy.value = text;
  dummy.select();
  document.execCommand('copy');
  document.body.removeChild(dummy);
  
};

 

 
 
