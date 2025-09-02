import { Suspense } from "react";

const Privacy = () => {
    return (
        <Suspense fallback={<div className="flex items-center justify-center h-64">Loading Privacy...</div>}>
            <div>
                this is privacy page
            </div>
        </Suspense>
    );
};

export default Privacy;