import MeetCard from '../components/MeetCard';
import { useQuery } from '@apollo/client';
import { GET_ALL_MEETS } from '../utils/queries';

export default function MeetSchedule() {
    const { loading, error, data } = useQuery(GET_ALL_MEETS)

    if (loading) return <p>Something Went Wrong</p> //THESE MUST BE USE
    if (error) return <p>Something Went Wrong</p> //THESE MUST BE USE

    console.log(data)
    return (
        <>
            {data.meets.length > 0 ? (
                <div>
                    {data.meets.map ((meet) => (
                        <MeetCard key={meet.id} meet={meet} />
                    ))}
                </div>
            ) : (<p>No Meets</p>) }
        </>
    )
}
