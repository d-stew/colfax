exports.seed = function(knex, Promise) {

return Promise.join(
    // Deletes ALL existing entries
    knex('people').del(),
    knex('lift').del(),
)
.then(function() {
  return Promise.join(

    knex('people').insert({
      username: 'thedstew',
      first_name: 'Daniel',
      last_name: 'Stewart'
    }).returning('id')
  )
.then(function(people) {
  console.log(people)
  return Promise.join(

    knex('lifts').insert({
      date: '4/8/2016',
      lift: 'Bench Press',
      set: 5,
      reps: 5,
      weight: 155,
      pr: false,
    }).returning('id'),

    knex('lifts').insert({
      date: '4/8/2016',
      lift: 'Split Jerk',
      set: 5,
      reps: 2,
      weight: 205,
      pr: true,
    }).returning('id'),
  )
  .then(function(lifts) {
    console.log(lifts)
    return {
      people: {
        pythonInANutshell: books[0][0],
        thinkPython: books[1][0],
        learningReactNative: books[2][0],
        ydkJS_es6: books[3][0],
        ydkJS_scopesAndClosures: books[4][0],
        ydkJS_asyncAndPerformance: books[5][0]
      },
      lifts: {
        alexMartelli: authors[0][0],
        annaRavenscroft: authors[1][0],
        steveHolden: authors[2][0],
        allenDowney: authors[3][0],
        bonnieEisenman: authors[4][0],
        kyleSimpson: authors[5][0]
      }
    }
  })
})

  )
}
};
