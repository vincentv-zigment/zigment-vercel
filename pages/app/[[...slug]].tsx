import { GetServerSidePropsContext } from "next";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { slug = [] } = context.params || {};
  const path = Array.isArray(slug) ? slug.join("/") : slug;

  return {
    redirect: {
      destination: `https://app.zigment.ai/app/${path}`,
      permanent: true,
    },
  };
}

// You need a dummy component even though it won't be rendered
export default function AppCatchAll() {
  return null;
}
