import Menu from "../../components/Menu/Menu";
import Cover from "../Cover/Cover";


const OurMenu = () => {
    return (
        <div>
            <Cover></Cover>
            <Menu></Menu>
            <div className="lg:w-3/4 mx-auto my-20 lg:px-0 md:px-5 px-5"><Cover></Cover></div>
            <Menu></Menu>
            <div className="lg:w-3/4 mx-auto my-20 lg:px-0 md:px-5 px-5"><Cover></Cover></div>
            <Menu></Menu>
            <div className="lg:w-3/4 mx-auto my-20 lg:px-0 md:px-5 px-5"><Cover></Cover></div>
        </div>
    );
};

export default OurMenu;