"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Download, Home } from "lucide-react";

const BiodataPage = () => {
  const router = useRouter();

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/biodata.pdf";
    link.setAttribute("download", "biodata.pdf");
    link.setAttribute("target", "_blank");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <main className="min-h-screen px-4 py-8 md:px-32 bg-gradient-to-b from-blue-200 via-white to-red-100 text-blue-900">
      <div className="max-w-3xl mx-auto bg-white shadow-xl border border-gray-300 rounded-xl p-8 print:p-0">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-2">
          Abhishek Kumar Pandey
        </h1>
        <h3 className="text-xl md:text-2xl font-semibold text-center mb-6">
          Biodata
        </h3>

        <div className="space-y-4 text-[16px] leading-relaxed">
          <h2 className="text-xl font-semibold text-blue-800">Personal Details</h2>
          <p><strong>Date of Birth:</strong> 08 January 2001</p>
          <p><strong>Place of Birth:</strong> Lohandi Khurd, Mirzapur, UP</p>
          <p><strong>Height & Weight:</strong> 5&#39;8&quot;, 70kg</p>
          <p><strong>Gender:</strong> Male</p>
          <p><strong>Religion & Caste:</strong> Hindu, Brahmin</p>
          <p><strong>Mother Tongue:</strong> Hindi</p>
          <p><strong>Marital Status:</strong> Unmarried</p>
          <p><strong>Eating Habits:</strong> Vegetarian</p>
          <p><strong>Drinking/Smoking:</strong> No</p>
          <p><strong>Health:</strong> Fit</p>
          <p><strong>Hobbies:</strong> Chess, Coding, Building Businesses, Spreading Positivity</p>

          <h2 className="text-xl font-semibold text-blue-800 mt-6">Family Details</h2>
          <p><strong>Grandfather:</strong> Shri Jagadish Narayan Pandey</p>
          <p><strong>Father:</strong> Swargiy Shri Om Prakash Pandey</p>
          <p><strong>Mother:</strong> Shrimati Sulochana Pandey</p>
          <p><strong>Siblings:</strong> Younger Brother – Vivek Pandey</p>
          <p><strong>Location:</strong> Mirzapur, Uttar Pradesh</p>
          <p><strong>Social Status:</strong> Respected Family</p>

          <h2 className="text-xl font-semibold text-blue-800 mt-6">Education & Career</h2>
          <p><strong>Highest Qualification:</strong> B.Tech in Computer Science</p>
          <p><strong>College:</strong> IIMT College of Engineering, Greater Noida (AKTU)</p>
          <p><strong>Schooling:</strong> SN Public School, Mirzapur</p>
          <p><strong>Current Job:</strong> Managing Partner at Codemap Partners & Fullstack Developer at E-Bindle Pvt. Ltd.</p>
          <p><strong>Work Location:</strong> Greater Noida, Uttar Pradesh</p>

          <h2 className="text-xl font-semibold text-blue-800 mt-6">Contact</h2>
          <p><strong>Phone:</strong> +91 8090570646</p>
          <p><strong>Email:</strong> abhishekkrpandey17@gmail.com</p>
          <p><strong>Address:</strong> Beta 2, Greater Noida, Uttar Pradesh</p>
          <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/abhishek-kr-pandey-57544325a/" target="_blank" className="text-blue-600 underline">View Profile</a></p>
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
        <motion.button
          onClick={() => router.push("/")}
          whileHover={{ scale: 1.05 }}
          className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition"
        >
          <Home className="w-4 h-4" />
          Home
        </motion.button>

        <motion.button
          onClick={handleDownload}
          whileHover={{ scale: 1.05 }}
          className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-green-700 transition"
        >
          <Download className="w-4 h-4" />
          Download
        </motion.button>
      </div>
    </main>
  );
};

export default BiodataPage;
