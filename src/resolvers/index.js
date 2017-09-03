import { merge } from 'lodash'

import query from './query'
import user from './user'

export default merge(
  query,
  user
)
