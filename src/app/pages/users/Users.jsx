import { Suspense } from "react";

const Users = () => {
    return (
        <Suspense fallback={<div className="flex items-center justify-center h-64">Loading Users...</div>}>
            <div>
                this is users page
            </div>
        </Suspense>
    );
};

export default Users;