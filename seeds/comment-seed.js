const { Comment } = require('../models')

const commentdata = [
  {
    comment_text:
      "Konan is the greatest boy. He gets very excited and looks like a giraffe, but I would dog sit again",
    user_id: 2,
    dog_id: 4,
  },
  {
    comment_text:
      "Millie keeps itching, could really use some more baths or something",
    user_id: 1,
    dog_id: 3,
  },
  {
    comment_text: "Penny is a crack head",
    user_id: 1,
    dog_id: 5,
  },
  {
    comment_text: "Bella is an enabler of Penny",
    user_id: 1,
    dog_id: 6,
  },
  {
    comment_text:
      "Sassy is such a hard worker, she deserves a huuuuuuge raise",
    user_id: 6,
    dog_id: 2,
  },
  {
    comment_text: "Happy is the best cuddler ever",
    user_id: 1,
    dog_id: 1,
  },
  {
    comment_text: "Mowgli has sharp dagger teefs",
    user_id: 2,
    dog_id: 7,
  },
  {
    comment_text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, ad iste necessitatibus minima illum deleniti, amet fugiat ratione quae similique commodi veritatis. Sed eius aliquid atque porro ducimus quisquam nemo.",
    user_id: 1,
    dog_id: 7,
  },
  {
    comment_text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, ad iste necessitatibus minima illum deleniti, amet fugiat ratione quae similique commodi veritatis. Sed eius aliquid atque porro ducimus quisquam nemo.",
    user_id: 5,
    dog_id: 2
  },
  {
    comment_text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, ad iste necessitatibus minima illum deleniti, amet fugiat ratione quae similique commodi veritatis. Sed eius aliquid atque porro ducimus quisquam nemo.",
    user_id: 1,
    dog_id: 2,
  },
  {
    comment_text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, ad iste necessitatibus minima illum deleniti, amet fugiat ratione quae similique commodi veritatis. Sed eius aliquid atque porro ducimus quisquam nemo.",
    user_id: 2,
    dog_id: 1,
  },
  {
    comment_text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, ad iste necessitatibus minima illum deleniti, amet fugiat ratione quae similique commodi veritatis. Sed eius aliquid atque porro ducimus quisquam nemo.",
    user_id: 4,
    dog_id: 6,
  },
  {
    comment_text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, ad iste necessitatibus minima illum deleniti, amet fugiat ratione quae similique commodi veritatis. Sed eius aliquid atque porro ducimus quisquam nemo.",
    user_id: 3,
    dog_id: 4,
  },
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;