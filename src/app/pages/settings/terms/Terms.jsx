import { Suspense } from "react";

const Terms = () => {
    return (
        <Suspense fallback={<div className="flex items-center justify-center h-64">Loading Terms...</div>}>
            <div>
                this is Terms page
            </div>
        </Suspense>
    );
};

export default Terms;