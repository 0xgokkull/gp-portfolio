import React from "react";

// Shared Icon Grid component for Techstack and Toolstack
function IconGrid({ icons }) {
    return (
        <div className="flex justify-center flex-wrap gap-4 p-6">
            {icons.map((icon, index) => (
                <div
                    key={index}
                    className="text-5xl lg:text-6xl p-3 text-cyan-200/90 hover:text-cyan-100 transition-colors"
                >
                    {icon}
                </div>
            ))}
        </div>
    );
}

export default IconGrid;
