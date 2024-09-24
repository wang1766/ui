import { BasicColumn, FormSchema } from '@/components/Table';
import { useI18n } from '@/hooks/web/useI18n';
import { formatToDateTime } from '@/utils/dateUtil';

const { t } = useI18n();

export const columns: BasicColumn[] = [
  {
    title: t('tkLiveA.tkWatchTask.createId'),
    dataIndex: 'createId',
    width: 100,
  },
  {
    title: t('tkLiveA.tkWatchTask.departmentId'),
    dataIndex: 'departmentId',
    width: 100,
  },
  {
    title: t('tkLiveA.tkWatchTask.taskId'),
    dataIndex: 'taskId',
    width: 100,
  },
  {
    title: t('tkLiveA.tkWatchTask.taskStatus'),
    dataIndex: 'taskStatus',
    width: 100,
  },
  {
    title: t('tkLiveA.tkWatchTask.categoryId'),
    dataIndex: 'categoryId',
    width: 100,
  },
  {
    title: t('tkLiveA.tkWatchTask.startTime'),
    dataIndex: 'startTime',
    width: 100,
  },
  {
    title: t('tkLiveA.tkWatchTask.endTime'),
    dataIndex: 'endTime',
    width: 100,
  },
  {
    title: t('tkLiveA.tkWatchTask.maxPrivateMessageCount'),
    dataIndex: 'maxPrivateMessageCount',
    width: 100,
  },
  {
    title: t('tkLiveA.tkWatchTask.maxPrivateMessageFrequency'),
    dataIndex: 'maxPrivateMessageFrequency',
    width: 100,
  },
  {
    title: t('tkLiveA.tkWatchTask.minTargetFunCount'),
    dataIndex: 'minTargetFunCount',
    width: 100,
  },
  {
    title: t('tkLiveA.tkWatchTask.maxTargetFunCount'),
    dataIndex: 'maxTargetFunCount',
    width: 100,
  },
  {
    title: t('tkLiveA.tkWatchTask.minTargetFollowersCount'),
    dataIndex: 'minTargetFollowersCount',
    width: 100,
  },
  {
    title: t('tkLiveA.tkWatchTask.maxTargetFollowersCount'),
    dataIndex: 'maxTargetFollowersCount',
    width: 100,
  },
  {
    title: t('tkLiveA.tkWatchTask.targetUserOptions'),
    dataIndex: 'targetUserOptions',
    width: 100,
  },
  {
    title: t('tkLiveA.tkWatchTask.commentsOptions'),
    dataIndex: 'commentsOptions',
    width: 100,
  },
  {
    title: t('tkLiveA.tkWatchTask.keywordsOptions'),
    dataIndex: 'keywordsOptions',
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
    label: t('tkLiveA.tkWatchTask.createId'),
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'departmentId',
    label: t('tkLiveA.tkWatchTask.departmentId'),
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'taskId',
    label: t('tkLiveA.tkWatchTask.taskId'),
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
    label: t('tkLiveA.tkWatchTask.createId'),
    component: 'Input',
    required: true,
  },
  {
    field: 'departmentId',
    label: t('tkLiveA.tkWatchTask.departmentId'),
    component: 'Input',
    required: true,
  },
  {
    field: 'taskId',
    label: t('tkLiveA.tkWatchTask.taskId'),
    component: 'Input',
    required: true,
  },
  {
    field: 'taskStatus',
    label: t('tkLiveA.tkWatchTask.taskStatus'),
    component: 'InputNumber',
    required: true,
  },
  {
    field: 'categoryId',
    label: t('tkLiveA.tkWatchTask.categoryId'),
    component: 'InputNumber',
    required: true,
  },
  {
    field: 'startTime',
    label: t('tkLiveA.tkWatchTask.startTime'),
    component: 'InputNumber',
    required: true,
  },
  {
    field: 'endTime',
    label: t('tkLiveA.tkWatchTask.endTime'),
    component: 'InputNumber',
    required: true,
  },
  {
    field: 'maxPrivateMessageCount',
    label: t('tkLiveA.tkWatchTask.maxPrivateMessageCount'),
    component: 'InputNumber',
    required: true,
  },
  {
    field: 'maxPrivateMessageFrequency',
    label: t('tkLiveA.tkWatchTask.maxPrivateMessageFrequency'),
    component: 'InputNumber',
    required: true,
  },
  {
    field: 'minTargetFunCount',
    label: t('tkLiveA.tkWatchTask.minTargetFunCount'),
    component: 'InputNumber',
    required: true,
  },
  {
    field: 'maxTargetFunCount',
    label: t('tkLiveA.tkWatchTask.maxTargetFunCount'),
    component: 'InputNumber',
    required: true,
  },
  {
    field: 'minTargetFollowersCount',
    label: t('tkLiveA.tkWatchTask.minTargetFollowersCount'),
    component: 'InputNumber',
    required: true,
  },
  {
    field: 'maxTargetFollowersCount',
    label: t('tkLiveA.tkWatchTask.maxTargetFollowersCount'),
    component: 'InputNumber',
    required: true,
  },
  {
    field: 'targetUserOptions',
    label: t('tkLiveA.tkWatchTask.targetUserOptions'),
    component: 'Input',
    required: true,
  },
  {
    field: 'commentsOptions',
    label: t('tkLiveA.tkWatchTask.commentsOptions'),
    component: 'Input',
    required: true,
  },
  {
    field: 'keywordsOptions',
    label: t('tkLiveA.tkWatchTask.keywordsOptions'),
    component: 'Input',
    required: true,
  },
];
