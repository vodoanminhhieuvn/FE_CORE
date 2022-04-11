import { IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '@themesberg/react-bootstrap';

export default function IconButtonOutline(props: { icon: IconDefinition }) {
  return (
    <Button
      variant="outline-light"
      className="btn-icon-only btn-pill text-twitter me-2"
    >
      <FontAwesomeIcon icon={props.icon} />
    </Button>
  );
}
