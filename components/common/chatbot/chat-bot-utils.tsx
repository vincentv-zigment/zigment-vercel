export const getFirstUrl = (text: string) => {
    const urlRegex = /(\bhttps?:\/\/[-A-Z0-9+&@#/%?=~_|!:,.;]*[-A-Z0-9+&@#/%=~_|])/ig;
    const match = text.match(urlRegex);
    return match ? match[0] : null;
};

export const isImageUrl = (url: string | null) => {
    if (!url) return null;
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.webp'];
    return imageExtensions.some(extension => url.toLowerCase().endsWith(extension)) ? url : false;
};

export const getAllImageUrls = (text: string) => {
    const urlRegex = /(\bhttps?:\/\/[-A-Z0-9+&@#/%?=~_|!:,.;]*[-A-Z0-9+&@#/%=~_|])/ig;
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.webp'];
    const matches = text.match(urlRegex) || [];
    return matches.filter(url => imageExtensions.some(extension => url.toLowerCase().endsWith(extension)));
};

const sample = {
    "_id": "1727950462-4dc9f36d-6e50-4c68-8bc9-ef9c374d1cb3",
    "timestamp": 1727691374,
    "role": "assistant",
    "content": "Certainly. Here are the links to preview our rooms: Bathroom: https://i.ibb.co/tH02Kct/lonql-bathroom-3106-hor-clsc.jpg Suite: https://i.ibb.co/K6ZQ5tS/lonql-suite-3104-hor-clsc.jpg",
    "mime_type": "",
    "url": "",
    "channel": "WEBCHAT",
    "admin_read_message": false,
    "translated_content": "Certainly. Here are the links to preview our rooms: Bathroom: https://i.ibb.co/tH02Kct/lonql-bathroom-3106-hor-clsc.jpg Suite: https://i.ibb.co/K6ZQ5tS/lonql-suite-3104-hor-clsc.jpg"
}

export function convertToImageArray(content: string): string[] {
  const regex = /(https:\/\/i\.ibb\.co\/[^\s]+)/g;
  const matches = content.matchAll(regex);
  const result = [];

  for (const match of matches) {
      result.push(match[0]);
  }

  return result;
}
  