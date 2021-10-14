import { JSDOM } from "jsdom";

type GetWebsiteReturn = {
  document: Document;
  website: string;
};

export default async function getWebsite<T extends { text(): Promise<string> }>(
  response: T
): Promise<GetWebsiteReturn> {
  const website = await response.text();
  const { document } = new JSDOM(website).window;
  return { document, website };
}
