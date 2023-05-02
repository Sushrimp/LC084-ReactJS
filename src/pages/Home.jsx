import { useQuery } from "@apollo/client";
import { GET_ALL_ANIMES } from "../lib/queries/GetAllAnime";
import { useParams } from "react-router-dom";
import { CardContainer } from "../Components/card/Card";

export default function Home(){
    const { id } = useParams();
    const pageId = id ? parseInt(id) : 1;

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
    if(error) return <div><h1>Error : {error.message}</h1></div>

    // console.log(data);

    return (
        <div 
        style = {{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            backgroundColor: "#dedbd2" ,
            // rowGap: "1rem",
        }}    
        >
        {
            data.Page.media.map((media, index) => {
                return (
                    <CardContainer media={media}/>    
                )
            })
        }
        </div>
    );
}