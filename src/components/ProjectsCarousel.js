import React, { memo, useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";

// Projects Auto-scroll Carousel Component
const ProjectsCarousel = memo(({ projects, scrollContainerRef }) => {
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        const container = scrollContainerRef.current;
        if (!container || isPaused) return;

        let scrollInterval;
        const scroll = () => {
            if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
                container.scrollLeft = 0;
            } else {
                container.scrollLeft += 1;
            }
        };

        scrollInterval = setInterval(scroll, 30);

        return () => clearInterval(scrollInterval);
    }, [isPaused, scrollContainerRef]);

    return (
        <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto pb-6 scrollbar-custom"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            style={{ scrollBehavior: 'auto' }}
        >
            {[...projects, ...projects].map((project, index) => (
                <ProjectCard key={`project-${index}`} {...project} />
            ))}
        </div>
    );
});

export default ProjectsCarousel;
