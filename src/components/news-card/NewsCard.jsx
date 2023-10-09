const NewsCard = ({ news }) => {
  return (
    <div class="col-sm-3">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">{news.auther}</h5>
          <p class="card-text">{news.title}</p>
          <img src={news.urlToImage} alt="" className=" w-100" />
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
