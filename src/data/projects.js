export const projects = [
  {
    id: "quizana-school", title: "Quizana School", category: "Education technology", summary: "Structured learning and assessment for secondary-school students.",
    problem: "Students need clear paths from a subject to a unit, a topic, and meaningful practice. Teachers need tools to prepare and manage learning content.",
    solution: "I built a responsive application with subject roadmaps, topic practice, progress feedback, and teacher-facing workflows.",
    contribution: ["Responsive React interface with light and dark themes", "Subject, unit and topic learning roadmaps", "Practice and assessment workflows", "Node.js/Express APIs with MongoDB persistence"],
    stack: ["React", "JavaScript", "Node.js", "Express", "MongoDB"],
    cover: "/projects/school-desktop.png", mobile: "/projects/school-mobile.jpg",
    gallery: [{src:"/projects/school-desktop.png",caption:"Desktop student dashboard"},{src:"/projects/school-roadmap.png",caption:"Desktop learning roadmap"},{src:"/projects/school-mobile.jpg",caption:"Mobile dashboard"},{src:"/projects/school-practice.jpg",caption:"Mobile practice question"}],
    live: "https://quizana-school.onrender.com", pdf: "/projects/quizana-school.pdf"
  },
  {
    id: "quizana-university", title: "Quizana University", category: "Higher education", summary: "Course-centered learning, practice and progress for university students.",
    problem: "University learners need a coherent course space that connects lessons, practice activities, and visible learning progress.",
    solution: "I developed a course-centered application combining academic roadmaps, structured practice and student dashboards across screen sizes.",
    contribution: ["Student course dashboard and course navigation", "Unit and topic roadmaps with progress indicators", "Practice question interfaces and feedback", "Responsive design with dark and light themes"],
    stack: ["React", "JavaScript", "Node.js", "Express", "MongoDB"],
    cover: "/projects/university-desktop.png", mobile: "/projects/university-mobile.jpg",
    gallery: [{src:"/projects/university-desktop.png",caption:"Desktop course dashboard"},{src:"/projects/university-roadmap.png",caption:"Desktop course roadmap"},{src:"/projects/university-mobile.jpg",caption:"Mobile course dashboard"},{src:"/projects/university-practice.jpg",caption:"Mobile practice screen"}],
    live: "https://quizana.onrender.com", pdf: "/projects/quizana-university.pdf"
  },
  {
    id: "rose-oils", title: "Rose Oils", category: "Business operations", summary: "Mobile-first sales, inventory, payment and reporting workflows.",
    problem: "Small businesses need one place to record sales, track unpaid customer balances, check stock levels and review business activity.",
    solution: "I built a mobile-friendly Amharic business management application connecting sales, stock movements, customer balances and reporting.",
    contribution: ["Cash, credit and partial-payment screens", "Inventory tracking and restock alerts", "Business reporting and expense views", "Amharic-first responsive interface and authenticated API flows"],
    stack: ["React", "JavaScript", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    cover: "/projects/rose-home.jpg", mobile: "/projects/rose-sales.jpg",
    gallery: [{src:"/projects/rose-home.jpg",caption:"Mobile business dashboard"},{src:"/projects/rose-sales.jpg",caption:"Sales and payment status"},{src:"/projects/rose-stock.jpg",caption:"Stock and restocking"},{src:"/projects/rose-report.jpg",caption:"Financial reports"}],
    live: "https://roseoils.onrender.com"
  },
];
