import { Oval } from 'react-loader-spinner';
import { React } from 'react';
import { Container } from './Loader.module';

export default function Loader() {
  return (
    <Container>
      <Oval
        height={200}
        width={200}
        color="#4fa94d"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#4fa94d"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </Container>
  );
}
