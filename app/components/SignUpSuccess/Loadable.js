/**
 *
 * Asynchronously loads the component for SignUpSuccess
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
