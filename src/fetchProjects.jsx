import { createClient } from "contentful";

const client = createClient({
  space: "9llnn87k571",
  environment: "master",
  accessToken: "eTx2XZtMObOFCVgwDWIpVRTh8GNKvKqlieH4FsCMt-A",
});
client
  .getEntries({ content_type: "projects" })
  .then((response) => console.log(response));
