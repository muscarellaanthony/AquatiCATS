import { gql } from '@apollo/client';

export const GET_USER = gql`
  {
    user{
      firstName
      swimmers {
        firstName
      }
    }
  }`

export const GET_ALL_MEETS = gql `
  query getMeets {
    meets{
      _id
      date
      location
      name
      deadline
      invitational
    }
  }
`

export const GET_MEET = gql`
  query getMeet($meetName: String){
    meet(name: $meetName){
      _id
      date
      location
      name
      deadline
      invitational
    }
  }
`


