import { gql } from "@apollo/client";

export const GET_ANIME_BY_ID = gql`
query getAnimeById($id: Int) {
  
    Media(id: $id, type: ANIME) {
      id
      bannerImage
      coverImage {
        medium
        large
      }
      title {
        english
      }
      startDate {
        year
      }
      episodes
      genres
      status
      description
      averageScore
    }
  }
`