/* ============
 * Routes File
 * ============
 *
 * The routes and redirects are defined in this file.
 */

export default [
  // Home
  {
    path: '/',
    component: () => import('@/pages/HomePage.vue'),
  },
  {
    path: '/iroza',
    component: () => import('@/pages/IrozaPage.vue'),
  },
  {
    path: '/*',
    redirect: '/',
  },
];
