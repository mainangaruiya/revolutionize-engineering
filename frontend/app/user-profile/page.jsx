"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaPhone,
  FaUser,
  FaBirthdayCake,
  FaMapMarkerAlt,
  FaBriefcase,
  FaBuilding,
  FaGraduationCap,
  FaStar,
  FaLinkedin,
  FaGithub,
  FaGlobe,
  FaExternalLinkAlt,
  FaUsers,
  FaCalendarAlt,
  FaTrophy,
} from "react-icons/fa";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import CompleteProfilePage from "../components/CompleteProfileForm";

export default function UserProfilePage() {
  const [user, setUser] = useState(null);
  const [editing, setEditing] = useState(false);
  const [projects, setProjects] = useState([]);
  const [applications, setApplications] = useState([]);
  const [activeTab, setActiveTab] = useState("overview");

  const handleDeleteAccount = () => {
    localStorage.clear();
    alert("Account deleted successfully.");
    window.location.href = "/home"; // redirect after deletion
  };

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));

    const storedProjects = localStorage.getItem("projects");
    if (storedProjects) setProjects(JSON.parse(storedProjects));

    const storedApplications = localStorage.getItem("applications");
    if (storedApplications) setApplications(JSON.parse(storedApplications));
  }, []);

  return (
    <div className="min-h-screen flex flex-col md:flex-row font-sans bg-[#EAEAEA] text-black">
      <AnimatePresence mode="wait">
        {editing ? (
          <motion.div
            key="edit"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.4 }}
            className="flex-1 p-4 sm:p-6 md:p-8 overflow-y-auto"
          >
            <button
              onClick={() => setEditing(false)}
              className="mb-6 px-4 sm:px-5 py-2 rounded-full border border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 transition"
            >
              ← Back to Profile
            </button>
            <CompleteProfilePage />
          </motion.div>
        ) : (
          <motion.div
            key="profile"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row w-full"
          >
            {/* Sidebar Profile Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full md:w-80 md:h-screen md:sticky md:top-0 bg-[#EAEAEA] border-b md:border-r border-neutral-300 p-6 sm:p-8 flex flex-col items-center text-center shadow-md"
            >
              <img
                src={user?.profilePic || "/images/R.png"}
                alt={user?.name}
                className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 border-[#00A3A3] shadow-lg object-cover mb-4 sm:mb-5"
              />
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                {user?.name || "Unnamed User"}
              </h1>
              <p className="text-[#00A3A3] text-base sm:text-lg font-semibold mt-1">
                {user?.occupation || "Occupation"}
              </p>

              {/* Buttons */}
              <div className="flex flex-col gap-3 mt-6 w-full max-w-xs">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setEditing(true)}
                  className="px-6 py-2 rounded-full font-bold text-sm sm:text-md bg-[#00A3A3] text-white shadow-lg hover:shadow-cyan-500/20 transition"
                >
                  Edit Profile
                </motion.button>

                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-2 rounded-full font-bold text-sm sm:text-md bg-red-600 text-white shadow-lg hover:bg-red-700 hover:shadow-red-500/30 transition"
                    >
                      Delete Account
                    </motion.button>
                  </AlertDialogTrigger>
                  <AlertDialogContent className="bg-[#EAEAEA] text-black font-sans">
                    <AlertDialogHeader>
                      <AlertDialogTitle>
                        Are you absolutely sure?
                      </AlertDialogTitle>
                      <AlertDialogDescription className="text-neutral-800">
                        This action cannot be undone. It will permanently delete
                        your account and remove all your data.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel className="bg-gray-600 text-white">
                        Cancel
                      </AlertDialogCancel>
                      <AlertDialogAction
                        onClick={handleDeleteAccount}
                        className="bg-red-600 text-white hover:bg-red-700"
                      >
                        Yes, Delete
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </motion.div>

            {/* Main Content with Tabs */}
            <div className="flex-1 min-h-screen overflow-y-auto p-4 sm:p-6 md:p-10">
              {/* Tabs Navigation */}
              <div className="flex flex-wrap gap-4 border-b border-neutral-300 mb-6">
                {["overview", "projects", "applications"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`pb-2 text-base sm:text-lg font-semibold transition cursor-pointer ${
                      activeTab === tab
                        ? "text-[#00A3A3] border-b-2 border-[#00A3A3]"
                        : "text-gray-500 hover:text-black"
                    }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <AnimatePresence mode="wait">
                {activeTab === "overview" && (
                  <motion.div
                    key="overview"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* 👇 Grid for profile info */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <SectionCard title="Personal Info" delay={0.1}>
                        <InfoItem icon={<FaPhone />} label={user?.phone} />
                        <InfoItem icon={<FaUser />} label={user?.gender} />
                        <InfoItem icon={<FaBirthdayCake />} label={user?.dob} />
                        <InfoItem
                          icon={<FaMapMarkerAlt />}
                          label={user?.location}
                        />
                      </SectionCard>

                      <SectionCard title="Career & Education" delay={0.2}>
                        <InfoItem
                          icon={<FaBriefcase />}
                          label={user?.occupation}
                        />
                        <InfoItem icon={<FaBuilding />} label={user?.company} />
                        <InfoItem
                          icon={<FaGraduationCap />}
                          label={user?.education}
                        />
                        <InfoItem icon={<FaStar />} label={user?.experience} />
                      </SectionCard>

                      <SectionCard title="Bio & Interests" delay={0.3}>
                        <p className="mb-3 text-gray-800 italic">
                          {user?.bio || "No bio provided."}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {user?.interests?.length ? (
                            user.interests.map((interest, i) => (
                              <span
                                key={i}
                                className="px-3 py-1 bg-[#00A3A3] text-white rounded-full text-sm hover:scale-105 transition"
                              >
                                {interest}
                              </span>
                            ))
                          ) : (
                            <span className="text-gray-500">
                              No interests added
                            </span>
                          )}
                        </div>
                      </SectionCard>

                      <SectionCard title="Skills & Links" delay={0.4}>
                        {/* Skills */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {user?.skills?.length ? (
                            user.skills.map((skill, i) => (
                              <span
                                key={i}
                                className="px-3 py-1 bg-[#00A3A3] text-white rounded-full text-sm hover:scale-105 transition"
                              >
                                {skill}
                              </span>
                            ))
                          ) : (
                            <span className="text-gray-500">
                              No skills added
                            </span>
                          )}
                        </div>

                        {/* Links */}
                        {user?.linkedin && (
                          <a
                            href={user.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block hover:underline"
                          >
                            <InfoItem
                              icon={<FaLinkedin />}
                              label={user.linkedin.split("/").pop()}
                            />
                          </a>
                        )}

                        {user?.github && (
                          <a
                            href={user.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block hover:underline"
                          >
                            <InfoItem
                              icon={<FaGithub />}
                              label={user.github.split("/").pop()}
                            />
                          </a>
                        )}

                        {user?.portfolio && (
                          <a
                            href={user.portfolio}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block hover:underline"
                          >
                            <InfoItem
                              icon={<FaGlobe />}
                              label={
                                user.portfolio
                                  .replace(/^https?:\/\//, "")
                                  .split("/")[0]
                              }
                            />
                          </a>
                        )}
                      </SectionCard>
                    </div>
                  </motion.div>
                )}

                {activeTab === "projects" && (
                  <motion.div
                    key="projects"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <SectionCard title="My Projects" delay={0.2}>
                      {projects.length ? (
                        <div className="space-y-5">
                          {projects.map((project, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.3, delay: idx * 0.1 }}
                              className="p-5 bg-white/70 rounded-xl border border-neutral-300 shadow hover:shadow-lg transition"
                            >
                              <h3 className="text-xl font-bold text-[#00A3A3] mb-2">
                                {project.title}
                              </h3>
                              <p className="text-sm text-gray-700 mb-3 break-words">
                                {project.description}
                              </p>
                              <div className="grid sm:grid-cols-2 gap-2 text-sm text-gray-600">
                                <InfoItem
                                  icon={<FaUsers />}
                                  label={`Team Size: ${project.teamSize}`}
                                />
                                <InfoItem
                                  icon={<FaCalendarAlt />}
                                  label={`Duration: ${
                                    project.startDate || "N/A"
                                  } - ${project.endDate || "Ongoing"}`}
                                />
                              </div>
                              {project.achievements && (
                                <InfoItem
                                  icon={<FaTrophy />}
                                  label={project.achievements}
                                  className="break-words"
                                />
                              )}
                              <div className="flex gap-3 mt-3 text-sm">
                                {project.projectUrl && (
                                  <a
                                    href={project.projectUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1 text-[#00A3A3] hover:underline"
                                  >
                                    Live <FaExternalLinkAlt size={12} />
                                  </a>
                                )}
                                {project.repositoryUrl && (
                                  <a
                                    href={project.repositoryUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1 text-gray-700 hover:text-black"
                                  >
                                    Code <FaGithub size={14} />
                                  </a>
                                )}
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      ) : (
                        <p className="text-gray-500 italic">
                          No projects submitted yet.
                        </p>
                      )}
                    </SectionCard>
                  </motion.div>
                )}

                {activeTab === "applications" && (
                  <motion.div
                    key="applications"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <SectionCard title="Applications" delay={0.2}>
                      {applications.length ? (
                        <div className="space-y-5">
                          {applications.map((app, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.3, delay: idx * 0.1 }}
                              className="p-5 bg-white/70 rounded-xl border border-neutral-300 shadow hover:shadow-lg transition"
                            >
                              <h3 className="text-lg font-bold text-[#00A3A3] mb-1">
                                {app.project || "Untitled Project"}
                              </h3>
                              {app.motivation && (
                                <p className="text-sm text-gray-700 mb-2">
                                  {app.motivation}
                                </p>
                              )}
                              <div className="text-sm text-gray-600">
                                Submitted on:{" "}
                                {new Date(app.submittedAt).toLocaleDateString()}
                              </div>
                              <div
                                className={`mt-2 inline-block px-3 py-1 rounded-full text-xs font-semibold
                                  ${
                                    app.status === "pending"
                                      ? "bg-yellow-100 text-yellow-700 border border-yellow-300"
                                      : app.status === "under review"
                                      ? "bg-blue-100 text-blue-700 border border-blue-300"
                                      : "bg-green-100 text-green-700 border border-green-300"
                                  }`}
                              >
                                {app.status}
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      ) : (
                        <p className="text-gray-500 italic">
                          No applications submitted yet.
                        </p>
                      )}
                    </SectionCard>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* --- Reusable Components --- */
function SectionCard({ title, delay, children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      className="p-6 bg-neutral-300/50 backdrop-blur-md rounded-2xl border border-neutral-300 shadow-md hover:shadow-cyan-400/10 transition"
    >
      <h2 className="text-2xl font-semibold text-[#00A3A3] mb-5">{title}</h2>
      <div className="space-y-3">{children}</div>
    </motion.div>
  );
}

function InfoItem({ icon, label }) {
  return (
    <div className="flex items-center gap-3 text-neutral-700 hover:text-[#00A3A3] transition">
      <span className="text-[#00A3A3]">{icon}</span>
      <span>{label || "N/A"}</span>
    </div>
  );
}
