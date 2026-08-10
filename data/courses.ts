export interface Course {
  code: string;
  title: string;
  semester: string;
  credits: number;
  students: number;
  teachingHours: number;
  current: boolean;
  description: string;
  studentPortal: string;
  courseContent: string;
}

export const courses: Course[] = [

  {
    code: "ME4127",

    title: "AI & ML Applications for Mechanical Engineers",

    semester: "Odd",

    credits: 3,

    students: 26,

    teachingHours: 12,

    current: true,

    description:
      "This course introduces Artificial Intelligence and Machine Learning concepts with emphasis on Mechanical Engineering applications. Students learn various search methods, First order logic, and uncertainty concepts.",

    studentPortal:
      "https://me4127-2026.github.io/loginn/login.html",

    courseContent:
      "/coursecontents/ME4127.pdf",
  },

  {
    code: "ME4261",

    title: "Energy Storage Technology",

    semester: "Even",

    credits: 3,

    students: 56,

    teachingHours: 12,

    current: false,

    description:
      "Study of electrochemical, thermal and mechanical energy storage technologies with emphasis on batteries, supercapacitors and hydrogen energy systems.",

    studentPortal:
      "https://me4261-2026.github.io/login/login.html",

    courseContent:
      "/coursecontents/ME4261.pdf",
  },

  {
    code: "ME3273",

    title: "Seminar & Group Discussion",

    semester: "Odd",

    credits: 3,

    students: 46,

    teachingHours: 36,

    current: false,

    description:
      "Seminar and group discussion course focused on developing students' communication, presentation, discussion and professional skills.",

    studentPortal:
      "https://me3273dy2026.github.io/login",

    courseContent:
      "/coursecontents/ME3273.pdf",
  },

];