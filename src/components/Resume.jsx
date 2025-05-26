import Span from "./Span";
import {
  Section,
  EducationItem,
  WorkItem,
  SkillGrid,
  ReferenceItem,
} from "./Resumecomp";

export default function Resume() {
  return (
    <>
      <div>
        <h1 className="text-3xl lg:text-5xl px-2 sm:px-12 md:px-28 lg:px-30  mt-10 font-bold font-pop relative inline-block ">
          <Span text="RESUME" height="after:h-[0.2em]" />
        </h1>
      </div>
      <div className=" min-h-screen flex flex-col items-center justify-center p-8 space-y-4">
        <Section title="Education">
          <EducationItem
            year="2023 - Present"
            degree="MSc in Environmental Science"
            location="Kathmandu, Nepal"
          />
          <EducationItem
            year="2015 - 2020"
            degree="BSc in Environmental Science"
            location="Patan Multiple Campus"
          />
          <EducationItem
            year="2013 - 2015"
            degree="High School in Science"
            location="Caribbean Higher Secondary School/College"
          />
        </Section>

        <Section title="Skills">
          <SkillGrid />
        </Section>

        <Section title="Work History">
          <WorkItem
            position="Environmentalist"
            company="Diva Muskan Consult Pvt. Ltd."
            year="2023 - Present"
          />
          <WorkItem
            position="Data Analyst"
            company="CloudFactory, Jhamsikhel"
            year="2020 - 2023"
          />
          <WorkItem
            position="Youth Volunteer"
            company="Nepalese Youth for Climate Action"
            year="2016 - 2018"
          />
        </Section>

        <Section title="References">
          <ReferenceItem
            name="Dipa Bhatta Baniya "
            position="Managing Director, Diva Muskan Consult pvt.ltd"
            contact="9841618073"
            email=""
          />
          <ReferenceItem
            name="Er. Dilly Ram Bhatta"
            position="Managing Director, S.D. Engineering Consultancy"
            contact="9851016560"
            email="drbgdrbhatta@gmail.com"
          />
          <ReferenceItem
            name="Shyam Adhikari"
            position="Lecturer, Patan Multiple Campus"
            contact="9851018421"
            email="samadhikari@gmail.com"
          />
        </Section>
      </div>
    </>
  );
}
