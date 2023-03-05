import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "dl69uwak",
  dataset: "production",
  apiVersion: "2021-10-21",
  useCdn: false,
});

export const getPets = async () => {
  return await client.fetch(`*[_type == "pet"]`);
};

export const getPosts = async () => {
  return await client.fetch(`*[_type == "posts"] {
  _id,
  name,
    Cont,
    desc
}`)
};


export const getPostById = async (/** @type {any} */ id) => {
 return await client.fetch(`*[_id == "${id}"]`);
}


