const isExport = process.env.NEXT_PUBLIC_OUTPUT_EXPORT === 'true';

const nextConfig = {
  // ... existing config ...
  rewrites: async () => {
    if (!isExport) {
      return [
        {
          source: '/about',
          destination: '/about-us',
        },
        // other rewrites
      ];
    }
    return [];
  },
  output: isExport ? 'export' : undefined,
};

module.exports = nextConfig;
