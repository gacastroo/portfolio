// data/skillsData.js
export const skillsData = [
  {
    id: 1,
    title: "Backend",
    color: "purple",
    skills: [
      { name: "Java", tag: "experiencia" },
      { name: "Spring Boot", tag: "experiencia" },
      { name: "Thymeleaf", tag: "formación" },
      { name: "SQL" },
      { name: "Python" },
      { name: "C#" },
    ],
  },
  {
    id: 2,
    title: "DevOps & Linux",
    color: "teal",
    skills: [
      { name: "Linux", tag: "prácticas" },
      { name: "Elastic Stack", tag: "prácticas" },
      { name: "Git", tag: "prácticas" },
      { name: "VirtualBox", tag: "prácticas" },
      { name: "Kibana" },
      { name: "Logstash" },
      { name: "Goss" },
      { name: "Apache 2.4", tag: "formación" },
    ],
    experience: {
      company: "Panel Sistemas Informáticos S.L.",
      date: "Mar – Jul 2025 · Madrid",
      bullets: [
        "Desarrollo backend y mantenimiento de entornos Linux",
        "Automatización de testing y despliegue con Goss",
        "Monitorización con Elastic Stack (ES, Kibana, Logstash)",
        "Gestión de VMs con VirtualBox",
      ],
    },
  },
  {
    id: 3,
    title: "Frontend",
    color: "coral",
    skills: [
      { name: "HTML / CSS" },
      { name: "JavaScript" },
      { name: "React" },
      { name: "Angular" },
      { name: "Node.js" },
      { name: "Power Apps" },
    ],
  },
  {
    id: 4,
    title: "Ciberseguridad",
    color: "blue",
    skills: [
      { name: "Gestión de riesgos" },
      { name: "Seguridad de redes" },
      { name: "Protección de datos" },
      { name: "Análisis de eventos" },
    ],
    cert: {
      title: "Certificado Profesional en Ciberseguridad",
      sub: "IBM SkillsBuild · +65 horas · 2025",
    },
  },
];