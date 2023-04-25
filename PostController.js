// import Post from './Post.js';
import PostService from './PostService.js';

class PostController {
    //Обработка ошибок простейшим способом для начинающих, но в Nodejs есть более универсальный способ обработки ошибок
    async create(req, res) {
        try {
            const post =  await PostService.create(req.body, req.files.picture);
            res.json(post)
        }
        catch (e) {
            res.status(500).json(e)
        }
    }
    async getAll(req, res) {
        try {
            const posts = await PostService.getAll();
            return res.json(posts);
        } catch (e) {
            console.log(500).json(e)
        }
    }
    async getOne(req, res) {
        try {           
            const post = await PostService.getOne(req.params.id);
            return res.json(post)
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async update(req, res) {
        try {
            const updatedPost = await PostService.update(req.body);
            return res.json(updatedPost);
        } catch (e) {
            res.status(500).json(e.message)
        }
    }
    async delete(req, res) {
        try {
            const post = await PostService.delete(req.params.id);
            return res.json(post);
        } catch (e) {
            res.status(500).json(e)
        }
    }
}

export default new PostController();