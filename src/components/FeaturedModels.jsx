import ModelsGrid from './ModelsGrid';
import SectionTitle from './SectionTitle';

const FeaturedModels = () => {
  return (
    <div className='pt-24 pl-4'>
      <SectionTitle text='Featured Models' />
      <ModelsGrid isFeatured = {true}/>
    </div>
  );
};
export default FeaturedModels;
