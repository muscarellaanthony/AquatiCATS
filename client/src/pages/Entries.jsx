import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_ALL_MEETS } from '../utils/queries.js'
import EntryFormDate from '../components/EntryForm/EntryFormDate.jsx';

export default function Entries() {
    const [meet, setMeet] = useState('')
    console.log(meet)

    const { loading, error, data } = useQuery(GET_ALL_MEETS)

    if (loading) return <p>Loading...</p>; // Updated loading message
    if (error) return <p>Something Went Wrong</p>; // Retained the error message


    return (
        <>
            <form>
                <div>
                    <label>Meet</label>
                    <select
                        id='meetId'
                        value={meet}
                        onChange={(e) => setMeet(e.target.value)}
                    >
                        <option value=''>Select Meet</option>
                        {data.meets.map((meet) => (
                            <option key={meet._id} value={meet.name}>
                                {meet.name}
                            </option>
                        ))}
                    </select>
                </div>
            </form>
            {meet ? (
                <EntryFormDate meetName={meet}/>
            ) : (<div>Please Select a Meet</div>)}
        </>
    );
}