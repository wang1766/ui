import { BasicColumn, FormSchema } from '/@/components/Table';
import { useI18n } from '/@/hooks/web/useI18n';
import { formatToDateTime } from '/@/utils/dateUtil';
import { updateCloudFile } from '/@/api/fms/cloudFile';
import { Switch } from 'ant-design-vue';
import { h } from 'vue';
import { getStorageProviderList } from '/@/api/fms/storageProvider';
const { t } = useI18n();

export const columns: BasicColumn[] = [
  {
    title: t('fms.cloudFile.name'),
    dataIndex: 'name',
    width: 50,
  },
  {
    title: t('fms.cloudFile.size'),
    dataIndex: 'size',
    width: 30,
    customRender: ({ record }) => {
      if (record.size > 1073741824) {
        return (record.size / 1073741824).toFixed(2) + 'GB';
      } else if (record.size > 1048576) {
        return (record.size / 1048576).toFixed(2) + 'MB';
      } else {
        return (record.size / 1024).toFixed(2) + 'KB';
      }
    },
  },
  {
    title: t('fms.cloudFile.fileType'),
    dataIndex: 'fileType',
    width: 20,
    customRender: ({ record }) => {
      if (record.fileType === 3) {
        return t('fms.file.video');
      } else if (record.fileType === 4) {
        return t('fms.file.audio');
      } else if (record.fileType === 2) {
        return t('fms.file.image');
      } else {
        return t('fms.file.other');
      }
    },
  },
  {
    title: t('common.status'),
    dataIndex: 'state',
    width: 20,
    customRender: ({ record }) => {
      if (!Reflect.has(record, 'pendingStatus')) {
        record.pendingStatus = false;
      }
      return h(Switch, {
        checked: record.state === true,
        checkedChildren: t('common.on'),
        unCheckedChildren: t('common.off'),
        loading: record.pendingStatus,
        onChange(checked, _) {
          record.pendingStatus = true;
          const newState = checked ? true : false;
          updateCloudFile({ id: record.id, state: newState })
            .then(() => {
              record.state = newState;
            })
            .finally(() => {
              record.pendingStatus = false;
            });
        },
      });
    },
  },
  {
    title: t('common.createTime'),
    dataIndex: 'createdAt',
    width: 30,
    customRender: ({ record }) => {
      return formatToDateTime(record.createdAt);
    },
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'name',
    label: t('fms.cloudFile.name'),
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'userId',
    label: t('fms.cloudFile.userId'),
    component: 'Input',
    colProps: { span: 8 },
  },
];

export const formSchema: FormSchema[] = [
  {
    field: 'id',
    label: 'ID',
    component: 'Input',
    show: false,
  },

  {
    field: 'name',
    label: t('fms.cloudFile.name'),
    component: 'Input',
    required: true,
  },
  {
    field: 'url',
    label: t('fms.cloudFile.url'),
    component: 'Input',
    required: true,
  },
  {
    field: 'size',
    label: t('fms.cloudFile.size'),
    component: 'InputNumber',
    required: true,
  },
  {
    field: 'fileType',
    label: t('fms.cloudFile.fileType'),
    component: 'InputNumber',
    required: true,
  },
  {
    field: 'userId',
    label: t('fms.cloudFile.userId'),
    component: 'Input',
    required: true,
  },
  {
    field: 'providerId',
    label: t('fms.cloudFile.providerId'),
    component: 'ApiSelect',
    required: true,
    defaultValue: 1,
    componentProps: {
      api: getStorageProviderList,
      params: {
        page: 1,
        pageSize: 1000,
      },
      resultField: 'data.data',
      labelField: 'name',
      valueField: 'id',
    },
  },
  {
    field: 'state',
    label: t('fms.cloudFile.state'),
    component: 'RadioButtonGroup',
    defaultValue: true,
    componentProps: {
      options: [
        { label: t('common.on'), value: true },
        { label: t('common.off'), value: false },
      ],
    },
  },
];
