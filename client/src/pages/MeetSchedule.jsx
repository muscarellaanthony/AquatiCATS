import React from 'react'
import { useQuery } from '@apollo/client';
import { GET_ALL_MEETS } from '../utils/queries';

const MeetSchedule = () => {
    function meets() {
        const meets = useQuery(GET_ALL_MEETS)
        return meets
    }



    return (
        <>
            <div>MeetSchedule</div>
            <div>
                {meets.map((meet) => (
                    {meet}
        ))}
            </div>
        </>
    )
}

    export default MeetSchedule