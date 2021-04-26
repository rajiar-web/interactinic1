import { useRouter } from "next/router";

const SolutionPage = () => {
  const router = useRouter();
  const { city } = router.query; // Destructuring our router object

  return (
    <>
      <h2>
        {city} is placed 
      </h2>
    </>
  );
};

export default SolutionPage;