/**
 * A number, or a string containing a number.
 * @typedef {Object} DraftConfig
 * @property {string} DraftConfig.draftDirName
 * @property {string} DraftConfig.draftFilePrefix
 */

const DRAFT_DIR_NAME = "_drafts";
const DRAFT_FILE_PREFIX = "_";

/**
 * @param {import('@11ty/eleventy').UserConfig} eleventyConfig
 * @param {Partial<DraftConfig>} config
 */
export default function (eleventyConfig, config) {
  const buildDrafts = !!process.env.BUILD_DRAFTS;

  if (!buildDrafts) {
    ignoreDraftsByComputedData(eleventyConfig, {
      draftDirName: config.draftDirName ?? DRAFT_DIR_NAME,
      draftFilePrefix: config.draftFilePrefix ?? DRAFT_FILE_PREFIX,
    });
  }

  eleventyConfig.on("eleventy.before", () => {
    let text = buildDrafts ? "Including" : "Excluding";
    console.log(`[drafts-plugin] ${text} drafts.`);
  });
}

/**
 *
 * @param {*} data
 * @param {DraftConfig} config
 * @returns {boolean}
 */
function isDraft(data, { draftDirName, draftFilePrefix }) {
  return (
    data.draft ||
    data.page.inputPath.includes(`/${draftDirName}/`) ||
    data.page.fileSlug.startsWith(`${draftFilePrefix}`)
  );
}

/**
 * @param {import('@11ty/eleventy').UserConfig} eleventyConfig
 * @param {DraftConfig} config
 */
function ignoreDraftsByComputedData(eleventyConfig, config) {
  eleventyConfig.addGlobalData("eleventyComputed.permalink", () => {
    return (data) => {
      if (isDraft(data, config)) {
        return false;
      }

      return data.permalink;
    };
  });

  eleventyConfig.addGlobalData(
    "eleventyComputed.eleventyExcludeFromCollections",
    () => {
      return (data) => {
        if (isDraft(data, config)) {
          return true;
        }

        return data.eleventyExcludeFromCollections;
      };
    },
  );
}
