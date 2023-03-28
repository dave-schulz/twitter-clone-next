import Form from '@/components/Form';
import Header from '@/components/Header';

const Home = () => {
  return (
    <>
      <Header label="home" />
      <Form placeholder="What's happening?" />
      <PostFeed />
    </>
  );
};

export default Home;
