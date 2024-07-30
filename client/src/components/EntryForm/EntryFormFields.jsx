import { useQuery } from '@apollo/client';
import {GET_USER} from "../../utils/queries"

export default function EntryFormFields({meetData}) {
    const {data} = useQuery(GET_USER)
    console.log(data)

  return (
    <div>EntryFormFields</div>
  )
}
