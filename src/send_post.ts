import { config } from "dotenv";
import { Plunk } from "~/plunk";
config();

async function main() {
  const api_key = process.env.PLUNK_SECRET_KEY;
  if (!api_key) return;
  const slug = process.argv.at(2);
  if (!slug) {
    console.log("No slug passed")
    return
  }
  const plunk = new Plunk(api_key);

  const success = await plunk.events.track({
    event: "new-post",
    email: "josh.mjbrowns@gmail.com",
    subscribed: false,
    data: {
      post_slug: slug,
    },
  });
  if(success.success) {
    console.log("Emails sent!")
    return
  }
  console.log(success)
}

await main();
