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
    path: '/*',
    redirect: '/',
  },
];