module.exports = {
	ci: {
		collect: {
			staticDistDir: '.next',
		},
		upload: {
			target: 'lhci',
		},
		assert: {
			// preset: 'lighthouse:recommended', because it thinks that this project is made on PWA.
			// preset: 'lighthouse:no-pwa',
			assertions: {
				'first-contentful-paint': ['warn', { maxNumericValue: 3000 }],
				'largest-contentful-paint': ['warn', { maxNumericValue: 6000 }],
				interactive: ['warn', { maxNumericValue: 5000 }],
				'total-blocking-time': ['warn', { maxNumericValue: 100 }],
				'cumulative-layout-shift': ['warn', { maxNumericValue: 0.1 }],
			},
		},
	},
};

// Work on this later .
