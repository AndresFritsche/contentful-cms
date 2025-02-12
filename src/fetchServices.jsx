import { client } from "./fetchProjects";


const client = createClient({
  space: "j9llnn87k571",
  environment: "master",
  accessToken: "eTx2XZtMObOFCVgwDWIpVRTh8GNKvKqlieH4FsCMt-A",
});

export const useFetchServices = () => {
  const [loading, setLoading] = useState(true);
  const [services, setServices] = useState([]);
  const getData = async () => {
    try {
      const response = await client.getEntries({ content_type: "services" });
      const services = response.items.map((item) => {
        const { title, url, image } = item.fields;
        const id = item.sys.id;
        const img = image?.fields?.file?.url;
        return { title, url, id, img };
      });
      setServices(services);
      setLoading(false);
      console.log(services);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  console.log(services);
  useEffect(() => {
    getData();
  }, []);
  return { loading, services };
};
