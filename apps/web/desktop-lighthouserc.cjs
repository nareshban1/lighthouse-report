module.exports = {
  ci: {
    collect: {
      settings: {
        additive: "true",
        preset: "desktop",
      },
      url: [
        "http://localhost:3000?desktop",
        "http://localhost:3000/about?desktop",
        "http://localhost:3000/home?desktop",
      ],
      startServerCommand: "pnpm start",
      numberOfRuns: 1,
    },
  },
};
