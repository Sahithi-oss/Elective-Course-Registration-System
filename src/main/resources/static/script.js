/**
 * ============================================================
 * GALEX STUDENT DASHBOARD - PRODUCTION READY ENGINE
 * ============================================================
 */

// ✅ 1. DATA REPOSITORIES
const branchMap = {
    umcs: "Integrated CSE", ucse: "B.Tech CSE", uece: "ECE", uecm: "ECM", uari: "AI",
    ucbt: "Biotechnology", umet: "Mechanical", uce: "Civil", unt: "Nano Tech"
};

const syllabusData = {
    "CS3223": {
        name: "Deep Neural Networks", code: "CS3223", credits: 3, faculty: "Dr. Neeraj / Dr. Dheeraj",
        units: [
            { title: "Unit 1: Fundamentals of Artificial Neural Networks", content: "Introduction to biological neurons vs artificial neurons. Perceptron learning rule, convergence theorem. Multi-layer Perceptron (MLP), Activation functions (Sigmoid, ReLU, Tanh). Backpropagation algorithm and Mathematical derivation." },
            { title: "Unit 2: Optimization and Regularization", content: "Gradient Descent variants (Stochastic, Mini-batch). Hyperparameter tuning. Regularization techniques: L1, L2, Dropout, Batch Normalization. Initialization strategies (Xavier, He)." },
            { title: "Unit 3: Convolutional Neural Networks (CNN)", content: "Spatial patterns and Convolutional layers. Pooling layers. Popular architectures: AlexNet, VGG, ResNet, Inception. Applications in Image Classification and Object Detection." },
            { title: "Unit 4: Recurrent Neural Networks (RNN)", content: "Sequence modeling. Vanishing and Exploding gradients. LSTM (Long Short-Term Memory) and GRU (Gated Recurrent Units). Bidirectional RNNs. Applications in Time-series and Language modeling." },
            { title: "Unit 5: Advanced Topics and Generative Models", content: "Autoencoders and Denoising. Introduction to Generative Adversarial Networks (GANs). Attention mechanism and Transformer basics. Case studies in Computer Vision." }
        ]
    },
    "CS3201": {
        name: "Software Engineering", code: "CS3201", credits: 3, faculty: "Dr. Avinash / Guest",
        units: [
            { title: "Unit 1: Process Models and SDLC", content: "Evolution of Software Engineering. Waterfall model, Incremental models, Evolutionary models. Spiral model and RAD." },
            { title: "Unit 2: Agile Development", content: "Agile manifesto and principles. Scrum framework: Roles, Events, Artifacts. Extreme Programming (XP) and Kanban." },
            { title: "Unit 3: Requirements and Analysis", content: "Requirement elicitation and specification. Functional and Non-functional requirements. Use Case diagrams, Data Flow Diagrams (DFD)." },
            { title: "Unit 4: Design and Architecture", content: "Software architecture patterns (MVC, Microservices). Object-oriented design principles (SOLID). Unified Modeling Language (UML) modeling." },
            { title: "Unit 5: Testing and Maintenance", content: "Verification and Validation. White-box and Black-box testing. Integration, System, and Regression testing. Software maintenance strategies." }
        ]
    },
    "CS3207": {
        name: "Big Data Analytics", code: "CS3207", credits: 3, faculty: "Dr. P. Alapati",
        units: [
            { title: "Unit 1: Introduction to Big Data", content: "The 5 V's of Big Data. Distributed file systems. Introduction to Hadoop Ecosystem and HDFS architecture." },
            { title: "Unit 2: MapReduce Framework", content: "MapReduce paradigm. Programming model, shuffle and sort. MapReduce vs SQL. Developing MapReduce jobs." },
            { title: "Unit 3: Apache Spark", content: "Spark architecture. Resilient Distributed Datasets (RDDs). Spark SQL, Spark Streaming, and MLlib for distributed machine learning." },
            { title: "Unit 4: NoSQL Databases", content: "CAP Theorem. Document stores (MongoDB), Key-Value stores (Redis), Columnar stores (HBase, Cassandra). Graph databases (Neo4j)." },
            { title: "Unit 5: Advanced Analytics", content: "Mining data streams. Link analysis (PageRank). Large-scale social network analysis. Real-time data processing with Kafka." }
        ]
    },
    "CS2202": {
        name: "Computer Networks", code: "CS2202", credits: 3, faculty: "Dr. Tauheed",
        units: [
            { title: "Unit 1: Introduction & Physical Layer", content: "Data communication concepts, network topologies, OSI vs TCP/IP model. Transmission media: guided (twisted pair, coaxial, fiber optic) and unguided. Signal encoding, bandwidth, data rate, Nyquist and Shannon theorems." },
            { title: "Unit 2: Data Link Layer", content: "Framing, error detection (CRC, Checksum, Hamming), error correction. Flow control: Stop-and-Wait, Sliding Window. MAC sublayer: ALOHA, CSMA/CD, CSMA/CA. Ethernet, 802.11 (Wi-Fi) standards." },
            { title: "Unit 3: Network Layer", content: "IPv4 addressing and subnetting, CIDR. Routing algorithms: Distance Vector (RIP), Link State (OSPF), BGP. IPv6 addressing and transition. NAT, ICMP, ARP, RARP." },
            { title: "Unit 4: Transport Layer", content: "TCP vs UDP. TCP connection establishment (3-way handshake), flow control (windowing), congestion control (Slow Start, Congestion Avoidance, Fast Retransmit). Port numbers and socket programming." },
            { title: "Unit 5: Application Layer & Security", content: "DNS, HTTP/HTTPS, FTP, SMTP, POP3, DHCP, SNMP. Network security basics: symmetric/asymmetric encryption, TLS/SSL, firewalls, VPN, intrusion detection." }
        ]
    },
    "CS3204": {
        name: "Programming Workshop", code: "CS3204", credits: 2, faculty: "GF- AI",
        units: [
            { title: "Unit 1: Advanced Algorithm Implementation", content: "Implementing graph algorithms (Dijkstra, A*). Dynamic programming challenges. Competitive programming paradigms." },
            { title: "Unit 2: Full Stack Development", content: "Building REST APIs with Spring Boot/Node.js. Frontend integration with React/HTML5. Database connectivity." },
            { title: "Unit 3: Data Analysis with Python", content: "Pandas and NumPy for data manipulation. Matplotlib/Seaborn for visualization. Exploratory Data Analysis (EDA) projects." },
            { title: "Unit 4: Version Control and DevOps", content: "Advanced Git workflows. CI/CD pipelines with GitHub Actions. Containerization with Docker." },
            { title: "Unit 5: Capstone Project", content: "Designing and deploying a real-world application. Documentation and unit testing. Project presentation." }
        ]
    }
};

const engineeringElectives = [
    { id: 1, name: "Natural Language Processing", code: "CS3126", faculty: "Dr. Sanathan", credits: 3, description: "Tokenization, POS tagging, Parsing, Word Embeddings, and LLMs.", prerequisites: "Python, AI Basics", venue: "416", timetable: { day: "Thursday", time: "10:35" }, type: "open" },
    { id: 2, name: "GenAI & LLM", code: "CS5202", faculty: "Dr. Nidhi", credits: 3, description: "Generative Adversarial Networks, Transformer architectures, and Fine-tuning LLMs.", prerequisites: "Deep Learning", venue: "383", timetable: { day: "Tuesday", time: "16:35" }, type: "open" },
    { id: 3, name: "Modern Cryptography", code: "CS4178", faculty: "Dr. Ravi Kishore", credits: 3, description: "Public-key infra, AES, RSA, Hash functions, and Quantum-resistant algorithms.", prerequisites: "Discrete Math", venue: "202", timetable: { day: "Thursday", time: "10:35" }, type: "open" },
    { id: 4, name: "Reinforcement Learning", code: "CS4122", faculty: "Dr. Gourav", credits: 3, description: "Markov Decision Processes, Q-Learning, Deep RL, and applications.", prerequisites: "ML Basics", venue: "ELT 1", timetable: { day: "Monday", time: "16:35" }, type: "open" },
    { id: 5, name: "Recommender Systems", code: "CS3224", faculty: "Dr. Satish Chandra", credits: 3, description: "Collaborative filtering, content-based recommendation, and hybrid models.", prerequisites: "Data Mining", venue: "ELT 2", timetable: { day: "Monday", time: "09:25" }, type: "open" },
    { id: 6, name: "Wireless Sensor Networks", code: "CS4164", faculty: "Dr. Tauheed", credits: 3, description: "Sensor architectures, networking protocols, and IoT applications.", prerequisites: "Computer Networks", venue: "ECR", timetable: { day: "Tuesday", time: "11:35" }, type: "open" },
    { id: 7, name: "Big Data Analytics", code: "CS3207", faculty: "Dr. P. Alapati", credits: 3, description: "Mining data streams, link analysis, and large-scale analytics.", prerequisites: "Database Mgmt", venue: "ELT 1", timetable: { day: "Monday", time: "13:35" }, type: "open" },
    { id: 8, name: "ML for Engineers", code: "ME3205", faculty: "Dr. Jagan", credits: 3, description: "Application of ML algorithms to mechanical systems and predictive maintenance.", prerequisites: "Math Foundations", venue: "ELT 3", timetable: { day: "Tuesday", time: "14:35" }, type: "open" },
    { id: 9, name: "Design of Steel Structures", code: "CE3212", faculty: "Dr. Atta", credits: 3, description: "Structural engineering focusing on steel design, connections, and load resistance.", prerequisites: "Solid Mechanics", venue: "ELT 2", timetable: { day: "Monday", time: "10:35" }, type: "open" },
    { id: 10, name: "Real-time Operating Systems", code: "EC5220", faculty: "Dr. Sayantan", credits: 3, description: "RTOS concepts, scheduling, synchronization, and embedded applications.", prerequisites: "OS Basics", venue: "ELT 1", timetable: { day: "Friday", time: "14:35" }, type: "open" },
    { id: 11, name: "Cloud Computing", code: "CS4133", faculty: "Dr. Rajesh", credits: 3, description: "Virtualization, SaaS/PaaS/IaaS, AWS/Azure architectures, and Cloud security.", prerequisites: "Operating Systems", venue: "ELT 3", timetable: { day: "Wednesday", time: "13:35" }, type: "open" },
    { id: 12, name: "Cyber Security", code: "CS3205", faculty: "Dr. Amit", credits: 3, description: "Network security, cryptography, penetration testing, and ethical hacking.", prerequisites: "Computer Networks", venue: "ELT 1", timetable: { day: "Thursday", time: "14:35" }, type: "open" },
    { id: 13, name: "Human Computer Interaction", code: "CS4150", faculty: "Dr. Megha", credits: 3, description: "UI/UX design principles, usability testing, and interactive system design.", prerequisites: "Software Engineering", venue: "ELT 2", timetable: { day: "Tuesday", time: "11:35" }, type: "open" },
    { id: 14, name: "Performance Modeling", code: "CS5203", faculty: "Dr. Satish", credits: 3, description: "System performance evaluation and queuing theory.", prerequisites: "Probability & Stats", venue: "ELT 1", timetable: { day: "Friday", time: "11:35" }, type: "open" }
];

const liberalElectives = [
    { id: 101, name: "Cyber Law & Ethics", code: "HS3001", faculty: "Prof. Neha Gupta", credits: 2, description: "Legal landscape of cyberspace, data privacy, and digital forensics.", prerequisites: "None", venue: "ELT 2", timetable: { day: "Friday", time: "14:35" }, type: "liberal" },
    { id: 102, name: "Psychology in Tech", code: "HS3002", faculty: "Dr. J. Srinath", credits: 2, description: "Understanding cognitive design principles and human-computer interaction.", prerequisites: "None", venue: "ELT 3", timetable: { day: "Wednesday", time: "09:25" }, type: "liberal" },
    { id: 103, name: "Green Engineering", code: "ES3001", faculty: "Dr. Keerthi", credits: 2, description: "Sustainable design practices and environmental impact assessment.", prerequisites: "Basic Env Science", venue: "ELT 1", timetable: { day: "Friday", time: "09:25" }, type: "liberal" },
    { id: 105, name: "Sociology of Technology", code: "HS3005", faculty: "Prof. Anjali", credits: 2, description: "Impact of technology on social structures and human relationships.", prerequisites: "None", venue: "ELT 3", timetable: { day: "Wednesday", time: "14:35" }, type: "liberal" },
    { id: 106, name: "Economics for Engineers", code: "HS3006", faculty: "Dr. Varun", credits: 2, description: "Financial management, cost estimation, and macroeconomics for technical projects.", prerequisites: "None", venue: "ELT 2", timetable: { day: "Friday", time: "16:35" }, type: "liberal" }
];

const allSubjects = [...engineeringElectives, ...liberalElectives];

const branchTimetables = {
    "Integrated CSE": {
        Monday: {
            "08:25": { name: "Programming Workshop", code: "CS3204", faculty: "GF-AI", venue: "ELT 1", type: "core" },
            "09:25": { name: "Software Eng", code: "CS3201", faculty: "Dr. Avinash", venue: "ELT 2", type: "core" },
            "10:35": { name: "Software Eng", code: "CS3201", faculty: "Dr. Avinash", venue: "ELT 2", type: "core" },
            "12:35": { name: "LUNCH", type: "break" },
            "13:35": { name: "Deep Neural Networks", code: "CS3223", faculty: "Dr. Neeraj", venue: "ELT 3", type: "core" },
            "14:35": { name: "Computer Networks", code: "CS2202", faculty: "Dr. Tauheed", venue: "ELT 1", type: "core" },
            "16:35": { name: "OPEN ELECTIVE SLOT", type: "open" }
        },
        Tuesday: {
            "08:25": { name: "Software Eng", code: "CS3201", faculty: "Dr. Avinash", venue: "ELT 2", type: "core" },
            "09:25": { name: "Software Eng", code: "CS3201", faculty: "Dr. Avinash", venue: "ELT 2", type: "core" },
            "11:35": { name: "OPEN ELECTIVE SLOT", type: "open" },
            "12:35": { name: "LUNCH", type: "break" },
            "13:35": { name: "Deep Neural Networks", code: "CS3223", faculty: "Dr. Neeraj", venue: "ELT 3", type: "core" },
            "14:35": { name: "OPEN ELECTIVE SLOT", type: "open" },
            "16:35": { name: "OPEN ELECTIVE SLOT", type: "open" }
        },
        Wednesday: {
            "08:25": { name: "Deep Neural Networks", code: "CS3223", faculty: "Dr. Neeraj", venue: "ELT 3", type: "core" },
            "09:25": { name: "Deep Neural Networks", code: "CS3223", faculty: "Dr. Neeraj", venue: "ELT 3", type: "core" },
            "10:35": { name: "Software Eng", code: "CS3201", faculty: "Dr. Avinash", venue: "ELT 2", type: "core" },
            "11:35": { name: "Big Data Analytics", code: "CS3207", faculty: "Dr. P. Alapati", venue: "ELT 1", type: "core" },
            "12:35": { name: "LUNCH", type: "break" },
            "13:35": { name: "OPEN ELECTIVE SLOT", type: "open" },
            "14:35": { name: "LIBERAL ELECTIVE SLOT", type: "liberal" },
            "16:35": { name: "OPEN ELECTIVE SLOT", type: "open" }
        },
        Thursday: {
            "08:25": { name: "Intro to Prof Development", code: "HS3201", faculty: "Dr. Sandeep", venue: "AUDITORIUM", type: "core" },
            "09:25": { name: "Intro to Prof Development", code: "HS3201", faculty: "Dr. Sandeep", venue: "AUDITORIUM", type: "core" },
            "10:35": { name: "OPEN ELECTIVE SLOT", type: "open" },
            "11:35": { name: "OPEN ELECTIVE SLOT", type: "open" },
            "12:35": { name: "LUNCH", type: "break" },
            "13:35": { name: "OPEN ELECTIVE SLOT", type: "open" },
            "14:35": { name: "OPEN ELECTIVE SLOT", type: "open" },
            "16:35": { name: "OPEN ELECTIVE SLOT", type: "open" }
        },
        Friday: {
            "08:25": { name: "Web Tech Workshop", code: "CS3205", faculty: "Dr. Rajesh", venue: "IT2", type: "core" },
            "09:25": { name: "Web Tech Workshop", code: "CS3205", faculty: "Dr. Rajesh", venue: "IT2", type: "core" },
            "10:35": { name: "Math Methods Image", code: "MA3221", faculty: "Dr. Badoni", venue: "ELT 3", type: "core" },
            "11:35": { name: "OPEN ELECTIVE SLOT", type: "open" },
            "12:35": { name: "LUNCH", type: "break" },
            "13:35": { name: "Major Project Phase I", venue: "LAB", type: "core" },
            "14:35": { name: "OPEN ELECTIVE SLOT", type: "open" },
            "16:35": { name: "LIBERAL ELECTIVE SLOT", type: "liberal" }
        }
    }
};

// --- DYNAMIC BRANCH TIMETABLES ---
// 1. CSE is identical to Integrated CSE
branchTimetables["B.Tech CSE"] = branchTimetables["Integrated CSE"];

// 2. B.Tech AI
branchTimetables["B.Tech AI"] = JSON.parse(JSON.stringify(branchTimetables["Integrated CSE"]));
branchTimetables["B.Tech AI"].Monday["08:25"] = { name: "Machine Learning Core", code: "AI3201", faculty: "Dr. Raj", venue: "ELT 2", type: "core" };
branchTimetables["B.Tech AI"].Monday["09:25"] = { name: "Machine Learning Core", code: "AI3201", faculty: "Dr. Raj", venue: "ELT 2", type: "core" };
branchTimetables["B.Tech AI"].Monday["10:35"] = { name: "Data Structures", code: "AI3202", faculty: "Dr. Smith", venue: "ELT 1", type: "core" };
branchTimetables["B.Tech AI"].Monday["13:35"] = { name: "AI Principles", code: "AI3203", faculty: "Dr. Gupta", venue: "ELT 3", type: "core" };
branchTimetables["B.Tech AI"].Monday["14:35"] = { name: "AI Principles", code: "AI3203", faculty: "Dr. Gupta", venue: "ELT 3", type: "core" };
branchTimetables["B.Tech AI"].Tuesday["08:25"] = { name: "Data Structures", code: "AI3202", faculty: "Dr. Smith", venue: "ELT 1", type: "core" };
branchTimetables["B.Tech AI"].Tuesday["09:25"] = { name: "Data Structures", code: "AI3202", faculty: "Dr. Smith", venue: "ELT 1", type: "core" };
branchTimetables["B.Tech AI"].Tuesday["13:35"] = { name: "Machine Learning Core", code: "AI3201", faculty: "Dr. Raj", venue: "ELT 2", type: "core" };
branchTimetables["B.Tech AI"].Wednesday["08:25"] = { name: "AI Principles", code: "AI3203", faculty: "Dr. Gupta", venue: "ELT 3", type: "core" };
branchTimetables["B.Tech AI"].Wednesday["09:25"] = { name: "AI Principles", code: "AI3203", faculty: "Dr. Gupta", venue: "ELT 3", type: "core" };
branchTimetables["B.Tech AI"].Wednesday["10:35"] = { name: "Data Structures", code: "AI3202", faculty: "Dr. Smith", venue: "ELT 1", type: "core" };
branchTimetables["B.Tech AI"].Wednesday["11:35"] = { name: "Computer Vision", code: "AI3204", faculty: "Dr. Kumar", venue: "ELT 2", type: "core" };
branchTimetables["B.Tech AI"].Thursday["08:25"] = { name: "Ethics in AI", code: "AI3205", faculty: "Dr. Sharma", venue: "AUDITORIUM", type: "core" };
branchTimetables["B.Tech AI"].Thursday["09:25"] = { name: "Ethics in AI", code: "AI3205", faculty: "Dr. Sharma", venue: "AUDITORIUM", type: "core" };
branchTimetables["B.Tech AI"].Friday["08:25"] = { name: "NLP Lab", code: "AI3206", faculty: "Dr. Raj", venue: "IT2", type: "core" };
branchTimetables["B.Tech AI"].Friday["09:25"] = { name: "NLP Lab", code: "AI3206", faculty: "Dr. Raj", venue: "IT2", type: "core" };
branchTimetables["B.Tech AI"].Friday["10:35"] = { name: "Math for AI", code: "AI3207", faculty: "Dr. Singh", venue: "ELT 3", type: "core" };
branchTimetables["B.Tech AI"].Friday["13:35"] = { name: "AI Project Phase I", venue: "LAB", type: "core" };

// 3. B.Tech ECE
branchTimetables["B.Tech ECE"] = JSON.parse(JSON.stringify(branchTimetables["Integrated CSE"]));
branchTimetables["B.Tech ECE"].Monday["08:25"] = { name: "Analog Circuits", code: "EC3201", faculty: "Dr. Sharma", venue: "ELT 1", type: "core" };
branchTimetables["B.Tech ECE"].Monday["09:25"] = { name: "Analog Circuits", code: "EC3201", faculty: "Dr. Sharma", venue: "ELT 1", type: "core" };
branchTimetables["B.Tech ECE"].Monday["10:35"] = { name: "Signals & Systems", code: "EC3202", faculty: "Dr. Varma", venue: "ELT 2", type: "core" };
branchTimetables["B.Tech ECE"].Monday["13:35"] = { name: "Digital Logic", code: "EC3203", faculty: "Dr. Iyer", venue: "ELT 3", type: "core" };
branchTimetables["B.Tech ECE"].Monday["14:35"] = { name: "Digital Logic", code: "EC3203", faculty: "Dr. Iyer", venue: "ELT 3", type: "core" };
branchTimetables["B.Tech ECE"].Tuesday["08:25"] = { name: "Signals & Systems", code: "EC3202", faculty: "Dr. Varma", venue: "ELT 2", type: "core" };
branchTimetables["B.Tech ECE"].Tuesday["09:25"] = { name: "Signals & Systems", code: "EC3202", faculty: "Dr. Varma", venue: "ELT 2", type: "core" };
branchTimetables["B.Tech ECE"].Tuesday["13:35"] = { name: "Analog Circuits", code: "EC3201", faculty: "Dr. Sharma", venue: "ELT 1", type: "core" };
branchTimetables["B.Tech ECE"].Wednesday["08:25"] = { name: "Digital Logic", code: "EC3203", faculty: "Dr. Iyer", venue: "ELT 3", type: "core" };
branchTimetables["B.Tech ECE"].Wednesday["09:25"] = { name: "Digital Logic", code: "EC3203", faculty: "Dr. Iyer", venue: "ELT 3", type: "core" };
branchTimetables["B.Tech ECE"].Wednesday["10:35"] = { name: "Signals & Systems", code: "EC3202", faculty: "Dr. Varma", venue: "ELT 2", type: "core" };
branchTimetables["B.Tech ECE"].Wednesday["11:35"] = { name: "Microprocessors", code: "EC3204", faculty: "Dr. Kumar", venue: "ELT 1", type: "core" };
branchTimetables["B.Tech ECE"].Thursday["08:25"] = { name: "Communication Systems", code: "EC3205", faculty: "Dr. Reddy", venue: "AUDITORIUM", type: "core" };
branchTimetables["B.Tech ECE"].Thursday["09:25"] = { name: "Communication Systems", code: "EC3205", faculty: "Dr. Reddy", venue: "AUDITORIUM", type: "core" };
branchTimetables["B.Tech ECE"].Friday["08:25"] = { name: "VLSI Design", code: "EC3206", faculty: "Dr. Gupta", venue: "IT2", type: "core" };
branchTimetables["B.Tech ECE"].Friday["09:25"] = { name: "VLSI Design", code: "EC3206", faculty: "Dr. Gupta", venue: "IT2", type: "core" };
branchTimetables["B.Tech ECE"].Friday["10:35"] = { name: "Electromagnetic Theory", code: "EC3207", faculty: "Dr. Singh", venue: "ELT 3", type: "core" };
branchTimetables["B.Tech ECE"].Friday["13:35"] = { name: "ECE Project Phase I", venue: "LAB", type: "core" };

// ✅ 2. SESSION & STATE
let currentUser = null;
try {
    const saved = localStorage.getItem("user");
    if (saved) currentUser = JSON.parse(saved);
} catch (e) { console.error("Session Error", e); }

// Fallback if no user
if (!currentUser) {
    currentUser = { name: "Pavani", email: "se23umcs020@mahindrauniversity.edu.in", role: "STUDENT", gender: "Female", semester: "VI", cgpa: "8.9" };
}

function getRollNumber(email) {
    if (!email) return "Unknown";
    return email.split("@")[0];
}

const rollNumber = getRollNumber(currentUser.email);

function getBranch(email) {
    if (!email) return "Integrated CSE";
    if (email.includes("umcs")) return "Integrated CSE";
    if (email.includes("ucse")) return "B.Tech CSE";
    if (email.includes("uece")) return "B.Tech ECE";
    if (email.includes("uecm")) return "B.Tech ECM";
    if (email.includes("ucbt")) return "B.Tech CB/BT";
    if (email.includes("umet")) return "B.Tech ME/MT";
    if (email.includes("uce")) return "B.Tech CE";
    if (email.includes("unt")) return "B.Tech NT";
    if (email.includes("uari")) return "B.Tech AI";
    return "Unknown";
}

const userBranch = getBranch(currentUser.email);

function filterSubjectsByBranch(subjects, branch) {
    return subjects.filter(sub => {
        // REMOVE Computer Networks for Integrated CSE
        if (branch === "Integrated CSE" && sub.name.includes("Computer Networks")) {
            return false;
        }
        return true;
    });
}

const filteredSubjects = filterSubjectsByBranch(allSubjects, userBranch);
let openSelected = [];
let liberalSelected = [];
let currentElectiveType = 'open'; // 'open' or 'liberal'

// ✅ Dynamic Subject Classification
function getSubjectType(subject, branch) {
    if (!subject) return "empty";
    if (subject.name === "Big Data Analytics" || subject.code === "CS3207") {
        return branch === "Integrated CSE" ? "core" : "open";
    }
    return subject.type || "empty";
}

// ✅ 3. CORE VIEW CONTROLLER
function setView(viewName, filter = 'open') {
    // List of view IDs in HTML - IMPORTANT: Must match student.html exactly
    const views = ["dashboardView", "profileView", "syllabusView", "timetableView", "electiveView", "adminView", "facultyView", "approvalsView", "gradingView", "gradesView", "professorView", "compareView"];

    views.forEach(v => {
        const el = document.getElementById(v);
        if (el) el.style.display = "none";
    });

    const targetEl = document.getElementById(viewName + "View");
    if (targetEl) targetEl.style.display = "block";

    // Menu highlighting
    document.querySelectorAll(".menu li").forEach(li => li.classList.remove("active"));
    const activeMenu = document.getElementById(`menu-${viewName}`);
    if (activeMenu) activeMenu.classList.add("active");

    if (viewName === "dashboard") renderDashboard();
    if (viewName === "syllabus") renderSyllabus();
    if (viewName === "timetable") renderTimetable();
    if (viewName === "faculty") renderFacultyDashboard();
    if (viewName === "admin") renderAdminDashboard();
    if (viewName === "approvals") renderAdminApprovals();
    if (viewName === "grading") renderFacultyGrading();
    if (viewName === "grades") renderStudentGrades();
    if (viewName === "elective") {
        currentElectiveType = filter;
        renderElectives();
    }
}

// ✅ 4. RENDERING MODULES
function renderDashboard() {
    const openList = document.getElementById("open-preferences-list");
    const liberalList = document.getElementById("liberal-preferences-list");

    if (openList) {
        openList.innerHTML = openSelected.length ? openSelected.map(e => `
            <li class="selected-item">
                <span>${e.name} (${e.code})</span>
                <span class="tag tag-pink">Open</span>
            </li>
        `).join('') : "<li>No selections.</li>";
    }

    if (liberalList) {
        liberalList.innerHTML = liberalSelected.length ? liberalSelected.map(e => `
            <li class="selected-item">
                <span>${e.name} (${e.code})</span>
                <span class="tag tag-yellow">Liberal</span>
            </li>
        `).join('') : "<li>No selections.</li>";
    }
}

function renderSyllabus() {
    const grid = document.getElementById("syllabusContent");
    if (!grid) return;

    const timetable = branchTimetables[userBranch] || branchTimetables["Integrated CSE"];
    const activeSubjects = new Map();

    // Extract unique core subjects from the current timetable
    Object.values(timetable).forEach(daySlots => {
        Object.values(daySlots).forEach(slot => {
            if (slot.type === 'core' && slot.code && !activeSubjects.has(slot.code)) {
                activeSubjects.set(slot.code, {
                    name: slot.name,
                    code: slot.code,
                    faculty: slot.faculty
                });
            }
        });
    });

    grid.innerHTML = Array.from(activeSubjects.values()).map(s => `
        <div class="card syllabus-card">
            <div class="subject-tag">Core Subject</div>
            <h3>${s.name}</h3>
            <p class="course-code">${s.code}</p>
            <div class="syllabus-btn-group">
                <button class="btn btn-view" onclick="showSyllabusDetails('${s.code}', '${s.name}', '${s.faculty}')">View Syllabus</button>
                <button class="btn btn-download" onclick="downloadPDF('${s.code}')">Download PDF</button>
            </div>
        </div>
    `).join('');
}

function downloadPDF(code) {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    
    let s = syllabusData[code];
    if (!s) {
        // Fallback if data is missing
        s = {
            name: code, code: code, credits: 3, faculty: "TBD",
            units: [
                { title: "Unit 1: Introduction", content: "Overview of fundamental concepts." },
                { title: "Unit 2: Core Methodologies", content: "In-depth study of core mechanisms." },
                { title: "Unit 3: Advanced Analysis", content: "Advanced topics and case studies." },
                { title: "Unit 4: System Design", content: "Design architectures and tools." },
                { title: "Unit 5: Applications", content: "Modern applications and trends." }
            ]
        };
    }

    // --- PDF STYLING & CONTENT ---
    doc.setFont("helvetica", "bold");
    doc.setFontSize(22);
    doc.setTextColor(27, 51, 44); // Primary color #1b332c
    doc.text(s.name, 20, 20);
    
    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(100, 100, 100);
    doc.text(`Course Code: ${s.code} | Credits: ${s.credits} | Faculty: ${s.faculty}`, 20, 30);
    
    doc.setLineWidth(0.5);
    doc.setDrawColor(27, 51, 44);
    doc.line(20, 35, 190, 35);
    
    let yPos = 50;
    doc.setTextColor(0, 0, 0);
    
    s.units.forEach((u, i) => {
        if (yPos > 260) { doc.addPage(); yPos = 20; }
        
        doc.setFont("helvetica", "bold");
        doc.setFontSize(14);
        doc.text(u.title, 20, yPos);
        yPos += 8;
        
        doc.setFont("helvetica", "normal");
        doc.setFontSize(11);
        const splitContent = doc.splitTextToSize(u.content, 170);
        doc.text(splitContent, 20, yPos);
        yPos += (splitContent.length * 6) + 10;
    });

    doc.setFontSize(10);
    doc.setTextColor(150, 150, 150);
    doc.text(`Generated by GALEX Registration Portal on ${new Date().toLocaleDateString()}`, 20, 285);

    doc.save(`${s.code}_Syllabus.pdf`);
}

function renderTimetable() {
    const container = document.getElementById("fullTimetableGrid");
    if (!container) return;
    const data = branchTimetables[userBranch] || branchTimetables["Integrated CSE"];
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    const slots = ["08:25", "09:25", "10:35", "11:35", "12:35", "13:35", "14:35", "16:35", "17:35"];

    let html = `<div class="timetable-grid" style="grid-template-columns: 100px repeat(5, 1fr);">`;
    html += `<div></div>${days.map(d => `<div class="timetable-header">${d.toUpperCase()}</div>`).join('')}`;

    slots.forEach(s => {
        html += `<div class="slot-time">${s}</div>`;
        days.forEach(d => {
            let slotData = data[d]?.[s] || { name: "-", type: "empty" };
            let cardClass = "";

            const combinedSelected = [...openSelected, ...liberalSelected];
            const sel = combinedSelected.find(p => p.timetable.day === d && p.timetable.time === s);

            let displaySubject = slotData.name;
            let displayCode = slotData.code || "";
            let faculty = slotData.faculty || "";
            let venue = slotData.venue || "";
            let tagText = "CORE";
            let tagClass = "tag-core";
            cardClass = "";

            if (slotData.type === "break") {
                displaySubject = "LUNCH BREAK";
                tagText = "BREAK";
                tagClass = "tag-break";
            } else if (slotData.type === "open") {
                displaySubject = "Open Elective Slot";
                tagText = "ELECTIVE";
                tagClass = "tag-elective-slot";
                cardClass = "bg-pink-slot";
            } else if (slotData.type === "liberal") {
                displaySubject = "Liberal Arts Slot";
                tagText = "ELECTIVE";
                tagClass = "tag-hss-slot";
                cardClass = "bg-yellow-slot";
            } else if (slotData.type === "empty" || slotData.name === "-") {
                displaySubject = "";
                tagText = "";
                tagClass = "";
                venue = "";
                faculty = "";
            }

            if (sel) {
                const isLiberal = sel.code.startsWith('HS') || sel.code.startsWith('ES');
                const typeClass = isLiberal ? 'bg-yellow-slot' : 'bg-pink-slot';
                const typeTag = isLiberal ? 'tag-hss-slot' : 'tag-elective-slot';

                if (slotData.type === "core") {
                    cardClass = "bg-clash-slot";
                    tagText = "CLASH";
                    tagClass = "tag-clash";
                    displayCode = `⚠ Clash with ${slotData.name}`;
                    displaySubject = sel.name;
                    faculty = sel.faculty;
                    venue = "CONFLICT";
                } else {
                    cardClass = typeClass;
                    tagText = "ELECTIVE";
                    tagClass = typeTag;
                    displaySubject = sel.name;
                    displayCode = sel.code;
                    faculty = sel.faculty;
                    venue = "TBD";
                }
            }

            html += `
                <div class="timetable-slot ${cardClass}">
                    <div class="slot-subject">${displaySubject}</div>
                    ${displayCode ? `<div class="slot-code">${displayCode}</div>` : ''}
                    ${faculty ? `<div style="font-size: 10px; color: #777;">${faculty}</div>` : ''}
                    ${venue ? `<div style="font-size: 10px; font-weight: 800; color: #444; margin-top: 5px;">📍 RM ${venue}</div>` : ''}
                    ${tagText ? `<div class="slot-tag ${tagClass}" style="margin-top: 8px;">${tagText}</div>` : ''}
                </div>
            `;
        });
    });
    html += `</div>`;
    container.innerHTML = html;
}

function renderElectives() {
    const grid = document.getElementById("electiveGrid");
    if (!grid) return;

    const searchTerm = document.getElementById("electiveSearch")?.value.toLowerCase() || "";
    const deptFilter = document.getElementById("electiveFilter")?.value || "ALL";

    // Core filtering logic using dynamic subject classification
    let data = filteredSubjects.filter(sub => getSubjectType(sub, userBranch) === currentElectiveType);

    // Apply UI Filters
    data = data.filter(e => {
        const matchesSearch = e.name.toLowerCase().includes(searchTerm) ||
            e.code.toLowerCase().includes(searchTerm) ||
            e.faculty.toLowerCase().includes(searchTerm);
        const matchesDept = deptFilter === "ALL" || e.code.startsWith(deptFilter);
        return matchesSearch && matchesDept;
    });

    const header = document.querySelector("#electiveView h2");
    if (header) header.textContent = currentElectiveType === 'open' ? "Open Electives" : "Liberal Electives";

    if (data.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 60px; background: white; border-radius: 20px; box-shadow: var(--shadow);">
                <div style="font-size: 40px; margin-bottom: 15px;">🔍</div>
                <h3 style="color: var(--primary-color);">No electives available</h3>
                <p style="color: var(--text-muted);">Try adjusting your search or filters.</p>
            </div>
        `;
        return;
    }

    grid.innerHTML = data.map(sub => renderCard(sub)).join('');
    const count = currentElectiveType === 'open' ? openSelected.length : liberalSelected.length;
    const limit = currentElectiveType === 'open' ? 5 : 3;
    const counter = document.getElementById("selection-counter");
    if (counter) counter.textContent = `Selected: ${count} / ${limit}`;
}

function renderCard(e) {
    const dynamicType = getSubjectType(e, userBranch);
    const selectedList = dynamicType === 'open' ? openSelected : liberalSelected;
    const isSelected = selectedList.some(p => p.id === e.id);
    const clashingSubject = getClashingSubject(e);
    const limit = dynamicType === 'open' ? 5 : 3;
    const isLimitReached = selectedList.length >= limit;

    const disableCheckbox = !isSelected && isLimitReached;

    return `
        <div class="card ${clashingSubject ? 'clash-border' : ''} ${isSelected ? 'selected-card-highlight' : ''}">
            <div class="card-top-row">
                <span class="tag ${dynamicType === 'open' ? 'tag-pink' : 'tag-yellow'}">${dynamicType.toUpperCase()} Elective</span>
                <span class="timing-info">${e.timetable.day} ${e.timetable.time} | 📍 RM ${e.venue}</span>
            </div>
            <h3>${e.name} ${isSelected ? '<span style="color: #2e7d32; margin-left: 5px;">✔</span>' : ''}</h3>
            <p style="font-weight: 600; color: var(--primary-color); margin-bottom: 5px;">${e.code}</p>
            <p style="font-size: 13px; color: var(--text-muted);">${e.faculty} | ${e.credits} Credits</p>
            
            ${clashingSubject ? `<div class="clash-tag" style="background: #e74c3c; color: white;">⚠ CLASH WITH ${clashingSubject.toUpperCase()}</div>` : ''}

            <div class="card-footer">
                <label style="cursor: ${disableCheckbox ? 'not-allowed' : 'pointer'}; display: flex; align-items: center; gap: 8px; font-weight: 600; opacity: ${disableCheckbox ? '0.5' : '1'};">
                    <input type="checkbox" ${isSelected ? 'checked' : ''} ${disableCheckbox ? 'disabled' : ''} onchange="toggleElective(${e.id})"> Select
                </label>
                <button class="btn-details" onclick="showElectiveDetails(${e.id})">View Details</button>
            </div>
        </div>
    `;
}

function getClashingSubject(e) {
    const timetable = branchTimetables[userBranch] || branchTimetables["Integrated CSE"];
    const slotData = timetable[e.timetable.day]?.[e.timetable.time];

    // 1. Check against Core Subjects in the branch timetable
    if (slotData && slotData.type === 'core') {
        return slotData.name;
    }

    // 2. Check against other already Selected Electives (excluding itself)
    const combined = [...openSelected, ...liberalSelected];
    const electiveClash = combined.find(p =>
        p.id !== e.id &&
        p.timetable.day === e.timetable.day &&
        p.timetable.time === e.timetable.time
    );

    if (electiveClash) {
        return electiveClash.name;
    }

    return null;
}

function checkClash(e) {
    return !!getClashingSubject(e);
}

function toggleElective(id) {
    const e = allSubjects.find(item => item.id === id);
    if (!e) return;

    const dynamicType = getSubjectType(e, userBranch);

    if (dynamicType === 'open') {
        const idx = openSelected.findIndex(p => p.id === id);
        if (idx > -1) {
            openSelected.splice(idx, 1);
        } else {
            if (openSelected.length >= 5) {
                alert("You can select only 5 open electives.");
                return;
            }
            openSelected.push(e);
        }
    } else {
        const idx = liberalSelected.findIndex(p => p.id === id);
        if (idx > -1) {
            liberalSelected.splice(idx, 1);
        } else {
            if (liberalSelected.length >= 3) {
                alert("Please select 3 preferences. 1 will be allotted based on availability.");
                return;
            }
            liberalSelected.push(e);
        }
    }

    renderElectives();
    renderDashboard();
}

function showSyllabusDetails(code, name, faculty) {
    let s = syllabusData[code];

    // Dynamic Fallback for branches without hardcoded syllabus data
    if (!s) {
        s = {
            name: name || code,
            code: code,
            credits: 3,
            faculty: faculty || "TBD",
            units: [
                { title: "Unit 1: Introduction", content: "Overview of fundamental concepts, principles, and introductory theories related to the subject." },
                { title: "Unit 2: Core Methodologies", content: "In-depth study of core mechanisms, algorithms, and practical applications." },
                { title: "Unit 3: Advanced Analysis", content: "Advanced topics, real-world case studies, and critical analysis of domain problems." },
                { title: "Unit 4: System Design & Implementation", content: "Design architectures, tools, frameworks, and structural implementations." },
                { title: "Unit 5: Capstone / Applications", content: "Final project guidelines, modern applications, and future trends in the domain." }
            ]
        };
    }

    const body = document.getElementById("modalBody");
    body.innerHTML = `
        <h2 style="margin-bottom: 10px;">${s.name}</h2>
        <p style="color: var(--text-muted); margin-bottom: 25px;">${s.code} | Credits: ${s.credits} | Faculty: ${s.faculty}</p>
        
        <div class="syllabus-accordion">
            ${s.units.map((u, index) => `
                <div class="accordion-item">
                    <div class="accordion-header" onclick="toggleAccordion(this)">
                        <span>${u.title}</span>
                        <i class="fas fa-chevron-down"></i>
                    </div>
                    <div class="accordion-content">
                        ${u.content}
                    </div>
                </div>
            `).join('')}
        </div>
    `;
    document.getElementById("syllabusModal").style.display = "flex";
}

function toggleAccordion(header) {
    const content = header.nextElementSibling;
    const isActive = content.classList.contains('active');

    // Close all other items
    document.querySelectorAll('.accordion-content').forEach(c => c.classList.remove('active'));

    if (!isActive) {
        content.classList.add('active');
    }
}

function showElectiveDetails(id) {
    const list = currentElectiveType === 'open' ? engineeringElectives : liberalElectives;
    const e = list.find(item => item.id === id);
    const body = document.getElementById("modalBody");
    body.innerHTML = `
        <h2 style="margin-bottom: 10px;">${e.name}</h2>
        <p style="color: var(--text-muted); font-weight: 600; margin-bottom: 20px;">${e.code} | Faculty: ${e.faculty} | Credits: ${e.credits}</p>
        
        <div style="background: #f8f9fa; padding: 20px; border-radius: 12px; margin-bottom: 20px;">
            <h4 style="margin-bottom: 8px; color: var(--primary-color);">Subject Description</h4>
            <p style="font-size: 14px; line-height: 1.6; color: #555;">${e.description}</p>
        </div>

        <div style="background: #eef2f7; padding: 15px; border-radius: 12px; border-left: 5px solid var(--primary-color);">
            <h4 style="margin-bottom: 5px;">Prerequisites</h4>
            <p style="font-size: 14px; font-weight: 600;">${e.prerequisites}</p>
        </div>
        
        <div style="margin-top: 20px; font-size: 13px; color: #777;">
            📍 Venue: RM ${e.venue} | 🕒 Schedule: ${e.timetable.day} ${e.timetable.time}
        </div>
    `;
    document.getElementById("syllabusModal").style.display = "flex";
}

function closeSyllabusModal() { document.getElementById("syllabusModal").style.display = "none"; }

// ✅ 5. INITIALIZATION
document.addEventListener("DOMContentLoaded", () => {
    const userNameElem = document.getElementById("sidebar-name");
    const userIdElem = document.getElementById("sidebar-roll");
    const userBranchElem = document.getElementById("sidebar-branch");
    const avatarImg = document.querySelector(".avatar-container img");

    if (userNameElem) userNameElem.textContent = currentUser.name;
    if (userIdElem) userIdElem.textContent = rollNumber;
    if (userBranchElem) userBranchElem.textContent = userBranch;

    // Set Profile Avatar based on gender
    if (avatarImg) {
        const femaleNames = ["Sahithi", "Pavani", "Sindhu", "Kavya", "Anny", "Varshitha", "Yasaswini", "Manozgna", "Divya", "Sneha", "Anusha", "Harika", "Siri", "Neha", "Meghana", "Pooja", "Ritika", "Keerthi", "Swathi", "Deepika", "Lavanya", "Bhavya", "Anjali", "Sowmya", "Tejaswi"];

        // Robust gender check: database field first, then name-based list
        let isFemale = currentUser.gender === "Female";
        if (!currentUser.gender) {
            isFemale = femaleNames.some(name => currentUser.name.includes(name));
        }

        // Using straight-facing, highly professional avatars
        const avatarUrl = isFemale
            ? `https://www.w3schools.com/howto/img_avatar2.png`
            : `https://www.w3schools.com/howto/img_avatar.png`;

        avatarImg.src = avatarUrl;

        // Also update large profile avatar if it exists
        const largeAvatar = document.querySelector(".profile-avatar-large img");
        if (largeAvatar) largeAvatar.src = avatarUrl;

        // Dynamic Profile & Dashboard Updates
        const welcomeHeader = document.getElementById("dashboard-welcome");
        const profileName = document.getElementById("profile-display-name");
        const profileEmail = document.getElementById("profile-display-email");
        const profileBranch = document.getElementById("profile-display-branch");
        const profileRoll = document.getElementById("profile-roll");
        const profileSem = document.getElementById("profile-sem");
        const profileCgpa = document.getElementById("profile-cgpa");
        const profileRole = document.getElementById("profile-role");
        const sidebarSem = document.getElementById("sidebar-sem");

        if (welcomeHeader) welcomeHeader.textContent = `Welcome, ${currentUser.name}`;
        if (profileName) profileName.textContent = currentUser.name;
        if (profileEmail) profileEmail.textContent = currentUser.email;
        if (profileBranch) profileBranch.textContent = userBranch;
        if (profileRoll) profileRoll.textContent = rollNumber;
        if (profileSem) profileSem.textContent = currentUser.semester || "VI";
        if (profileCgpa) profileCgpa.textContent = currentUser.cgpa || "8.5";
        if (profileRole) profileRole.textContent = currentUser.role || "Student";
        if (sidebarSem) sidebarSem.textContent = `Sem ${currentUser.semester || "VI"}`;
    }

    initDashboardByRole(currentUser);
    renderTimetable();
});

function logout() { localStorage.removeItem("user"); window.location.href = "login.html"; }
function submitPreferences() {
    const count = currentElectiveType === 'open' ? openSelected.length : liberalSelected.length;
    const limit = currentElectiveType === 'open' ? 5 : 3;

    if (count < limit) {
        alert("Invalid: Select the number of preferences (" + limit + " required)");
        return;
    }

    alert("Preferences Submitted Successfully!");
    initDashboardByRole(currentUser);
}

// --- SEARCH LOGIC ---
function getUnifiedSubjects() {
    const unified = [...engineeringElectives, ...liberalElectives];

    // Extract core subjects from branchTimetables
    const coreMap = new Map();
    for (const branch in branchTimetables) {
        for (const day in branchTimetables[branch]) {
            for (const time in branchTimetables[branch][day]) {
                const slot = branchTimetables[branch][day][time];
                if (slot.type === "core" && slot.code && !coreMap.has(slot.code)) {
                    coreMap.set(slot.code, {
                        id: slot.code,
                        name: slot.name,
                        code: slot.code,
                        faculty: slot.faculty,
                        credits: 3,
                        type: "core",
                        description: "Mandatory core subject for " + branch,
                        prerequisites: "None",
                        venue: slot.venue,
                        timetable: { day, time }
                    });
                }
            }
        }
    }

    return [...unified, ...Array.from(coreMap.values())];
}

function handleGlobalSearch() {
    const query = document.getElementById("globalSearch").value.toLowerCase().trim();
    const type = document.getElementById("searchType").value;
    const resultsContainer = document.getElementById("searchResults");
    
    if (!query) {
        resultsContainer.style.display = "none";
        return;
    }

    resultsContainer.innerHTML = "";
    resultsContainer.style.display = "block";

    let filtered = [];
    if (type === "subject") {
        const all = getUnifiedSubjects();
        filtered = all.filter(s => s.name.toLowerCase().includes(query) || s.code.toLowerCase().includes(query));
    } else if (type === "faculty") {
        if ("dr smith robert smith smith".includes(query)) {
            filtered = [{ name: "Dr. Robert Smith", code: "PROFESSOR", dept: "CS" }];
        }
    } else {
        if ("mahindra university mu university".includes(query)) {
            filtered = [{ name: "Mahindra University", code: "UNIVERSITY", dept: "Hyderabad" }];
        }
    }

    if (filtered.length === 0) {
        resultsContainer.innerHTML = `<div style="padding: 15px; color: #999; text-align: center;">No results found for "${query}"</div>`;
        return;
    }

    filtered.forEach(item => {
        const div = document.createElement("div");
        div.style.padding = "10px 15px";
        div.style.borderBottom = "1px solid #eee";
        div.style.cursor = "pointer";
        div.innerHTML = `
            <div style="font-weight: bold; color: var(--primary-color);">${item.name}</div>
            <div style="font-size: 11px; color: #666;">${item.code} | ${item.dept || "Academic"}</div>
        `;
        div.onclick = () => {
            if (item.code === "PROFESSOR" || item.code === "UNIVERSITY") {
                setView('professorView');
            } else {
                onSubjectSearchClick(item.code || item.id);
            }
            resultsContainer.style.display = "none";
        };
        resultsContainer.appendChild(div);
    });
}

function onSubjectSearchClick(idOrCode) {
    document.getElementById("searchResults").style.display = "none";
    document.getElementById("globalSearch").value = "";

    const all = getUnifiedSubjects();
    const subject = all.find(s => s.code === idOrCode || s.id === idOrCode);

    if (subject) {
        // Use existing showSyllabusDetails to show full modal
        showSyllabusDetails(subject.code, subject.name, subject.faculty);
    }
}

// Close search results when clicking outside
document.addEventListener("click", (e) => {
    if (!e.target.closest("#globalSearch") && !e.target.closest("#searchResults")) {
        const resultsContainer = document.getElementById("searchResults");
        if (resultsContainer) resultsContainer.style.display = "none";
    }
});


// ============================================================
// FACULTY & ADMIN DATA
// ============================================================

const facultySubjects = {
    "faculty@mahindrauniversity.edu.in": ["Deep Neural Networks", "Big Data Analytics"],
    "professor@mahindrauniversity.edu.in": ["Software Eng", "Programming Workshop"],
    "admin@mahindrauniversity.edu.in": []
};

const mockStudents = [
    { name: "Sahithi Gunturu", email: "se23umcs072@mahindrauniversity.edu.in", roll: "SE23UMCS072", branch: "Integrated CSE", semester: "VI", cgpa: "8.9", gender: "Female" },
    { name: "Pavani Reddy", email: "se23umcs020@mahindrauniversity.edu.in", roll: "SE23UMCS020", branch: "Integrated CSE", semester: "VI", cgpa: "8.5", gender: "Female" },
    { name: "Arjun Sharma", email: "se23ucse010@mahindrauniversity.edu.in", roll: "SE23UCSE010", branch: "B.Tech CSE", semester: "VI", cgpa: "7.8", gender: "Male" },
    { name: "Meghana Rao", email: "se23ucse025@mahindrauniversity.edu.in", roll: "SE23UCSE025", branch: "B.Tech CSE", semester: "VI", cgpa: "9.1", gender: "Female" },
    { name: "Karan Patel", email: "se23uari001@mahindrauniversity.edu.in", roll: "SE23UARI001", branch: "B.Tech AI", semester: "VI", cgpa: "8.3", gender: "Male" },
    { name: "Divya Menon", email: "se23uece003@mahindrauniversity.edu.in", roll: "SE23UECE003", branch: "B.Tech ECE", semester: "VI", cgpa: "8.0", gender: "Female" },
    { name: "Rahul Verma", email: "se23uece011@mahindrauniversity.edu.in", roll: "SE23UECE011", branch: "B.Tech ECE", semester: "VI", cgpa: "7.5", gender: "Male" },
    { name: "Sneha Iyer", email: "se23uari007@mahindrauniversity.edu.in", roll: "SE23UARI007", branch: "B.Tech AI", semester: "VI", cgpa: "9.3", gender: "Female" }
];

// ============================================================
// FACULTY SCHEDULE EXTRACTION
// ============================================================

function getFacultySchedule(email) {
    const subjects = facultySubjects[email] || [];
    const schedule = [];

    for (const branch in branchTimetables) {
        const branchData = branchTimetables[branch];
        for (const day in branchData) {
            for (const time in branchData[day]) {
                const slot = branchData[day][time];
                if (slot.type === "core" && subjects.some(s => slot.name && slot.name.includes(s))) {
                    // Avoid duplicate branch entries (CSE mirrors Integrated CSE)
                    const alreadyAdded = schedule.some(r =>
                        r.subject === slot.name && r.day === day && r.time === time && r.branch === branch
                    );
                    if (!alreadyAdded) {
                        schedule.push({ subject: slot.name, code: slot.code, branch, day, time, venue: slot.venue });
                    }
                }
            }
        }
    }

    return schedule;
}

// ============================================================
// FACULTY DASHBOARD RENDERER
// ============================================================

function renderFacultyDashboard() {
    const welcomeEl = document.getElementById("faculty-welcome");
    if (welcomeEl) welcomeEl.textContent = `Welcome, ${currentUser.name || "Faculty"}`;

    const subjects = facultySubjects[currentUser.email] || [];

    // Render subject cards
    const subjectCards = document.getElementById("facultySubjectCards");
    if (subjectCards) {
        if (subjects.length === 0) {
            subjectCards.innerHTML = `<p style="color: var(--text-muted);">No subjects assigned.</p>`;
        } else {
            subjectCards.innerHTML = subjects.map(s => `
                <div class="card" style="padding: 20px; text-align: center;">
                    <div style="font-size: 30px; margin-bottom: 10px;"><i class="fas fa-book-open" style="color: var(--primary-color);"></i></div>
                    <h3 style="font-size: 16px;">${s}</h3>
                    <span class="tag tag-core" style="margin-top: 8px; display: inline-block;">CORE</span>
                </div>
            `).join('');
        }
    }

    renderFacultySchedule();
    renderFacultyStudentList();
}

function renderFacultySchedule() {
    const container = document.getElementById("facultySchedule");
    if (!container) return;

    const dayFilter = document.getElementById("facultyDayFilter")?.value || "ALL";
    let schedule = getFacultySchedule(currentUser.email);

    if (dayFilter !== "ALL") {
        schedule = schedule.filter(r => r.day === dayFilter);
    }

    // Deduplicate: same subject+day+time across branches only show unique branches
    if (schedule.length === 0) {
        container.innerHTML = `<p style="color: var(--text-muted); padding: 20px;">No classes found for the selected day.</p>`;
        return;
    }

    const rows = schedule.map(r => `
        <tr style="border-bottom: 1px solid #eee;">
            <td style="padding: 12px 15px; font-weight: 600;">${r.day}</td>
            <td style="padding: 12px 15px; color: var(--primary-color);">${r.time}</td>
            <td style="padding: 12px 15px;">${r.subject} <span style="font-size: 12px; color: #999;">(${r.code || ''})</span></td>
            <td style="padding: 12px 15px;"><span class="tag tag-core" style="font-size: 11px;">${r.branch}</span></td>
            <td style="padding: 12px 15px; color: #666;"><i class="fas fa-map-marker-alt"></i> ${r.venue || 'TBD'}</td>
        </tr>
    `).join('');

    container.innerHTML = `
        <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <thead>
                <tr style="background: var(--primary-color); color: white;">
                    <th style="padding: 12px 15px; text-align: left;">Day</th>
                    <th style="padding: 12px 15px; text-align: left;">Time</th>
                    <th style="padding: 12px 15px; text-align: left;">Subject</th>
                    <th style="padding: 12px 15px; text-align: left;">Branch</th>
                    <th style="padding: 12px 15px; text-align: left;">Venue</th>
                </tr>
            </thead>
            <tbody>${rows}</tbody>
        </table>
    `;
}

function renderFacultyStudentList() {
    const container = document.getElementById("facultyStudentList");
    if (!container) return;

    container.innerHTML = mockStudents.map(s => `
        <div class="card" style="padding: 20px; cursor: pointer;" onclick="viewStudentTimetable('${s.email}', '${s.name}')">
            <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 10px;">
                <img src="${s.gender === 'Female' ? 'https://www.w3schools.com/howto/img_avatar2.png' : 'https://www.w3schools.com/howto/img_avatar.png'}"
                     style="width: 45px; height: 45px; border-radius: 50%; border: 2px solid var(--primary-color);">
                <div>
                    <div style="font-weight: 700;">${s.name}</div>
                    <div style="font-size: 12px; color: var(--text-muted);">${s.roll}</div>
                </div>
            </div>
            <span class="tag tag-core" style="font-size: 11px; margin-right: 5px;">${s.branch}</span>
            <span style="font-size: 12px; color: var(--text-muted);">CGPA: ${s.cgpa}</span>
            <div style="margin-top: 10px; font-size: 12px; color: var(--primary-color); font-weight: 600;">
                <i class="fas fa-hand-point-right"></i> Click to view timetable <i class="fas fa-hand-point-left"></i>
            </div>
        </div>
    `).join('');
}

// ============================================================
// ADMIN DASHBOARD RENDERER
// ============================================================

function renderAdminDashboard() {
    renderAdminStudentList("ALL");
}

function filterByBranch(filter) {
    renderAdminStudentList(filter);
}

function renderAdminStudentList(filter) {
    const list = document.getElementById("studentList");
    if (!list) return;

    // Update Counts
    document.getElementById("count-all").textContent = mockStudents.length;
    document.getElementById("count-umcs").textContent = mockStudents.filter(s => s.email.includes("umcs")).length;
    document.getElementById("count-ucse").textContent = mockStudents.filter(s => s.email.includes("ucse")).length;
    document.getElementById("count-uari").textContent = mockStudents.filter(s => s.email.includes("uari")).length;
    document.getElementById("count-uece").textContent = mockStudents.filter(s => s.email.includes("uece")).length;

    const filtered = filter === "ALL"
        ? mockStudents
        : mockStudents.filter(s => s.email.includes(filter.toLowerCase()));

    list.innerHTML = filtered.map(s => `
        <div class="card" style="padding: 20px; cursor: pointer;" onclick="viewStudentTimetable('${s.email}', '${s.name}')">
            <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 10px;">
                <img src="${s.gender === 'Female' ? 'https://www.w3schools.com/howto/img_avatar2.png' : 'https://www.w3schools.com/howto/img_avatar.png'}"
                     style="width: 45px; height: 45px; border-radius: 50%; border: 2px solid var(--primary-color);">
                <div>
                    <div style="font-weight: 700;">${s.name}</div>
                    <div style="font-size: 12px; color: var(--text-muted);">${s.roll}</div>
                </div>
            </div>
            <span class="tag tag-core" style="font-size: 11px;">${s.branch}</span>
            <span style="margin-left: 8px; font-size: 12px; color: var(--text-muted);">Sem ${s.semester} | CGPA: ${s.cgpa}</span>
            <div style="margin-top: 10px; font-size: 12px; color: var(--primary-color); font-weight: 600;">
                <i class="fas fa-hand-point-right"></i> Click to view timetable <i class="fas fa-hand-point-left"></i>
            </div>
        </div>
    `).join('');
}

// ============================================================
// SHARED: VIEW ANY STUDENT'S TIMETABLE (for Faculty & Admin)
// ============================================================

function viewStudentTimetable(email, name) {
    const studentBranch = getBranch(email);
    const timetableData = branchTimetables[studentBranch] || branchTimetables["Integrated CSE"];
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    const slots = ["08:25", "09:25", "10:35", "11:35", "12:35", "13:35", "14:35", "16:35"];

    let html = `<div class="timetable-grid" style="grid-template-columns: 100px repeat(5, 1fr);">`;
    html += `<div></div>${days.map(d => `<div class="timetable-header">${d.toUpperCase()}</div>`).join('')}`;

    slots.forEach(s => {
        html += `<div class="slot-time">${s}</div>`;
        days.forEach(d => {
            const slot = timetableData[d]?.[s] || { name: "-", type: "empty" };
            let cls = "", tag = "", tagCls = "";
            if (slot.type === "core") { cls = ""; tag = "CORE"; tagCls = "tag-core"; }
            if (slot.type === "break") { cls = "bg-break-slot"; tag = "BREAK"; tagCls = "tag-break"; }
            if (slot.type === "open") { cls = "bg-pink-slot"; tag = "ELECTIVE"; tagCls = "tag-elective-slot"; }
            if (slot.type === "liberal") { cls = "bg-yellow-slot"; tag = "ELECTIVE"; tagCls = "tag-hss-slot"; }
            if (slot.type === "empty" || slot.name === "-") { cls = ""; tag = ""; }

            const displayName = (slot.type === "open") ? "Open Elective" : (slot.type === "liberal") ? "Liberal Arts" : (slot.name || "");

            html += `
                <div class="timetable-slot ${cls}">
                    <div class="slot-subject">${displayName}</div>
                    ${slot.code ? `<div class="slot-code">${slot.code}</div>` : ""}
                    ${slot.faculty ? `<div style="font-size:10px;color:#777;">${slot.faculty}</div>` : ""}
                    ${slot.venue && slot.name !== "-" ? `<div style="font-size:10px;font-weight:800;color:#444;margin-top:5px;"><i class="fas fa-map-marker-alt"></i> ${slot.venue}</div>` : ""}
                    ${tag ? `<div class="slot-tag ${tagCls}" style="margin-top:8px;">${tag}</div>` : ""}
                </div>`;
        });
    });
    html += `</div>`;

    // Show in the embedded panel (Faculty View) or modal (Admin View)
    const studentTimetableContainer = document.getElementById("studentTimetableContainer");
    const studentTimetableGrid = document.getElementById("studentTimetableGrid");
    const titleEl = document.getElementById("studentTimetableTitle");

    if (studentTimetableContainer && studentTimetableGrid) {
        if (titleEl) titleEl.textContent = `${name}'s Timetable  ${studentBranch}`;
        studentTimetableGrid.innerHTML = html;
        studentTimetableContainer.style.display = "block";
        studentTimetableContainer.scrollIntoView({ behavior: "smooth" });
    } else {
        // Fallback: open in the syllabus modal
        const body = document.getElementById("modalBody");
        body.innerHTML = `<h2 style="margin-bottom:15px;">${name}'s Timetable  ${studentBranch}</h2>${html}`;
        document.getElementById("syllabusModal").style.display = "flex";
    }
}

// ============================================================
// ROLE-BASED INITIALIZATION
// ============================================================

function initDashboardByRole(user) {
    const role = (user.role || "STUDENT").toLowerCase();

    // Show/hide all role-specific items correctly
    document.querySelectorAll("[data-role]").forEach(el => {
        if (el.dataset.role === role) {
            el.style.display = "flex"; // our menu items are flex containers
        } else {
            el.style.display = "none";
        }
    });

    if (role === "faculty") {
        document.getElementById("menu-dashboard") && (document.getElementById("menu-dashboard").style.display = "none");
        document.getElementById("menu-syllabus") && (document.getElementById("menu-syllabus").style.display = "none");
        document.getElementById("menu-timetable") && (document.getElementById("menu-timetable").style.display = "none");
        setView("faculty");
    } else if (role === "admin") {
        document.getElementById("menu-dashboard") && (document.getElementById("menu-dashboard").style.display = "none");
        document.getElementById("menu-syllabus") && (document.getElementById("menu-syllabus").style.display = "none");
        document.getElementById("menu-timetable") && (document.getElementById("menu-timetable").style.display = "none");
        setView("admin");
    } else {
        setView("dashboard");
    }
}



// ============================================================
// ADMIN: ELECTIVE APPROVALS
// ============================================================

function renderAdminApprovals() {
    const container = document.getElementById("adminApprovalList");
    if (!container) return;

    // Simulate pending requests from mock students
    const pendingRequests = mockStudents.filter((s, i) => i % 2 === 0).map(s => ({
        student: s,
        elective: "CS3223 Deep Neural Networks",
        status: "Pending"
    }));

    if (pendingRequests.length === 0) {
        container.innerHTML = `<p style="color: var(--text-muted);">No pending elective requests.</p>`;
        return;
    }

    container.innerHTML = pendingRequests.map((req, i) => `
        <div class="card" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; padding: 15px;" id="req-row-${i}">
            <div style="display: flex; align-items: center; gap: 15px;">
                <img src="${req.student.gender === "Female" ? "https://www.w3schools.com/howto/img_avatar2.png" : "https://www.w3schools.com/howto/img_avatar.png"}" style="width: 40px; height: 40px; border-radius: 50%;">
                <div>
                    <div style="font-weight: bold;">${req.student.name}</div>
                    <div style="font-size: 12px; color: var(--text-muted);">${req.student.roll} | ${req.student.branch}</div>
                </div>
            </div>
            <div style="display: flex; gap: 10px;">
                <button class="btn btn-blue" onclick="processRequest(${i}, 'Approved')" style="padding: 8px 15px; font-size: 12px; background: #2e7d32;">Approve</button>
                <button class="btn" onclick="processRequest(${i}, 'Rejected')" style="padding: 8px 15px; font-size: 12px; background: #e74c3c;">Reject</button>
            </div>
        </div>
    `).join("");
}

function processRequest(index, status) {
    const row = document.getElementById(`req-row-${index}`);
    if (row) {
        row.innerHTML = `<div style="padding: 10px; font-weight: bold; color: ${status === "Approved" ? "#2e7d32" : "#e74c3c"};">Request ${status}</div>`;
        setTimeout(() => row.style.display = "none", 2000);
    }
}

// ============================================================
// FACULTY: GRADING & ATTENDANCE
// ============================================================

function renderFacultyGrading() {
    const select = document.getElementById("facultyGradingCourse");
    const container = document.getElementById("facultyGradingTableContainer");
    if (!select || !container) return;

    const subjects = facultySubjects[currentUser.email] || [];

    // Populate select if empty
    if (select.children.length === 0) {
        select.innerHTML = subjects.length ? subjects.map(s => `<option value="${s}">${s}</option>`).join("") : `<option>No Subjects Assigned</option>`;
    }

    if (subjects.length === 0) {
        container.innerHTML = `<p style="color: var(--text-muted);">You are not assigned to any courses.</p>`;
        return;
    }

    const currentSubject = select.value;

    // Show mock students for this subject
    const enrolledStudents = mockStudents.slice(0, 5); // Just take a few mock students for demo

    container.innerHTML = `
        <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <thead>
                <tr style="background: var(--primary-color); color: white;">
                    <th style="padding: 12px; text-align: left;">Roll No</th>
                    <th style="padding: 12px; text-align: left;">Student Name</th>
                    <th style="padding: 12px; text-align: left;">Attendance (%)</th>
                    <th style="padding: 12px; text-align: left;">Midterm Marks</th>
                    <th style="padding: 12px; text-align: left;">Action</th>
                </tr>
            </thead>
            <tbody>
                ${enrolledStudents.map((s, i) => `
                    <tr style="border-bottom: 1px solid #eee;">
                        <td style="padding: 12px;">${s.roll}</td>
                        <td style="padding: 12px; font-weight: bold;">${s.name}</td>
                        <td style="padding: 12px;"><input type="number" value="${75 + (i * 4)}" style="width: 60px; padding: 5px; border: 1px solid #ddd; border-radius: 4px;">%</td>
                        <td style="padding: 12px;"><input type="number" value="${60 + (i * 7)}" style="width: 60px; padding: 5px; border: 1px solid #ddd; border-radius: 4px;"> / 100</td>
                        <td style="padding: 12px;"><button class="btn btn-blue" style="padding: 5px 10px; font-size: 11px;" onclick="alert('Saved for ${s.name}!')">Save</button></td>
                    </tr>
                `).join("")}
            </tbody>
        </table>
    `;
}

// ============================================================
// STUDENT: GRADES & PERFORMANCE
// ============================================================

function renderStudentGrades() {
    const container = document.getElementById("studentGradesTable");
    if (!container) return;

    // Check if the current user is a valid student object
    const cgpaEl = document.getElementById("studentCurrentCgpa");
    if (cgpaEl) cgpaEl.textContent = currentUser.cgpa || "8.5";

    const transcripts = [
        { course: "Data Structures", code: "CS2201", credits: 4, grade: "A" },
        { course: "Operating Systems", code: "CS2202", credits: 4, grade: "A-" },
        { course: "Database Systems", code: "CS2203", credits: 3, grade: "B+" },
        { course: "Computer Networks", code: "CS2204", credits: 3, grade: "A" },
        { course: "Liberal Arts Elective", code: "HS2001", credits: 2, grade: "A" }
    ];

    container.innerHTML = `
        <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <thead>
                <tr style="background: var(--primary-color); color: white;">
                    <th style="padding: 12px; text-align: left;">Course Code</th>
                    <th style="padding: 12px; text-align: left;">Course Title</th>
                    <th style="padding: 12px; text-align: center;">Credits</th>
                    <th style="padding: 12px; text-align: center;">Grade Received</th>
                </tr>
            </thead>
            <tbody>
                ${transcripts.map(t => `
                    <tr style="border-bottom: 1px solid #eee;">
                        <td style="padding: 12px; font-weight: bold; color: var(--primary-color);">${t.code}</td>
                        <td style="padding: 12px;">${t.course}</td>
                        <td style="padding: 12px; text-align: center;">${t.credits}</td>
                        <td style="padding: 12px; text-align: center; font-weight: bold; color: #2e7d32;">${t.grade}</td>
                    </tr>
                `).join("")}
            </tbody>
        </table>
    `;
}



// ============================================================
// NOTIFICATIONS & EXPORT
// ============================================================

function toggleNotifications() {
    const dropdown = document.getElementById("notificationsDropdown");
    if (!dropdown) return;

    if (dropdown.style.display === "none" || dropdown.style.display === "") {
        dropdown.style.display = "block";
        populateNotifications();
    } else {
        dropdown.style.display = "none";
    }
}

function populateNotifications() {
    const list = document.getElementById("notifList");
    if (!list) return;

    // Different notifications based on role
    const role = (currentUser?.role || "STUDENT").toLowerCase();
    let notifs = [];

    if (role === "admin") {
        notifs = [
            { title: "System Update", text: "New elective CS3223 added.", time: "10 mins ago" },
            { title: "Seat Limit Alert", text: "Deep Neural Networks is 95% full.", time: "1 hour ago" }
        ];
    } else if (role === "faculty") {
        notifs = [
            { title: "Grades Due", text: "Midterm grading for CS2201 is due Friday.", time: "2 hours ago" },
            { title: "Meeting Reminder", text: "Faculty meeting at 4:00 PM.", time: "5 hours ago" }
        ];
    } else {
        notifs = [
            { title: "Elective Approved!", text: "Your request for CS3223 has been approved.", time: "Just now" },
            { title: "Performance Updated", text: "Data Structures Midterm Graded: 85/100", time: "Yesterday" },
            { title: "Fee Reminder", text: "Semester VI fees are due next week.", time: "2 days ago" }
        ];
    }

    list.innerHTML = notifs.map(n => `
        <div style="padding: 10px; border-bottom: 1px solid #eee;">
            <div style="font-weight: bold; font-size: 13px; color: var(--primary-color);">${n.title}</div>
            <div style="font-size: 12px; color: #555; margin-top: 4px;">${n.text}</div>
            <div style="font-size: 10px; color: var(--text-muted); margin-top: 5px;">${n.time}</div>
        </div>
    `).join("");

    // Reset badge
    const badge = document.getElementById("notifBadge");
    if (badge) badge.style.display = "none";
}

function exportRegistryCSV() {
    if (!mockStudents || mockStudents.length === 0) {
        alert("No students to export.");
        return;
    }

    const headers = ["Roll Number", "Name", "Email", "Branch", "Semester", "CGPA", "Gender"];
    const rows = mockStudents.map(s => [s.roll, s.name, s.email, s.branch, s.semester, s.cgpa, s.gender]);

    let csvContent = "data:text/csv;charset=utf-8,";
    csvContent += headers.join(",") + "\\r\\n";
    rows.forEach(rowArray => {
        let row = rowArray.join(",");
        csvContent += row + "\\r\\n";
    });

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "GALEX_Student_Registry.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}


// ============================================================
// PHASE 2: DATABASE MANAGEMENT (CRUD)
// ============================================================

function postAnnouncement() {
    const text = document.getElementById("announcementText").value;
    if (!text) {
        alert("Please enter an announcement text.");
        return;
    }
    alert("Announcement successfully posted to the student portal!");
    document.getElementById("announcementText").value = "";
}



// ============================================================
// PROFILE: RESET PASSWORD
// ============================================================

function dashboardResetPassword() {
    if (!currentUser || !currentUser.email) return;

    const oldPassword = prompt("For security, please enter your current password:");
    if (!oldPassword) return;

    const savedCustom = localStorage.getItem("customPassword_" + currentUser.email);
    const requiredPassword = savedCustom || currentUser.password;

    if (oldPassword !== requiredPassword && oldPassword !== currentUser.password) {
        alert("Incorrect current password! Password reset failed.");
        return;
    }

    const newPassword = prompt("Enter your new password:");
    if (!newPassword) return;

    const confirmPassword = prompt("Confirm your new password:");
    if (newPassword !== confirmPassword) {
        alert("Passwords do not match! Password reset failed.");
        return;
    }

    // Save to localStorage
    localStorage.setItem("customPassword_" + currentUser.email, newPassword);

    // Update active currentUser object so they don`t get locked out until next login
    currentUser.password = newPassword;
    localStorage.setItem("user", JSON.stringify(currentUser));

    alert("Password successfully reset! Please use your new password next time you log in.");
}

