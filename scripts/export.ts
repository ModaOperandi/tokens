import * as sass from 'node-sass';
import * as exportSass from 'node-sass-export';
import * as path from 'path';

import { includePaths } from '../src/includePaths';

sass.renderSync({
  file: path.join(__dirname, './export.scss'),
  includePaths: [...includePaths],
  functions: exportSass('.'),
});
