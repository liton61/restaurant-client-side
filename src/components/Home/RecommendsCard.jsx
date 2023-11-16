/* eslint-disable react/prop-types */


const RecommendsCard = ({ item }) => {
    const { name, price, image, recipe } = item;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl mx-auto mb-10">
                <figure><img src={image} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}--------${price}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions justify-center">
                        <button className="btn btn-primary">Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecommendsCard;