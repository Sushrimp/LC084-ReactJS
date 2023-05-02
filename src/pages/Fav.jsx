import { GET_ANIME_BY_IDS } from "../lib/queries/GetAnimeByIDS";
import { useQuery } from "@apollo/client";
import { CardContainer } from "../Components/card/Card";
import { useState } from "react";

export default function AnimeFav(){

    let [favAnimeIDs, setFavAnimeIDs] = useState(JSON.parse(localStorage.getItem("favAnime")));
    let length;
    if (favAnimeIDs !== null) {
        favAnimeIDs = favAnimeIDs.map(id => parseInt(id, 10));
        length = favAnimeIDs.length;
    }

    let check = favAnimeIDs ? true : false;

    let { loading, error, data } = useQuery(GET_ANIME_BY_IDS, {
        variables: {
        ids: favAnimeIDs,
        perPage: length || 0,
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

    if(error) return(
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
            No favourite Anime
        </div>
    );
        
    
    function handleClear() {
        localStorage.clear();
        setFavAnimeIDs(null);
    }
    

      return (
        <div>
        {
            check === true ? (
                <div style={{
                    backgroundColor: "#dedbd2",
                    
                }}>
                    <div style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                    }}>
                        {data.Page.media.map((media, index) => {
                            return (
                                <CardContainer media={media} key={index}/>    
                            )
                        })}
                    </div>

                    <div style={{
                        justifyContent: "center",
                        display: "flex",
                    }}>
                        <button onClick={handleClear} style={{
                                    border: "none", 
                                    backgroundColor: "#FF3123",
                                    borderRadius: "5px",
                                    padding: "5px 10px",
                                    color: "#dad7cd"
                        }}>
                            Clear all favourite Anime
                        </button>
                    </div>
                    
                    
                </div>
            ) : (
                <div></div>
            )
          }
        </div>
      );
}