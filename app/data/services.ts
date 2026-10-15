export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDescription: string;
  description: string;
  capabilities: string[];
  iconType: "code" | "cpu" | "layout" | "compass";
}

export const SERVICES: ServiceItem[] = [
  {
    id: "software-development",
    number: "01",
    title: "Software Development",
    shortDescription:
      "We design and develop custom software applications that solve business problems, support daily operations, and help organizations grow.",
    description:
      "We design and develop custom software applications that solve business problems, support daily operations, and help organizations grow.",
    capabilities: [
      "Web application development",
      "Mobile application development",
      "Custom software systems",
      "API development and integration",
      "Database-driven applications",
    ],
    iconType: "code",
  },
  {
    id: "business-process-automation",
    number: "02",
    title: "Business Process Automation",
    shortDescription:
      "We help businesses reduce repetitive manual work by automating workflows, organizing information, and connecting everyday business processes.",
    description:
      "We help businesses reduce repetitive manual work by automating workflows, organizing information, and connecting everyday business processes.",
    capabilities: [
      "Workflow automation",
      "Automated sales and inventory processes",
      "Digital record management",
      "Automated reporting and notifications",
      "Integration of business tools and systems",
    ],
    iconType: "cpu",
  },
  {
    id: "ui-ux-design",
    number: "03",
    title: "UI/UX Design",
    shortDescription:
      "We design intuitive, modern, and user-friendly digital experiences that make websites and applications easier to understand and use.",
    description:
      "We design intuitive, modern, and user-friendly digital experiences that make websites and applications easier to understand and use.",
    capabilities: [
      "User interface design",
      "User experience design",
      "Website design",
      "Application interface design",
      "Wireframes and interactive prototypes",
    ],
    iconType: "layout",
  },
  {
    id: "it-consulting",
    number: "04",
    title: "IT Consulting",
    shortDescription:
      "We help businesses make informed technology decisions, plan suitable systems, and identify practical ways to improve their digital operations.",
    description:
      "We help businesses make informed technology decisions, plan suitable systems, and identify practical ways to improve their digital operations.",
    capabilities: [
      "Technology recommendations",
      "Software and system planning",
      "Technical requirements analysis",
      "System architecture guidance",
      "Technology integration planning",
    ],
    iconType: "compass",
  },
];
