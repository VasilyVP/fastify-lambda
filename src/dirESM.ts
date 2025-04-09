// It fixes __dirname issue in ESM modules

import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Convert import.meta.url to __dirname and __filename
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Make __dirname and __filename available globally
global.__dirname = __dirname;
global.__filename = __filename;
