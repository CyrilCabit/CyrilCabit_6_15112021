const Sauce = require('../models/Sauce');


//CREER UNE SAUCE

exports.createSauce = (req, res, next) => {
  const sauce = new Sauce({
    ...req.body
  });
  sauce.save().then(
    () => {
      res.status(201).json({
        message: ' votre sauce est créée !'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};
//OBTENIR UNE SAUCE PRECISE
exports.getOneSauce = (req, res, next) => {
  Sauce.findOne({
    _id: req.params.id
  }).then(
    (sauce) => {
      res.status(200).json(sauce);
    }
  ).catch(
    (error) => {
      res.status(404).json({
        error: error
      });
    }
  );
};
//OBTENIR LE TABLEAU CONTENANT TOUTES LES SAUCES
exports.getAllSauces = (req, res, next) => {
    Sauce.find()
    .then((sauce) => {
        res.status(200).json(sauce);
      }
    ).catch((error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  };

//MODIFIER UNE SAUCE
exports.modifySauce = (req, res, next) => {
  const sauce = new Sauce({
    _id: req.params.id,
    name: req.body.name,
    manufacturer: req.body.manufacturer,
    description: req.body.description,
    mainPepper: req.body.mainPepper,
    imageUrl: req.body.imageUrl,
    heat: req.body.heat,
    likes: req.body.likes,
    dislikes: req.body.dislikes,
    usersLiked: req.body.usersLiked,
    usersDisliked: req.body.usersDisliked,
  });
  Sauce.updateOne({_id: req.params.id}, sauce)
  .then(
    () => {
      res.status(201).json({
        message: 'La sauce a été modifiée !'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};


//SUPPRIMER UNE SAUCE
exports.deleteSauce = (req, res, next) => {
  Sauce.findOne({ _id: req.params.id }).then(
    (sauce) => {
      if (!sauce) {
        res.status(404).json({
          error: new Error('Rien à supprimer!')
        });
      }
      if (sauce.userId !== req.auth.userId) {
        res.status(400).json({
          error: new Error('Unauthorized request!')
        });
      }
      Sauce.deleteOne({ _id: req.params.id }).then(
        () => {
          res.status(200).json({
            message: 'Deleted!'
          });
        }
      ).catch(
        (error) => {
          res.status(400).json({
            error: error
          });
        }
      );
    }
  )
};
