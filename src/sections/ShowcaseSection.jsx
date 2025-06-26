import React from "react";

const ShowcaseSection = () => {
  return (
    <div id="work" className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          {/* LEFT */}
          <div className="first-project-wrapper">
            <div className="image-wrapper">
              <img src="/images/example.png" alt="Sync It" />
            </div>
            <div className="text-content">
              <h2>
                Sync It: A Full-Stack Storage and File Sharing Solution Built
                for Modern Web Apps.
              </h2>
              <p className="text-white-50 md:text-xl">
                A storage and file sharing app built with Next.js 15 and
                Appwrite for seamless file management.
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="project-list-wrapper overflow-hidden">
            <div className="project">
              <div className="image-wrapper bg-white-50">
                <img src="/images/example2.png" alt="" />
              </div>
              <h2>A Ticketing and Customer Support Management Application</h2>
            </div>

            <div className="project">
              <div className="image-wrapper bg-white-50">
                <img src="/images/example2.png" alt="" />
              </div>
              <h2>A Platform for Movie Discovery and Browsing Experience</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowcaseSection;
