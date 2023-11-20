module.exports = {
    ci: {
      collect: {
        numberOfRuns: 3,
        url: ['https://design.redbullcontentpool.com/'],
        settings: {
          onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
          skipAudits: ['uses-http2'],
          chromeFlags: '--no-sandbox',
        },
      },
      assert: {
        assertions: {
          'categories:performance': ['warn', { minScore: 0.9, aggregationMethod: 'median-run' }],
          'categories:accessibility': ['warn', { minScore: 1, aggregationMethod: 'pessimistic' }],
          'categories:best-practices': ['warn', { minScore: 1, aggregationMethod: 'pessimistic' }],
          'categories:seo': ['warn', { minScore: 1, aggregationMethod: 'pessimistic' }],
        },
      },
    },
  };
  