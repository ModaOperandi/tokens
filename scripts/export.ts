import * as path from 'path';
import * as sass from 'node-sass';
import exportSass = require('node-sass-export');

import { includePaths } from '../src/includePaths';

sass.renderSync({
  file: path.join(__dirname, './export.scss'),
  includePaths: [...includePaths],
  functions: exportSass('.')
});

exportSass;
