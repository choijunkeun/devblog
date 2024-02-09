import axios from "axios"
import { useEffect, useState } from "react";
import ReactMarkdown from 'react-markdown';
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";
import remarkGfm from "remark-gfm";
import styled from "styled-components";


const InfoWrap = styled.div`
    margin-bottom: 2em;
    padding: 1em;
    width: calc(100% - 250px);
    float: right;
`;

const Info = () => {
    const [readme, setReadme] = useState("");

    const getReadme = async () => {
        await axios.get(`https://api.github.com/repos/choijunkeun/choijunkeun/readme`,
        {
            headers: {
                Accept: "application/vnd.github.VERSION.raw",
            }
        })
        .then((response)=>{
            setReadme(response.data)
        })
        .catch((error)=> {
            console.log("Github README Error : ", error);
        })
    }

    useEffect(()=> {
        getReadme();

    },[])

    
  
    return (
    <InfoWrap>
        <ReactMarkdown 
            rehypePlugins={ [rehypeRaw, rehypeSanitize] }
            remarkPlugins={ [remarkGfm] }
        >{readme}</ReactMarkdown>
    </InfoWrap>
    )
}

export default Info