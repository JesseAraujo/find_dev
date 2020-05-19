const { Router } = require('express');
const DevController = require ("./controlers/DevController")
const SearchController = require ("./controlers/SearchController")

const routes = Router();

routes.get("/devs", DevController.index)
routes.post('/devs', DevController.store);
routes.delete('/:_id', DevController.destroy);

routes.get("/search", SearchController.index)

module.exports = routes; 