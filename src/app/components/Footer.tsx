import moment from 'moment-timezone';
import { Row, Col, Card, Button } from '@themesberg/react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs, faDownload } from '@fortawesome/free-solid-svg-icons';

export default function Footer(props: {
  showSettings: boolean;
  toggleSettings: () => void;
}) {
  const currentYear = moment().get('year');
  const showSettings = props.showSettings;

  const toggleSettings = () => {
    props.toggleSettings();
  };

  return (
    <div>
      {showSettings ? (
        <Card className="theme-settings">
          <Card.Body className="pt-4">
            <Button
              className="theme-settings-close"
              variant="close"
              size="sm"
              aria-label="Close"
              onClick={() => {
                toggleSettings();
              }}
            />
            <div className="d-flex justify-content-between align-items-center mb-3">
              <p className="m-0 mb-1 me-3 fs-7">
                Made with open source{' '}
                <span role="img" aria-label="gratitude">
                  💙
                </span>
              </p>
            </div>
            <Button
              href="https://themesberg.com/product/dashboard/volt-react"
              target="_blank"
              variant="primary"
              className="mb-3 w-100"
            >
              <FontAwesomeIcon icon={faDownload} className="me-1" /> Download
            </Button>
            <p className="fs-7 text-gray-700 text-center">
              Available in the following technologies:
            </p>
            <div className="d-flex justify-content-center"></div>
          </Card.Body>
        </Card>
      ) : (
        <Card
          className="theme-settings theme-settings-expand"
          onClick={() => {
            toggleSettings();
          }}
        >
          <Card.Body className="p-3 py-2">
            <span className="fw-bold h6">
              <FontAwesomeIcon icon={faCogs} className="me-1 fs-7" /> Settings
            </span>
          </Card.Body>
        </Card>
      )}
      <footer className="footer section py-5">
        <Row>
          <Col xs={12} lg={6} className="mb-4 mb-lg-0">
            <p className="mb-0 text-center text-xl-left">
              Copyright © 2019-{`${currentYear} `}
              <Card.Link
                href="https://themesberg.com"
                target="_blank"
                className="text-blue text-decoration-none fw-normal"
              >
                Themesberg
              </Card.Link>
            </p>
          </Col>
          <Col xs={12} lg={6}>
            <ul className="list-inline list-group-flush list-group-borderless text-center text-xl-right mb-0">
              <li className="list-inline-item px-0 px-sm-2">
                <Card.Link href="https://themesberg.com/about" target="_blank">
                  About
                </Card.Link>
              </li>
              <li className="list-inline-item px-0 px-sm-2">
                <Card.Link href="https://themesberg.com/themes" target="_blank">
                  Themes
                </Card.Link>
              </li>
              <li className="list-inline-item px-0 px-sm-2">
                <Card.Link href="https://themesberg.com/blog" target="_blank">
                  Blog
                </Card.Link>
              </li>
              <li className="list-inline-item px-0 px-sm-2">
                <Card.Link
                  href="https://themesberg.com/contact"
                  target="_blank"
                >
                  Contact
                </Card.Link>
              </li>
            </ul>
          </Col>
        </Row>
      </footer>
    </div>
  );
}
