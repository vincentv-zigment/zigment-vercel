import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge" 

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const copyJsonToExcel = (jsonData: any[]) => {
  // Format JSON data to Excel-compatible format
  const csvContent = jsonData.map(row => Object.values(row).join(',')).join('\n');

  // Copy to clipboard function
  

  // Copy formatted data to clipboard
  copyToClipboard(csvContent);

  // Optionally, alert the user or log success
  console.log('Data copied to clipboard:', csvContent);
};

export const copyToClipboard = (text: string) => {
  const dummy = document.createElement('textarea');
  document.body.appendChild(dummy);
  dummy.value = text;
  dummy.select();
  document.execCommand('copy');
  document.body.removeChild(dummy);
  
};

export function convertObjectValuesToString(obj:any) {
  // Iterate over each property in the object
  try {
    const temp_obj = {...obj}
    for (let key in temp_obj) {
        // Check if the property is an array
        if (Array.isArray(temp_obj[key])) {
            // Convert the array to a comma-separated string
            if(temp_obj[key].length > 0 ){
              temp_obj[key] = temp_obj[key].join(',');
            }
        }
    }
    return temp_obj;

  } catch (error) {
    return {}
  }
}

 
 
