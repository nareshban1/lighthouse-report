module.exports = {
  ci: {
    collect: {
      url: "http://localhost:3000",
      startServerCommand: "next start",
      numberOfRuns: 1,
    },
    assert: {
      preset: "lighthouse:no-pwa",
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
};
