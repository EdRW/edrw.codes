/**
 * @typedef {["Professional"|"Academic"|"Personal", ...string[]]} Tags
 *
 *
 * @typedef {Object} ProjectBase
 * @property {string} name
 * @property {Date} date
 * @property {string} url
 * @property {string} description
 * @property {Tags} tags
 * @property {string} [image]
 * @property {string} [header]
 *
 *
 * @typedef {ProjectBase} Project
 */

/** @type {Project[]} */
const projects = [
  {
    name: "Space Invaders",
    date: new Date("2018-03"),
    description:
      "A C# implementation of the classic arcade game Space Invader, \
      using real-time architectural patterns and OO-design patterns.",
    /**@type {Tags} */
    tags: ["Academic", "Real-Time Architecture", "C#"],
    url: "https://github.com/EdRW/Space_Invaders",
    header: `<iframe width="560" height="315" src="https://www.youtube.com/embed/aHLuHxvRui0?si=zODGC2eNeJ19u1yV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
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
    image: "./img/SEDA.png",
    url: "https://github.com/EdRW/SEDA_Implementation",
  },
  {
    name: "Test Sequencer",
    date: new Date("2014-06"),
    description: "A test sequencer for testing hardware.",
    /**@type {Tags} */
    tags: ["Professional", "LabVIEW", "Test Automation"],
    url: "https://www.lm3technologies.com/",
    image: "./img/sequencer.jpg",
  },
  {
    name: "Test Sequencer Editor",
    date: new Date("2014-06"),
    description: "A test sequencer for testing hardware.",
    /**@type {Tags} */
    tags: ["Professional", "LabVIEW", "Test Automation"],
    url: "https://www.lm3technologies.com/",
    image: "./img/sequence_editor.jpg",
  },
].sort((a, b) => b.date.getTime() - a.date.getTime());

export default {
  tags: ["projects"],
  layout: "layouts/base.njk",
  projects,
};
