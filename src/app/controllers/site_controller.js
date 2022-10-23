class SiteController {
    // [GET] /
    index = (req, res) => res.render('home');

    // [GET] /search
    search = (req, res) => res.render('search');

    // [POST]
    extract_search(req, res) {
        console.log(req.body);
        res.send(req.body);
    }
}

module.exports = new SiteController();
