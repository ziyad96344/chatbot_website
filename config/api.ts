// =============================================================
// 🔄 CENTRALIZED API CONFIG — LOCAL vs PRODUCTION
// =============================================================
// Set NEXT_PUBLIC_USE_LOCAL_API=true in .env.local to use local backend.
// Otherwise, always uses the deployed production server.
// LOCAL  → http://127.0.0.1:8000/api
// PROD   → https://server.xotbot.com/api
// =============================================================

const isLocal =
    process.env.NEXT_PUBLIC_USE_LOCAL_API === 'true';

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
