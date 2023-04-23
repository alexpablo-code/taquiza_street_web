const Menu = require('../models/menu.model');

module.exports ={
    createNewMenu: (req, res) => {
        Menu.create(req.body)
            .then(newMenu => {
                res.json({menu: newMenu})
            })
            .catch((err) => res.json(err));
    },
    allMenus: (req, res) => {
        Menu.find()
            .then((menus) => {
                res.json(menus)
            })
            .catch((err) => res.json(err));
    }
}