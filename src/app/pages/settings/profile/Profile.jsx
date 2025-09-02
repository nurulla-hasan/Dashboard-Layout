import { Suspense } from "react";

const Profile = () => {
    return (
        <Suspense fallback={<div className="flex items-center justify-center h-64">Loading Profile...</div>}>
            <div>
                this is profile
            </div>
        </Suspense>
    );
};

export default Profile;