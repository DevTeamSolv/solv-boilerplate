/**
 *
 * Asynchronously loads the component for MobileRoadmap
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
