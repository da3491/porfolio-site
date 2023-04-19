import {
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaReact,
} from "react-icons/fa";
import {
  SiJavascript,
  SiRuby,
  SiRubyonrails,
  SiHeroku,
  SiNetlify,
} from "react-icons/si";

const skills = {
  skill1: {
    name: "HTML/CSS",
    icon: { FaHtml5, FaCss3Alt },
  },
  skill2: {
    name: "Bootstrap",
    icon: FaBootstrap,
  },
  skill3: {
    name: "JavaScript",
    icon: SiJavascript,
  },
  skill4: {
    name: "React",
    icon: FaReact,
  },
  skill5: {
    name: "Ruby",
    icon: SiRuby,
  },
  skill6: {
    name: "Ruby On Rails",
    icon: SiRubyonrails,
  },

  skill7: {
    name: "Git",
    icon: FaGitAlt,
  },
  skill8: {
    name: "Heroku",
    icon: SiHeroku,
  },
  skill9: {
    name: "Netlify",
    icon: SiNetlify,
  },
};

export default skills;
