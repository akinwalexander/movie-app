import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const MovieCard = ({ title, description, posterURL, rating }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={posterURL} alt={title} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <Card.Text> Rating: ⭐ {rating} </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default MovieCard;