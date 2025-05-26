import Details from "./Details";
import photo1 from "../assets/projectpics/1.jpg";
import photo2 from "../assets/projectpics/photo4.jpg";
import photo3 from "../assets/projectpics/photo2.jpg";
import photo4 from "../assets/projectpics/photo3.jpg";

const Maindetails = () => {
  return (
    <div>
      <Details
        num="01"
        photo={photo1}
        me="It's Me"
        title="MANISH GODAR"
        details="  An Environmentalist and Sustainable Development Consultant.I’m
        passionate about finding the balance between infrastructure
        development and environmental conservation. With experience in
        hydropower, river diversion, and eco-friendly engineering solutions,
        I work closely with Sustainable Development Engineering Consultants
        to ensure that large-scale projects align with environmental
        sustainability."
        type="flex-row"
      />
      <Details
        num="02"
        photo={photo2}
        title="My journey "
        details="My career started in data analytics, where I worked at CloudFactory analyzing large datasets. Over time, I realized my true passion lay in environmental impact assessment and sustainable project planning. That’s when I transitioned into working on eco-conscious engineering projects, where I could combine data-driven insights with real-world environmental solutions."
        type="flex-row-reverse"
      />
      <Details
        num="03"
        photo={photo3}
        title="What I Do"
        details={
          <>
            <span className="font-pop font-semibold">
              Sustainability Consulting
            </span>
            : Ensuring engineering projects minimize environmental impact
            <br />
            <span className="font-pop font-semibold">
              Hydropower & River Diversion Projects
            </span>
            : Working on responsible water resource management
            <br />
            <span className="font-pop font-semibold">
              {" "}
              Data-Driven Environmental Solutions
            </span>{" "}
            : Using analytics to make informed ecological decisions
            <br />
            <span className="font-pop font-semibold">
              {" "}
              Regulatory Compliance & Impact Assessment
            </span>
            : Helping projects meet environmental laws & policies
          </>
        }
        type="flex-row"
      />
      <Details
        num="04"
        photo={photo4}
        title="My Vision"
        details="I believe in developing infrastructure that coexists with nature. My goal is to work on innovative, sustainable solutions that create long-term benefits for both people and the environment. Whether it’s optimizing hydropower efficiency or mitigating the ecological effects of large projects, I’m committed to making a difference."
        type="flex-row-reverse"
      />
    </div>
  );
};

export default Maindetails;
