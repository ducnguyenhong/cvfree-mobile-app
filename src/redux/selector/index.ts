import { isEqual } from 'lodash';
import { createSelectorCreator, defaultMemoize } from 'reselect';

export const selector = createSelectorCreator(defaultMemoize, isEqual);
