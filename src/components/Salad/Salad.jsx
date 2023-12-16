import { useEffect, useState } from "react";
import SaladCard from "./SaladCard";


const Salad = () => {
    const [salad, setSalad] = useState([]);
    useEffect(() => {
        fetch('salad.json')
            .then(res => res.json())
            .then(data => setSalad(data))
    }, [])
    return (
        <div>
            <div className='w-64 mx-auto my-10'>
                <p className='text-yellow-500 text-center mb-2'>---Should Try---</p>
                <h3 className='text-xl font-semibold border-y-4 text-center py-3'>CHEF RECOMMENDS</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:w-3/4 w-full mx-auto lg:px-0 md:px-0 px-5">
                {
                    salad.map(item => <SaladCard key={item._id} item={item}></SaladCard>)
                }
            </div>
        </div>
    );
};

export default Salad;