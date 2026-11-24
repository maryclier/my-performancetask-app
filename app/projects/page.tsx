export const metadata = {
  title: "Projects | Mary Clier",
};

const projects = [
  {
    id: 1,
    name: "Personal Website",
    description: "A website introducing myself.",
  },
  {
    id: 2,
    name: "Calculator App",
    description: "A simple calculator application.",
  },
  {
    id: 3,
    name: "Student Management System",
    description: "A system for managing student records.",
  },
];

export default function ProjectsPage() {
  return (
    <main className="max-w-3xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">
        My Projects
      </h1>

      <div className="space-y-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="border rounded-lg p-4 shadow-sm"
          >
            <h2 className="text-xl font-semibold">
              {project.name}
            </h2>

            <p className="text-gray-600">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
