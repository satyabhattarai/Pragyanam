import Account from "../../assets/icons/account.svg";
import Button from "../UI/Button";
import Header from "../Header/Header";
import ProfilePictureAvatar from "../../assets/Images/profile-picture-avatar.svg";
import React from "react";
import Upload from "../../assets/icons/tabler-icon-upload.svg";
import calendar from "../../assets/icons/calendar.svg";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate=useNavigate();
  return (
    <>
      <Header />
      <main className="main">
        <div className="sidebar">
          <Button
            icon={Account}
            text={"Complete Profile"}
            additionalClass="button-primary"
          />
        </div>

        <div className="dashboard-container">
          <h4 className="bold dashboard-heading">Complete Your Profile</h4>
          <div className="dashboard-form">
            <div className="dashboard-form-nav">
              <ul className="dashboard-nav-list">
                <li className="active-link">
                  <a href="#profile-picture">Profile Picture</a>
                </li>
                <li>
                  <a href="#personal-info">Personal Info</a>
                </li>
                <li>
                  <a href="#professional-info">Professional Info</a>
                </li>
                <li>
                  <a href="#add-password">Add Password</a>
                </li>
              </ul>
            </div>
            <div className="dashboard-form-main">
              <section className="input-section" id="profile-picture">
                <h4 className="bold">Update Profile Picture</h4>
                <div className="upload-profile-picture-container">
                  <img src={ProfilePictureAvatar} alt="Profile Avatar" />
                  <div>
                    <p className="bold">Drag and Drop image here to upload.</p>
                    <p className="text-muted">
                      ( File must be in .JPG, .PNG or .GIF format and not more
                      than 4 MB )
                    </p>
                    <Button
                      text="Upload Picture"
                      additionalClass="button-outline button-primary"
                    />
                  </div>
                </div>
              </section>

              <section className="input-section" id="personal-info">
                <h4 className="bold">Personal Info</h4>
                <div className="personal-info-form">
                  <div className="input-container">
                    <label className="bold text-muted">First Name</label>
                    <div className="input-group">
                      <input
                        className="input-field"
                        type="text"
                        placeholder="Enter First Name"
                      />
                    </div>
                  </div>

                  <div className="input-container">
                    <label className="bold text-muted">Last Name</label>
                    <div className="input-group">
                      <input
                        className="input-field"
                        type="text"
                        placeholder="Enter Last Name"
                      />
                    </div>
                  </div>
                </div>
                <div className="personal-info-form">
                  <div className="input-container">
                    <label className="bold text-muted">Email</label>
                    <div className="input-group">
                      <input
                        className="input-field"
                        type="text"
                        placeholder="eg: utsavnepal@gmail.com"
                      />
                    </div>
                  </div>

                  <div className="input-container">
                    <label className="bold text-muted">Phone Number</label>
                    <div className="input-group">
                      <input
                        className="input-field"
                        type="text"
                        placeholder="eg: 9875647692"
                      />
                    </div>
                  </div>
                </div>

                <div className="input-container">
                  <label className="bold text-muted">DOB</label>
                  <div className="input-group">
                    <input
                      className="input-field"
                      type="text"
                      placeholder="1992-12-22"
                    />
                    <span className="icon-suffix">
                      <img src={calendar} alt="calendar icon" />
                    </span>
                  </div>
                </div>
                <div className="input-container">
                  <label className="bold">
                    Address<span className="text-muted"> (optional)</span>
                  </label>
                  <div className="input-group">
                    <input
                      className="input-field"
                      type="text"
                      placeholder="Enter Your Current Address"
                    />
                  </div>
                </div>
              </section>
              <section className="input-section" id="professional-info">
                <h4 className="bold">Professional Info</h4>

                <div className="input-container">
                  <label className="bold text-muted">Select Subjects</label>
                  <div className="input-group">
                    <input
                      className="input-field"
                      type="text"
                      placeholder="-- Please Select --"
                    />
                  </div>
                </div>

                <div className="input-container">
                  <label className="bold text-muted">
                    Highest Academic Qualification
                  </label>
                  <div className="input-group">
                    <input
                      className="input-field"
                      type="text"
                      placeholder="Enter First Highest Academic Degree"
                    />
                  </div>
                </div>
                <div className="drop-picture-container">
                  <div className="upload-container">
                    <img src={Upload} alt="My Happy SVG" />
                    <h6 className="upload-desc">
                      Drag and Drop files or click the button to upload
                    </h6>
                    <p className="upload-subtitle text-muted">
                      (File must be in .JPG or .PDF format and not more than 4
                      MB)
                    </p>
                    <button className="button button-primary">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 25 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.49996 18.5468C6.25223 18.5468 5.05561 18.0727 4.17334 17.2288C3.29107 16.3849 2.79541 15.2403 2.79541 14.0468C2.79541 12.8534 3.29107 11.7088 4.17334 10.8648C5.05561 10.0209 6.25223 9.54683 7.49996 9.54683C7.79464 8.234 8.65672 7.08031 9.89654 6.33954C10.5104 5.97275 11.1986 5.71837 11.9217 5.59094C12.6449 5.4635 13.3888 5.4655 14.1111 5.59683C14.8333 5.72815 15.5198 5.98622 16.1312 6.35631C16.7427 6.72639 17.2672 7.20125 17.6747 7.75375C18.0823 8.30626 18.3649 8.92561 18.5065 9.57642C18.6481 10.2272 18.6459 10.8968 18.5 11.5468H19.5C20.4282 11.5468 21.3185 11.9156 21.9748 12.572C22.6312 13.2283 23 14.1186 23 15.0468C23 15.9751 22.6312 16.8653 21.9748 17.5217C21.3185 18.1781 20.4282 18.5468 19.5 18.5468H18.5"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M9.5 15.5469L12.5 12.5469L15.5 15.5469"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12.5 12.5469V21.5469"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span>Browse File</span>
                    </button>
                  </div>
                </div>
              </section>

              <section className="input-section" id="add-password">
                <h4 className="bold">Add Password</h4>
                <div className="add-password-form">
                  <div className="input-container">
                    <label className="bold text-muted">Enter Password</label>
                    <div className="input-group">
                      <input
                        className="input-field"
                        type="text"
                        placeholder="**********"
                      />
                    </div>
                  </div>
                  <div className="input-container">
                    <label className="bold text-muted">Retype Password</label>
                    <div className="input-group">
                      <input
                        className="input-field"
                        type="text"
                        placeholder="**********"
                      />
                    </div>
                  </div>
                </div>
              </section>
              <div onClick={()=> navigate("/teacher/subjects")} className="saveprofile-btn">
                <Button text="Save Profile" additionalClass="button-primary" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Dashboard;
