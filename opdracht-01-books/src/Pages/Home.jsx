import BookList from '../components/BookList'; 
import Header from '../components/Header';
import Layout from '../components/layout';

const Home = () => {
    return ( 
            <>
      <Layout>
  <Header/>
    <BookList/>
    </Layout>
    
    </>
    
     );
}
export default Home;