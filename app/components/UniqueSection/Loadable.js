/**
 *
 * Asynchronously loads the component for UniqueSection
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
