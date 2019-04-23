var searchYouTube = (options, callback) => {
  $.get('https://www.googleapis.com/youtube/v3/search',{
    part: 'snippet',
    q: options.query,
    maxResults: options.max,
    key: options.key,
    videoEmbeddable: 'true',
    type: 'video'
  },
  (data)=> callback(data.items))
};

export default searchYouTube;
