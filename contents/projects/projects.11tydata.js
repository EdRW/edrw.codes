/**
 * @typedef {["Professional"|"Academic"|"Personal", ...string[]]} Tags
 *
 * @typedef {Object} Project
 * @property {string} name
 * @property {Date} date
 * @property {string} url
 * @property {string} description
 * @property {Tags} tags
 * @property {string} image
 */

/** @type {Project[]} */
const projects = [
  {
    name: "Space Invaders",
    date: new Date("2018-03"),
    description:
      "A C# implementation of the classic arcade game Space Invader, \
      using real-time architectures and OO-design patterns.",
    /**@type {Tags} */
    tags: ["Academic", "Real-Time Architecture", "C#"],
    image: "svg/programming.svg",
    url: "https://github.com/EdRW/Space_Invaders",
  },
  {
    name: "SEDA Task Scheduler",
    date: new Date("2017-10"),
    description:
      'An scalable and elastic task scheduler for event driven applications. \
      This implementation, based on \
       <a href="https://www.sosp.org/2001/papers/welsh.pdf">Staged Event-Driven Architecture (SEDA)</a>, \
       allows for single tasks to be broken up \
       into smaller independent tasks that may execute concurrently \
       while employing runtime tuning of event queue parameters to manage load.',
    type: "Academic",
    /**@type {Tags} */
    tags: ["Academic", "SEDA", "Java"],
    image: "svg/programming.svg",
    url: "https://github.com/EdRW/SEDA_Implementation",
  },
  {
    name: "Test Sequencer",
    date: new Date("2014-06"),
    description: "A test sequencer for testing hardware.",
    /**@type {Tags} */
    tags: ["Professional", "LabVIEW", "Test Automation"],
    image: "svg/programming.svg",
    url: "https://www.lm3technologies.com/",
  },
  {
    name: "Test Sequencer Editor",
    date: new Date("2014-06"),
    description: "A test sequencer for testing hardware.",
    /**@type {Tags} */
    tags: ["Professional", "LabVIEW", "Test Automation"],
    image: "svg/programming.svg",
    url: "https://www.lm3technologies.com/",
  },
].sort((a, b) => b.date.getTime() - a.date.getTime());

export default {
  tags: ["projects"],
  layout: "layouts/base.njk",
  projects,
};
