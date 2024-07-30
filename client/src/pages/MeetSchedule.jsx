import React from 'react';
import MeetCard from '../components/MeetCard/MeetCard';
import { useQuery } from '@apollo/client';
import { GET_ALL_MEETS } from '../utils/queries';

export default function MeetSchedule() {
    const { loading, error, data } = useQuery(GET_ALL_MEETS);

    if (loading) return <p>Loading...</p>; // Updated loading message
    if (error) return <p>Something Went Wrong</p>; // Retained the error message

    return (
        <>
            {data && data.meets.length > 0 ? (
                <div>
                    {data.meets.map((meet) => (
                        <MeetCard key={meet._id} meet={meet} />
                    ))}
                </div>
            ) : (
                <p>No Meets</p>
            )}
        </>
    );
}