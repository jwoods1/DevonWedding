/**
 * RsvpController
 *
 * @module      :: Controller
 * @description	:: A set of functions called `actions`.
 *
 *                 Actions contain code telling Sails how to respond to a certain type of request.
 *                 (i.e. do stuff, then send some JSON, show an HTML page, or redirect to another URL)
 *
 *                 You can configure the blueprint URLs which trigger these actions (`config/controllers.js`)
 *                 and/or override them with custom routes (`config/routes.js`)
 *
 *                 NOTE: The code you write here supports both HTTP and Socket.io automatically.
 *
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

module.exports = {
  'new': function (req, res){
    res.view();
  },
  create: function (req, res, next){
    Rsvp.create( req.params.all(), function rsvpCreated (err, rsvp){
      if (err) {
        console.log(err);
        req.session.flash = {
          err: err.ValidationError
        }

        return res.redirect('/rsvp/new');
      }
      
      email.send({
        to: [{
          name: rsvp.firstName,
          email: rsvp.email
        }],
        subject: 'omg i love you guys!!1',
        html: 
          'I can\'t wait to see you all in Chicago<br/>' +
          'I loe you so much!!!! ',
       text: 'text fallback goes here-- in case some recipients (let\'s say the Chipettes)  can\'t receive HTML emails'
});

      res.redirect('/rsvp/reg');
      
      //res.json(rsvp);
    });
  },
  reg: function (req, res){
    res.view();
  }


  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to RsvpController)
   */
  

  
};
