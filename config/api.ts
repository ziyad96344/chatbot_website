// =============================================================
// 🔄 CENTRALIZED API CONFIG — LOCAL vs PRODUCTION
// =============================================================
// Change `isLocal` detection here once, all API calls follow.
// LOCAL  → http://127.0.0.1:8000/api
// PROD   → https://server.xotbot.com/api
// =============================================================

const isLocal =
    typeof window !== 'undefined' &&
    (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1');

const config = {
    // Base API URL (no trailing slash)
    API_BASE_URL: isLocal
        ? 'http://127.0.0.1:8000/api'
        : 'https://server.xotbot.com/api',

    // Base Server URL (no /api, for any non-API use)
    SERVER_URL: isLocal
        ? 'http://127.0.0.1:8000'
        : 'https://server.xotbot.com',

    // Environment flag
    IS_LOCAL: isLocal,
};

export default config;
