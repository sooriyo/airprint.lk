import * as migration_20260225_102405_add_category_parent from './20260225_102405_add_category_parent';

export const migrations = [
  {
    up: migration_20260225_102405_add_category_parent.up,
    down: migration_20260225_102405_add_category_parent.down,
    name: '20260225_102405_add_category_parent'
  },
];
