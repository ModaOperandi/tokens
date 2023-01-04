import * as path from 'path';
import * as sass from 'sass';
const exportSass = require('@moda/node-sass-export');

import { includePaths } from '../src/includePaths';

sass.renderSync({
  file: path.join(__dirname, './export.scss'),
  includePaths: [...includePaths],
  functions: exportSass('.')
});
