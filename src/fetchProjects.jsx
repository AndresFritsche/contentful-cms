import { createClient } from "contentful";
import { useState, useEffect } from "react";

const client = createClient({
  space: "9llnn87k571",
  environment: "master",
  accessToken: "eTx2XZtMObOFCVgwDWIpVRTh8GNKvKqlieH4FsCMt-A",
});

const useFetchProjects = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);
  const getData = async () => {
    try {
      const response = await client.getEntries({ content_type: "projects" });
      const projects = response.items.map((item) => {
        const { title, url, description } = item.fields;
        const id = item.sys.id;
        const img = image?.fields?.file?.url;
        return { title, url, id, img };
      });
      setProjects(project)
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return {loading, projects}
};
