import { Suspense } from "react";

const Orders = () => {
    return (
        <Suspense fallback={<div className="flex items-center justify-center h-64">Loading Orders...</div>}>
            <div>
                this is orders page
            </div>
        </Suspense>
    );
};

export default Orders;