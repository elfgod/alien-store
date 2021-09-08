const express = require('express');
const router = express.Router({ mergeParams: true });
// mergeParams let's you pull the :id from the app.js app.use middleware

/* GET reviews index /posts/:id/reviews */
router.get('/', function(req, res, next) {
    res.send('INDEX /posts/:id/reviews');
});

/* POST reviews create /posts/:id/reviews */
router.post('/', function(req, res, next) {
    res.send('CREATE /posts/:id/reviews');
});

/* GET reviews edit /posts/:id/reviews/:review_id/edit */
router.get('/:review_id/edit', function(req, res, next) {
    res.send('EDIT /posts/:id/reviews/:review_id/edit');
});

/* PUT reviews update /posts/:id/reviews/:review_id */
router.put('/:review_id', function(req, res, next) {
    res.send('UPDATE /posts/:id/reviews/:review_id');
});

/* DELETE reviews destroy /posts/:id/reviews/:review_id */
router.delete('/:review_id', function(req, res, next) {
    res.send('DELETE /posts/:id/reviews/:review_id');
});

module.exports = router;

/*
GET index       /posts/:id/reviews
POST create     /posts/:id/reviews
GET edit        /posts/:id/reviews/:review_id/edit
PUT update      /posts/:id/reviews/:review_id
DELETE destroy  /posts/:id/reviews/:review_id
*/