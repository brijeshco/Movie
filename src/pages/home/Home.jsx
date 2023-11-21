import HeroBanner from './heroBanner/heroBanner';
import './styles.scss';
function Home() {
  return (
    <div className='homePage'>
      <HeroBanner />
      <div style={{ height: 1000 }}></div>
    </div>
  );
}

export default Home;
