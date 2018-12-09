import {Animals} from "../lib/collections/animals";

export  const publish = function(){
    Meteor.publish('animals', function() {
        return Animals.find();
    });
} ;


