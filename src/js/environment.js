// Environment Detection for Dual-Mode CRM
// Detects if running on Netlify (production) or locally (development)

const isProduction = window.location.hostname !== 'localhost' &&
                     window.location.hostname !== '127.0.0.1' &&
                     !window.location.hostname.includes('192.168'); // Also detect local network IPs

const envConfig = {
    isProduction: isProduction,
    isLocalhost: !isProduction,

    // GitHub raw URL for production data
    dataUrl: isProduction
        ? 'https://raw.githubusercontent.com/kulkaran01/Dental-Crm/main/data.json'
        : '/api/clinics',

    // Features enabled/disabled based on environment
    features: {
        canEdit: !isProduction,           // Only allow editing locally
        canGenerateTemplates: !isProduction, // Only generate locally
        canSave: !isProduction,            // Only save locally
        canDelete: !isProduction,          // Only delete locally
        canAddClinic: !isProduction,       // Only add clinics locally
        showReadOnlyBanner: isProduction   // Show banner on deployed version
    },

    // Environment info for debugging
    environment: isProduction ? 'production' : 'development',
    hostname: window.location.hostname
};

// Export for use in other files
window.ENV_CONFIG = envConfig;

// Log environment on load (helpful for debugging)
console.log('🌍 Environment:', envConfig.environment);
console.log('📍 Hostname:', envConfig.hostname);
console.log('🔧 Features:', envConfig.features);

// Warn if GitHub URL not configured in production
if (isProduction && envConfig.dataUrl.includes('YOUR_USERNAME')) {
    console.error('⚠️ GitHub URL not configured! Update YOUR_USERNAME in src/js/environment.js');
    alert('Configuration Error: GitHub data URL not set. Please contact administrator.');
}
