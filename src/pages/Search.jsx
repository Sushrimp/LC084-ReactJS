import { useQuery } from "@apollo/client";
import { GET_ALL_ANIMES } from "../lib/queries/GetAllAnime";
import { useParams } from "react-router-dom";
import { CardContainer } from "../Components/card/Card";
import { useState } from "react";

export default function Search(){
    const { id } = useParams();
    const pageId = id ? parseInt(id) : 1;

    let [searchTerm, setSearchTerm] = useState("");
    let [searchResults, setSearchResults] = useState([]);

    const { loading, error, data } = useQuery(GET_ALL_ANIMES, {
        variables: {
        perPage: 50,
        page: pageId,
        },
    });

    if(loading) return (
        <div style={{
            height: "90vh",
            display: "flex",
            textAlign: "center",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "large",
            backgroundColor: "#dedbd2",
            color: "#3a5a40"
        }}>
            Loading...
        </div>
        );
    if(error) return (<div><h1>Error : {error.message}</h1></div>);

    // console.log(data);

    const handleSearch = (e) => {
        const searchTerm = e.target.value;
        setSearchTerm(searchTerm);

        if (!searchTerm) {
        setSearchResults([]);
        return;
        }

        const newSearchResults = data.Page.media.filter(
        (media) =>
            media.title.english &&
            media.title.english.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSearchResults(newSearchResults);
    };

    return (
        <div style = {{
            backgroundColor: "#dedbd2" ,
            
        }}
        >
            <div style={{
                justifyContent: "center",
                display: "flex",
                padding: "10px",
            }}>
                <input type="text" value={searchTerm} onChange={handleSearch} />
            </div>
            

            <div 
            style = {{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
            }}    
            >
                
            {
                searchResults.map((media, index) => {
                    return (
                        <CardContainer media={media}/>    
                    )
                })
            }
            </div>
        </div>
    );
}