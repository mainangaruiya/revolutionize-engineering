"use client";

import { useState, useEffect } from "react";

/* ----------------- STEP COMPONENTS ----------------- */

function Step1({
  user,
  profilePic,
  handleProfilePicUpload,
  phone,
  setPhone,
  gender,
  setGender,
  dob,
  setDob,
  location,
  setLocation,
}) {
  return (
    <>
      {/* Profile picture */}
      <div className="md:col-span-2 flex flex-col items-center">
        {profilePic ? (
          <img
            src={profilePic}
            alt="Profile Preview"
            className="w-32 h-32 rounded-full object-cover border-4 border-[#00A3A3] shadow-lg mb-4"
          />
        ) : (
          <div className="w-32 h-32 rounded-full bg-neutral-450 flex items-center justify-center mb-4 text-gray-700 border-2 border-dashed border-neutral-600">
            <span className="text-sm">No Image</span>
          </div>
        )}
        <input
          id="profile-upload"
          type="file"
          accept="image/*"
          onChange={handleProfilePicUpload}
          className="hidden"
        />
        <label
          htmlFor="profile-upload"
          className="cursor-pointer px-4 py-2 bg-[#00A3A3] text-white text-sm font-medium rounded-full shadow-md hover:bg-[#00A3A3]-400 transition"
        >
          {profilePic ? "Change Profile Picture" : "Upload Profile Picture"}
        </label>
        <p className="text-xs text-gray-900 mt-2">JPG/PNG/GIF, up to ~2MB.</p>
      </div>

      {/* Name & Email (read-only) */}
      <div>
        <label className="block text-neutral-700 mb-2">Full Name</label>
        <input
          type="text"
          value={user?.name || ""}
          readOnly
          className="w-full p-3 rounded-lg bg-neutral-400 border border-neutral-300 text-neutral-700 cursor-not-allowed"
        />
      </div>
      <div>
        <label className="block text-neutral-700 mb-2">Email</label>
        <input
          type="text"
          value={user?.email || ""}
          readOnly
          className="w-full p-3 rounded-lg bg-neutral-400 border border-neutral-300 text-neutral-700 cursor-not-allowed"
        />
      </div>

      {/* Phone / Gender / DOB / Location */}
      <div>
        <label className="block text-neutral-700 mb-2">Phone</label>
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full p-3 rounded-lg bg-neutral-250 border border-neutral-400 text-black focus:outline-none focus:ring-2 focus:ring-[#00A3A3] focus:border-transparent"
        />
      </div>
      <div>
        <label className="block text-neutral-700 mb-2">Gender</label>
        <select
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          className="w-full p-3 rounded-lg bg-neutral-250 border border-neutral-400 text-black focus:outline-none focus:ring-2 focus:ring-[#00A3A3] focus:border-transparent"
        >
          <option value="">Select...</option>
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
          <option>Prefer not to say</option>
        </select>
      </div>
      <div>
        <label className="block text-neutral-700 mb-2">Date of Birth</label>
        <input
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          className="w-full p-3 rounded-lg bg-neutral-250 border border-neutral-400 text-black focus:outline-none focus:ring-2 focus:ring-[#00A3A3] focus:border-transparent"
        />
      </div>
      <div>
        <label className="block text-neutral-700 mb-2">Location</label>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full p-3 rounded-lg bg-neutral-250 border border-neutral-400 text-black focus:outline-none focus:ring-2 focus:ring-[#00A3A3] focus:border-transparent"
        />
      </div>
    </>
  );
}

function Step2({
  occupation,
  setOccupation,
  company,
  setCompany,
  education,
  setEducation,
  experience,
  setExperience,
}) {
  return (
    <>
      <div>
        <label className="block text-neutral-700 mb-2">Occupation</label>
        <input
          type="text"
          value={occupation}
          onChange={(e) => setOccupation(e.target.value)}
          className="w-full p-3 rounded-lg bg-neutral-250 border border-neutral-400 text-black focus:outline-none focus:ring-2 focus:ring-[#00A3A3] focus:border-transparent"
        />
      </div>
      <div>
        <label className="block text-neutral-700 mb-2">Company</label>
        <input
          type="text"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className="w-full p-3 rounded-lg bg-neutral-250 border border-neutral-400 text-black focus:outline-none focus:ring-2 focus:ring-[#00A3A3] focus:border-transparent"
        />
      </div>
      <div>
        <label className="block text-neutral-700 mb-2">Education</label>
        <input
          type="text"
          value={education}
          onChange={(e) => setEducation(e.target.value)}
          placeholder="e.g. BSc Computer Science"
          className="w-full p-3 rounded-lg bg-neutral-250 border border-neutral-400 text-black focus:outline-none focus:ring-2 focus:ring-[#00A3A3] focus:border-transparent"
        />
      </div>
      <div>
        <label className="block text-neutral-700 mb-2">Experience (years)</label>
        <input
          type="number"
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
          className="w-full p-3 rounded-lg bg-neutral-250 border border-neutral-400 text-black focus:outline-none focus:ring-2 focus:ring-[#00A3A3] focus:border-transparent"
        />
      </div>
    </>
  );
}

function Step3({
  skills,
  setSkills,
  linkedin,
  setLinkedin,
  github,
  setGithub,
  portfolio,
  setPortfolio,
}) {
  return (
    <>
      <div className="md:col-span-2">
        <label className="block text-neutral-700 mb-2">
          Skills (comma separated)
        </label>
        <input
          type="text"
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
          placeholder="JavaScript, React, SQL"
          className="w-full p-3 rounded-lg bg-neutral-250 border border-neutral-400 text-black focus:outline-none focus:ring-2 focus:ring-[#00A3A3] focus:border-transparent"
        />
      </div>
      <div>
        <label className="block text-neutral-700 mb-2">LinkedIn</label>
        <input
          type="url"
          value={linkedin}
          onChange={(e) => setLinkedin(e.target.value)}
          placeholder="https://linkedin.com/in/username"
          className="w-full p-3 rounded-lg bg-neutral-250 border border-neutral-400 text-black focus:outline-none focus:ring-2 focus:ring-[#00A3A3] focus:border-transparent"
        />
      </div>
      <div>
        <label className="block text-neutral-700 mb-2">GitHub</label>
        <input
          type="url"
          value={github}
          onChange={(e) => setGithub(e.target.value)}
          placeholder="https://github.com/username"
          className="w-full p-3 rounded-lg bg-neutral-250 border border-neutral-400 text-black focus:outline-none focus:ring-2 focus:ring-[#00A3A3] focus:border-transparent"
        />
      </div>
      <div className="md:col-span-2">
        <label className="block text-neutral-700 mb-2">Portfolio / Website</label>
        <input
          type="url"
          value={portfolio}
          onChange={(e) => setPortfolio(e.target.value)}
          placeholder="https://myportfolio.com"
          className="w-full p-3 rounded-lg bg-neutral-250 border border-neutral-400 text-black focus:outline-none focus:ring-2 focus:ring-[#00A3A3] focus:border-transparent"
        />
      </div>
    </>
  );
}

function Step4({ bio, setBio, interests, setInterests }) {
  return (
    <>
      <div className="md:col-span-2">
        <label className="block text-neutral-700 mb-2">Bio</label>
        <textarea
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          rows="3"
          className="w-full p-3 rounded-lg bg-neutral-250 border border-neutral-400 text-black focus:outline-none focus:ring-2 focus:ring-[#00A3A3] focus:border-transparent"
        />
      </div>
      <div className="md:col-span-2">
        <label className="block text-neutral-700 mb-2">
          Interests (comma separated)
        </label>
        <input
          type="text"
          value={interests}
          onChange={(e) => setInterests(e.target.value)}
          placeholder="Football, Coding, Reading"
          className="w-full p-3 rounded-lg bg-neutral-250 border border-neutral-400 text-black focus:outline-none focus:ring-2 focus:ring-[#00A3A3] focus:border-transparent"
        />
      </div>
    </>
  );
}

/* ----------------- MAIN COMPONENT ----------------- */

export default function CompleteProfilePage() {
  const [user, setUser] = useState(null);
  const [step, setStep] = useState(1);

  // Form fields
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [location, setLocation] = useState("");
  const [occupation, setOccupation] = useState("");
  const [company, setCompany] = useState("");
  const [education, setEducation] = useState("");
  const [experience, setExperience] = useState("");
  const [skills, setSkills] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [github, setGithub] = useState("");
  const [portfolio, setPortfolio] = useState("");
  const [bio, setBio] = useState("");
  const [interests, setInterests] = useState("");
  const [profilePic, setProfilePic] = useState(null);

  const stepTitles = [
    "Personal Information",
    "Career & Education",
    "Skills & Links",
    "Bio & Interests",
  ];

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
      if (parsedUser.profilePic) setProfilePic(parsedUser.profilePic);
    }
  }, []);

  // Profile picture upload
  const handleProfilePicUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => setProfilePic(reader.result);
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user) return;

    const updatedUser = {
      ...user,
      phone,
      gender,
      dob,
      location,
      occupation,
      company,
      education,
      experience,
      skills: skills
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean),
      linkedin,
      github,
      portfolio,
      bio,
      interests: interests
        .split(",")
        .map((i) => i.trim())
        .filter(Boolean),
      profilePic,
    };

    localStorage.setItem("user", JSON.stringify(updatedUser));
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen flex flex-col gap-8 items-center justify-center bg-[#EAEAEA] p-6">
      <section className="max-w-6xl mx-auto pt-28 pb-6 text-center font-sans">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          <span className="text-[#00A3A3]">Complete Your Profile</span>
        </h1>
        <p className="text-lg text-neutral-700 mb-6">
          Step {step} of 4 —{" "}
          <span className="text-[#00A3A3]">{stepTitles[step - 1]}</span>
        </p>

        {/* Progress Bar */}
        <div className="w-full max-w-3xl mx-auto">
          <div className="relative w-full h-2 bg-neutral-300 rounded-full overflow-hidden">
            <div
              className="absolute top-0 left-0 h-full bg-[#00A3A3] transition-all duration-1000"
              style={{ width: `${(step / 4) * 100}%` }}
            />
          </div>
          <div className="flex justify-between mt-2 text-sm text-gray-600">
            <span className={step >= 1 ? "text-[#00A3A3]" : ""}>Step 1</span>
            <span className={step >= 2 ? "text-[#00A3A3]" : ""}>Step 2</span>
            <span className={step >= 3 ? "text-[#00A3A3]" : ""}>Step 3</span>
            <span className={step >= 4 ? "text-[#00A3A3]" : ""}>Step 4</span>
          </div>
        </div>
      </section>

      <div className="bg-neutral-300/60 p-8 rounded-xl shadow-lg w-full max-w-7xl text-white border border-neutral-300 mb-20">
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {step === 1 && (
            <Step1
              user={user}
              profilePic={profilePic}
              handleProfilePicUpload={handleProfilePicUpload}
              phone={phone}
              setPhone={setPhone}
              gender={gender}
              setGender={setGender}
              dob={dob}
              setDob={setDob}
              location={location}
              setLocation={setLocation}
            />
          )}
          {step === 2 && (
            <Step2
              occupation={occupation}
              setOccupation={setOccupation}
              company={company}
              setCompany={setCompany}
              education={education}
              setEducation={setEducation}
              experience={experience}
              setExperience={setExperience}
            />
          )}
          {step === 3 && (
            <Step3
              skills={skills}
              setSkills={setSkills}
              linkedin={linkedin}
              setLinkedin={setLinkedin}
              github={github}
              setGithub={setGithub}
              portfolio={portfolio}
              setPortfolio={setPortfolio}
            />
          )}
          {step === 4 && (
            <Step4
              bio={bio}
              setBio={setBio}
              interests={interests}
              setInterests={setInterests}
            />
          )}

          {/* Navigation Buttons */}
          <div className="md:col-span-2 flex justify-between mt-8">
            {step > 1 && (
              <button
                type="button"
                onClick={() => setStep(step - 1)}
                className="px-6 py-2 rounded-full border border-neutral-300 bg-neutral-800 text-neutral-300 hover:bg-neutral-300 transition"
              >
                Back
              </button>
            )}
            {step < 4 ? (
              <button
                type="button"
                onClick={() => setStep(step + 1)}
                className="ml-auto px-6 py-2 rounded-full font-bold text-white bg-[#00A3A3] hover:bg-[#00AAAA] transition"
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                className="ml-auto px-6 py-2 rounded-full font-bold text-white bg-[#00A3A3] hover:bg-[#00AAAA] transition"
              >
                Save & Finish
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
