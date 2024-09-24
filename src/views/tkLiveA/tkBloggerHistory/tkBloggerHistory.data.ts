import { BasicColumn, FormSchema } from '@/components/Table';
import { useI18n } from '@/hooks/web/useI18n';
import { formatToDateTime } from '@/utils/dateUtil';

const { t } = useI18n();

export const columns: BasicColumn[] = [
  {
    title: t('tkLiveA.tkBloggerHistory.createId'),
    dataIndex: 'createId',
    width: 100,
  },
  {
    title: t('tkLiveA.tkBloggerHistory.departmentId'),
    dataIndex: 'departmentId',
    width: 100,
  },
  {
    title: t('tkLiveA.tkBloggerHistory.accountUd'),
    dataIndex: 'accountUd',
    width: 100,
  },
  {
    title: t('tkLiveA.tkBloggerHistory.accountPrivateMessageCount'),
    dataIndex: 'accountPrivateMessageCount',
    width: 100,
  },
  {
    title: t('tkLiveA.tkBloggerHistory.accountCommentsCount'),
    dataIndex: 'accountCommentsCount',
    width: 100,
  },
  {
    title: t('tkLiveA.tkBloggerHistory.accountSuccessCount'),
    dataIndex: 'accountSuccessCount',
    width: 100,
  },
  {
    title: t('tkLiveA.tkBloggerHistory.startTime'),
    dataIndex: 'startTime',
    width: 100,
  },
  {
    title: t('tkLiveA.tkBloggerHistory.endTime'),
    dataIndex: 'endTime',
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
    label: t('tkLiveA.tkBloggerHistory.createId'),
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'departmentId',
    label: t('tkLiveA.tkBloggerHistory.departmentId'),
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'accountUd',
    label: t('tkLiveA.tkBloggerHistory.accountUd'),
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
    label: t('tkLiveA.tkBloggerHistory.createId'),
    component: 'Input',
    required: true,
  },
  {
    field: 'departmentId',
    label: t('tkLiveA.tkBloggerHistory.departmentId'),
    component: 'Input',
    required: true,
  },
  {
    field: 'accountUd',
    label: t('tkLiveA.tkBloggerHistory.accountUd'),
    component: 'Input',
    required: true,
  },
  {
    field: 'accountPrivateMessageCount',
    label: t('tkLiveA.tkBloggerHistory.accountPrivateMessageCount'),
    component: 'InputNumber',
    required: true,
  },
  {
    field: 'accountCommentsCount',
    label: t('tkLiveA.tkBloggerHistory.accountCommentsCount'),
    component: 'InputNumber',
    required: true,
  },
  {
    field: 'accountSuccessCount',
    label: t('tkLiveA.tkBloggerHistory.accountSuccessCount'),
    component: 'InputNumber',
    required: true,
  },
  {
    field: 'startTime',
    label: t('tkLiveA.tkBloggerHistory.startTime'),
    component: 'InputNumber',
    required: true,
  },
  {
    field: 'endTime',
    label: t('tkLiveA.tkBloggerHistory.endTime'),
    component: 'InputNumber',
    required: true,
  },
];
