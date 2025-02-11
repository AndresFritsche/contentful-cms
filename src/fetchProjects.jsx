import { createClient } from "contentful";
import { useState, useEffect } from "react";

const client = createClient({
  space: "9llnn87k571",
  environment: "master",
  accessToken: "eTx2XZtMObOFCVgwDWIpVRTh8GNKvKqlieH4FsCMt-A",
});

const useFetchProjects = () =>{
    const [loading,setLoading] = useState(true);
    const [projects,setProjects] = useState([]);
    const getData = async ()=>{
        try {
            const response = await client
            .getEntries({ content_type: "projects" });
            setLoading(false)
        } catch (error) {
            console.log(error);
            setLoading(false)
            
        }
    }

    useEffect(()=>{
        getData()
    },[])

}




