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
} from "react-icons/fa";
import CompleteProfilePage from "../components/CompleteProfileForm";

export default function UserProfilePage() {
  const [user, setUser] = useState(null);
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white flex flex-col items-center p-6 font-sans">
      <AnimatePresence mode="wait">
        {editing ? (
          <motion.div
            key="edit"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.4 }}
            className="w-full max-w-6xl"
          >
            <button
              onClick={() => setEditing(false)}
              className="mb-6 px-5 py-2 rounded-full border border-[#00FFFF] text-[#00FFFF] hover:bg-[#00FFFF]/10 transition"
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
            className="w-full max-w-6xl"
          >
            {/* Header Card */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-neutral-900 border border-neutral-800 rounded-2xl shadow-lg p-8 flex flex-col items-center text-center mb-10"
            >
              <img
                src={user?.profilePic || "/default-avatar.png"}
                alt={user?.name}
                className="w-32 h-32 rounded-full border-2 border-[#00FFFF] object-cover mb-4"
              />
              <h1 className="text-3xl font-bold">{user?.name || "Unnamed User"}</h1>
              <p className="text-[#00FFFF] text-lg">{user?.occupation || "Occupation"}</p>
              <p className="text-gray-400 flex items-center justify-center gap-2 mt-2">
                <FaMapMarkerAlt /> {user?.location || "Location"}
              </p>
            </motion.div>

            {/* Info Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Personal Info */}
              <SectionCard title="Personal Info" delay={0.1}>
                <InfoItem icon={<FaPhone />} label={user?.phone} />
                <InfoItem icon={<FaUser />} label={user?.gender} />
                <InfoItem icon={<FaBirthdayCake />} label={user?.dob} />
                <InfoItem icon={<FaMapMarkerAlt />} label={user?.location} />
              </SectionCard>

              {/* Career & Education */}
              <SectionCard title="Career & Education" delay={0.2}>
                <InfoItem icon={<FaBriefcase />} label={user?.occupation} />
                <InfoItem icon={<FaBuilding />} label={user?.company} />
                <InfoItem icon={<FaGraduationCap />} label={user?.education} />
                <InfoItem icon={<FaStar />} label={user?.experience} />
              </SectionCard>

              {/* Bio & Interests */}
              <SectionCard title="Bio & Interests" delay={0.3}>
                <p className="mb-3 text-gray-300">{user?.bio || "No bio provided."}</p>
                <div className="flex flex-wrap gap-2">
                  {user?.interests?.length ? (
                    user.interests.map((interest, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-[#00FFFF]/20 text-[#00FFFF] rounded-full text-sm"
                      >
                        {interest}
                      </span>
                    ))
                  ) : (
                    <span className="text-gray-500">No interests added</span>
                  )}
                </div>
              </SectionCard>

              {/* Skills & Links */}
              <SectionCard title="Skills & Links" delay={0.4}>
                <div className="flex flex-wrap gap-2 mb-4">
                  {user?.skills?.length ? (
                    user.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-[#00FFFF]/20 text-[#00FFFF] rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))
                  ) : (
                    <span className="text-gray-500">No skills added</span>
                  )}
                </div>
                <InfoItem icon={<FaLinkedin />} label={user?.linkedin} />
                <InfoItem icon={<FaGithub />} label={user?.github} />
                <InfoItem icon={<FaGlobe />} label={user?.portfolio} />
              </SectionCard>
            </div>

            {/* Edit Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setEditing(true)}
              className="mt-10 px-8 py-3 rounded-full font-bold bg-[#00FFFF] text-black hover:bg-[#00AAAA] transition"
            >
              Edit Profile
            </motion.button>
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
      className="p-6 bg-[#111111] rounded-xl border border-neutral-800"
    >
      <h2 className="text-xl font-semibold text-[#00FFFF] mb-4">{title}</h2>
      <div className="space-y-2">{children}</div>
    </motion.div>
  );
}

function InfoItem({ icon, label }) {
  return (
    <div className="flex items-center gap-2 text-gray-300">
      {icon} <span>{label || "N/A"}</span>
    </div>
  );
}
