import Gudetama from "../../animations/Gudetama";
import ImageInfoPanel from "../../structural/ImageInfoPanel";


const copy = {
  header: "Recent Projects",
};
const section = "Projects"

const content = [
  {
    title: "Zopa",
    skills: ["android", "apple"],
    body: "We’re not your average bank – we’re building ours with you – by listening to the real-life stories our customers share with us.",
    links: {
      android:
        "https://play.google.com/store/apps/details?id=com.zopa.zeos",
      apple: "https://apps.apple.com/gb/app/zopa-bank/id1324011914",
    },
  },
  {
    title: "Versus Arthritis",
    skills: ["android", "apple"],
    body: "Keep track of your symptoms, so you can understand your arthritis more and feel prepared for your next health appointment.",
    links: {
      android:
        "https://play.google.com/store/apps/details?id=com.vsarthritis",
      apple:
        "https://apps.apple.com/us/app/arthritis-tracker-for-teens/id1483066694?ls=1",
    },
  },
  {
    title: "Cardiac Services",
    skills: ["android", "apple", "node"],
    body: "Cardiac Services training application for training medical staff to use medical apparatus.",
    links: {
      android:
        "https://play.google.com/store/apps/details?id=com.cardiac_services",
      apple:
        "https://apps.apple.com/gb/app/cardiac-services/id1597758548",
    },
  },
]

const ReactProjectsSection = () => {
  return (
    <ImageInfoPanel
      animation={<Gudetama />}
      header={copy.header}
      rightToLeft={true}
      section={section}
      content={content}
    />
  );
};

export default ReactProjectsSection;
