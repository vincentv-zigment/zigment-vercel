
export async function getServerSideProps() {

  return {
    redirect: {
      destination: `https://app.zigment.ai/signin`,
      permanent: true,
    },
  };
}

// You need a dummy component even though it won't be rendered
export default function AppCatchAll() {
  return null;
}
