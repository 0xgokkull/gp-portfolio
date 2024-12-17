import React from "react";

function Github() {
  return (
    <div className="flex justify-center items-center py-12">
      {/* GitHub Stats */}
      <div className="text-center">
        <a href="#gokkull-15-title">
          <img
            src="https://github-readme-stats.vercel.app/api?username=gokkull-15&show_icons=true&theme=react&count_private=true&include_all_commits=true"
            alt="gokkull-15"
            className="mx-auto lg:h-80"
          />
        </a>
      </div>
    </div>
  );
}

export default Github;
