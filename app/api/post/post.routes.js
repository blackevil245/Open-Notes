/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/post              ->  get all post
 * GET     /api/post/:id          ->  get post by id
 * POST    /api/post              ->  create
 * PUT     /api/post/:id          ->  update
 * DELETE  /api/post              ->  delete all post
 * DELETE  /api/post/:id          ->  delete post by id
 */

module.exports = function(app) {
    var baseUrl = '/api/v1';
    var Post = require('../../api/post/post.model');

    /**
     * Get all posts from database
     */
    app.get(baseUrl + '/post', function(req, res) {
        Post.find(function(err, posts) {
        res.set('Access-Control-Allow-Origin','http://localhost:3000');
            if (err) {
                return res.send(err);
            }
            res.json(posts);
        })
    });

    /**
     * Get a post by its ID
     */
    app.get(baseUrl + '/post/:id', function(req, res) {
        Post.findOne({ _id: req.params.id }, function(err, post) {
            if (err) {
                return res.send(err);
            }
            res.json(post);
        });
    });

    /**
     * Create a new post
     */
    app.post(baseUrl + '/post', function(req, res) {
        var newPost = new Post();
        newPost.title = req.body.title;
        newPost.ownerId = req.body.ownerId;
        newPost.content = req.body.content;

        newPost.save(function(err) {
            if (err) {
                res.send(err);
            }
            console.log('post added success');
            res.json({
                message : 'Success',
                data : newPost
            });
        });
    });

    /**
     * Update a post by id
     */
    app.put(baseUrl + '/post/:id', function(req, res) {

    });

    /**
     * Delete a post by id
     */
    app.delete(baseUrl + '/post/:id', function(req, res) {

    });

    /**
     * Delete all posts
     */
    app.delete(baseUrl + '/post', function(req, res) {

    });
}
