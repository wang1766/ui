import { BasicColumn, FormSchema } from '@/components/Table';
import { useI18n } from '@/hooks/web/useI18n';
import { formatToDateTime } from '@/utils/dateUtil';

const { t } = useI18n();

export const columns: BasicColumn[] = [
  {
    title: t('tkLiveA.tkTargetFun.createId'),
    dataIndex: 'createId',
    width: 100,
  },
  {
    title: t('tkLiveA.tkTargetFun.departmentId'),
    dataIndex: 'departmentId',
    width: 100,
  },
  {
    title: t('tkLiveA.tkTargetFun.taskId'),
    dataIndex: 'taskId',
    width: 100,
  },
  {
    title: t('tkLiveA.tkTargetFun.categoryId'),
    dataIndex: 'categoryId',
    width: 100,
  },
  {
    title: t('tkLiveA.tkTargetFun.accountUd'),
    dataIndex: 'accountUd',
    width: 100,
  },
  {
    title: t('tkLiveA.tkTargetFun.targetUd'),
    dataIndex: 'targetUd',
    width: 100,
  },
  {
    title: t('tkLiveA.tkTargetFun.targetSecUd'),
    dataIndex: 'targetSecUd',
    width: 100,
  },
  {
    title: t('tkLiveA.tkTargetFun.targetNickname'),
    dataIndex: 'targetNickname',
    width: 100,
  },
  {
    title: t('tkLiveA.tkTargetFun.backConcern'),
    dataIndex: 'backConcern',
    width: 100,
  },
  {
    title: t('tkLiveA.tkTargetFun.privateMessage'),
    dataIndex: 'privateMessage',
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
    label: t('tkLiveA.tkTargetFun.createId'),
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'departmentId',
    label: t('tkLiveA.tkTargetFun.departmentId'),
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'taskId',
    label: t('tkLiveA.tkTargetFun.taskId'),
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
    label: t('tkLiveA.tkTargetFun.createId'),
    component: 'Input',
    required: true,
  },
  {
    field: 'departmentId',
    label: t('tkLiveA.tkTargetFun.departmentId'),
    component: 'Input',
    required: true,
  },
  {
    field: 'taskId',
    label: t('tkLiveA.tkTargetFun.taskId'),
    component: 'Input',
    required: true,
  },
  {
    field: 'categoryId',
    label: t('tkLiveA.tkTargetFun.categoryId'),
    component: 'InputNumber',
    required: true,
  },
  {
    field: 'accountUd',
    label: t('tkLiveA.tkTargetFun.accountUd'),
    component: 'Input',
    required: true,
  },
  {
    field: 'targetUd',
    label: t('tkLiveA.tkTargetFun.targetUd'),
    component: 'Input',
    required: true,
  },
  {
    field: 'targetSecUd',
    label: t('tkLiveA.tkTargetFun.targetSecUd'),
    component: 'Input',
    required: true,
  },
  {
    field: 'targetNickname',
    label: t('tkLiveA.tkTargetFun.targetNickname'),
    component: 'Input',
    required: true,
  },
  {
    field: 'backConcern',
    label: t('tkLiveA.tkTargetFun.backConcern'),
    component: 'RadioButtonGroup',
    defaultValue: true,
    componentProps: {
      options: [
        { label: t('common.on'), value: true },
        { label: t('common.off'), value: false },
      ],
    },
    required: true,
  },
  {
    field: 'privateMessage',
    label: t('tkLiveA.tkTargetFun.privateMessage'),
    component: 'RadioButtonGroup',
    defaultValue: true,
    componentProps: {
      options: [
        { label: t('common.on'), value: true },
        { label: t('common.off'), value: false },
      ],
    },
    required: true,
  },
];
