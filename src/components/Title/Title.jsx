/* eslint-disable react/prop-types */


const Title = ({ title, subTitle }) => {
    return (
        <div className='w-72 mx-auto mb-10 mt-16'>
            <p className='text-yellow-500 italic mb-5 text-center'>-----{subTitle}-----</p>
            <h3 className='text-3xl font-semibold border-y-4 py-4 text-center'>{title}</h3>
        </div>
    );
};

export default Title;