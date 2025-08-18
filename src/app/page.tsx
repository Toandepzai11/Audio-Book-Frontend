import IntroBlock from '@/components/Blocks/IntroBlock';

function HomePage() {
  return (
    <div className="bg-white overflow-clip mx-45">
      <IntroBlock
        title="Lorem ipsum dolor sit amet"
        content="Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat."
        image="/headphone.svg"
      />
    </div>
  );
}

export default HomePage;
