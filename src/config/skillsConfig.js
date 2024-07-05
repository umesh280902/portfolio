// src/config/skillsConfig.js
import { FaReact, FaNodeJs, FaJava, FaPhp, FaLaravel, FaHtml5, FaCss3, FaGit } from 'react-icons/fa';
import { SiMongodb, SiMysql, SiExpress, SiDjango, SiJavascript, SiC, SiThunderbird, SiPostman, SiGithub } from 'react-icons/si';

export const skills = [
  { name: 'MongoDB', Icon: SiMongodb, category: 'Databases' },
  { name: 'MySQL', Icon: SiMysql, category: 'Databases' },
  { name: 'Node.js', Icon: FaNodeJs, category: 'Backend' },
  { name: 'Express.js', Icon: SiExpress, category: 'Framework' },
  { name: 'Django', Icon: SiDjango, category: 'Framework' },
  { name: 'Laravel', Icon: FaLaravel, category: 'Framework' },
  { name: 'React.js', Icon: FaReact, category: 'Frontend' },
  { name: 'HTML', Icon: FaHtml5, category: 'Frontend' },
  { name: 'CSS', Icon: FaCss3, category: 'Frontend' },
  { name: 'JavaScript', Icon: SiJavascript, category: 'Languages' },
  { name: 'Java', Icon: FaJava, category: 'Languages' },
  { name: 'PHP', Icon: FaPhp, category: 'Languages' },
  { name: 'C', Icon: SiC, category: 'Languages' },
  { name: 'Thunder Client', Icon: SiThunderbird, category: 'Tools' },
  { name: 'Postman', Icon: SiPostman, category: 'Tools' },
  { name: 'Git', Icon: FaGit, category: 'Tools' },
  { name: 'GitHub', Icon: SiGithub, category: 'Platforms' },
];
