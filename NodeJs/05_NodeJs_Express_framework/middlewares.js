exports.requestLogger = (req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
  };
  
  exports.handle404 = (req, res) => {
    res.status(404).json({ error: 'Route/Page Not Found' });
  };
  