module.exports = {
  ci: {
    collect: {
      url: [
        "http://localhost:3000",
        "http://localhost:3000/about",
        "http://localhost:3000/home",
      ],
      startServerCommand: "pnpm start",
      numberOfRuns: 1,
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
      ignoreDuplicateBuildFailure: true,
      serverBaseUrl: process.env.LHCI_SERVER_BASE_URL,
      token: process.env.LHCI_TOKEN,
    },
  },
};
