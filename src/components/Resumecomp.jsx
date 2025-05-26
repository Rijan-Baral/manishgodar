export const WorkItem = ({ position, company, year }) => {
  return (
    <div className="border-l-4 border-primary pl-4 mb-2">
      <p className="text-lg font-semibold">{position}</p>
      <p>
        {company} • {year}
      </p>
    </div>
  );
};

export const Section = ({ title, children }) => (
  <div className="max-w-4xl w-full bg-white-shade dark:bg-black-shade font-roboto  shadow-lg rounded-2xl p-4">
    <h2 className="text-2xl font-bold border-b pb-2 mb-2 font-pop ">{title}</h2>
    <p className="font-semibold">{children}</p>
  </div>
);

export const EducationItem = ({ year, degree, location }) => (
  <div className="border-l-4 border-primary pl-4 mb-2">
    <p className="text-lg font-semibold">{degree}</p>
    <p>
      {location} • {year}
    </p>
  </div>
);

export const ReferenceItem = ({ name, position, contact, email }) => (
  <div className="border-l-4 border-primary pl-4 mb-2 ">
    <p className="text-lg font-semibold">{name}</p>
    <p>{position}</p>
    <p>Phone: {contact}</p>
    <p>Email: {email}</p>
  </div>
);

export const SkillGrid = () => (
  <div className="grid grid-cols-2 gap-2">
    {[
      "Data Collection",
      "Interpolation",
      "MS Office",
      "Public Speaking",
      "Team Management",
      "Communication",
      "Research",
      "Environmental Advocacy",
    ].map((skill, index) => (
      <span key={index} className="bg-white dark:bg-black px-4 py-1 rounded-lg">
        {skill}
      </span>
    ))}
  </div>
);
