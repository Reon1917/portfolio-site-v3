export default function sitemap() {
  const baseUrl = "https://reon-site.vercel.app";

  // Add all your static routes
  const routes = [
    "",
    "/#about",
    "/#projects",
    "/#contact",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'monthly',
    priority: route === "" ? 1 : 0.8,
  }));

  return routes;
} 