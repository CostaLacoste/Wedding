import Hero     from '../hero/hero';
import Main     from '../main/main';
import NavGrid  from '../navgrid/navgrid';
import Registry from '../registry/registry';

export default function Home() {
  return (
    <>
      <Hero />
      <Main />
      <NavGrid />
      <Registry />
    </>
  );
}