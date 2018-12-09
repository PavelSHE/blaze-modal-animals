import { Meteor } from 'meteor/meteor';
import {Animals} from "../lib/collections/animals";
import {publish} from "./publications";

Meteor.startup(() => {
  // code to run on server at startup
    if (Animals.find().count() === 0) {
        Animals.insert({
            rank: 3,
            name: "Cat"
        });
        Animals.insert({
            rank: 1,
            name: "Dog"
        });
        Animals.insert({
            rank: 2,
            name: "Zebra"
        });
    }
    publish();
});
