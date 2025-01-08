module.exports = {
  ci: {
    collect: {
      url: ["http://localhost:3000"],
      startServerCommand: "next start",
      numberOfRuns: 3,
    },
    assert: {
      // preset: "lighthouse:no-pwa",
      assertions: {
        "categories:performance": ["warn", { minScore: 0.9 }],
        "categories:accessibility": ["warn", { minScore: 0.9 }],
        "categories:best-practices": ["warn", { minScore: 0.9 }],
        "categories:seo": ["warn", { minScore: 0.9 }],
        "categories:pwa": ["off"],
      },
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
};
