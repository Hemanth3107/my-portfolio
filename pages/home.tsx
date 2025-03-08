import React from "react";

const HomePage = () => {
  return (
    <div className="container-fluid min-vh-100 bg-light py-5">
      {/* Parent Box */}
      <div className="row justify-content-center">
        <div className="col-lg-8 col-md-10 col-sm-12 bg-white shadow-lg rounded-lg p-4">
          <div className="row">
            {/* Left Box - Profile */}
            <div className="col-md-4 bg-light rounded-lg p-4 d-flex flex-column align-items-center">
              {/* Profile Image */}
              <img
                src="/profile.jpg" // Add your actual image inside the "public" folder
                alt="Profile"
                className="w-50 h-auto rounded-circle border border-secondary"
              />
              {/* Name */}
              <h2 className="mt-4 text-center">Your Name</h2>
              {/* Contact Info */}
              <p className="mt-2 text-center text-muted">your.email@example.com</p>
              <p className="text-center text-muted">+123 456 7890</p>
            </div>

            {/* Right Box - Content */}
            <div className="col-md-8">
              {/* Navigation Links */}
              <nav className="bg-light rounded-lg p-2 mb-4">
                <div className="d-flex justify-content-center gap-4">
                  <a href="/home" className="text-dark font-weight-bold hover-link">
                    About Me
                  </a>
                  <a href="/contact" className="text-dark font-weight-bold hover-link">
                    Contact
                  </a>
                  <a href="/resume.pdf" className="text-dark font-weight-bold hover-link">
                    Resume
                  </a>
                </div>
              </nav>

              {/* Content Below Nav */}
              <div className="p-3 text-dark">
                <h1 className="h3 font-weight-bold">About Me</h1>
                <p className="mt-3">
                  This is where you write about yourself, your skills, and experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;