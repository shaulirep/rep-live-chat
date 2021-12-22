const {
  API_CHANNEL_NAME: apiChannelName,
  API_CHANNEL_THUMBNAIL: apiChannelThumbnail,
  APP_VERSION: appVersion,
  // BRAND_NAME: brandName,
  CHATWOOT_INBOX_TOKEN: chatwootInboxToken,
  CREATE_NEW_ACCOUNT_FROM_DASHBOARD: createNewAccountFromDashboard,
  DISPLAY_MANIFEST: displayManifest,
  // INSTALLATION_NAME: installationName,
  // LOGO_THUMBNAIL: logoThumbnail,
  // LOGO: logo,
  // PRIVACY_URL: privacyURL,
  // TERMS_URL: termsURL,
  // WIDGET_BRAND_URL: widgetBrandURL,
} = window.globalConfig || {};

const state = {
  apiChannelName,
  apiChannelThumbnail,
  appVersion,
  brandName: 'Rep Live',
  chatwootInboxToken,
  createNewAccountFromDashboard,
  displayManifest,
  installationName: 'Rep Live',
  logo: "https://d36vbr8l8uc1ea.cloudfront.net/live-chat/logo.svg",
  logoThumbnail: "https://d36vbr8l8uc1ea.cloudfront.net/live-chat/logo_thumbnail.svg",
  privacyURL: 'https://hellorep.ai/privacy-policy/',
  termsURL: 'https://hellorep.ai/terms-and-conditions',
  widgetBrandURL: 'https://hellorep.ai/',
};

export const getters = {
  get: $state => $state,
};

export const actions = {};

export const mutations = {};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
