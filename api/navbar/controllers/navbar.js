"use strict";
const { sanitizeEntity } = require("strapi-utils");

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async find(ctx) {
    const entity = await strapi
      .query("navbar")
      .find({}, [
        "nav_items",
        "nav_items.route",
        "nav_dropdowns",
        "nav_dropdowns.routes",
      ]);
    return sanitizeEntity(entity, { model: strapi.models.navbar });
  },
};
