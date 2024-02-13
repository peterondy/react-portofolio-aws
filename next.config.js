// next.config.js
module.exports = {
  async generateStaticParams() {
    return [
      // List of parameters for your dynamic routes
      { params: { id: '1' } },
      { params: { id: '2' } },
      // etc.
    ];
  },
  // rest of your configuration
};