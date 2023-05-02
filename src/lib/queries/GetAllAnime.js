import { gql } from "@apollo/client";

export const GET_ALL_ANIMES = gql`
query getAllAnime($page:Int, $perPage:Int){
  Page(page:$page, perPage:$perPage){
    media(type:ANIME, sort:POPULARITY_DESC){
      id
      coverImage{
        medium
      }
      title{
        english
      }
      averageScore
    }
  }
}
`;

