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

 

export function convertToImageArray(content: string): string[] {
  const regex = /(https:\/\/i\.ibb\.co\/[^\s]+)/g;
  const matches = content.matchAll(regex);
  const result = [];

  for (const match of matches) {
      result.push(match[0]);
  }

  return result;
}
  