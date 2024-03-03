// Configuration object
const config = {
    // Database configuration
    database: {
        host: 'localhost',
        port: 5432,
        username: 'admin',
        password: 'password',
        databaseName: 'mydatabase'
    },
    
    // API configuration
    api: {
        baseUrl: 'https://api.example.com',
        apiKey: 'your-api-key'
    },
    
    // Logging configuration
    logging: {
        enabled: true,
        level: 'debug'
    }
};

// Export the configuration object
module.exports = config;