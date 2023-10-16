'use strict';

/**
 * magic-model service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::magic-model.magic-model');
