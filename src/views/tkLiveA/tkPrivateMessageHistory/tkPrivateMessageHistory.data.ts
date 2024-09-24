import { BasicColumn, FormSchema } from '@/components/Table';
import { useI18n } from '@/hooks/web/useI18n';
import { formatToDateTime } from '@/utils/dateUtil';

const { t } = useI18n();

export const columns: BasicColumn[] = [
  {
    title: t('tkLiveA.tkPrivateMessageHistory.createId'),
    dataIndex: 'createId',
    width: 100,
  },
  {
    title: t('tkLiveA.tkPrivateMessageHistory.departmentId'),
    dataIndex: 'departmentId',
    width: 100,
  },
  {
    title: t('tkLiveA.tkPrivateMessageHistory.accountUd'),
    dataIndex: 'accountUd',
    width: 100,
  },
  {
    title: t('tkLiveA.tkPrivateMessageHistory.accountNickname'),
    dataIndex: 'accountNickname',
    width: 100,
  },
  {
    title: t('tkLiveA.tkPrivateMessageHistory.messageDetails'),
    dataIndex: 'messageDetails',
    width: 100,
  },
  {
    title: t('tkLiveA.tkPrivateMessageHistory.targetUd'),
    dataIndex: 'targetUd',
    width: 100,
  },
  {
    title: t('tkLiveA.tkPrivateMessageHistory.targetNickname'),
    dataIndex: 'targetNickname',
    width: 100,
  },
  {
    title: t('tkLiveA.tkPrivateMessageHistory.sendStatus'),
    dataIndex: 'sendStatus',
    width: 100,
  },
  {
    title: t('tkLiveA.tkPrivateMessageHistory.errorMessage'),
    dataIndex: 'errorMessage',
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
    label: t('tkLiveA.tkPrivateMessageHistory.createId'),
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'departmentId',
    label: t('tkLiveA.tkPrivateMessageHistory.departmentId'),
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'accountUd',
    label: t('tkLiveA.tkPrivateMessageHistory.accountUd'),
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
    label: t('tkLiveA.tkPrivateMessageHistory.createId'),
    component: 'Input',
    required: true,
  },
  {
    field: 'departmentId',
    label: t('tkLiveA.tkPrivateMessageHistory.departmentId'),
    component: 'Input',
    required: true,
  },
  {
    field: 'accountUd',
    label: t('tkLiveA.tkPrivateMessageHistory.accountUd'),
    component: 'Input',
    required: true,
  },
  {
    field: 'accountNickname',
    label: t('tkLiveA.tkPrivateMessageHistory.accountNickname'),
    component: 'Input',
    required: true,
  },
  {
    field: 'messageDetails',
    label: t('tkLiveA.tkPrivateMessageHistory.messageDetails'),
    component: 'Input',
    required: true,
  },
  {
    field: 'targetUd',
    label: t('tkLiveA.tkPrivateMessageHistory.targetUd'),
    component: 'Input',
    required: true,
  },
  {
    field: 'targetNickname',
    label: t('tkLiveA.tkPrivateMessageHistory.targetNickname'),
    component: 'Input',
    required: true,
  },
  {
    field: 'sendStatus',
    label: t('tkLiveA.tkPrivateMessageHistory.sendStatus'),
    component: 'InputNumber',
    required: true,
  },
  {
    field: 'errorMessage',
    label: t('tkLiveA.tkPrivateMessageHistory.errorMessage'),
    component: 'Input',
    required: true,
  },
];
