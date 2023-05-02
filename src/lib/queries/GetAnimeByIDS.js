import { gql } from "@apollo/client";

export const GET_ANIME_BY_IDS = gql`
query getAnimeByIds($ids: [Int], $perPage: Int) {
    Page(page: 1, perPage: $perPage){
      media(id_in: $ids, type: ANIME) {
          id
          coverImage {
          medium
          }
          title {
          english
          }
          averageScore
      }
    } 
  }
`