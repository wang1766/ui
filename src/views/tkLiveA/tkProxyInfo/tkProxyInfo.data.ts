import { BasicColumn, FormSchema } from '@/components/Table';
import { useI18n } from '@/hooks/web/useI18n';
import { formatToDateTime } from '@/utils/dateUtil';

const { t } = useI18n();

export const columns: BasicColumn[] = [
  {
    title: t('tkLiveA.tkProxyInfo.createId'),
    dataIndex: 'createId',
    width: 100,
  },
  {
    title: t('tkLiveA.tkProxyInfo.departmentId'),
    dataIndex: 'departmentId',
    width: 100,
  },
  {
    title: t('tkLiveA.tkProxyInfo.proxyId'),
    dataIndex: 'proxyId',
    width: 100,
  },
  {
    title: t('tkLiveA.tkProxyInfo.proxyName'),
    dataIndex: 'proxyName',
    width: 100,
  },
  {
    title: t('tkLiveA.tkProxyInfo.proxyAddress'),
    dataIndex: 'proxyAddress',
    width: 100,
  },
  {
    title: t('tkLiveA.tkProxyInfo.country'),
    dataIndex: 'country',
    width: 100,
  },
  {
    title: t('common.createTime'),
    dataIndex: 'createdAt',
    width: 70,
    customRender: ({ record }) => {
      return formatToDateTime(record.createdAt);
    },
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'createId',
    label: t('tkLiveA.tkProxyInfo.createId'),
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'departmentId',
    label: t('tkLiveA.tkProxyInfo.departmentId'),
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'proxyId',
    label: t('tkLiveA.tkProxyInfo.proxyId'),
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
    field: 'createId',
    label: t('tkLiveA.tkProxyInfo.createId'),
    component: 'Input',
    required: true,
  },
  {
    field: 'departmentId',
    label: t('tkLiveA.tkProxyInfo.departmentId'),
    component: 'Input',
    required: true,
  },
  {
    field: 'proxyId',
    label: t('tkLiveA.tkProxyInfo.proxyId'),
    component: 'Input',
    required: true,
  },
  {
    field: 'proxyName',
    label: t('tkLiveA.tkProxyInfo.proxyName'),
    component: 'Input',
    required: true,
  },
  {
    field: 'proxyAddress',
    label: t('tkLiveA.tkProxyInfo.proxyAddress'),
    component: 'Input',
    required: true,
  },
  {
    field: 'country',
    label: t('tkLiveA.tkProxyInfo.country'),
    component: 'Input',
    required: true,
  },
];
