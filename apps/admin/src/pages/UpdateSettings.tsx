import { FormBuilder } from '@daohaus/form-builder';
import { useMemo } from 'react';
import { useDao } from '@daohaus/moloch-v3-context';
import { CustomFields } from '../legos/config';
import { COMMON_FORMS } from '../legos/form';
import { formatDaoProfileForForm } from '../utils/settingsHelper';

export function UpdateSettings() {
  const { dao } = useDao();

  const defaultFields = useMemo(() => {
    if (dao) {
      return formatDaoProfileForForm(dao);
    }
    return undefined;
  }, [dao]);

  if (!dao) {
    return null;
  }

  return (
    <FormBuilder
      defaultValues={defaultFields}
      form={{ ...COMMON_FORMS.METADATA_SETTINGS, log: true }}
      customFields={CustomFields}
    />
  );
}

export default UpdateSettings;
