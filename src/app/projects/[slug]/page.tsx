export async function generateStaticParams() {
  return [
    { slug: 'kvadroom' },
    { slug: 'novostroy' },
    { slug: 'qwizard' },
    { slug: 'zodia' },
  ];
}

const ProjectPage = () => {
  return <h1>Hello, Blog Post Page!</h1>
}

export default ProjectPage
