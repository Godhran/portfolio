import "./App.css";
import NavBar from "./components/navigation/NavBar";
import WoahYouGoBigGuy from "./components/animations/WoahYouGoBigGuy";
import { usePortfolioContext } from "./context";
import { colours } from "./styles/colours";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faSkull } from "@fortawesome/free-solid-svg-icons";
import IMakeThings from "./components/animations/IMakeThings";
import Footer from "./components/structural/Footer";
import ImageInfoPanel from "./components/structural/ImageInfoPanel";
import Gudetama from "./components/animations/Gudetama";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import MiscProjectsPanel from "./components/structural/MiscProjectsPanel";

const App = () => {
  const { minimalMode } = usePortfolioContext();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const styles = {
    main: {
      textAlign: "center",
      backgroundColor: minimalMode
        ? colours.minimal.light
        : colours.vibrant.light,
      minHeight: "100vh",
      overflow: "hidden",
    },
  };

  library.add(fab, faSkull);

  return (
    <main style={styles.main}>
      <NavBar />
      <ImageInfoPanel
        animation={<WoahYouGoBigGuy />}
        section='About'
        content={[
          {
            title: "I do",
            body: [
              "JavaScript",
              "TypeScript",
              "React Native",
              "Accessibility",
              "GraphQL",
              "Jest",
              "Detox",
              "React",
              "Figma",
              "Miro",
              "Jira",
              "Agile",
            ].join(" ~ "),
          },
          {
            title: "I did",
            body: [
              "Photoshop",
              "Illustrator",
              "NodeJS",
              "Java",
              "Angular",
              "Ionic",
              "Firebase",
              "MongoDB",
              "Unity",
              "MySQL",
            ].join(" ~ "),
          },
          {
            title: "I dabble",
            body: [
              "Voxels",
              "Pico8",
              "Tic-80",
              "Lottie",
              "AfterEffects",
              "Aesprite",
            ].join(" ~ "),
          },
        ]}
      />
      <ImageInfoPanel
        animation={<Gudetama />}
        header={"Recent Projects"}
        rightToLeft
        section='Projects'
        content={[
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
        ]}
      />
      <IMakeThings />
      <MiscProjectsPanel />
      <Footer />
    </main>
  );
};

export default App;
