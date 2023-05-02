import { Link } from 'react-router-dom';

export function CardContainer({media}){

    return (
        <div
        style={{
            backgroundColor: "#b0c4b1",
            color: "#4a5759",
            padding: "10px",
            margin: "10px 15px",
            display: "flex",
            flexDirection: "column",
            borderRadius: "5%",
            alignItems: "center",

        }}
        >   
            <Link to={`/Anime/${media.id}`}>
            <div 
            style={{
                alignContent: "center",
                // minHeight: "100px"
            }}
            >
                <CardImage src = {media.coverImage.medium} />
            </div>
            </Link>

            <div>
                <CardScore text={media.averageScore}/>
            </div>

            <div 
            style={{
                textAlign: "center",
            }}
            >
                <CardContent text={media.title.english}/>
            </div>
            
        </div>
    );
}

export function CardImage ({...Attr}){
    return <img {...Attr} alt="" style={{
        borderRadius: "5%"
    }} />
}

export function CardContent({text}){
    return (
        <div style={{

        }}>
            {text}
        </div>
    )
}

export function CardScore({text}){
    return (
    <div style={{
        textAlign: "center",
        backgroundColor: "#588157",
        color: "#dad7cd",
        borderRadius: "15px",
        padding: "5px 10px",
        whiteSpace: "pre",
    }}>
        ⭐ {text}<span style={{ content: "' '" }}></span>
    </div>
    );
}