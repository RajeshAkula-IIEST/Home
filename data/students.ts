export type StudentCategory =
  | "Ph.D."
  | "M.Tech"
  | "B.Tech"
  | "Minor Projects"
  | "Intern";

export type StudentStatus = "current" | "past";

export interface Student {
  category: StudentCategory;
  status: StudentStatus;

  name: string;
  rollNo?: string;

  institution?: string;
  duration?: string;

  role?: string;

  projectTitle?: string;
  group?: string;
}

export const students: Student[] = [

  /* =========================================================
     Ph.D.
  ========================================================= */

  // No current Ph.D. students

  // No past Ph.D. students


  /* =========================================================
     M.Tech
  ========================================================= */

  {
    category: "M.Tech",
    status: "current",

    name: "Gandu Sravya",
    rollNo: "2025AMM001",

    duration: "2025–2027",

    role: "Co-Guiding",
  },


  /* =========================================================
     B.Tech
  ========================================================= */
  {
  category: "B.Tech",
  status: "current",
  name: "Divyanshi Gupta",
  rollNo: "2023MEB094",
},

{
  category: "B.Tech",
  status: "current",
  name: "Shivang Tiwari",
  rollNo: "2023MEB095",
},

{
  category: "B.Tech",
  status: "current",
  name: "Pranay Dey",
  rollNo: "2023MEB098",
},

{
  category: "B.Tech",
  status: "current",
  name: "Devarakonda Abhishek Kumar",
  rollNo: "2023MEB025",
},
  {
    category: "B.Tech",
    status: "past",

    name: "Vaibhav Sarkar",
    rollNo: "2022MEB011",

    duration: "2025–2026",

    group: "B.Tech Project Group",

    projectTitle:
      "Real-Time EMG Controlled Prosthetic Hand using ConvTransformer-Based Gesture Recognition",
  },

  {
    category: "B.Tech",
    status: "past",

    name: "Aditya Joshi",
    rollNo: "2022MEB013",

    duration: "2025–2026",

    group: "B.Tech Project Group",

    projectTitle:
      "Real-Time EMG Controlled Prosthetic Hand using ConvTransformer-Based Gesture Recognition",
  },

  {
    category: "B.Tech",
    status: "past",

    name: "Karan Mahato",
    rollNo: "2022MEB034",

    duration: "2025–2026",

    group: "B.Tech Project Group",

    projectTitle:
      "Real-Time EMG Controlled Prosthetic Hand using ConvTransformer-Based Gesture Recognition",
  },

  {
    category: "B.Tech",
    status: "past",

    name: "Subhradeep Santra",
    rollNo: "2022MEB082",

    duration: "2025–2026",

    group: "B.Tech Project Group",

    projectTitle:
      "Real-Time EMG Controlled Prosthetic Hand using ConvTransformer-Based Gesture Recognition",
  },


  /* =========================================================
     Minor Projects
  ========================================================= */

  {
    category: "Minor Projects",
    status: "past",

    name: "Ranit Sarkar",
    rollNo: "2024MEB099",

    duration: "2025",

    group: "Minor Project Group 1",

    projectTitle:
      "Electrical and Thermal characterisation of Cylindrical and Pouch type cells",
  },

  {
    category: "Minor Projects",
    status: "past",

    name: "Granthik Das",
    rollNo: "2024MEB0100",

    duration: "2025",

    group: "Minor Project Group 1",

    projectTitle:
      "Electrical and Thermal characterisation of Cylindrical and Pouch type cells",
  },

  {
    category: "Minor Projects",
    status: "past",

    name: "Dipu Kumar",
    rollNo: "2024MEB101",

    duration: "2025",

    group: "Minor Project Group 1",

    projectTitle:
      "Electrical and Thermal characterisation of Cylindrical and Pouch type cells",
  },

  {
    category: "Minor Projects",
    status: "past",

    name: "Sourajit Das",
    rollNo: "2024MEB102",

    duration: "2025",

    group: "Minor Project Group 1",

    projectTitle:
      "Electrical and Thermal characterisation of Cylindrical and Pouch type cells",
  },

  {
    category: "Minor Projects",
    status: "past",

    name: "Bhyri Rahul",
    rollNo: "2024MEB111",

    duration: "2025",

    group: "Minor Project Group 2",

    projectTitle:
      "Electrical and Thermal characterisation of Cylindrical and Pouch type cells",
  },

  {
    category: "Minor Projects",
    status: "past",

    name: "Dibesh Debnath",
    rollNo: "2024MEB0112",

    duration: "2025",

    group: "Minor Project Group 2",

    projectTitle:
      "Electrical and Thermal characterisation of Cylindrical and Pouch type cells",
  },

  {
    category: "Minor Projects",
    status: "past",

    name: "Shriram Kumar",
    rollNo: "2024MEB113",

    duration: "2025",

    group: "Minor Project Group 2",

    projectTitle:
      "Electrical and Thermal characterisation of Cylindrical and Pouch type cells",
  },

  {
    category: "Minor Projects",
    status: "past",

    name: "Nuha Quasim",
    rollNo: "2024MEB114",

    duration: "2025",

    group: "Minor Project Group 2",

    projectTitle:
      "Electrical and Thermal characterisation of Cylindrical and Pouch type cells",
  },


  /* =========================================================
     Intern
  ========================================================= */

  {
    category: "Intern",
    status: "current",

    name: "Diyotima Mondal",

    institution:
      "C.V. Raman Global University, Bhubaneswar",

    duration: "May–July 2026",

    role: "Research Intern",
  },

];