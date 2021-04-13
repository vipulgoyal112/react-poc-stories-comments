export const getStoriesAndComments = (items) => {

    let stories = [{
        "by" : "dhouston",
        "descendants" : 71,
        "id" : 8863,
        "kids" : [ 8952, 9224, 8917, 8884, 8887, 8943, 8869, 8958, 9005, 9671, 8940, 9067, 8908, 9055, 8865, 8881, 8872, 8873, 8955, 10403, 8903, 8928, 9125, 8998, 8901, 8902, 8907, 8894, 8878, 8870, 8980, 8934, 8876 ],
        "score" : 111,
        "time" : 1175714200,
        "title" : "Story 1",
        "type" : "story",
        "url" : "http://www.getdropbox.com/u/2/screencast.html"
      },
      {
        "by" : "dhouston",
        "descendants" : 71,
        "id" : 8864,
        "kids" : [ 8952, 9224, 8917, 8884, 8887, 8943, 8869, 8958, 9005, 9671, 8940, 9067, 8908, 9055, 8865, 8881, 8872, 8873, 8955, 10403, 8903, 8928, 9125, 8998, 8901, 8902, 8907, 8894, 8878, 8870, 8980, 8934, 8876 ],
        "score" : 111,
        "time" : 1175714201,
        "title" : "Story 2",
        "type" : "story",
        "url" : "http://www.getdropbox.com/u/2/screencast.html"
      }]
    let storyVsComments = {
        '8663': [{
            "by" : "dhouston",
            "descendants" : 71,
            "id" : 8863,
            "kids" : [ 9224, 8917, 8952, 8958, 8884, 8887, 8869, 8940, 8908, 9005, 8873, 9671, 9067, 9055, 8865, 8881, 8872, 8955, 10403, 8903, 8928, 9125, 8998, 8901, 8902, 8907, 8894, 8870, 8878, 8980, 8934, 8943, 8876 ],
            "score" : 104,
            "time" : 1175714200,
            "title" : "c1",
            "type" : "story",
            "url" : "http://www.getdropbox.com/u/2/screencast.html"
          }],
        '8864': [{
            "by" : "dhouston",
            "descendants" : 71,
            "id" : 8864,
            "kids" : [ 9224, 8917, 8952, 8958, 8884, 8887, 8869, 8940, 8908, 9005, 8873, 9671, 9067, 9055, 8865, 8881, 8872, 8955, 10403, 8903, 8928, 9125, 8998, 8901, 8902, 8907, 8894, 8870, 8878, 8980, 8934, 8943, 8876 ],
            "score" : 104,
            "time" : 1175714201,
            "title" : "c2",
            "type" : "story",
            "url" : "http://www.getdropbox.com/u/2/screencast.html"
          }]
    }

    return [stories, storyVsComments]

}