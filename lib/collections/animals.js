export const Animals = new Mongo.Collection('animals');
import {check} from 'meteor/check';

Meteor.methods({
    addAnimal: function (animal) {
        check(animal.name, String);

        // _.extend(animal, {"rank": 0});
        Animals.insert(animal);
    },
    deleteAnimal: function (animal) {
        Animals.remove(animal);
    }
});


