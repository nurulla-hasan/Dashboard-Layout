import { Suspense } from "react";

const About = () => {
    return (
        <Suspense fallback={<div className="flex items-center justify-center h-64">Loading About...</div>}>
            <div>
                this is About page
            </div>
        </Suspense>
    );
};

export default About;