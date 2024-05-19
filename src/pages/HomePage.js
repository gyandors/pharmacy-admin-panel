import { Container } from 'react-bootstrap';

export default function HomePage() {
  document.title = 'Admin Panel';
  return (
    <main style={{ textAlign: 'center', marginTop: '30vh' }}>
      <Container>
        <h2>Welcome to Pharmacy Admin Panel</h2>
      </Container>
    </main>
  );
}
