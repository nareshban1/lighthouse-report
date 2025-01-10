module.exports = {
  ci: {
    collect: {
      settings: {
        additive: "true",
      },
      url: [
        "http://localhost:3000?mobile",
        "http://localhost:3000/about?mobile",
        "http://localhost:3000/home?mobile",
      ],
      startServerCommand: "pnpm start",
      numberOfRuns: 1,
    },
  },
};
