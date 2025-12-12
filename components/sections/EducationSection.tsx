import { IconAward, IconCalendar } from "@tabler/icons-react";
import { education } from "@/lib/data";

export async function EducationSection() {
  if (!education || education.length === 0) {
    return null;
  }

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    });
  };

  return (
    <section
      id="education"
      className="relative py-20 px-6 bg-muted/30 overflow-hidden"
    >
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Education</h2>
          <p className="text-xl text-muted-foreground">
            My academic background
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {education.map((edu) => (
            <div
              key={edu._id}
              className="group relative bg-card border rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              {/* Accent gradient bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary/60 to-primary/30 z-10" />

              <div className="relative z-10 p-6">
                {/* Header with basic info */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-bold mb-1 line-clamp-2 group-hover:text-primary transition-colors">
                      {edu.degree}
                    </h3>
                    <p className="text-lg font-medium text-primary mb-1">
                      {edu.institution}
                    </p>
                    {edu.fieldOfStudy && (
                      <p className="text-sm text-muted-foreground">
                        {edu.fieldOfStudy}
                      </p>
                    )}
                  </div>
                </div>

                {/* Date and GPA badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-muted text-sm">
                    <IconCalendar className="w-3.5 h-3.5" />
                    <span>
                      {edu.startDate && formatDate(edu.startDate)} -{" "}
                      {edu.current
                        ? "Present"
                        : edu.endDate
                        ? formatDate(edu.endDate)
                        : "N/A"}
                    </span>
                  </div>
                  {edu.gpa && (
                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
                      <IconAward className="w-3.5 h-3.5" />
                      <span>GPA: {edu.gpa}</span>
                    </div>
                  )}
                </div>

                {/* Description */}
                {edu.description && (
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {edu.description}
                  </p>
                )}

                {/* Achievements */}
                {edu.achievements && edu.achievements.length > 0 && (
                  <div className="mb-4 p-3 rounded-lg bg-muted/50">
                    <h4 className="text-sm font-semibold mb-2 flex items-center gap-2">
                      <IconAward className="w-4 h-4 text-primary" />
                      Achievements & Honors
                    </h4>
                    <ul className="space-y-1.5">
                      {edu.achievements.map((achievement, idx) => (
                        <li
                          key={`${edu._id}-achievement-${idx}`}
                          className="text-xs text-muted-foreground flex items-start gap-2"
                        >
                          <span className="text-primary mt-1">▸</span>
                          <span className="flex-1">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
