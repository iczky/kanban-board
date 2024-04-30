import designAvatar1 from "../assets/avatar-1-Design.png";
import designAvatar2 from "../assets/avatar-2-Design.png";
import engineerAvatar1 from "../assets/avatar-1-Enginering.png";
import engineerAvatar2 from "../assets/avatar-2-Enginering.png";
import pmAvatar1 from "../assets/avatar-1-PM.png";
import pmAvatar2 from "../assets/avatar-2-PM.png";
import { KanbanBoard } from "../types";

export const dummyData: KanbanBoard = {
  lanes: [
    {
      title: "In Progress",
      cards: [
        {
          title: "Design Landing Page UI",
          desc: "Design the user interface for the landing page with modern and clean aesthetics.",
        },
        {
          contributors: [engineerAvatar1, engineerAvatar2],
          title: "Implement User Authentication",
          desc: "Implement user authentication functionality using OAuth 2.0 for secure login.",
        },
        {
          contributors: [pmAvatar1, pmAvatar2],
          title: "Update Database Schema",
          desc: "Update the database schema to include new fields for improved data storage and retrieval.",
          taskList: [
            {
              isDone: true,
              desc: "Design database schema changes",
            },
            {
              isDone: false,
              desc: "Implement database migrations",
            },
          ],
        },
        {
          contributors: [designAvatar1, designAvatar2],
          title: "Bug Fixes and Enhancements",
          desc: "Address bugs reported by users and implement requested enhancements for better user experience.",
          taskList: [
            {
              isDone: true,
              desc: "Fix issue with form submission",
            },
            {
              isDone: false,
              desc: "Implement pagination for better performance",
            },
          ],
          tags: ["Bug", "Enhancement"],
        },
      ],
    },
    {
      title: "Blocked",
      cards: [
        {
          title: "Integration with Legacy System",
          desc: "Blocked due to dependency on legacy system APIs which are not yet available.",
        },
        {
          title: "Third-Party API Restrictions",
          desc: "Blocked pending approval from third-party API provider for increased rate limits.",
        },
        {
          title: "Server Maintenance",
          desc: "Blocked until scheduled server maintenance is completed.",
        },
      ],
    },
    {
      title: "Done",
      cards: [
        {
          title: "Release Version 1.0",
          desc: "Successfully release version 1.0 of the application to production. All features implemented and tested.",
          contributors: [engineerAvatar1, engineerAvatar1],
          tags: ["Release", "Production"],
        },
        {
          title: "Performance Optimization",
          desc: "Optimize application performance to reduce load times and improve user experience. Implemented caching mechanisms and optimized database queries.",
          taskList: [
            {
              isDone: true,
              desc: "Identify performance bottlenecks and prioritize optimization tasks.",
            },
            {
              isDone: true,
              desc: "Implement caching mechanisms for frequently accessed data.",
            },
            {
              isDone: true,
              desc: "Optimize database queries to reduce response times.",
            },
          ],
          tags: ["Performance", "Optimization"],
        },
        {
          title: "Security Audit",
          desc: "Conduct a thorough security audit to identify and fix any vulnerabilities in the application. Implemented necessary security patches and updates.",
          contributors: [pmAvatar1, designAvatar1],
          taskList: [
            {
              isDone: true,
              desc: "Perform vulnerability assessment and penetration testing.",
            },
            {
              isDone: true,
              desc: "Apply security patches and updates to address identified vulnerabilities.",
            },
          ],
          tags: ["Security", "Audit"],
        },
      ],
    },
    {
      title: "Not Started",
      cards: [
        {
          title: "Project Planning",
          desc: "Plan the project scope, objectives, and deliverables. Define project timeline and allocate resources.",
          contributors: [pmAvatar1],
          tags: ["Planning", "Project Management"],
        },
        {
          title: "Requirement Gathering",
          desc: "Gather and document project requirements from stakeholders. Identify key functionalities and features.",
          contributors: [pmAvatar1, pmAvatar2],
          tags: ["Requirements", "Analysis"],
        },
        {
          title: "Team Onboarding",
          desc: "Onboard new team members. Introduce them to project goals, processes, and tools.",
          contributors: [pmAvatar2],
          tags: ["Onboarding", "Team Management"],
        },
      ],
    },
  ],
};
