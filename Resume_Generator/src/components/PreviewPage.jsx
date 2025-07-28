import { useNavigate } from 'react-router-dom';
import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
import './PreviewPage.css'; 

function Preview() {
  let navigate = useNavigate();

  let templatesArray = [
    { name: "Classic", image: image1, path: "1" },
    { name: "Modern", image: image2, path: "2" },
    { name: "Professional", image: image1, path: "3" },
  ];

  return (
    <div className="card-container">
      {templatesArray.map((item, index) => {
        return (
          <div
            className="card"
            key={index}
            onClick={() => navigate(`/preview/${item.path}`)}
          >
            <img
              src={item.image}
              width="80%"
              height="80%"
              alt=""
            />
            <h3>{item.name}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default Preview;
