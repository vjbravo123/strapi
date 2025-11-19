module.exports = ({ env }) => ({
  'users-permissions': {
    config: {
      jwt: {
        expiresIn: "7d",
      },
      providers: {
        google: {
          redirectUri: "http://localhost:5173/auth/google/callback",
        },
      },
    },
  },
});
