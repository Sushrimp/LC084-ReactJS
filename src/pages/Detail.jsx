import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { GET_ANIME_BY_ID } from "../lib/queries/GetAnimeByID";
import { useState } from "react";

export default function AnimeDetails(){
    const { id } = useParams();
    const animeId = id ? parseInt(id) : 1;
    
    const { loading, error, data } = useQuery(GET_ANIME_BY_ID, {
        variables: {
        id: animeId,
        },
    });

    const [isFav, setIsFav] = useState(
        localStorage.getItem("favAnime")?.includes(id) || false
    );

    const handleFavClick = () => {
        let favAnime = JSON.parse(localStorage.getItem("favAnime")) || [];
        if (isFav) {
          // Remove anime from favorites
          favAnime = favAnime.filter((aid) => aid !== id);
        } else {
          // Add anime to favorites
          favAnime.push(id);
        }
        localStorage.setItem("favAnime", JSON.stringify(favAnime));
        setIsFav(!isFav); // Update the state
      };

    // console.log(localStorage.getItem("favAnime"));

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

    return (
        <div style={{
            backgroundColor: "#dedbd2",
        }}>
            <img src={data.Media.bannerImage} alt="" 
            style={{
                width: "100%",
            }}
            />

            <div style={{
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
            }}>
                <img src={data.Media.coverImage.large} alt="" />

            <div>
            {isFav ? (
                <div>
                    <button onClick={handleFavClick} style={{
                        border: "none",
                        padding: "5px 15px",
                        margin: "5px",
                        borderRadius: "5px",
                        backgroundColor: "#FF1213",
                        color: "#dad7cd",
                    }}>Remove from Favorites</button>
                </div>
            ) : (
                <div>
                    <button onClick={handleFavClick} style={{
                        border: "none",
                        padding: "5px 15px",
                        margin: "5px",
                        borderRadius: "5px",
                        backgroundColor: "#58AA57",
                        color: "#dad7cd",
                    }}>Add to Favorites</button>
                </div>
            )}
            </div>  

            <span style={{
                backgroundColor: "#588157",
                padding: "5px 15px",
                borderRadius: "5px",
                margin: "2px 0px",
                color: "#dad7cd",
            }}>
                {data.Media.title.english}
            </span>
            <span style={{
                backgroundColor: "#588157",
                padding: "5px 15px",
                borderRadius: "5px",
                margin: "2px 0px",
                color: "#dad7cd",
            }}>
                ⭐{data.Media.averageScore}⭐
            </span>
            <span style={{
                backgroundColor: "#588157",
                padding: "5px 15px",
                borderRadius: "5px",
                margin: "2px 0px",
                color: "#dad7cd",
            }}>
                Released : {data.Media.startDate.year}
            </span>
            <span style={{
                backgroundColor: "#588157",
                padding: "5px 15px",
                borderRadius: "5px",
                margin: "2px 0px",
                color: "#dad7cd",
            }}>
                Episode : {data.Media.episodes}
            </span>
            <span style={{
                backgroundColor: "#588157",
                padding: "5px 15px",
                borderRadius: "5px",
                margin: "2px 0px",
                color: "#dad7cd",
            }}>
                Genres : {data.Media.genres}
            </span>
            <span style={{
                backgroundColor: "#588157",
                padding: "5px 15px",
                borderRadius: "5px",
                margin: "2px 0px",
                color: "#dad7cd",
            }}>
                Status : {data.Media.status}
            </span>
            <br />
            <span dangerouslySetInnerHTML={{ __html: data.Media.description}} style={{
                textAlign: "justify",
                padding: "0px 10px",
                color: "#344e41",
            }}>
            </span>
            

            </div>
            
            
        </div>
    );
}