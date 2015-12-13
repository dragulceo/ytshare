'use strict';

import alt from 'components/Dispatcher';
import { YtShareStore } from 'stores//YtShareStore';
import AltTestingUtils from 'alt/utils/AltTestingUtils';

describe('YtShareStore', () => {

  let storeClass;

  // Clean up localStorage before each try
  beforeEach(() => {
    storeClass = AltTestingUtils.makeStoreTestable(alt, YtShareStore);
  });
});
