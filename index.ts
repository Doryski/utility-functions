import fetch from "node-fetch";

async function getGoogle(): Promise<void> {
  try {
    const res = await fetch("https://google.com");
    if (res.ok) {
      console.log("Hello world!");
    }
  } catch (error) {
    console.error(error);
  }
}

getGoogle();
