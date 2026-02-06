const experiences_data = [
    {
        company_name: "SurveySparrow",
        designation: "Product Developer",
        date: "Jul, 2025 - Present",
        experience: [
            "Owned end-to-end development of a scalable nominations system, including database schema architecture designed for future scalability and feature expansion, enabling organization-wide voting.",
            "Re-designed participant selection using DB-driven filtering (departments, groups, custom properties, etc.) in PostgreSQL, reducing OpenSearch dependency and infrastructure cost.",
            "Built custom, context-aware participant filters to ensure dropdown options reference only eligible/selected users, improving UX and query efficiency.",
            "Optimized performance by introducing targeted database indexes for high-traffic queries. Integrated OpenSearch for low-latency full-text search where required.",
            "Built state-driven scheduling workflows using Time Relic to reliably trigger emails, in-app notifications, and actionables.Implemented background processing and caching using BullMQ + Redis, improving throughput, reliability,and reducing database load.",
            "Delivered a high-performance frontend using React + React Query with reusable components via Twiggs.Leveraged AI-assisted development to do repetitive tasks and accelerate implementation, delivering an estimated 3 months of planned work in 1.5 months without compromising quality."
        ],
        link:'https://surveysparrow.com/'
    },
    {
        company_name: "Rogue Pixxel It Solutions LLP",
        designation: "Full Stack Developer",
        date: "Aug, 2024 - Jul, 2025",
        experience: [
            "Architected and delivered a comprehensive ERP solution for one of India’s top organization, featuring a responsive, high-performance frontend built with Next.js. and a scalable Nest.js backend implemented using TypeScript and SOLID principles.",
            "Designed and deployed a PostgreSQL database schema from scratch. Implemented robust authentication using JWT and role-based access control (RBAC) for multiple user roles, ensuring secure and tailored access across the ERP system.",
            "Built reusable components following best practices to enable an efficient, scalable, and maintainable frontend, and utilized Redux and Zustand for state management to enhance application performance and scalability.",
            "Developed and deployed an SEO-optimized, visually engaging, responsive frontend for Jharkhand’s leading real estate company using Next.js, with an Express.js and Node.js backend, and enhanced user experience with dynamic animations using Framer."
        ],
        link:'https://theroguepixxel.com/'
    },
    {
        company_name: "Freelancer",
        designation: "Web Developer",
        date: "Apr, 2024 - Aug,2024",
        experience: [
            "Designed and coded a research papers website for IIT-Hyderabad Professor’s research works and a promotional website for a Construction Company using HTML, CSS, JavaScript, React.js, and Framer. Delivered high-quality, responsive designs, ensuring client satisfaction from consultation to post- launch, enhancing visibility and promoting projects effectively."
        ]
    },
    {
        company_name: "G7CR Technologies-A Noventiq Company",
        designation: "Cloud Engineer",
        date: "May, 2023 - Mar, 2024",
        experience: [
           "Led the complete migration initiative for several mid-sized enterprises, thorough assessments of their existing infrastructure to pinpoint areas for improvement. Produced meticulously detailed migration reports, which offered crucial insights and actionable strategies for optimization, resulting in the optimization of client workloads.",
           "Crafted a tailored roadmap for Azure Cloud transition, ensuring a seamless journey by overseeing each step with precision. Throughout this transformative process, dedicated efforts were directed at enhancing workload efficiency through innovative solutions.",
           "Automated Disaster Recovery for a leading Fortune 500 corporation , architecting and deploying sophisticated PowerShell automation scripts.Which resulted in a significant reduction in downtime, enhancing operation and preserving critical business functions even during challenging scenarios.",
           "Developed a React.js powered, employee performance dashboard for an SMB , enabling real-time insights and streamlined evaluations."
        ],
        link:'https://g7cr.in/'
    },
    {
        company_name: "SKILLVERTEX",
        designation: "Business Development Associate",
        date: "Jun, 2022 - Aug, 2022",
        experience: [
            "Cultivated relationships with potential clients through proactive cold calling and impactful meetings with renowned professors.",
            "Secured crucial deals by leveraging these connections and demonstrating the value of our offerings.",
            "Established a solid foundation for future collaborations, enhancing our business growth and reputation."
        ],
        link:'https://www.skillvertex.com/'
    }
]

export default experiences_data;
