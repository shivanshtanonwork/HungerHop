const Shimmer = () => {
  return (
    <div className="body">
      {/* Shimmer for Filter Button */}
      <div className="filter">
        <div className="shimmer-btn"></div>
      </div>
      <div className="res-container shimmer-container">
        {Array(20)
          .fill("")
          .map((_, index) => (
            <div className="shimmer-card" key={index}>
              <div className="shimmer-img"></div>
              <div className="shimmer-line title"></div>
              <div className="shimmer-line subtitle"></div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Shimmer;
