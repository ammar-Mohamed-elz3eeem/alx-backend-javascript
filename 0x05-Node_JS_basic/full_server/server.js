const express = require('express');
const { default: mapRoutes } = require('./routes');

const app = express();

mapRoutes(app);

app.listen(1245, () => {
  console.log('Server up & running on PORT ${PORT}');
});

export default app;
