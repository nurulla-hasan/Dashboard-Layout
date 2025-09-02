import { Suspense } from "react";

const Payments = () => {
    return (
        <Suspense fallback={<div className="flex items-center justify-center h-64">Loading Payments...</div>}>
            <div>
                this is Payments page
            </div>
        </Suspense>
    );
};

export default Payments;