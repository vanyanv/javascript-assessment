import UploadPage from './components/UploadPage';
import { Container } from '@radix-ui/themes';
export default function Home() {
  return (
    <Container size='1' p='3' align='center'>
      <UploadPage />
    </Container>
  );
}
