/* eslint-disable react/prop-types */


const RecommendsCard = ({ recommend }) => {
    const { img, title, ingredient, button } = recommend
    return (
        <div className="card card-compact lg:w-72 md:w-80 mx-auto bg-base-100 shadow-xl mb-8">
            <figure><img src={img} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{ingredient}</p>
                <div className="card-actions justify-center">
                    <button className="btn btn-primary">{button}</button>
                </div>
            </div>
        </div>
    );
};

export default RecommendsCard;