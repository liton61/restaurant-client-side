import useAuth from "../../../hooks/useAuth";


const UserHome = () => {
    const { user } = useAuth();
    return (
        <div>
            <h2 className="text-center text-3xl font-semibold mt-5">
                <span>Hi, Welcome </span>
                {
                    user?.displayName ? user.displayName : 'Back'
                }
            </h2>
        </div>
    );
};

export default UserHome;