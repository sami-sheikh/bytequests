import { useState } from "react";

function Services() {
  const [readMore1, setReadMore1] = useState(false);
  const [readMore2, setReadMore2] = useState(false);
  const [readMore3, setReadMore3] = useState(false);
  const text = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio voluptatem non veritatis alias maxime dolorum sit ad sed.";
  return (
    <div>
      <div className="card-info">
        <p>Lorem, ipsum dolor</p>
        <h2>Services</h2>
      </div>

      <section className="container">
        <div>
          <div className="services-item"></div>
          <div className="sub-item">
            <h3>Heading 1</h3>
            <p>{readMore1 ? text : `${text.slice(0, 80)}...`}</p>
            <button onClick={() => setReadMore1(!readMore1)}>{readMore1 ? "Show less" : "  Read more"}</button>
          </div>
        </div>
        <div>
          <div className="services-item"></div>
          <div className="sub-item">
            <h3>Heading 2</h3>
            <p>{readMore2 ? text : `${text.slice(0, 80)}...`}</p>
            <button onClick={() => setReadMore2(!readMore2)}>{readMore2 ? "Show less" : "  Read more"}</button>
          </div>
        </div>
        <div>
          <div className="services-item"></div>
          <div className="sub-item">
            <h3>Heading 3</h3>
            <p>{readMore3 ? text : `${text.slice(0, 80)}...`}</p>
            <button onClick={() => setReadMore3(!readMore3)}>{readMore3 ? "Show less" : "  Read more"}</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
