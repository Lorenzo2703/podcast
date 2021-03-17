module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        "uri": "mongodb+srv://podcast-strapi:Password1@podcast.vt3ox.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
        "database": "Podcast"
      },
      options: {
        authenticationDatabase: env('AUTHENTICATION_DATABASE', null),
        ssl: env.bool('DATABASE_SSL', true),
      },
    },
  },
});
 