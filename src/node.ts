// index.ts
/**
 * Exporting everything for package
 * @packageDocumentation
 */

import EventEmitter from 'events';
import { createUpdater, UpdaterProps } from './node/updater';
import { EventsTemplate, UpdaterTemplate } from './types/client';
import { checkSupportedNodeVersion } from './node/utils';
import { AzurAPI } from './core/client/class';

checkSupportedNodeVersion();

const events: EventsTemplate = new EventEmitter();
export const AzurAPIClient = new AzurAPI({ events }).withUpdater(createUpdater);

export { createUpdater, UpdaterProps };
export { EventsTemplate, UpdaterTemplate };
