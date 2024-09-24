import { BasicColumn, FormSchema } from '@/components/Table';
import { useI18n } from '@/hooks/web/useI18n';
import { formatToDateTime } from '@/utils/dateUtil';

const { t } = useI18n();

export const columns: BasicColumn[] = [
  {
    title: t('tkLiveA.tkMessage.createId'),
    dataIndex: 'createId',
    width: 100,
  },
  {
    title: t('tkLiveA.tkMessage.departmentId'),
    dataIndex: 'departmentId',
    width: 100,
  },
  {
    title: t('tkLiveA.tkMessage.messageId'),
    dataIndex: 'messageId',
    width: 100,
  },
  {
    title: t('tkLiveA.tkMessage.messageDetails'),
    dataIndex: 'messageDetails',
    width: 100,
  },
  {
    title: t('tkLiveA.tkMessage.categoryId'),
    dataIndex: 'categoryId',
    width: 100,
  },
  {
    title: t('tkLiveA.tkMessage.usedCount'),
    dataIndex: 'usedCount',
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
    label: t('tkLiveA.tkMessage.createId'),
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'departmentId',
    label: t('tkLiveA.tkMessage.departmentId'),
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'messageDetails',
    label: t('tkLiveA.tkMessage.messageDetails'),
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
    label: t('tkLiveA.tkMessage.createId'),
    component: 'Input',
    required: true,
  },
  {
    field: 'departmentId',
    label: t('tkLiveA.tkMessage.departmentId'),
    component: 'Input',
    required: true,
  },
  {
    field: 'messageId',
    label: t('tkLiveA.tkMessage.messageId'),
    component: 'InputNumber',
    required: true,
  },
  {
    field: 'messageDetails',
    label: t('tkLiveA.tkMessage.messageDetails'),
    component: 'Input',
    required: true,
  },
  {
    field: 'categoryId',
    label: t('tkLiveA.tkMessage.categoryId'),
    component: 'InputNumber',
    required: true,
  },
  {
    field: 'usedCount',
    label: t('tkLiveA.tkMessage.usedCount'),
    component: 'InputNumber',
    required: true,
  },
];
