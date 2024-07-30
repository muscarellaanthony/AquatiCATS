import { GET_MEET } from "../../utils/queries"
import { useQuery } from '@apollo/client';
import EntryFormFields from "./EntryFormFields";

export default function EntryFormDate({ meetName }) {
  const { loading, error, data } = useQuery(GET_MEET, {variables: {meetName}})

  if (loading) return <p>Loading...</p>; // Updated loading message
  if (error) return <p>Something Went Wrong</p>; // Retained the error message

  return (
    <>
      <div>{data.meet.date}</div>
      <EntryFormFields meetData={data}/>
    </>
  )
}
