export const getStoriesAndComments = (items) => {

  console.log('items : ', items)

  items.sort(function(x, y){
    return y.time - x.time;
  });

  let stories = [];
  let comments = [];

  items.forEach(element => {

    if (element.type === "story") {
      stories.push({
        id: element.id,
        title: element.title
      });
    } else if (element.type === "comment") {

      comments.push({
        id: element.id,
        title: element.text
      });
    }    
  });

  console.log('ss : ', stories, comments);
  return [stories, comments]

}