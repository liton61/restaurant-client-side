import { useEffect, useState } from "react";
import RecommendsCard from "../RecommendsCard/RecommendsCard";


const Recommends = () => {
    const [recommends, setRecommends] = useState([]);
    useEffect(() => {
        fetch('salad.json')
            .then(res => res.json())
            .then(data => setRecommends(data))
    }, [])
    return (
        <div>
            <div className='w-72 mx-auto mb-10 mt-16'>
                <h3 className='text-yellow-500 italic mb-5 text-center'> ---Should Try--- </h3>
                <h1 className='text-3xl font-semibold border-y-4 py-4 text-center'>CHEF RECOMMENDS</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:w-3/4 mx-auto">
                {
                    recommends.map(recommend => <RecommendsCard key={recommend._id} recommend={recommend}></RecommendsCard>)
                }
            </div>
        </div>
    );
};

export default Recommends;